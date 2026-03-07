"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";

// Premium Entry Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const floatAnimation = {
  y: [0, -15, 0],
  transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
};

const appleEase = [0.16, 1, 0.3, 1];

// ================= CUSTOM WAVY SCROLL LINE COMPONENT =================
const WavyScrollLine = ({ targetRef }) => {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  return (
    <div className="absolute inset-0 z-0 pointer-events-none flex justify-center overflow-hidden opacity-30 md:opacity-60">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <path
          d="M50,0 C90,25 10,75 50,100"
          stroke="#10b981"
          strokeOpacity="0.1"
          strokeWidth="1"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        <motion.path
          d="M50,0 C90,25 10,75 50,100"
          stroke="url(#emeraldGradient)"
          strokeWidth="3"
          fill="none"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }}
        />
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

export default function Home() {
  const whoWeAreRef = useRef(null);
  const whatWeDoRef = useRef(null);
  const policyRef = useRef(null);

  return (
    <div className="bg-[#052824] text-[#1d1d1f] font-sans selection:bg-emerald-400/30 overflow-hidden">
      {/* ================= 1. HERO SECTION (Untouched) ================= */}

      <section className="relative w-full h-screen min-h-[850px] overflow-hidden flex flex-col items-center pt-32 lg:pt-40 bg-[#052824] text-white">
        {/* Background Swirls */}

        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <svg
            className="absolute w-full h-full"
            viewBox="0 0 1440 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-100 600 C 200 800, 400 200, 800 500 C 1200 800, 1500 300, 1600 400"
              stroke="#10b981"
              strokeWidth="4"
              opacity="0.6"
            />

            <path
              d="M-50 700 C 300 900, 600 400, 1000 700 C 1300 900, 1500 500, 1600 600"
              stroke="#10b981"
              strokeWidth="2"
              opacity="0.3"
            />

            <path
              d="M400 900 C 500 500, 900 300, 1400 600"
              stroke="#34d399"
              strokeWidth="3"
              opacity="0.5"
            />
          </svg>
        </div>

        {/* Text Block */}

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          className="relative z-30 text-center px-6 max-w-4xl mx-auto"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
          >
            Your Business Visible <br />
            Worldwide
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-8 font-light leading-relaxed"
          >
            We help businesses become visible, connect globally, and grow through strategic expansion and digital presence.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <button className="bg-white text-[#052824] px-8 py-3.5 rounded-full font-bold hover:bg-emerald-50 transition-all shadow-xl hover:scale-105">
              Book a Consultation
            </button>
          </motion.div>
        </motion.div>

        {/* GLOBE VIDEO */}

        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-15%] w-[800px] h-[800px] lg:w-[1000px] lg:h-[1000px] z-10 pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-90 mix-blend-screen"
            style={{
              maskImage:
                "radial-gradient(circle at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 70%)",

              WebkitMaskImage:
                "radial-gradient(circle at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 70%)",
            }}
          >
            <source src="/bgvid.mp4" type="video/mp4" />
          </video>
        </div>

        {/* FLOATING UI LAYER */}

        <div className="hidden lg:block absolute inset-0 z-20 pointer-events-none">
          <motion.div
            animate={floatAnimation}
            className="absolute left-[2%] lg:left-[10%] top-[50%] lg:top-[50%] bg-white text-black p-5 rounded-2xl shadow-2xl w-80 pointer-events-auto"
          >
            <h4 className="font-bold text-lg mb-4">Business Growth ↑ </h4>

            <div className="relative h-24 w-full flex items-end justify-between border-b border-gray-200 pb-2">
              <div className="absolute inset-0 bg-emerald-50/50 rounded-b-md" />

              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                <path
                  d="M0,80 Q25,30 50,60 T100,20"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                />

                <circle cx="80" cy="35" r="4" fill="#052824" />
              </svg>
            </div>

            <div className="flex justify-between text-[9px] text-gray-400 mt-2 font-medium uppercase tracking-wider">
              <span>Nov 2023</span>
              <span>Dec 2023</span>
              <span>Jan 2024</span>
              <span>Feb 2024</span>
            </div>
          </motion.div>

          <motion.div
            animate={{
              y: [0, -10, 0],
              transition: { duration: 6, repeat: Infinity },
            }}
            className="absolute right-[2%] lg:right-[10%] top-[45%] lg:top-[40%] bg-white text-black p-5 rounded-3xl shadow-2xl w-64 pointer-events-auto"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-bold text-sm text-gray-600">
                  Visibility for Every Business
                </h4>

                <div className="text-xs font-bold text-[#052824]"></div>
              </div>

              <div className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-1 rounded-full">
                #1
              </div>
            </div>

            <div className="relative h-30 w-full mt-4 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
              <Image
                src="/herosmall.png"
                alt="Map"
                fill
                className="object-cover "
              />
            </div>
          </motion.div>

          {/* Decorative Floating Squares */}

          <motion.div
            animate={{
              y: [0, 10, 0],
              transition: { duration: 4, repeat: Infinity },
            }}
            className="absolute left-[28%] top-[45%] w-16 h-16 rounded-2xl bg-emerald-500 p-2 shadow-xl rotate-12 pointer-events-auto"
          >
            <div className="w-full h-full bg-emerald-300/50 rounded-xl" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, -12, 0],
              transition: { duration: 5.5, repeat: Infinity },
            }}
            className="absolute left-[22%] bottom-[10%] w-20 h-20 rounded-2xl bg-white p-1 shadow-2xl -rotate-6 pointer-events-auto"
          >
            <div className="w-full h-full bg-gray-200 rounded-xl" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 15, 0],
              transition: { duration: 5, repeat: Infinity },
            }}
            className="absolute right-[12%] bottom-[20%] w-24 h-24 rounded-2xl bg-white p-1 shadow-2xl rotate-6 pointer-events-auto"
          >
            <div className="w-full h-full bg-gray-200 rounded-xl" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, -8, 0],
              transition: { duration: 4.2, repeat: Infinity },
            }}
            className="absolute right-[25%] bottom-[10%] w-16 h-16 rounded-2xl bg-emerald-400 p-1 shadow-xl -rotate-12 pointer-events-auto"
          >
            <div className="w-full h-full bg-emerald-200/50 rounded-xl" />
          </motion.div>
        </div>
      </section>

      {/* ================= 2. WHO WE ARE ================= */}
      <section
        ref={whoWeAreRef}
        className="bg-white py-32 px-6 md:px-12 relative z-30 overflow-hidden"
      >
        <WavyScrollLine targetRef={whoWeAreRef} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-40">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: appleEase }}
              >
                <div className="flex items-center gap-4 mb-8">
                
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em]">who we are</span>
              </div>
                <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-[#1d1d1f] leading-tight mb-8">
                  Business People <br className="hidden lg:block" /> First.
                </h2>
                <div className="w-20 h-1 bg-emerald-400 rounded-full shadow-md" />
              </motion.div>
            </div>
            <div className="lg:col-span-7 space-y-12 bg-white/40 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: appleEase }}
                className="text-2xl md:text-3xl text-gray-800 font-light leading-relaxed"
              >
                We are a strategic partner combining business development with
                digital visibility.{" "}
                <span className="font-semibold">
                  First and foremost, we are not coders or technicians - we are
                  businesspeople.
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.1, ease: appleEase }}
                className="text-xl text-gray-500 font-light leading-relaxed"
              >
                We understand the journey from a simple idea to a goal of 10
                million and beyond. Real success is built on clear agreements,
                strong structure, and the right connections.
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2, ease: appleEase }}
                className="relative w-full h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl group"
              >
                <Image
                  src="/businessppl.png"
                  alt="Business People"
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. GLOBAL REACH ================= */}
      <section className="relative py-32 px-6 md:px-12 z-30 border-y border-white/10 overflow-hidden bg-[#052824]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg.png"
            alt="Global Reach Cityscape"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#052824]/90 via-[#052824]/30 to-[#052824]/90" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-8 text-white drop-shadow-lg">
            Global Reach & Expertise
          </h2>
          <p className="text-xl text-white/80 font-light max-w-2xl mx-auto mb-16 drop-shadow-md">
            Our operations are truly global. We bridge markets and create
            opportunities across borders. Through these connections we help
            businesses expand, collaborate, and grow internationally.
          </p>
          
          {/* COLORFUL & MEANINGFUL HUBS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              { name: "Sweden", code: "se", role: "European HQ" },
              { name: "London", code: "gb", role: "Global Finance" },
              { name: "South Africa", code: "za", role: "African Hub" },
              { name: "USA", code: "us", role: "North America" },
              { name: "Singapore", code: "sg", role: "APAC Hub" },
              { name: "Sri Lanka", code: "lk", role: "Tech & Ops" },
            ].map((location, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: appleEase }}
                className="group relative overflow-hidden flex items-center justify-between px-5 py-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:border-emerald-500/50 hover:bg-white/10 transition-all cursor-default"
              >
                {/* Subtle hover sweep effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <div className="flex items-center gap-4 relative z-10">
                  {/* Circular Flag Icon using standard img tag to avoid config error */}
                  <div className="w-10 h-10 rounded-full overflow-hidden relative border border-white/20 shadow-md shrink-0 bg-gray-800">
                    <img 
                      src={`https://flagcdn.com/w80/${location.code}.png`} 
                      alt={`${location.name} Flag`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Location Text & Meaningful Role */}
                  <div className="flex flex-col items-start">
                    <span className="text-white font-medium text-lg tracking-wide leading-tight">
                      {location.name}
                    </span>
                    <span className="text-emerald-400/80 text-[10px] font-bold tracking-[0.15em] uppercase mt-0.5">
                      {location.role}
                    </span>
                  </div>
                </div>

                {/* Subtle Arrow to indicate forward momentum */}
                <div className="relative z-10 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </section>

      {/* ================= 4. WHAT WE DO ================= */}
      <section
        ref={whatWeDoRef}
        className="py-32 px-6 md:px-12 bg-white relative z-30 overflow-hidden"
      >
        <WavyScrollLine targetRef={whatWeDoRef} />

        <div className="max-w-7xl mx-auto relative z-10">
           <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[1px] bg-emerald-500/50" />
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em]">Our Expertise</span>
              </div>
          <div className="mb-16">
            <h2 className="text-5xl font-semibold tracking-tighter mb-4 text-[#1d1d1f] drop-shadow-sm">
              The Service Core
            </h2>
          </div>
          <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: appleEase }}
              className="lg:col-span-2 bg-white/80 backdrop-blur-xl border border-gray-100 rounded-[2.5rem] p-10 md:p-14 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.06)] group"
            >
              <div className="w-16 h-16 bg-white shadow-sm border border-gray-100 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                <svg
                  className="w-8 h-8 text-emerald-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-4xl font-semibold tracking-tighter mb-6">
                Strategic <br />
                Expansion.
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                We create the legal and commercial foundations necessary for
                growth. Through structured agreements and strategic
                partnerships, we prepare businesses to expand confidently.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.15, ease: appleEase }}
              className="lg:col-span-3 bg-[#052824] text-white rounded-[2.5rem] p-10 md:p-14 flex flex-col justify-between shadow-2xl relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
                    <svg
                      className="w-8 h-8 text-emerald-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <span className="px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-semibold tracking-widest uppercase border border-emerald-500/20">
                    Proprietary AI
                  </span>
                </div>
                <h3 className="text-4xl font-semibold tracking-tighter mb-6">
                  Digital Presence.
                </h3>
                <p className="text-white/70 text-xl leading-relaxed mb-10 max-w-2xl font-light">
                  Powered by our proprietary AI platform, CYouMedia ensures that
                  your business is found by your customers.
                </p>
                <div className="inline-flex items-center gap-3 text-emerald-300 font-medium text-lg bg-emerald-900/30 px-6 py-3 rounded-xl border border-emerald-800/50">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  We transform complex technology into one clear outcome:
                  Visibility.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= 5. OUR MOTTO (Refined Editorial Layout) ================= */}
      <section className="relative py-32 md:py-48 px-6 overflow-hidden bg-[#052824] flex items-center justify-center min-h-[80vh]">
        
        {/* Ultra-subtle background texture */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/sins.png"
            alt="Atmosphere"
            fill
            className="object-cover opacity-[0.15] mix-blend-luminosity" 
          />
          {/* Soft radial vignette to keep the edges completely dark and clean */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#052824_100%)]" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
            
            {/* Left Column: The Statement */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: appleEase }}
              className="lg:col-span-7"
            >
              {/* Elegant Overline */}
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[1px] bg-emerald-500/50" />
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em]">Our Core Philosophy</span>
              </div>
              
              <h2 className="text-6xl md:text-7xl lg:text-[6.5rem] font-semibold tracking-tighter leading-[1.05] text-white">
                <span className="text-white/30">"</span>Syns du <br className="hidden lg:block" /> 
                <span className="text-emerald-400 italic font-medium">finns du.</span><span className="text-white/30">"</span>
              </h2>
            </motion.div>

            {/* Right Column: The Meaning (Clean, Borderless, Editorial) */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: appleEase }}
              className="lg:col-span-5 lg:border-l border-white/10 lg:pl-16"
            >
              <h3 className="text-3xl md:text-4xl font-medium mb-6 text-white tracking-tight">
                If you exist, you are seen.
              </h3>
              
              <div className="space-y-6 text-xl md:text-2xl text-white/60 font-light leading-relaxed">
                <p>
                  This philosophy drives everything we do. When someone searches for
                  what you offer, your business should be the one they find.
                </p>
                <p className="text-emerald-300 font-medium text-lg">
                  We make sure you are never invisible.
                </p>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* ================= 6. OUR POLICY (Modern Sticky List) ================= */}
      <section ref={policyRef} className="py-32 px-6 md:px-12 bg-[#FAFAFA] relative z-30 overflow-hidden">
        <WavyScrollLine targetRef={policyRef} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Sticky Header Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-40">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: appleEase }}
              >
                 <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[1px] bg-emerald-500/50" />
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em]">Our workflow</span>
              </div>
                <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-[#1d1d1f] leading-tight">
                  How We <br className="hidden lg:block"/> Operate.
                </h2>
                <p className="mt-6 text-xl text-gray-500 font-light leading-relaxed max-w-md">
                  The foundational principles that dictate every partnership, project, and strategy we build.
                </p>
              </motion.div>
            </div>

            {/* Scrolling Rows Column */}
<div className="lg:col-span-7 space-y-6">
  {[
    {
      title: "Simplicity Over Complexity",
      text: "We never hide behind confusing technical language. Everything we do is explained in a way that normal people understand.",
    },
    {
      title: "Security Through Structure",
      text: "All our collaborations rest on solid legal foundations. Our agreements are designed to protect both our partners and ourselves.",
    },
    {
      title: "Focus on Results",
      text: "We measure success in real outcomes: Visibility. Growth. Revenue. Not technical reports or vanity metrics.",
    },
  ].map((policy, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: i * 0.15, ease: appleEase }}
      className="group bg-white/60 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border-l-[6px] border-emerald-500 border-t border-r border-b border-emerald-500 hover:bg-white hover:shadow-[0_15px_40px_rgb(0,0,0,0.04)] transition-all duration-500 flex flex-col md:flex-row gap-6 md:gap-10 items-start"
    >
      {/* The number now sits next to the thick left border */}
      <div className="text-2xl font-mono font-bold text-emerald-500/30 group-hover:text-emerald-500 transition-colors duration-500 shrink-0 mt-1">
        0{i + 1}
      </div>
      
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-3 text-[#1d1d1f]">
          {policy.title}
        </h3>
        <p className="text-gray-500 text-lg leading-relaxed font-light">
          {policy.text}
        </p>
      </div>
    </motion.div>
  ))}
