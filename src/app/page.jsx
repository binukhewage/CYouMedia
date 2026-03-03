"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function Home() {
  return (
    <div className="bg-[#050505] text-white selection:bg-teal-500/30">
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center items-center px-6">
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src="/bg.png"
              alt="Background Visual"
              fill
              priority
              className="object-cover opacity-40" // Lower opacity so text pops
            />
            {/* Gradient Overlay to blend image into the black background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/20 to-[#050505]" />
          </div>

          {/* Existing Ambient Background Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-500/10 blur-[120px] rounded-full -z-10" />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-6xl mx-auto text-center relative z-10" // Added relative z-10
          >
            {/* ... rest of your motion.div content stays the same ... */}
            <motion.span
              variants={fadeInUp}
              className="inline-block py-1 px-4 rounded-full border border-teal-500/30 text-teal-400 text-sm font-medium mb-6 backdrop-blur-sm"
            >
              Next-Gen SEO Solutions
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.95] mb-8"
            >
              CYouMedia <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500">
                Growth-Led Impact.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              We prioritize technical excellence and content that
              converts—driving revenue for brands that refuse to settle for page
              two.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-5 justify-center"
            >
              <Link
                href="/contact"
                className="px-10 py-4 bg-teal-500 text-black rounded-full font-bold hover:bg-teal-400 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(20,184,166,0.3)]"
              >
                Start a conversation
              </Link>
              <Link
                href="/audit"
                className="px-10 py-4 border border-white/10 bg-white/5 backdrop-blur-md rounded-full font-bold hover:bg-white/10 transition-all"
              >
                Claim free audit
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Bridge Phrase with Reveal */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-5xl mx-auto px-6 py-32 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight">
            We assist brands grow, <br />
            <span className="text-teal-500">
              in revenue and digital presence.
            </span>
          </h2>
          <div className="w-20 h-[1px] bg-teal-500/50 mx-auto mt-12" />
        </motion.section>

        {/* Capabilities - Grid with Hover Effects */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-teal-500 font-mono tracking-tighter uppercase text-sm">
                / Capabilities
              </span>
              <h3 className="text-4xl md:text-5xl font-bold mt-6 mb-8">
                Engineering Connection in an Era of Noise.
              </h3>
              <p className="text-gray-400 text-xl leading-relaxed">
                When we optimize, we don't just chase metrics. We build a
                genuine bridge between your brand's unique value and the
                audience searching for it.
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  title: "Organic Search & Content",
                  desc: "Topic clusters and search-first content that leaves the competition stunned.",
                },
                {
                  title: "Technical SEO & Performance",
                  desc: "Fast, indexable, and smooth architectures built for modern search engines.",
                },
                {
                  title: "Revenue-Driven Marketing",
                  desc: "Sales funnels and product visibility designed for high-ticket B2B acquisition.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-teal-500/50 transition-all duration-500"
                >
                  <h4 className="text-2xl font-semibold group-hover:text-teal-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Big Stat Section */}
        <section className="py-40 bg-[#0a0a0a] relative overflow-hidden">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center relative z-10"
          >
            <div className="text-[12rem] md:text-[18rem] font-bold leading-none tracking-tighter text-white/[0.03] absolute inset-0 flex items-center justify-center -z-10">
              RESULTS
            </div>
            <h2 className="text-8xl md:text-9xl font-bold text-teal-500 tracking-tighter">
              $8.2M+
            </h2>
            <p className="text-2xl text-gray-400 mt-4 font-light">
              Direct Revenue Generated for Clients
            </p>
          </motion.div>
        </section>

        {/* Testimonials */}
        <section className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Alex Rivera",
                role: "CMO, TechFlow",
                quote:
                  "Had a great outcome. They broke down the most important SEO features for our business seamlessly.",
              },
              {
                name: "Sarah Chen",
                role: "Founder, Lumos",
                quote:
                  "A product perfectly aligned with our organizational goals. Never in a hurry to finalize.",
              },
              {
                name: "Maya Fernando",
                role: "Director, Elegant Events",
                quote:
                  "Absolutely thrilled with the organic visibility. They truly took the time to understand our vision.",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[2rem] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10"
              >
                <div className="text-teal-500 text-4xl mb-6">“</div>
                <p className="text-lg text-gray-300 italic mb-8">{t.quote}</p>
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-sm text-gray-500 tracking-widest uppercase mt-1">
                    {t.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 py-40 bg-gradient-to-t from-teal-500/10 to-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-bold mb-12"
            >
              Ready to go <br />{" "}
              <span className="text-teal-500">Extraordinary?</span>
            </motion.h2>
            <Link
              href="/contact"
              className="inline-block px-12 py-5 bg-white text-black rounded-full text-xl font-bold hover:scale-105 transition-transform"
            >
              Let's Talk Shop
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
