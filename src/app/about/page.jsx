"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";

// Consistency with your existing animation constants
const appleEase = [0.16, 1, 0.3, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: appleEase } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// Reusable Wavy Line Component
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

export default function About() {
  const valuesRef = useRef(null);

  return (
    <div className="bg-[#052824] text-[#1d1d1f] font-sans selection:bg-emerald-400/30 overflow-hidden">
      
      {/* ================= 1. HERO SECTION (Dark Mode) ================= */}
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 bg-[#052824] text-white">
        <div className="absolute inset-0 z-0 opacity-20">
           <Image src="/bg.png" alt="Atmosphere" fill className="object-cover mix-blend-overlay" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: appleEase }}
          className="relative z-10 max-w-5xl mx-auto"
        >
          <motion.span variants={fadeInUp} className="text-emerald-400 text-xs font-bold uppercase tracking-[0.3em] mb-6 block">
            Our Identity
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.9] mb-8">
            Story Behind <br /> <span className="italic text-emerald-400">CYouMedia.</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/50 font-light max-w-2xl mx-auto leading-relaxed">
            We are a collective of strategic businesspeople engineering predictable growth for global enterprise brands.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= 2. THE CORE (White Curved Overlay) ================= */}
      <section className="bg-white py-32 px-6 md:px-12 relative z-30 rounded-t-[4rem] lg:rounded-t-[6rem] -mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: appleEase }}
              className="lg:col-span-7"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[1px] bg-emerald-500/50" />
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em]">The Business Core</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-10 leading-[1.05] text-[#052824]">
                Not Just Coders. <br /> Business People First.
              </h2>
              <div className="space-y-6 text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
                <p>
                  We understand the journey from a simple idea to a goal of 10 million and beyond. 
                  Technology is merely the vehicle; the destination is <span className="text-[#052824] font-medium italic">undeniable market authority.</span>
                </p>
                <p>
                  Real success is built on clear agreements, strong structure, and the right connections. 
                  Every strategy we deploy is strictly designed to move the needle on your bottom line.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: appleEase }}
              className="lg:col-span-5 relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-[15px] border-[#FAFAFA]"
            >
              <Image 
                src="/about1.png" 
                alt="Strategy session"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= 3. GLOBAL REACH (Refined Split Island) ================= */}
      <section className="py-24 px-4 md:px-8 bg-white relative z-30">
        <div className="max-w-7xl mx-auto bg-[#052824] rounded-[4rem] overflow-hidden relative shadow-2xl flex flex-col lg:flex-row min-h-[600px]">
          
          {/* Image Side */}
          <div className="relative lg:w-1/2 min-h-[400px]">
            <Image src="/mapcon.png" alt="Map" fill className="object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#052824] hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#052824] lg:hidden" />
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center text-center lg:text-left relative z-10">
            <h3 className="text-emerald-400 text-xs font-bold uppercase tracking-[0.3em] mb-8">Our Global Footprint</h3>
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-12 tracking-tighter leading-tight">
              Operating across continents to deliver <span className="italic text-emerald-400">localized dominance.</span>
            </h2>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {['Sweden', 'London', 'South Africa', 'USA', 'Singapore', 'Sri Lanka'].map((country) => (
                <span 
                  key={country}
                  className="px-6 py-3 border border-white/10 rounded-full text-white/80 text-sm font-medium bg-white/5 backdrop-blur-sm hover:border-emerald-500 hover:text-emerald-400 transition-all duration-300"
                >
                  {country}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. VALUES (Light Mode + Wavy Line) ================= */}
      <section ref={valuesRef} className="py-32 px-6 md:px-12 bg-[#FAFAFA] relative z-30 overflow-hidden">
        <WavyScrollLine targetRef={valuesRef} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter">What We Stand For</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Simplicity Over Complexity", 
                desc: "We never hide behind technical jargon. Everything we do is explained simply, ensuring you remain in control of your strategy." 
              },
              { 
                title: "Security Through Structure", 
                desc: "All our collaborations rest on solid legal foundations. Our agreements are designed to protect both our partners and ourselves." 
              },
              { 
                title: "Focus on Results", 
                desc: "We measure success in real outcomes: Visibility. Growth. Revenue. Not technical reports or vanity metrics." 
              }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: appleEase }}
                className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] group hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-xl mb-8 group-hover:scale-110 transition-transform">
                  0{i + 1}
                </div>
                <h3 className="text-2xl font-semibold mb-4 tracking-tight">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light text-lg">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}