</div>

          </div>
        </div>
      </section>

      {/* ================= 7. CLOSING ARGUMENT (Asymmetrical Dark Island) ================= */}
      <section className="py-20 px-4 md:px-8 bg-white relative z-30">
        <div className="max-w-[1400px] mx-auto bg-[#052824] rounded-[3rem] md:rounded-[4rem] overflow-hidden relative shadow-2xl">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/10 blur-[100px] rounded-full" />

          <div className="relative z-10 px-8 py-20 md:py-32 lg:px-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column: Huge Impact Statement */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: appleEase }}
              >
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter mb-8 text-white leading-[1.1]">
                  Business Is Not About Complexity — <br />
                  <span className="text-emerald-400">It’s About Results.</span>
                </h2>
                <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-lg">
                  The digital world is crowded with promises, complex jargon, and
                  hidden costs. But business success comes down to one thing:{" "}
                  <strong className="text-white font-medium">Being seen when it matters most.</strong>
                </p>
              </motion.div>

              {/* Right Column: Refined List */}
              <div className="flex flex-col gap-6 lg:pl-10 lg:border-l border-white/10">
                {[
                  { title: "Elite Expertise", text: "Professionals connected to Spotify and Swish." },
                  { title: "Global Reach", text: "Operations from London to Singapore." },
                  { title: "Bulletproof Security", text: "Heavily structured and vetted agreements." },
                  { title: "Real Growth", text: "Focused entirely on visibility and revenue." },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: appleEase }}
                    className="flex gap-5 items-start p-6 rounded-3xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20 text-emerald-400">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-xl mb-1">{item.title}</h4>
                      <p className="text-white/60 font-light leading-relaxed">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Subtle Sign-off */}
            <motion.div 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 1.5, delay: 0.5 }} 
              className="mt-24 pt-10 border-t border-white/10 text-center"
            >
              <p className="text-2xl md:text-3xl text-emerald-100/40 font-light tracking-widest uppercase">
               - CYouMedia is the only option -
              </p>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
