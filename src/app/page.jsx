"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1];

const Divider = () => (
  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2, ease }}
    className="h-px bg-[#020617]/12 origin-left"
  />
);

const Label = ({ children, light = false }) => (
  <span
    className={`inline-block text-[10px] font-bold tracking-[0.28em] uppercase mb-5 ${
      light ? "text-[#020617]/30" : "text-[#020617]/40"
    }`}
  >
    {children}
  </span>
);

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <div
      className="relative overflow-x-hidden"
      style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
    >

      {/* ── Fixed global background — visible from section 2 onwards ── */}
      <div className="fixed inset-0 z-[-1] bg-[#89CFF1]">
        <Image
          src="/bgnew.png"
          alt=""
          fill
          className="object-cover opacity-40 mix-blend-overlay"
          priority
        />
      </div>

      {/* ════════════════════════════════════════
          1 ▸ HERO — full-bleed video with blue overlay
      ════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center justify-center"
      >
        {/* Parallax video */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <video
            autoPlay loop muted playsInline
            className="w-full h-full object-cover"
          >
            <source src="/wm1.mp4" type="video/mp4" />
          </video>

          {/* Same blue overlay as the rest of the page */}
          <div className="absolute inset-0 bg-[#89CFF1]/55" />

          {/* Smooth gradient fade into the page bg color at the bottom */}
          <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-[#89CFF1] to-transparent" />
        </motion.div>

        {/* Hero text */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-20 text-center px-6 max-w-5xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="text-white text-[10px] font-bold tracking-[0.32em] uppercase mb-8"
          >
            Strategic Growth & Digital Visibility
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.12, ease }}
            className="text-[clamp(3rem,8vw,7rem)] font-bold tracking-[-0.03em] leading-[1.02] text-white mb-8"
          >
            Your Business<br />
            <em className="not-italic italic font-light text-white">Visible Worldwide</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28, ease }}
            className="text-white text-lg md:text-xl font-light max-w-xl mx-auto mb-12 leading-relaxed"
          >
            We help businesses become visible, connect globally, and grow through
            strategic expansion and digital presence.
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <div className="w-px h-14 bg-[#020617]/25 relative overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
              className="absolute inset-x-0 h-1/2 bg-[#020617]/40"
            />
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════
          2 ▸ WHO WE ARE
      ════════════════════════════════════════ */}
      <section className="relative z-10 py-32 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <Divider />
          <div className="pt-20 grid lg:grid-cols-2 gap-20 items-start">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease }}
            >
              <Label>Who We Are</Label>
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/businessppl.png" alt="Business People" fill className="object-cover" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: 0.15, ease }}
              className="lg:pt-14 flex flex-col gap-8"
            >
              <h2 className="text-[clamp(2.8rem,5vw,5rem)] font-bold tracking-[-0.03em] leading-[1.04] text-[#020617]">
                Business<br />
                <em className="not-italic italic font-light text-[#020617]/45">People First.</em>
              </h2>

              <div className="space-y-6 text-[#020617]/60 text-xl font-light leading-relaxed">
                <p>
                  We are a strategic partner combining business development with digital
                  visibility. We understand the journey from a simple idea to a goal of
                  10 million and beyond.
                </p>
                <p>
                  Real success is built on clear agreements, strong structure, and the
                  right connections — not on technical jargon.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-4">
                {[
                  { n: "6+",   label: "Global Hubs"   },
                  { n: "10M+", label: "Growth Target"  },
                  { n: "100%", label: "Results Driven" },
                ].map(({ n, label }) => (
                  <div key={label} className="bg-white/50 backdrop-blur-md border border-white/70 rounded-2xl p-5 text-center">
                    <p className="text-3xl font-bold text-[#020617] tracking-tight">{n}</p>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#020617]/40 mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          3 ▸ GLOBAL REACH
      ════════════════════════════════════════ */}
      <section className="relative z-10 py-32 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <Divider />
          <div className="pt-20">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
              <div>
                <Label>Our Presence</Label>
                <h2 className="text-[clamp(2.5rem,4.5vw,4.5rem)] font-bold tracking-[-0.03em] text-[#020617] leading-[1.04]">
                  Global Reach<br />
                  <em className="not-italic italic font-light text-[#020617]/45">& Expertise</em>
                </h2>
              </div>
              <p className="text-[#020617]/55 text-lg font-light leading-relaxed max-w-md lg:text-right">
                We bridge markets and create opportunities across borders, helping
                businesses expand, collaborate, and grow internationally.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "Sweden",       code: "se", role: "European HQ"   },
                { name: "London",       code: "gb", role: "Global Finance" },
                { name: "South Africa", code: "za", role: "African Hub"    },
                { name: "USA",          code: "us", role: "North America"  },
                { name: "Singapore",    code: "sg", role: "APAC Hub"       },
                { name: "Sri Lanka",    code: "lk", role: "Tech & Ops"     },
              ].map((loc, i) => (
                <motion.div
                  key={loc.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: i * 0.08, ease }}
                  className="group flex items-center gap-4 bg-white/50 hover:bg-white/75 backdrop-blur-md border border-white/70 rounded-2xl px-5 py-4 transition-all duration-300 cursor-default"
                >
                  <div className="w-11 h-11 rounded-full overflow-hidden border border-[#020617]/10 shadow-sm shrink-0">
                    <img src={`https://flagcdn.com/w80/${loc.code}.png`} alt={loc.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-[#020617] font-semibold text-base leading-tight">{loc.name}</p>
                    <p className="text-[#020617]/40 text-[10px] font-bold uppercase tracking-[0.15em] mt-0.5">{loc.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          4 ▸ WHAT WE DO
      ════════════════════════════════════════ */}
      <section className="relative z-10 py-32 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <Divider />
          <div className="pt-20 mb-16">
            <Label>Our Expertise</Label>
            <h2 className="text-[clamp(2.5rem,4.5vw,4.5rem)] font-bold tracking-[-0.03em] text-[#020617] leading-[1.04]">
              The Service<br />
              <em className="not-italic italic font-light text-[#020617]/45">Core</em>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">

            {/* Card A — Strategic Expansion */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease }}
              className="group bg-white/55 hover:bg-white/70 backdrop-blur-xl border border-white/70 rounded-3xl p-10 md:p-14 flex flex-col gap-10 transition-all duration-500"
            >
              <div>
                <h3 className="text-4xl font-bold tracking-[-0.03em] text-[#020617] leading-tight mb-5">
                  Strategic<br />Expansion
                </h3>
                <p className="text-[#020617]/55 text-lg font-light leading-relaxed">
                  We create the legal and commercial foundations necessary for growth.
                  Through structured agreements and strategic partnerships, we prepare
                  businesses to expand confidently into new markets.
                </p>
              </div>
              <p className="text-[#020617]/35 text-sm font-medium">
                Clear agreements · Strong structure · Right connections
              </p>
            </motion.div>

            {/* Card B — Digital Presence */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: 0.15, ease }}
              className="group bg-[#89CFF1]/30 hover:bg-[#89CFF1]/40 backdrop-blur-xl border border-[#89CFF1]/50 rounded-3xl p-10 md:p-14 flex flex-col gap-10 relative overflow-hidden transition-all duration-500"
            >
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/30 blur-[80px] rounded-full pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-4xl font-bold tracking-[-0.03em] text-[#020617] leading-tight mb-5">
                  Digital<br />Presence
                </h3>
                <p className="text-[#020617]/60 text-lg font-light leading-relaxed mb-8">
                  Powered by our proprietary AI platform, CYouMedia ensures your
                  business is found by your customers — every time they search.
                </p>
                <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm border border-white/70 rounded-2xl px-6 py-4">
                  <div className="w-2 h-2 rounded-full bg-[#020617]/40 animate-pulse shrink-0" />
                  <p className="text-[#020617]/65 text-sm font-light">
                    We transform complexity into one outcome:{" "}
                    <strong className="text-[#020617] font-semibold">Visibility.</strong>
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          5 ▸ HOW WE OPERATE
      ════════════════════════════════════════ */}
      <section className="relative z-10 py-32 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <Divider />
          <div className="pt-20 grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-36">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease }}
              >
                <Label>Our Workflow</Label>
                <h2 className="text-[clamp(2.4rem,4vw,4rem)] font-bold tracking-[-0.03em] text-[#020617] leading-[1.05] mb-6">
                  How We<br />
                  <em className="not-italic italic font-light text-[#020617]/40">Operate.</em>
                </h2>
                <p className="text-[#020617]/50 text-lg font-light leading-relaxed">
                  The foundational principles that dictate every partnership,
                  project, and strategy we build.
                </p>
              </motion.div>
            </div>

            <div className="lg:col-span-8 space-y-4">
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
              ].map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.8, delay: i * 0.12, ease }}
                  className="group grid grid-cols-[48px_1fr] gap-8 items-start bg-white/50 hover:bg-white/70 backdrop-blur-xl border border-white/70 rounded-2xl p-8 md:p-10 transition-all duration-300"
                >
                  <span className="text-3xl font-bold text-[#020617]/15 group-hover:text-[#020617]/25 transition-colors font-mono pt-1 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-[#020617] tracking-tight mb-3">{p.title}</h3>
                    <p className="text-[#020617]/55 text-lg font-light leading-relaxed">{p.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          6 ▸ CLOSING CTA
      ════════════════════════════════════════ */}
      <section className="relative z-10 py-16 px-4 md:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease }}
          className="max-w-[1400px] mx-auto bg-white/50 rounded-[3rem] overflow-hidden relative shadow-2xl backdrop-blur-xl border border-white/60"
        >
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#89CFF1]/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#89CFF1]/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 px-8 py-20 md:py-32 lg:px-24">
            <div className="grid lg:grid-cols-2 gap-20 items-start">

              <div>
                <Label>Why CYouMedia</Label>
                <h2 className="text-[clamp(2.5rem,5vw,5.5rem)] font-bold tracking-[-0.03em] text-[#020617] leading-[1.04] mb-8">
                  Business Is Not<br />
                  About Complexity —<br />
                  <em className="not-italic italic font-light text-[#89CFF1]">
                    It's About Results.
                  </em>
                </h2>
                <p className="text-[#020617]/60 text-xl font-light leading-relaxed max-w-md mb-12">
                  The digital world is crowded with promises and jargon. But success
                  comes down to one thing:{" "}
                  <strong className="text-[#020617] font-medium">
                    being seen when it matters most.
                  </strong>
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-[#020617] text-white text-sm font-bold tracking-wide px-8 py-4 rounded-full hover:bg-[#020617]/90 transition-all hover:scale-105"
                >
                  Start Your Growth
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="space-y-3 lg:pt-6">
                {[
                  { title: "Elite Expertise",     text: "Professionals connected to Spotify and Swish." },
                  { title: "Global Reach",         text: "Operations from London to Singapore."          },
                  { title: "Bulletproof Security", text: "Heavily structured and vetted agreements."     },
                  { title: "Real Growth",          text: "Focused entirely on visibility and revenue."   },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease }}
                    className="flex items-center gap-5 bg-white/60 hover:bg-white border border-[#020617]/10 rounded-2xl px-7 py-5 transition-colors backdrop-blur-md"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#89CFF1]/20 border border-[#89CFF1]/30 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-[#020617]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#020617] font-semibold text-base">{item.title}</p>
                      <p className="text-[#020617]/60 text-sm font-light mt-0.5">{item.text}</p>
                    </div>
                  </motion.div>
                ))}

                <div className="pt-6 border-t border-[#020617]/10 text-center">
                  <p className="text-[#020617]/30 text-[10px] font-bold tracking-[0.3em] uppercase">
                    — CYouMedia is the only option —
                  </p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}