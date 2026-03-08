"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";

// Premium Easing Constants
const appleEase = [0.16, 1, 0.3, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: appleEase } 
  }
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.8, ease: appleEase } 
  }
};

// Consistent Wavy Line Component using #89cff1
const WavyScrollLine = ({ targetRef }) => {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"],
  });
  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  return (
    <div className="absolute inset-0 z-0 pointer-events-none flex justify-center overflow-hidden opacity-30 md:opacity-60">
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100">
        <path d="M50,0 C90,25 10,75 50,100" stroke="#89cff1" strokeOpacity="0.1" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
        <motion.path d="M50,0 C90,25 10,75 50,100" stroke="url(#blueGradient)" strokeWidth="3" fill="none" vectorEffect="non-scaling-stroke" style={{ pathLength }} />
        <defs>
          <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#89cff1" />
            <stop offset="50%" stopColor="#5fbbe6" />
            <stop offset="100%" stopColor="#3ea6d6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default function Contact() {
  const contactRef = useRef(null);

  return (
    <div className="bg-white text-[#1d1d1f] font-sans selection:bg-[#89cff1]/30 overflow-hidden">
      
      {/* ================= 1. HERO HEADER (Dark Mode) ================= */}
      <section className="relative w-full py-32 lg:py-48 bg-[#020617] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <Image src="/bg.png" alt="Background" fill className="object-cover mix-blend-overlay" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.span variants={fadeInUp} className="text-[#89cff1] text-xs font-bold uppercase tracking-[0.3em] mb-6 block">
              Connect with us
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.9] mb-8">
              Let's Talk <br /> <span className="italic text-[#89cff1]">Growth.</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* ================= 2. INTERACTIVE FORM SECTION (Light Mode) ================= */}
      <section ref={contactRef} className="relative py-24 px-6 md:px-12 bg-white rounded-t-[3rem] lg:rounded-t-[4rem] -mt-12 z-20">
        <WavyScrollLine targetRef={contactRef} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start pt-10">
            
            {/* Left Column: Comprehensive Contact Directory */}
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-5">
              <div className="space-y-12 lg:space-y-16 lg:pr-8">
                
                {/* 1. Direct Inquiry */}
                <div>
                  <h3 className="text-[#3ea6d6] text-xs font-bold uppercase tracking-[0.2em] mb-6">Direct Inquiry</h3>
                  <a href="mailto:hello@cyoumedia.com" className="text-3xl md:text-4xl font-semibold tracking-tight text-[#020617] hover:text-[#89cff1] transition-colors duration-300 block mb-4">
                    hello@cyoumedia.com
                  </a>
                  <a href="tel:+4681234567" className="text-xl text-gray-500 font-light hover:text-[#020617] transition-colors duration-300 flex items-center gap-3 w-max">
                    <svg className="w-5 h-5 text-[#89cff1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +46 (0) 8 123 45 67
                  </a>
                </div>

                {/* 2. Headquarters */}
                <div className="pt-10 border-t border-gray-100">
                  <h3 className="text-[#3ea6d6] text-xs font-bold uppercase tracking-[0.2em] mb-6">Headquarters</h3>
                  <p className="text-xl text-gray-600 font-light leading-relaxed">
                    Sveavägen 44<br />
                    111 34 Stockholm<br />
                    Sweden
                  </p>
                </div>

                {/* 3. Social Icons */}
                <div className="pt-10 border-t border-gray-100">
                  <h3 className="text-[#3ea6d6] text-xs font-bold uppercase tracking-[0.2em] mb-6">Connect</h3>
                  <div className="flex gap-4">
                    {/* LinkedIn */}
                    <a href="#" className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-white hover:border-[#89cff1] hover:bg-[#89cff1] hover:-translate-y-1 transition-all duration-300 shadow-sm">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    {/* Twitter / X */}
                    <a href="#" className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-white hover:border-[#89cff1] hover:bg-[#89cff1] hover:-translate-y-1 transition-all duration-300 shadow-sm">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    {/* Instagram */}
                    <a href="#" className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-white hover:border-[#89cff1] hover:bg-[#89cff1] hover:-translate-y-1 transition-all duration-300 shadow-sm">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Premium Form Card */}
            <motion.div variants={fadeScale} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-7">
              <form className="bg-white p-8 md:p-14 rounded-[3rem] shadow-[0_20px_80px_rgba(0,0,0,0.06)] border border-gray-100 space-y-8 relative overflow-hidden group">
                {/* Subtle Hover Glow behind form using #89cff1 */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#89cff1]/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-[#89cff1]/10 transition-colors duration-700" />
                
                <div className="grid md:grid-cols-2 gap-8 relative z-10">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-[#020617] focus:outline-none focus:border-[#89cff1] focus:bg-white transition-all placeholder:text-gray-400" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Company</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-[#020617] focus:outline-none focus:border-[#89cff1] focus:bg-white transition-all placeholder:text-gray-400" 
                      placeholder="Enterprise Inc." 
                    />
                  </div>
                </div>
                
                <div className="space-y-2 relative z-10">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Business Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-[#020617] focus:outline-none focus:border-[#89cff1] focus:bg-white transition-all placeholder:text-gray-400" 
                    placeholder="john@enterprise.com" 
                  />
                </div>
                
                <div className="space-y-2 relative z-10">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Message</label>
                  <textarea 
                    rows="5" 
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-[#020617] focus:outline-none focus:border-[#89cff1] focus:bg-white transition-all placeholder:text-gray-400 resize-none" 
                    placeholder="Describe your expansion or visibility goals..."
                  ></textarea>
                </div>
                
                <button 
                  type="button" 
                  className="w-full bg-[#020617] text-white font-bold text-lg py-5 rounded-2xl hover:bg-[#02102e] hover:shadow-[0_10px_30px_rgba(137,207,241,0.2)] transition-all hover:scale-[1.01] active:scale-[0.99] shadow-xl relative z-10"
                >
                  Initiate Partnership
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}