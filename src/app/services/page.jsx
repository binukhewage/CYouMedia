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

// Consistent Wavy Line Component using #89cff1
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
          stroke="#89cff1"
          strokeOpacity="0.1"
          strokeWidth="1"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        <motion.path
          d="M50,0 C90,25 10,75 50,100"
          stroke="url(#blueGradient)"
          strokeWidth="3"
          fill="none"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }}
        />
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

export default function ServicesPage() {
  const scrollRef = useRef(null);

  const services = [
    {
      id: "01",
      title: "Market Expansion Strategy",
      description:
        "We build the commercial bridge. From legal structuring to cross-border agreements, we pave the way for your business to enter new territories with absolute security.",
      tags: ["Structural Integrity", "Legal Frameworks", "Partnerships"],
      image: "/s.png",
      dark: false,
    },
    {
      id: "02",
      title: "Digital Presence",
      description:
        "Leveraging our proprietary AI engine, we transform your digital footprint. Our goal: ensuring that when a customer searches, they find you first. Period.",
      tags: ["Proprietary AI", "SEO Dominance", "Global Visibility"],
      image: "/s1.png",
      dark: true,
    },
    {
      id: "03",
      title: "High-Level Networking",
      description:
        "Access our elite network across London, Singapore, and Sweden. We connect you with stakeholders that open doors usually closed to the public.",
      tags: ["Executive Access", "Global Hubs", "Capital Relations"],
      image: "/s3.png",
      dark: false,
    },
  ];

  return (
    <div className="bg-[#020617] text-[#1d1d1f] font-sans selection:bg-[#89cff1]/30 overflow-hidden">
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 bg-[#8ACFF2] text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/bg.png"
            alt="Atmosphere"
            fill
            className="object-cover mix-blend-overlay"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: appleEase }}
          >
            <motion.span
              variants={fadeInUp}
              className="text-[#89cff1] text-xs font-bold uppercase tracking-[0.3em] mb-6 block"
            >
              Our Expertise
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.9] mb-8"
            >
              From Vision <br />{" "}
              <span className="text-[#89cff1] italic">to Global Impact.</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed"
            >
              We provide the legal structure, the AI technology, and the global
              connections. You focus on the vision.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= 2. THE SERVICES LOOP ================= */}
      <section
        ref={scrollRef}
        className="relative bg-white rounded-t-[3rem] lg:rounded-t-[5rem] -mt-12 z-20 overflow-hidden"
      >
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`py-24 md:py-32 px-6 relative overflow-hidden ${service.dark ? "bg-[#020617] text-white" : "bg-white text-[#1d1d1f]"}`}
          >
            {/* Wavy Line Threading */}
            {index !== services.length - 1 && (
              <WavyScrollLine targetRef={scrollRef} />
            )}

            <div className="max-w-7xl mx-auto relative z-10">
              <div
                className={`grid lg:grid-cols-12 gap-16 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Content Block */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: appleEase }}
                  className={`lg:col-span-6 ${index % 2 !== 0 ? "lg:order-2" : ""}`}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-[#89cff1] font-mono text-xl">
                      [{service.id}]
                    </span>
                    <div
                      className={`h-px w-12 ${service.dark ? "bg-white/20" : "bg-black/10"}`}
                    />
                  </div>

                  <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-8 leading-tight">
                    {service.title}
                  </h2>
                  <p
                    className={`text-xl md:text-2xl font-light leading-relaxed mb-10 ${service.dark ? "text-white/60" : "text-gray-500"}`}
                  >
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border ${service.dark ? "border-white/10 bg-white/5 text-[#89cff1]" : "border-blue-100 bg-blue-50/50 text-[#3ea6d6]"}`}
                      >
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
                  className={`lg:col-span-6 ${index % 2 !== 0 ? "lg:order-1" : ""}`}
                >
                  <div
                    className={`relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl group border ${
                      service.dark ? "border-white/5" : "border-gray-100"
                    }`}
                  >
                    {/* Ambient Glow for Dark Sections using #89cff1 */}
                    {service.dark && (
                      <div className="absolute top-0 right-0 w-64 h-64 bg-[#89cff1]/10 blur-[80px] rounded-full z-10" />
                    )}

                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/20 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-700" />

                    <span className="absolute top-8 left-8 text-[#89cff1]/30 font-mono text-2xl font-bold z-20">
                      {service.id}
                    </span>
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