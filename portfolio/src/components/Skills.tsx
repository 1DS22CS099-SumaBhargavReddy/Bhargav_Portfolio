"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
    FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase, 
    FaDocker, FaAws, FaGithub, FaPython, FaJava
} from 'react-icons/fa';
import { 
    SiTypescript, SiMongodb, SiPostgresql, SiExpress, SiOpenai, SiVercel, SiCplusplus
} from 'react-icons/si';

const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
            { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
            { name: "React Native", icon: <FaReact className="text-[#61DAFB]" /> },
            { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
            { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> }
        ]
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
            { name: "Express.js", icon: <SiExpress className="text-white" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> }
        ]
    },
    {
        title: "Databases",
        skills: [
            { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
            { name: "SQL", icon: <FaDatabase className="text-[#336791]" /> },
            { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> }
        ]
    },
    {
        title: "DevOps & Cloud",
        skills: [
            { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
            { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
            { name: "Git/GitHub", icon: <FaGithub className="text-white" /> },
            { name: "CI/CD", icon: <SiVercel className="text-white" /> }
        ]
    },
    {
        title: "AI Integration",
        skills: [
            { name: "Agentic AI", icon: <SiOpenai className="text-white" /> },
            { name: "AI & ML", icon: <FaPython className="text-[#3776AB]" /> },
            { name: "Gen AI", icon: <FaPython className="text-[#3776AB]" /> }
        ]
    },
    {
        title: "Languages",
        skills: [
            { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
            { name: "Java", icon: <FaJava className="text-[#007396]" /> },
            { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> }
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const Skills = () => {
    return (
        <section id="skills" className="relative z-20 px-[5vw] py-[15vh] min-h-screen border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="inline-flex items-center gap-3 mb-12">
                    <span className="w-12 h-[1px] bg-white/30 block"></span>
                    <span className="text-gray-400 font-mono tracking-widest text-sm uppercase">Capabilities</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-20 leading-tight">
                    Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Toolkit</span>
                </h2>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {skillCategories.map((category) => (
                        <motion.div 
                            key={category.title}
                            variants={itemVariants}
                            className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 group shadow-lg"
                        >
                            <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-4 flex items-center justify-between">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map(skill => (
                                    <div key={skill.name} className="flex items-center gap-2 px-4 py-2 bg-black/40 text-gray-300 text-sm font-medium rounded-full border border-white/5 group-hover:border-white/20 transition-colors">
                                        <span className="text-xl">{skill.icon}</span>
                                        {skill.name}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
