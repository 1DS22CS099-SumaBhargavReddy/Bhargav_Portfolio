"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative z-20 px-[5vw] py-[15vh] min-h-screen flex items-center border-t border-white/5">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Column: Summary */}
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-3">
              <span className="w-12 h-[1px] bg-white/30 block"></span>
              <span className="text-gray-400 font-mono tracking-widest text-sm uppercase">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Engineering scalable <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">MERN architectures</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mt-4">
            Full Stack Developer specializing in MERN stack with experience building production-ready web applications, REST APIs, and AI-integrated platforms. Skilled in designing scalable backend services, implementing real-time data processing, and deploying containerized applications using Docker and AWS.
          </p>
        </motion.div>

        {/* Right Column: Education */}
        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full"
        >
           <div className="relative p-8 md:p-12 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl hover:bg-white/[0.07] transition-colors duration-500">
               <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
               </div>
               
               <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 border-b border-white/10 pb-4">
                   Education
               </h3>
               
               <div className="flex flex-col gap-2">
                   <div className="flex items-center gap-4 mb-2">
                       <Image 
                           src="/dsce-logo.png" 
                           alt="DSCE Logo" 
                           width={60} 
                           height={60} 
                           className="w-12 h-12 md:w-16 md:h-16 object-contain brightness-110"
                       />
                       <h4 className="text-xl md:text-2xl font-semibold text-gray-200">Dayananda Sagar College of Engineering</h4>
                   </div>
                   <p className="text-gray-400 font-light ml-16 md:ml-20">Bengaluru, India</p>
                   
                   <div className="mt-8 space-y-4">
                       <div className="flex justify-between items-start border-b border-white/10 pb-4">
                           <span className="text-gray-300 font-medium">Bachelor of Engineering <br/><span className="text-gray-500 text-sm font-light">Computer Science and Engineering</span></span>
                           <span className="text-gray-400 font-mono text-sm whitespace-nowrap">2022 – 2026</span>
                       </div>
                       <div className="flex items-center gap-3 pt-2">
                           <span className="w-2 h-2 rounded-full bg-green-400"></span>
                           <span className="text-gray-300 font-medium tracking-wide">CGPA: <span className="text-white font-bold ml-1">8.68/10</span></span>
                       </div>
                   </div>
               </div>
           </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
