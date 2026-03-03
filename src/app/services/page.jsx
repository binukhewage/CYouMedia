"use client";

import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function Services() {
  return (
    <section className="bg-[#050505] text-white py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-24"
        >
          <span className="text-teal-500 font-mono tracking-tighter uppercase text-sm">/ Our Purpose</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mt-6 mb-8">What We Do</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We ensure business growth through <span className="text-white">two distinct, high-impact paths.</span>
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          
          {/* Service 1: Strategic Expansion */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative p-10 bg-white/[0.02] border border-white/10 rounded-[2.5rem] hover:border-teal-500/30 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/5 blur-[80px] group-hover:bg-teal-500/10 transition-all" />
            <h2 className="text-3xl font-bold text-white mb-6 relative z-10">Strategic Expansion</h2>
            <p className="text-gray-400 text-lg leading-relaxed relative z-10">
              We create the legal and commercial foundations necessary for growth. Built on the same frameworks that scaled global giants, ensuring a secure environment where your business can thrive.
            </p>
          </motion.div>

          {/* Service 2: Digital Presence */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative p-10 bg-white/[0.02] border border-teal-500/20 rounded-[2.5rem] shadow-[0_0_40px_rgba(20,184,166,0.03)] hover:border-teal-500/50 transition-all duration-500"
          >
            <div className="absolute top-0 left-0 w-40 h-40 bg-teal-500/10 blur-[80px] group-hover:bg-teal-500/20 transition-all" />
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-white mb-6 relative z-10">
              Digital Presence
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed relative z-10">
              Powered by our proprietary AI platform, we ensure you are found. Developed by experts with backgrounds from pioneering projects like <span className="text-teal-400/80">Swish, App ID, and Spotify.</span>
            </p>
          </motion.div>
        </div>

        {/* The Choice - Bottom Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-12 md:p-20 border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent text-center rounded-[3rem] overflow-hidden"
        >
          {/* Decorative Glow */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-40 bg-teal-500/10 blur-[100px] -z-10" />
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">The Choice is Clear.</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            When you realize that your growth requires both the world’s best technology and the world’s simplest execution, you realize there is no alternative. <span className="text-white">CYouMedia is the only option.</span>
          </p>
          
          <div className="text-2xl md:text-3xl font-medium text-teal-500 italic tracking-tight">
            "If you exist, you are seen."
          </div>
        </motion.div>

      </div>
    </section>
  );
}