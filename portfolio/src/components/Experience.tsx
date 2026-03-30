"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className="relative z-20 px-[5vw] py-[15vh] min-h-screen flex flex-col justify-center border-t border-white/5">
            <div className="max-w-4xl mx-auto w-full">
                
                <div className="inline-flex items-center gap-3 mb-10">
                    <span className="w-12 h-[1px] bg-white/30 block"></span>
                    <span className="text-gray-400 font-mono tracking-widest text-sm uppercase">Track Record</span>
                </div>

                <div className="flex flex-col gap-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Professional Experience</h2>

                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative pl-8 border-l border-white/20 mt-4"
                    >
                        <span className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white ring-4 ring-black/50"></span>
                        <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <h3 className="text-2xl font-bold text-white">Web Development Intern</h3>
                            <div className="text-sm font-mono text-gray-400 bg-white/5 backdrop-blur-md px-3 py-1 rounded-full w-fit">Mar 2025 – Apr 2025</div>
                        </div>
                        <h4 className="text-lg font-medium text-gray-300 mb-6 flex items-center gap-2">NULLCLASS <span className="text-gray-500 font-light text-sm select-none">• Remote</span></h4>
                        
                        <ul className="space-y-4 text-gray-300 font-light leading-relaxed">
                            <li className="relative pl-6">
                                <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                                Engineered full-stack learning management application using React.js, Node.js, Express.js, and SQLite with secure user authentication
                            </li>
                            <li className="relative pl-6">
                                <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                                Optimized backend API response times by <strong className="text-white font-medium">20%</strong> through database indexing and Redis caching implementation
                            </li>
                            <li className="relative pl-6">
                                <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                                Established reusable component library and deployed application using Docker containers across development and production environments
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
