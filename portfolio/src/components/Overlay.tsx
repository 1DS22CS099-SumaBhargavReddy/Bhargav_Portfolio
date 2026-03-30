"use client";

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';

const Letter = ({ char, index, scrollY }: { char: string, index: number, scrollY: MotionValue<number> }) => {
    // Staggered entrance from top
    const delay = 0.2 + index * 0.03;
    
    // Each letter falls out to the bottom at different speeds on scroll
    const yExit = useTransform(scrollY, [0, 800], [0, 400 + (index % 5) * 50]);
    const opacityExit = useTransform(scrollY, [0, 500], [1, 0]);

    return (
        <motion.span
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            style={{ y: yExit, opacity: opacityExit }}
            transition={{
                duration: 1.2,
                delay: delay,
                ease: [0.6, 0.01, -0.05, 0.9],
            }}
            className="inline-block"
        >
            {char === " " ? "\u00A0" : char}
        </motion.span>
    );
};

const Overlay = () => {
    const { scrollY } = useScroll();
    
    // Decisive fade out of the rest of the content
    const restOpacity = useTransform(scrollY, [0, 300, 500], [1, 1, 0]);
    const restY = useTransform(scrollY, [0, 600], [0, -100]);

    const name ="Kaipa Suma Bhargav Reddy";

    return (
        <motion.div 
            className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-10 flex flex-col justify-center px-[5vw]"
        >
            <div className="max-w-4xl">
                <div className="overflow-hidden mb-4 py-8">
                    <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter flex flex-wrap">
                        {name.split("").map((char, index) => (
                            <Letter key={index} char={char} index={index} scrollY={scrollY} />
                        ))}
                    </h1>
                </div>

                <motion.div
                    style={{ opacity: restOpacity, y: restY }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="flex flex-col gap-4"
                >
                    <p className="text-xl md:text-2xl text-gray-400 font-light max-w-xl leading-relaxed">
                        Full Stack Developer specializing in MERN stack & Agentic AI Workflows.
                    </p>
                    
                    <div className="flex items-center gap-6 mt-8 pointer-events-auto">
                        <a href="https://github.com/1DS22CS099-SumaBhargavReddy" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <FaGithub size={32} />
                        </a>
                        <a href="https://www.linkedin.com/in/kaipa-suma-bhargav-reddy/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <FaLinkedin size={32} />
                        </a>
                        <a href="https://leetcode.com/u/Bhargavreddy95/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <FaCode size={32} />
                        </a>
                        <a 
                            href="/Bhargav_Resume.pdf" 
                            download
                            className="ml-4 px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all active:scale-95"
                        >
                            View Resume
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-gray-500 font-mono text-xs tracking-widest uppercase">Scroll to explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
            </motion.div>
        </motion.div>
    );
};

export default Overlay;
