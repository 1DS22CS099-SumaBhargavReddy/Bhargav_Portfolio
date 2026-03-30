"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaCode } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for reaching out! This form is currently a UI demo.');
    };

    return (
        <section id="contact" className="relative z-20 px-[5vw] py-32 flex flex-col items-center justify-center border-t border-white/5 bg-transparent">
            <div className="max-w-4xl mx-auto w-full">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                        Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Connect</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        Currently open for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/5 border border-white/10 backdrop-blur-2xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl"
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1 tracking-wide">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Jane Doe"
                                    required
                                    className="px-6 py-4 bg-black/40 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all placeholder:text-gray-600 font-light"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1 tracking-wide">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="jane@example.com"
                                    required
                                    className="px-6 py-4 bg-black/40 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all placeholder:text-gray-600 font-light"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1 tracking-wide">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="How can I help you?"
                                    required
                                    className="px-6 py-4 bg-black/40 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all resize-none placeholder:text-gray-600 font-light"
                                />
                            </div>
                            <button
                                type="submit"
                                className="mt-4 px-10 py-5 bg-white text-black font-bold rounded-2xl hover:bg-gray-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.2)]"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                    {/* Social Links & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col gap-10 lg:pl-10 h-full justify-center"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">Direct Contact</h3>
                            <a href="mailto:k.bhargavreddy83@gmail.com" className="text-xl text-gray-400 hover:text-white transition-colors flex items-center gap-3 group">
                                <FaEnvelope className="group-hover:text-red-400 transition-colors" />
                                k.bhargavreddy83@gmail.com
                            </a>
                        </div>
                        
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Social Ecosystem</h3>
                            <div className="flex gap-6">
                                <a href="https://www.linkedin.com/in/kaipa-suma-bhargav-reddy/" target="_blank" rel="noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:-translate-y-2 transition-all group" title="LinkedIn">
                                    <FaLinkedin className="text-3xl text-gray-400 group-hover:text-[#0A66C2] transition-colors" />
                                </a>
                                <a href="https://github.com/1DS22CS099-SumaBhargavReddy" target="_blank" rel="noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:-translate-y-2 transition-all group" title="GitHub">
                                    <FaGithub className="text-3xl text-gray-400 group-hover:text-white transition-colors" />
                                </a>
                                <a href="https://leetcode.com/u/Bhargavreddy95/" target="_blank" rel="noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:-translate-y-2 transition-all group" title="LeetCode">
                                    <FaCode className="text-3xl text-gray-400 group-hover:text-[#FFA116] transition-colors" />
                                </a>
                            </div>
                        </div>

                        <div className="mt-10 p-8 border border-white/5 bg-white/[0.02] rounded-3xl backdrop-blur-sm">
                            <p className="text-gray-500 text-sm font-light leading-relaxed">
                                Feel free to reach out for collaborations, project inquiries, or just to chat about the latest in AI and Full Stack Development.
                            </p>
                        </div>
                    </motion.div>
                </div>
                
                <div className="mt-32 text-gray-600 text-sm font-mono tracking-widest text-center uppercase">
                    © {new Date().getFullYear()} Kaipa Suma Bhargav Reddy • Built with Next.js & Framer Motion
                </div>
            </div>
        </section>
    );
}

export default Contact;
