"use client";

import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

const FRAME_COUNT = 160;

const ScrollyCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    const loadImages = () => {
        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();
            const frameIndex = i.toString().padStart(3, '0');
            img.src = `/sequence/frame_${frameIndex}_delay-0.05s.webp`;
            
            img.onload = () => {
                loadedCount++;
                if (loadedCount === FRAME_COUNT) {
                    setImages([...loadedImages]);
                    // trigger an initial draw
                    setTimeout(() => {
                         window.dispatchEvent(new Event('resize')); 
                    }, 50);
                }
            };
            img.onerror = () => {
                console.error(`Failed to load frame ${i}`);
                loadedCount++; 
            }
            loadedImages.push(img);
        }
    };
    
    loadImages();
  }, []);

  const drawImage = (
      img: HTMLImageElement, 
      ctx: CanvasRenderingContext2D, 
      cssWidth: number, 
      cssHeight: number
  ) => {
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const imgWidth = img.width;
      const imgHeight = img.height;

      const targetWidth = cssWidth + 1;
      const targetHeight = cssHeight + 1;

      const scale = Math.max(targetWidth / imgWidth, targetHeight / imgHeight);
      const x = (cssWidth / 2) - (imgWidth / 2) * scale;
      const y = (cssHeight / 2) - (imgHeight / 2) * scale;

      ctx.clearRect(0, 0, cssWidth, cssHeight);
      ctx.drawImage(img, x, y, imgWidth * scale, imgHeight * scale);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = document.documentElement.clientWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      
      if (images.length > 0) {
         let currentFrameIndex = Math.floor(scrollYProgress.get() * (FRAME_COUNT - 1));
         currentFrameIndex = Math.max(0, Math.min(currentFrameIndex, FRAME_COUNT - 1));
         if (images[currentFrameIndex]) {
             drawImage(images[currentFrameIndex], ctx, width, height);
         }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [images, scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", (latestVal) => {
    if (images.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const width = document.documentElement.clientWidth;
    const height = window.innerHeight;

    let frameIndex = Math.floor(latestVal * (FRAME_COUNT - 1));
    frameIndex = Math.max(0, Math.min(frameIndex, FRAME_COUNT - 1));

    if (images[frameIndex]) {
        drawImage(images[frameIndex], ctx, width, height);
    }
  });

    return (
        <div ref={containerRef} className="h-[500vh] w-full">
            <div className="fixed top-0 left-0 h-screen w-full flex justify-center items-center overflow-hidden -z-20 pointer-events-none">
                <canvas ref={canvasRef} className="w-full h-full object-cover" />
            </div>
            <div className="fixed inset-0 bg-black/40 pointer-events-none -z-10" />
        </div>
    );
};

export default ScrollyCanvas;
