"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
    FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaGoogle
} from 'react-icons/fa';
import { 
    SiMongodb, SiExpress, SiGooglecloud, SiTypescript
} from 'react-icons/si';

const projects = [
    {
        id: 1,
        title: 'AI Secure Data Platform',
        category: 'AI Gateway & Security',
        description: 'A platform built to facilitate secure data interactions with AI models, ensuring data privacy and compliance.',
        tech: [
            { icon: <FaReact className="text-[#61DAFB]" />, name: 'React' },
            { icon: <FaNodeJs className="text-[#339933]" />, name: 'Node.js' },
            { icon: <SiMongodb className="text-[#47A248]" />, name: 'MongoDB' },
            { icon: <SiGooglecloud className="text-[#4285F4]" />, name: 'GenAI' }
        ],
        link: 'https://sisa-intelligence-secure-data-analy-sable.vercel.app/app',
        github: 'https://github.com/1DS22CS099-SumaBhargavReddy/SISA-Intelligence-Secure-Data-Analysis-Platform.git',
        image: '/project-4.png'
    },
    {
        id: 2,
        title: 'V2V Collision Prediction',
        category: 'AI & Machine Learning',
        description: 'An AI-powered system designed for predicting collisions in Vehicle-to-Vehicle (V2V) communications.',
        tech: [
            { icon: <FaPython className="text-[#3776AB]" />, name: 'Python' },
            { icon: <FaDocker className="text-[#2496ED]" />, name: 'Docker' },
            { icon: <FaAws className="text-[#FF9900]" />, name: 'AWS' }
        ],
        link: '',
        github: 'https://github.com/1DS22CS099-SumaBhargavReddy/AI-Enabled-V2V-V2X-Collision-Prediction-System-for-Mountain-Roads',
        image: '/project-1.png'
    },
    {
        id: 3,
        title: 'Elderly Care Services',
        category: 'Full Stack MERN',
        description: 'A comprehensive full-stack application providing healthcare and support services to the elderly.',
        tech: [
            { icon: <FaReact className="text-[#61DAFB]" />, name: 'React' },
            { icon: <FaNodeJs className="text-[#339933]" />, name: 'Node.js' },
            { icon: <SiExpress className="text-white" />, name: 'Express' },
            { icon: <SiMongodb className="text-[#47A248]" />, name: 'MongoDB' }
        ],
        link: 'https://elderly-care-services.vercel.app',
        github: 'https://github.com/1DS22CS099-SumaBhargavReddy/Elderly_Care_Services',
        image: '/project-3.png'
    },
    {
        id: 4,
        title: 'Real-Time Email AI',
        category: 'Node.js & Gemini API',
        description: 'AI-driven email processing application tailored for professional and enterprise communication.',
        tech: [
            { icon: <FaNodeJs className="text-[#339933]" />, name: 'Node.js' },
            { icon: <FaGoogle className="text-[#4285F4]" />, name: 'Gemini' },
            { icon: <SiTypescript className="text-[#3178C6]" />, name: 'TypeScript' }
        ],
        link: '',
        github: 'https://github.com/1DS22CS099-SumaBhargavReddy/ReachIbox-Email-Assignment',
        image: '/project-2.png'
    },
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="relative z-20 px-[5vw] py-[15vh] min-h-screen">
            <div className="max-w-screen-2xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-[#f5f5f7] text-4xl md:text-5xl lg:text-6xl font-bold mb-20 tracking-tight leading-tight"
                >
                    Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Projects</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="relative flex flex-col h-[550px] rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl group shadow-2xl transition-all duration-500 ease-out"
                        >
                            <div className="relative h-[220px] overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={400}
                                    height={220}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-xs font-mono tracking-wider text-gray-500 uppercase">{project.category}</p>
                                </div>
                                
                                <p className="text-sm text-gray-400 font-light leading-relaxed mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-3 mb-6">
                                        {project.tech.map((skill, idx) => (
                                            <div key={idx} className="text-xl" title={skill.name}>
                                                {skill.icon}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex gap-3 pt-4 border-t border-white/5">
                                        {project.link && (
                                            <a href={project.link} target="_blank" rel="noreferrer" className="flex-1 py-2 text-center bg-white text-black text-xs font-bold rounded-full hover:bg-gray-200 transition-all active:scale-95">
                                                Live
                                            </a>
                                        )}
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 py-2 text-center bg-white/5 text-white text-xs font-bold rounded-full border border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm active:scale-95">
                                                GitHub
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
