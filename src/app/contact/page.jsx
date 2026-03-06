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

// Consistent Wavy Line Component
const WavyScrollLine = ({ targetRef }) => {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"],
  });
  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  return (
    <div className="absolute inset-0 z-0 pointer-events-none flex justify-center overflow-hidden opacity-30 md:opacity-60">
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100">
        <path d="M50,0 C90,25 10,75 50,100" stroke="#10b981" strokeOpacity="0.1" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
        <motion.path d="M50,0 C90,25 10,75 50,100" stroke="url(#emeraldGradient)" strokeWidth="3" fill="none" vectorEffect="non-scaling-stroke" style={{ pathLength }} />
        <defs>
          <linearGradient id="emeraldGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="50%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default function Contact() {
  const contactRef = useRef(null);

  return (
    <div className="bg-white text-[#1d1d1f] font-sans selection:bg-emerald-400/30 overflow-hidden">
      
      {/* ================= 1. HERO HEADER (Dark Mode) ================= */}
      <section className="relative w-full py-32 lg:py-48 bg-[#052824] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/bg.png" alt="Background" fill className="object-cover mix-blend-overlay" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.span variants={fadeInUp} className="text-emerald-400 text-xs font-bold uppercase tracking-[0.3em] mb-6 block">
              Connect with us
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.9] mb-8">
              Let's Talk <br /> <span className="italic text-emerald-400">Growth.</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* ================= 2. INTERACTIVE FORM SECTION (Light Mode) ================= */}
      <section ref={contactRef} className="relative py-24 px-6 md:px-12 bg-white -mt-20 z-20">
        <WavyScrollLine targetRef={contactRef} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Contact Details */}
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-5">
              <div className="space-y-16">
                <div>
                  <h3 className="text-emerald-600 text-xs font-bold uppercase tracking-[0.2em] mb-6">Contact Inquiries</h3>
                  <p className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1d1d1f] hover:text-emerald-600 transition-colors duration-300">
                    hello@cyoumedia.com
                  </p>
                </div>

                <div>
                  <h3 className="text-emerald-600 text-xs font-bold uppercase tracking-[0.2em] mb-6">Strategic Hubs</h3>
                  <div className="grid grid-cols-2 gap-8">
                    {['Sweden', 'London', 'Singapore', 'Sri Lanka'].map((city) => (
                      <div key={city} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        <span className="text-lg text-gray-600 font-light">{city}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8 rounded-[2rem] bg-emerald-50 border border-emerald-100">
                  <p className="text-emerald-900 font-medium leading-relaxed">
                    "We are not coders—we are businesspeople. We design the structure, you enjoy the results."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Premium Form Card */}
            <motion.div variants={fadeScale} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-7">
              <form className="bg-white p-8 md:p-14 rounded-[3rem] shadow-[0_20px_80px_rgba(0,0,0,0.06)] border border-gray-100 space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-[#1d1d1f] focus:outline-none focus:border-emerald-500 transition-all placeholder:text-gray-400" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Company</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-[#1d1d1f] focus:outline-none focus:border-emerald-500 transition-all placeholder:text-gray-400" 
                      placeholder="Enterprise Inc." 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Business Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-[#1d1d1f] focus:outline-none focus:border-emerald-500 transition-all placeholder:text-gray-400" 
                    placeholder="john@enterprise.com" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Message</label>
                  <textarea 
                    rows="4" 
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-[#1d1d1f] focus:outline-none focus:border-emerald-500 transition-all placeholder:text-gray-400 resize-none" 
                    placeholder="Describe your expansion or visibility goals..."
                  ></textarea>
                </div>
                
                <button 
                  type="button" 
                  className="w-full bg-[#052824] text-white font-bold text-lg py-5 rounded-2xl hover:bg-emerald-600 transition-all hover:scale-[1.01] active:scale-[0.99] shadow-xl"
                >
                  Initiate Partnership
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= 3. CLOSING STATEMENT ================= */}
      <section className="py-32 px-6 bg-[#FAFAFA] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-light text-gray-400 tracking-widest uppercase mb-4">
            Security Through Structure
          </h2>
          <div className="w-12 h-0.5 bg-emerald-400 mx-auto" />
        </div>
      </section>

    </div>
  );
}