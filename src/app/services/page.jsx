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
    transition: { duration: 0.8, ease: appleEase },
  },
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

export default function ServicesPage() {
  const scrollRef = useRef(null);

  const services = [
    {
      id: "01",
      title: "Market Expansion Strategy",
      description: "We build the commercial bridge. From legal structuring to cross-border agreements, we pave the way for your business to enter new territories with absolute security.",
      tags: ["Structural Integrity", "Legal Frameworks", "Partnerships"],
      image: "/strat-expand.jpg", 
      dark: false,
    },
    {
      id: "02",
      title: "CYouMedia AI Visibility",
      description: "Leveraging our proprietary AI engine, we transform your digital footprint. Our goal: ensuring that when a customer searches, they find you first. Period.",
      tags: ["Proprietary AI", "SEO Dominance", "Global Visibility"],
      image: "/digital-vis.jpg",
      dark: true,
    },
    {
      id: "03",
      title: "High-Level Networking",
      description: "Access our elite network across London, Singapore, and Sweden. We connect you with stakeholders that open doors usually closed to the public.",
      tags: ["Executive Access", "Global Hubs", "Capital Relations"],
      image: "/networking.jpg",
      dark: false,
    },
  ];

  return (
    <div className="bg-[#052824] text-[#1d1d1f] font-sans selection:bg-emerald-400/30 overflow-hidden">
      
      {/* ================= 1. HERO SECTION (Centered Heading) ================= */}
      <section className="relative w-full py-32 lg:py-48 bg-[#052824] text-white overflow-hidden flex flex-col items-center text-center">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/bg.png" alt="Background" fill className="object-cover mix-blend-overlay" priority />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.span variants={fadeInUp} className="text-emerald-400 text-xs font-bold uppercase tracking-[0.3em] mb-6 block">
              Our Expertise
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.9] mb-8">
              From Vision  <br /> <span className="text-emerald-400 italic">to Global Impact.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
              We provide the legal structure, the AI technology, and the global connections. You focus on the vision.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= 2. THE SERVICES LOOP (Rounded Edge Start) ================= */}
      <section ref={scrollRef} className="relative bg-white rounded-t-[3rem] lg:rounded-t-[5rem] -mt-12 z-20 overflow-hidden">
        {services.map((service, index) => (
          <div 
            key={service.id}
            className={`py-24 md:py-32 px-6 relative overflow-hidden ${service.dark ? 'bg-[#052824] text-white' : 'bg-white text-[#1d1d1f]'}`}
          >
            {/* The Wavy Line Threading through individual sections */}
            {index !== services.length - 1 && <WavyScrollLine targetRef={scrollRef} />}

            <div className="max-w-7xl mx-auto relative z-10">
              <div className={`grid lg:grid-cols-12 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Content Block */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: appleEase }}
                  className={`lg:col-span-6 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-emerald-500 font-mono text-xl">[{service.id}]</span>
                    <div className={`h-px w-12 ${service.dark ? 'bg-white/20' : 'bg-black/10'}`} />
                  </div>
                  
                  <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-8 leading-tight">
                    {service.title}
                  </h2>
                  <p className={`text-xl md:text-2xl font-light leading-relaxed mb-10 ${service.dark ? 'text-white/60' : 'text-gray-500'}`}>
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {service.tags.map(tag => (
                      <span key={tag} className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border ${service.dark ? 'border-white/10 bg-white/5 text-emerald-400' : 'border-emerald-100 bg-emerald-50/50 text-emerald-700'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Visual Block */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: appleEase }}
                  className={`lg:col-span-6 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
                >
                  <div className={`relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl group border ${service.dark ? 'border-white/5' : 'border-gray-100'}`}>
                    {/* Ambient Glow for Dark Sections */}
                    {service.dark && <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full" />}
                    
                    <div className={`w-full h-full ${service.dark ? 'bg-[#0a352f]' : 'bg-gray-50'} flex items-center justify-center relative overflow-hidden`}>
                       {/* This is where your actual Service Images go */}
                       <span className="text-emerald-500/10 font-bold text-[15rem] absolute select-none">{service.id}</span>
                       <div className="relative z-10 w-4/5 h-4/5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-inner" />
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}