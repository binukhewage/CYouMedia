"use client";

import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function Contact() {
  return (
    <div className="bg-[#050505] min-h-screen text-white py-32 px-6">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center mb-16">
          <span className="text-teal-500 font-mono tracking-tighter uppercase text-sm">/ Contact</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mt-6 mb-6">Get In Touch</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Ready to turn complexity into visibility? Let's start with a simple handshake.
          </p>
        </div>

        <div className="relative group">
          {/* Background Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
          
          <form className="relative bg-[#0a0a0a] border border-white/10 p-10 md:p-12 rounded-[2.5rem] space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-teal-500 ml-1">Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-teal-500/50 transition-all focus:bg-white/[0.08]" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-teal-500 ml-1">Company</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-teal-500/50 transition-all focus:bg-white/[0.08]" placeholder="Your Business" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-widest text-teal-500 ml-1">Email Address</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-teal-500/50 transition-all focus:bg-white/[0.08]" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-widest text-teal-500 ml-1">How can we help?</label>
              <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-teal-500/50 transition-all focus:bg-white/[0.08] resize-none" placeholder="Tell us about your goals..."></textarea>
            </div>
            <button type="button" className="w-full bg-teal-500 hover:bg-teal-400 text-black font-bold text-lg py-5 rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(20,184,166,0.2)]">
              Initiate Partnership
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}