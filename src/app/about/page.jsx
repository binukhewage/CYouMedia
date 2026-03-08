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

// Reusable Wavy Line Component using #89cff1
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

export default function About() {
  const valuesRef = useRef(null);

  const technologies = [
  "Streaming Infrastructure",
  "Payment Systems",
  "QR Ecosystems",
  "Digital Identity",
  "App Platforms",
  "Secure Transactions",
];

  return (
    <div className="bg-[#020617] text-[#1d1d1f] font-sans selection:bg-[#89cff1]/30 overflow-hidden">
      
      {/* ================= 1. HERO SECTION (Dark Mode) ================= */}
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 bg-[#020617] text-white">
        <div className="absolute inset-0 z-0 opacity-20">
           <Image src="/bg.png" alt="Atmosphere" fill className="object-cover mix-blend-overlay" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: appleEase }}
          className="relative z-10 max-w-5xl mx-auto"
        >
          <motion.span variants={fadeInUp} className="text-[#89cff1] text-xs font-bold uppercase tracking-[0.3em] mb-6 block">
            Our Identity
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.9] mb-8">
            Story Behind <br /> <span className="italic text-[#89cff1]">CYouMedia.</span>
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
                <span className="w-12 h-[1px] bg-[#89cff1]/50" />
                <span className="text-[#89cff1] text-xs font-bold uppercase tracking-[0.2em]">The Business Core</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-10 leading-[1.05] text-[#020617]">
                Not Just Coders. <br /> Business People First.
              </h2>
              <div className="space-y-6 text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
                <p>
                  We understand the journey from a simple idea to a goal of 10 million and beyond. 
                  Technology is merely the vehicle; the destination is <span className="text-[#020617] font-medium italic">undeniable market authority.</span>
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

      {/* ================= TECH EXPERTISE TICKER ================= */}


<div className="relative z-30 bg-[#020617] py-8 border-y border-white/5 overflow-hidden">

  {/* Left Fade */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#020617] to-transparent z-10" />

  {/* Right Fade */}
  <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#020617] to-transparent z-10" />

  <motion.div
    animate={{ x: ["0%", "-50%"] }}
    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    className="flex whitespace-nowrap items-center"
  >
    {[...technologies, ...technologies].map((tech, i) => (
      <span
        key={i}
        className={`mx-10 text-2xl font-black italic tracking-tight ${
          i % 2 === 0 ? "text-[#89cff1]" : "text-white"
        }`}
      >
        {tech}
        <span className="mx-10 text-[#89cff1] font-bold">•</span>
      </span>
    ))}
  </motion.div>
</div>

      {/* ================= 3. GLOBAL REACH (Interactive Hub Design) ================= */}
      <section className="py-32 px-6 md:px-12 bg-white relative z-30">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[1px] bg-[#89cff1]" />
                <span className="text-[#89cff1] text-xs font-bold uppercase tracking-[0.3em]">Global Presence</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-[#020617] leading-[0.95]">
                Localized dominance. <br /> <span className="italic text-[#89cff1]">Worldwide.</span>
              </h2>
            </div>
            <p className="text-xl text-gray-500 font-light max-w-sm leading-relaxed">
              Strategic hubs positioned in the world's most influential markets to bridge the gap between local ideas and global authority.
            </p>
          </div>

          {/* Main Hub Grid */}
          <div className="grid lg:grid-cols-12 gap-6">
            
            {/* Left: The Map Visual (Command Center Style) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: appleEase }}
              className="lg:col-span-8 relative bg-[#020617] rounded-[3rem] overflow-hidden h-[400px] lg:h-[600px] shadow-2xl group"
            >
              <Image 
                src="/mapcon.png" 
                alt="Global Operations Map" 
                fill 
                className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-[10s] ease-linear"
              />
              
              {/* Radar/Scanline Effect Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(137,207,241,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(137,207,241,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />

              {/* Floating Pulse Points (Decorative) */}
              <div className="absolute top-[30%] left-[45%] w-3 h-3 bg-[#89cff1] rounded-full animate-ping" />
              <div className="absolute top-[50%] left-[20%] w-2 h-2 bg-[#89cff1] rounded-full opacity-50" />
              <div className="absolute top-[60%] left-[80%] w-2 h-2 bg-[#89cff1] rounded-full opacity-50" />
              
              <div className="absolute bottom-10 left-10 z-10">
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl">
                  <div className="w-2 h-2 rounded-full bg-[#89cff1] animate-pulse" />
                  <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Live Operations Active</span>
                </div>
              </div>
            </motion.div>

            {/* Right: The Location Nodes */}
            <div className="lg:col-span-4 grid grid-cols-1 gap-4">
              {[
                { name: "Sweden", role: "European HQ", code: "se" },
                { name: "London", role: "Capital Relations", code: "gb" },
                { name: "Singapore", role: "APAC Logistics", code: "sg" },
                { name: "USA", role: "North America Hub", code: "us" },
              ].map((hub, i) => (
                <motion.div
                  key={hub.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: appleEase }}
                  className="group relative flex items-center justify-between p-6 rounded-[2rem] bg-[#FAFAFA] border border-gray-100 hover:border-[#89cff1] hover:bg-white transition-all duration-500"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm  transition-all duration-500">
                      <img 
                        src={`https://flagcdn.com/w80/${hub.code}.png`} 
                        alt={hub.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#020617] tracking-tight">{hub.name}</h4>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{hub.role}</p>
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <svg className="w-5 h-5 text-[#89cff1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </motion.div>
              ))}
              
              {/* Secondary Locations Pill */}
              <motion.div 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                className="mt-2 flex flex-wrap gap-2 justify-center lg:justify-start"
              >
                {["South Africa", "Sri Lanka"].map(city => (
                  <span key={city} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
                    + {city}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. VALUES (Light Mode + Wavy Line) ================= */}
      <section ref={valuesRef} className="py-32 px-6 md:px-12 bg-[#FAFAFA] relative z-30 overflow-hidden">
        <WavyScrollLine targetRef={valuesRef} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-[#020617]">What We Stand For</h2>
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
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-[#3ea6d6] font-bold text-xl mb-8 group-hover:scale-110 transition-transform">
                  0{i + 1}
                </div>
                <h3 className="text-2xl font-semibold mb-4 tracking-tight text-[#020617]">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light text-lg">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}