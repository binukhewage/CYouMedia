"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer'; 
import { careersData } from '@/data/careers'; // Adjust path based on where you saved the data file

export default function CareersList() {
  return (
    <div className="bg-[#050505] text-white selection:bg-teal-500/30 min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow overflow-hidden pt-32 pb-24">
        {/* Header */}
        <section className="relative px-6 pb-20 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-500/10 blur-[120px] rounded-full -z-10" />
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Join the <span className="text-teal-500">Mission.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Help us build the future of AI-powered digital growth.
          </motion.p>
        </section>

        {/* Job Banners List */}
        <section className="max-w-4xl mx-auto px-6">
          <div className="mb-8 border-b border-white/10 pb-4 flex justify-between items-end">
            <h2 className="text-2xl font-bold">Open Positions</h2>
            <span className="text-teal-500 font-mono text-sm">{careersData.length} Available</span>
          </div>

          <div className="space-y-6">
            {careersData.map((job, index) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/careers/${job.id}`} className="block group">
                  <div className="bg-[#0a0a0a]/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-teal-500/50 hover:bg-[#0a0a0a] transition-all duration-300 relative overflow-hidden">
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 relative z-10">
                      <div>
                        <div className="flex gap-3 mb-3">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full">{job.department}</span>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-white/5 px-3 py-1 rounded-full">{job.location}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors">{job.title}</h3>
                        <p className="text-gray-500 mt-2 max-w-xl line-clamp-2">{job.shortDescription}</p>
                      </div>
                      
                      <div className="shrink-0 flex items-center text-sm font-bold uppercase tracking-widest text-white group-hover:text-teal-400 transition-colors">
                        View Role <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}