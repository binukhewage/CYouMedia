"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer'; 
import { careersData } from '@/data/careers';

export default function JobDetails({ params }) {
  // Unwrap params using React.use() for Next.js 15+ compatibility
  const resolvedParams = use(params);
  
  // Find the specific job from our data array based on the URL parameter
  const job = careersData.find(j => j.id === resolvedParams.id);

  if (!job) {
    return notFound(); // Shows 404 if the URL doesn't match an ID in careers.js
  }

  return (
    <div className="bg-[#050505] text-white selection:bg-teal-500/30 min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow overflow-hidden pt-32 pb-24">
        <section className="max-w-4xl mx-auto px-6 relative">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/5 blur-[100px] rounded-full -z-10" />

          {/* Back Button */}
          <Link href="/careers" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-white mb-10 transition-colors">
            ← Back to Careers
          </Link>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-b border-white/10 pb-10 mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{job.title}</h1>
            <div className="flex flex-wrap gap-3 text-xs font-bold uppercase tracking-widest text-gray-400">
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">{job.location}</span>
              <span className="px-4 py-2 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20">{job.type}</span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">{job.salary}</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-12 text-gray-300"
          >
            {/* About */}
            <div>
              <h2 className="text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full" /> About The Role
              </h2>
              <p className="leading-relaxed text-lg">{job.about}</p>
            </div>

            {/* Grid Layout for Responsibilities & Requirements */}
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-sm font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full" /> What You'll Do
                </h2>
                <ul className="space-y-4 pl-5 border-l border-white/10">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="relative before:content-[''] before:absolute before:-left-[21px] before:top-2.5 before:w-2 before:h-[1px] before:bg-teal-500">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-sm font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full" /> Who You Are
                </h2>
                <ul className="space-y-4 pl-5 border-l border-white/10">
                  {job.requirements.map((item, i) => (
                    <li key={i} className="relative before:content-[''] before:absolute before:-left-[21px] before:top-2.5 before:w-2 before:h-[1px] before:bg-teal-500">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Benefits & CTA */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-10 mt-12">
              <h2 className="text-sm font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full" /> What We Offer
              </h2>
              <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                {job.benefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="text-teal-500">✓</span> {item}
                  </li>
                ))}
              </ul>
              
              <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 items-center">
                <Link href="mailto:careers@cyoumedia.com" className="w-full sm:w-auto px-8 py-4 bg-teal-500 text-black rounded-full text-sm font-bold uppercase tracking-widest hover:bg-teal-400 transition-all text-center">
                  Email Application
                </Link>
                <Link href="https://wa.me/94700000000" target="_blank" className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all text-center">
                  WhatsApp Us
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}