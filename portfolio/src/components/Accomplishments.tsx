"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Accomplishments = () => {
    return (
        <section id="achievements" className="relative z-20 px-[5vw] py-[15vh] min-h-screen flex items-center border-t border-white/5">
           <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
               
               {/* Certifications */}
               <motion.div 
                   initial={{ opacity: 0, y: 40 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.8 }}
                   className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl hover:bg-white/10 transition-colors duration-500 shadow-2xl"
               >
                   <div className="inline-flex items-center gap-3 mb-8">
                       <span className="w-8 h-[1px] bg-white/30 block"></span>
                       <span className="text-gray-400 font-mono tracking-widest text-sm uppercase">Credentials</span>
                   </div>
                   <h3 className="text-3xl font-bold text-white mb-8">
                       Certifications
                   </h3>
                   <ul className="space-y-6 text-gray-300 font-medium text-lg">
                       <li className="flex items-center gap-4"><span className="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)]"></span> Full Stack Development <span className="text-gray-400 font-light text-base">– NxtWave</span></li>
                       <li className="flex items-center gap-4"><span className="w-2 h-2 bg-orange-400 rounded-full shadow-[0_0_10px_rgba(251,146,60,0.8)]"></span> AWS Fundamentals <span className="text-gray-400 font-light text-base">– Simplilearn</span></li>
                       <li className="flex items-center gap-4"><span className="w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(192,132,252,0.8)]"></span> AI Fundamentals <span className="text-gray-400 font-light text-base">– Coursera</span></li>
                   </ul>
               </motion.div>

               {/* Achievements */}
               <motion.div 
                   initial={{ opacity: 0, y: 40 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.8, delay: 0.2 }}
                   className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl hover:bg-white/10 transition-colors duration-500 shadow-2xl"
               >
                   <div className="inline-flex items-center gap-3 mb-8">
                       <span className="w-8 h-[1px] bg-white/30 block"></span>
                       <span className="text-gray-400 font-mono tracking-widest text-sm uppercase">Milestones</span>
                   </div>
                   <h3 className="text-3xl font-bold text-white mb-8">Achievements</h3>
                   <ul className="space-y-6 text-gray-300 font-light text-lg leading-relaxed">
                       <li className="relative pl-6">
                           <span className="absolute left-0 top-1.5 text-yellow-400 text-sm">★</span>
                           Solved <strong className="text-white font-semibold">300+</strong> Data Structures and Algorithms problems on LeetCode, GeeksforGeeks, and NxtWave.
                       </li>
                       <li className="relative pl-6">
                           <span className="absolute left-0 top-1.5 text-yellow-400 text-sm">★</span>
                           Secured <strong className="text-white font-semibold">3rd place</strong> in a Campus Hackathon for developing an innovative python solution.
                       </li>
                       <li className="relative pl-6">
                           <span className="absolute left-0 top-1.5 text-yellow-400 text-sm">★</span>
                           NCC candidate who successfully organized and managed a blood donation camp and actively donated blood.
                       </li>
                   </ul>
               </motion.div>

           </div>
        </section>
    );
};

export default Accomplishments;
