"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(navItems[0].name);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let currentSection = navItems[0].name;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const section = document.querySelector(item.href) as HTMLElement;
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = item.name;
          break;
        }
      }
      setActiveTab(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string, name: string) => {
    setMobileMenuOpen(false);
    setActiveTab(name);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed right-4 md:right-8 top-[40%] -translate-y-1/2 z-50 transition-all duration-300 ease-in-out"
      >
        <div className="flex flex-col items-end justify-center gap-3 py-6 px-2 md:px-4 bg-transparent rounded-[2rem]">
          
          <div className="hidden md:flex flex-col items-end gap-1 relative">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollTo(item.href, item.name)}
                className="relative px-5 py-2 text-sm font-semibold transition-colors rounded-full whitespace-nowrap text-right w-full"
                style={{
                  color: activeTab === item.name ? '#fff' : '#86868b',
                }}
              >
                {activeTab === item.name && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white/10 border border-white/10 rounded-full backdrop-blur-md"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 hover:text-white transition-colors duration-300">
                    {item.name}
                </span>
              </button>
            ))}
          </div>

          <div className="flex flex-col items-end gap-1 mt-4">
              <button 
                  className="md:hidden text-white p-3 hover:bg-white/10 rounded-full transition-colors bg-white/5 backdrop-blur-md border border-white/10"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                  <motion.div
                      animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                  >
                      {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </motion.div>
              </button>
          </div>

        </div>
      </motion.nav>

      <AnimatePresence>
          {mobileMenuOpen && (
              <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.95 }}
                 transition={{ duration: 0.2 }}
                 className="fixed inset-0 z-40 bg-black/98 backdrop-blur-3xl flex flex-col items-center justify-center gap-6 md:hidden px-4"
              >
                  {navItems.map((item, i) => (
                      <motion.button
                          key={item.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                          onClick={() => scrollTo(item.href, item.name)}
                          className={`text-4xl font-bold tracking-tight transition-colors ${
                             activeTab === item.name ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                          }`}
                      >
                          {item.name}
                      </motion.button>
                  ))}
              </motion.div>
          )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
