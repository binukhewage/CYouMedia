"use client";

import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function About() {
  return (
    <div className="bg-[#050505] text-white py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-24"
        >
          <span className="text-teal-500 font-mono tracking-tighter uppercase text-sm">/ Our Identity</span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mt-6 mb-8">Who We Are</h1>
          <div className="w-20 h-[1px] bg-teal-500/50 mx-auto" />
        </motion.div>

        {/* Core Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">The Business Core</h2>
            <p className="text-gray-400 text-xl leading-relaxed mb-8">
              We are not just coders or technicians—we are <span className="text-white italic">businesspeople.</span> 
              We understand the journey from a simple idea to a goal of 10 million and beyond. 
            </p>
            <p className="text-gray-500 text-lg leading-relaxed">
              We know that the path to success is built on clear agreements and the right connections. Every strategy we deploy is designed to move the needle on your bottom line.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-12 border border-white/10 bg-white/[0.02] rounded-[3rem]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 blur-[80px]" />
            <h3 className="text-2xl font-semibold text-teal-400 mb-8 tracking-widest uppercase text-sm">Global Reach</h3>
            <div className="flex flex-wrap gap-4">
              {['Sweden', 'London', 'South Africa', 'USA', 'Singapore', 'Sri Lanka'].map(country => (
                <span key={country} className="px-6 py-3 border border-white/10 text-white text-sm font-medium rounded-full bg-white/5 hover:bg-teal-500 hover:text-black transition-all cursor-default">
                  {country}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-16">What We Stand For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Simplicity Over Complexity", desc: "We never use 'tech-speak'. If the customer doesn't understand the value, we have failed. We deliver with the simplicity of a handshake." },
              { title: "Security Through Structure", desc: "All our collaborations rest on a solid legal foundation. We protect the interests of ourselves and our partners. Nothing is left to chance." },
              { title: "Focus on Results", desc: "We measure success in actual figures and millions of revenue, not in technical reports you can’t read." }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-10 rounded-[2rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] hover:border-teal-500/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-500 font-bold mb-6 group-hover:scale-110 transition-transform">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}