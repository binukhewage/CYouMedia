"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { careersData } from '@/data/careers';

const appleEase = [0.16, 1, 0.3, 1];

// Premium Wavy Line (Same as Home/Services)
const WavyScrollLine = ({ targetRef }) => {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"],
  });
  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  return (
    <div className="absolute inset-0 z-0 pointer-events-none flex justify-center overflow-hidden opacity-30">
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

export default function CareersList() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div ref={containerRef} className="bg-[#052824] text-white font-sans selection:bg-emerald-400/30 overflow-hidden">
      
      {/* ================= 1. CINEMATIC HERO ================= */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image src="/bg.png" alt="Atmosphere" fill className="object-cover opacity-40 mix-blend-overlay" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#052824]/50 to-[#052824]" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: appleEase }}
          >
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-[0.5em] mb-8 block">Careers at CYouMedia</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.8] mb-12">
              Join the <span className="italic text-emerald-400">Elite.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/50 font-light max-w-3xl mx-auto leading-relaxed">
              We don't just build apps. We engineer market dominance. <br />
              Are you an architect of visibility?
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= 2. THE CULTURE STORY (Asymmetrical) - SWAPPED ================= */}
      <section className="relative bg-white text-[#1d1d1f] py-40 px-6 lg:px-12 rounded-t-[5rem] lg:rounded-t-[8rem] -mt-20 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-24 items-start">
            
            {/* Visual Montage (Now on the left) */}
            <div className="lg:col-span-6 space-y-20">
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: appleEase }}
                className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border-[15px] border-[#FAFAFA]"
              >
                <Image src="/lifeat.png" alt="Team" fill className="object-cover" />
              </motion.div>
            </div>

            {/* Sticky Editorial Text (Now on the right) */}
            <div className="lg:col-span-6 lg:sticky lg:top-40">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[1px] bg-emerald-500" />
                <span className="text-emerald-500 text-xs font-bold uppercase tracking-[0.2em]">Our Manifesto</span>
              </div>
              <h2 className="text-6xl font-semibold tracking-tighter mb-10 leading-[1.05]">
                Life inside the <br /> <span className="text-emerald-500">CYouMedia.</span>
              </h2>
              <div className="space-y-8 text-2xl text-gray-400 font-light leading-relaxed">
                <p>
                  At CYouMedia, we operate on a fundamental truth: technology is a liability unless it drives revenue. Our culture is built for the 
                  <span className="text-[#052824] font-medium"> pragmatists and the visionaries </span> 
                  who understand that code is simply the bridge between a business and its global audience.
                </p>
                <p>
                  Whether you are refining our proprietary AI from Stockholm or managing enterprise relations from Singapore, you are entering 
                  an environment where 
                  <span className="text-emerald-600 font-medium italic"> transparency is our default </span> 
                  and results are our only currency.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 3. OPEN ROLES (Minimalist List) ================= */}
      <section className="bg-[#FAFAFA] py-40 px-6 lg:px-12 relative overflow-hidden">
        <WavyScrollLine targetRef={containerRef} />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex justify-between items-end mb-20">
            <h2 className="text-5xl font-semibold tracking-tighter text-[#052824]">Open Positions</h2>
            <div className="text-emerald-600 font-mono text-sm tracking-widest">[ {careersData.length} POSITIONS ]</div>
          </div>

          <div className="space-y-4">
            {careersData.map((job) => (
              <motion.div 
                key={job.id}
                whileHover={{ x: 20 }}
                transition={{ duration: 0.4, ease: appleEase }}
              >
                <Link href={`/careers/${job.id}`} className="group flex flex-col md:flex-row items-center justify-between p-10 md:p-14 bg-white hover:bg-[#052824] transition-colors duration-500 rounded-[3rem] shadow-sm hover:shadow-2xl border border-gray-100 hover:border-transparent">
                  <div className="flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 mb-4 block group-hover:text-emerald-400">
                      {job.department} • {job.location}
                    </span>
                    <h3 className="text-4xl font-semibold tracking-tighter text-[#052824] group-hover:text-white transition-colors">
                      {job.title}
                    </h3>
                  </div>
                  
                  <div className="mt-8 md:mt-0 w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all">
                    <svg className="w-6 h-6 text-gray-300 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}