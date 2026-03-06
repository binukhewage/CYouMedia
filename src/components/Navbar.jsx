"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function FloatingNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Unified links for both desktop and mobile
  const navLinks = ['Services', 'About', 'Careers'];

  // Add scroll listener to detect when to swap to light theme
  useEffect(() => {
    const handleScroll = () => {
      // Swaps theme after scrolling down 50px
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic Class Variables for the Left Pill
  const pillStyle = isScrolled 
    ? "bg-white/90 backdrop-blur-2xl border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.08)]" 
    : "bg-black/40 backdrop-blur-2xl border border-white/[0.08] shadow-2xl";
    
  const textMain = isScrolled ? "text-[#052824]" : "text-white";
  const textMuted = isScrolled ? "text-gray-500 hover:text-teal-600" : "text-gray-400 hover:text-teal-400";
  const borderDivider = isScrolled ? "border-gray-200" : "border-white/[0.08]";
  
  // Mobile menu button needs its own background now since the wrapper is gone
  const menuBtnStyle = isScrolled 
    ? "text-[#052824] bg-white/90 backdrop-blur-md border border-gray-200 shadow-md hover:bg-white" 
    : "text-white bg-black/40 backdrop-blur-md border border-white/[0.08] shadow-lg hover:bg-black/60";

  return (
    <div className="fixed top-6 left-0 w-full px-4 md:px-8 z-[100] flex justify-between items-start pointer-events-none">
      
      {/* ================= LEFT PILL: Logo & Links ================= */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={`pointer-events-auto flex items-center py-3.5 px-7 rounded-full transition-colors duration-500 gap-6 ${pillStyle}`}
      >
        {/* Logo */}
        <Link href="/" className={`text-sm lg:text-base font-extrabold tracking-tighter flex items-center gap-1 transition-colors duration-500 ${textMain}`}>
          <span><span className="text-teal-500">CYou</span>Media<span className="text-teal-500">.</span></span>
        </Link>

        {/* Desktop Links - Hidden on Mobile */}
        <div className={`hidden md:flex items-center space-x-6 border-l pl-6 transition-colors duration-500 ${borderDivider}`}>
          {navLinks.map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase().replace(' ', '-')}`} 
              className={`text-[10px] lg:text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${textMuted}`}
            >
              {item}
            </Link>
          ))}
        </div>
      </motion.div>

      {/* ================= RIGHT ELEMENT: Standalone CTA & Menu ================= */}
      <div className="pointer-events-auto relative flex flex-col items-end">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="flex items-center gap-3"
        >
          {/* Standalone Get in Touch CTA */}
          <Link
            href="/contact"
            className="hidden sm:block text-[10px] lg:text-xs font-black uppercase tracking-widest px-8 py-3.5 rounded-full bg-teal-500 text-[#052824] hover:bg-teal-400 transition-all shadow-[0_4px_20px_rgba(20,184,166,0.3)] hover:shadow-[0_6px_25px_rgba(20,184,166,0.5)] hover:-translate-y-0.5"
          >
            Get in Touch
          </Link>

          {/* Mobile Menu Toggle Button (Standalone Pill) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-3.5 focus:outline-none rounded-full transition-colors duration-300 ${menuBtnStyle}`}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5 flex flex-col items-end">
              <span className={`block h-0.5 bg-current transition-transform origin-right ${isOpen ? 'w-5 -rotate-45 -translate-y-[1px]' : 'w-5'}`} />
              <span className={`block h-0.5 bg-current transition-opacity ${isOpen ? 'w-4 opacity-0' : 'w-4'}`} />
              <span className={`block h-0.5 bg-current transition-transform origin-right ${isOpen ? 'w-5 rotate-45 translate-y-[1px]' : 'w-5'}`} />
            </div>
          </button>
        </motion.div>

        {/* ================= MOBILE DROPDOWN MENU ================= */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 10 }} 
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`absolute top-full right-0 mt-3 w-64 p-6 rounded-[2rem] backdrop-blur-3xl shadow-2xl z-[101] md:hidden transition-colors duration-500 ${isScrolled ? 'bg-white/95 border border-gray-200' : 'bg-black/90 border border-white/[0.08]'}`}
            >
              <div className="flex flex-col gap-5 text-right">
                {navLinks.map((item) => (
                  <Link 
                    key={item} 
                    href={`/${item.toLowerCase().replace(' ', '-')}`} 
                    onClick={() => setIsOpen(false)}
                    className={`text-xl font-bold transition-colors ${isScrolled ? 'text-gray-900 hover:text-teal-500' : 'text-white hover:text-teal-400'}`}
                  >
                    {item}
                  </Link>
                ))}
                <hr className={`my-2 ${borderDivider}`} />
                <Link 
                  href="/contact" 
                  onClick={() => setIsOpen(false)} 
                  className={`font-bold text-sm uppercase tracking-widest ${isScrolled ? 'text-teal-600' : 'text-teal-400'}`}
                >
                  Start a project &rarr;
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}