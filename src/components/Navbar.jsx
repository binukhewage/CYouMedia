"use client";

import { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function FloatingNavbar() {
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);

  // Smoothly shrink the navbar and increase opacity on scroll
  const width = useTransform(scrollY, [0, 100], ['95%', '90%']);
  const backgroundColor = useTransform(
    scrollY, 
    [0, 100], 
    ['rgba(10, 10, 10, 0.4)', 'rgba(5, 5, 5, 0.8)']
  );
  const borderOpacity = useTransform(scrollY, [0, 100], ['rgba(255, 255, 255, 0.05)', 'rgba(20, 184, 166, 0.3)']);

  return (
    <div className="fixed top-6 left-0 w-full flex justify-center z-[100] px-6">
      <motion.nav 
        style={{ 
          width, 
          backgroundColor,
          borderColor: borderOpacity 
        }}
        className="max-w-6xl py-3 px-6 rounded-full border backdrop-blur-xl flex items-center justify-between transition-shadow duration-500 shadow-2xl"
      >
        {/* Brand */}
        <Link href="/" className="text-xl font-bold tracking-tighter text-white flex items-center gap-1 group">
          <span>CYouMedia</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {['Services', 'About', 'Contact'].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase()}`} 
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-teal-400 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <Link
            href="/audit"
            className="hidden sm:block text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full bg-white text-black hover:bg-teal-400 transition-all"
          >
            Get Audit
          </Link>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-5 bg-current transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-5 bg-current transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-3 bg-current transition-transform ${isOpen ? '-rotate-45 -translate-y-2 w-5' : ''}`} />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-20 left-6 right-6 p-8 rounded-[2rem] bg-[#0a0a0a] border border-white/10 shadow-2xl z-[101] md:hidden"
          >
            <div className="flex flex-col gap-6">
              {['Services', 'Work', 'Approach', 'Insights'].map((item) => (
                <Link 
                  key={item} 
                  href={`/${item.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-bold text-white active:text-teal-400"
                >
                  {item}
                </Link>
              ))}
              <hr className="border-white/5" />
              <Link href="/audit" className="text-teal-400 font-bold text-lg">
                Start a conversation →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}