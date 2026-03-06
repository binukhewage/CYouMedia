"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react"; 
import { careersData } from '@/data/careers';

const appleEase = [0.16, 1, 0.3, 1];

export default function JobDetails({ params }) {
  const resolvedParams = use(params);
  const job = careersData.find(j => j.id === resolvedParams.id);

  if (!job) return notFound();

  return (
    <div className="bg-white text-[#1d1d1f] font-sans selection:bg-emerald-100 overflow-hidden min-h-screen">
      
      {/* ================= 1. THE HEADER (Pure Clarity) ================= */}
      <header className="pt-32 pb-16 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: appleEase }}
          >
            <Link href="/careers" className="text-gray-400 text-xs font-bold uppercase tracking-widest hover:text-emerald-600 transition-colors mb-12 block">
              ← All Positions
            </Link>
            
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 text-[#052824]">
              {job.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-400">
              <span className="flex items-center gap-2">
                <div className="w-1 h-1 bg-emerald-500 rounded-full" /> {job.location}
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1 h-1 bg-emerald-500 rounded-full" /> {job.type}
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1 h-1 bg-emerald-500 rounded-full" /> {job.salary}
              </span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* ================= 2. THE CONTENT (The Editorial Grid) ================= */}
      <main className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Sidebar info (Sticky) */}
            <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-12">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 mb-4">Department</h4>
                <p className="text-lg font-medium text-[#052824]">{job.department || "Operations"}</p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 mb-4">Posted</h4>
                <p className="text-lg font-medium text-[#052824]">March 2026</p>
              </div>
              <div className="pt-8 border-t border-gray-100">
                 <p className="text-sm text-gray-400 leading-relaxed">
                   CYouMedia is an equal opportunity employer. We value diversity and structured results.
                 </p>
              </div>
            </aside>

            {/* Main Job Body */}
            <div className="lg:col-span-8 space-y-24">
              
              {/* About Section */}
              <section>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-300 mb-8">The Role</h3>
                <p className="text-2xl md:text-3xl font-light leading-snug text-gray-600">
                  {job.about}
                </p>
              </section>

              {/* Responsibilities */}
              <section className="space-y-10">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-300">Responsibilities</h3>
                <div className="space-y-8">
                  {job.responsibilities.map((item, i) => (
                    <div key={i} className="group flex gap-6 items-start">
                      <span className="text-emerald-500 font-mono text-xs mt-1.5 opacity-50">0{i+1}</span>
                      <p className="text-lg text-gray-600 font-light leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Requirements */}
              <section className="space-y-10">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-300">Requirements</h3>
                <div className="space-y-8">
                  {job.requirements.map((item, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <span className="text-emerald-300 mt-1.5">•</span>
                      <p className="text-lg text-gray-600 font-light leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Minimal CTA */}
              <section className="pt-20 border-t border-gray-100">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="mailto:careers@cyoumedia.com" 
                    className="bg-[#052824] text-white px-10 py-5 rounded-full font-bold text-center hover:bg-emerald-900 transition-all active:scale-95"
                  >
                    Apply for this position
                  </Link>
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>

      {/* ================= 3. FOOTER (Subtle) ================= */}
      <footer className="py-20 bg-[#FAFAFA] border-t border-gray-100 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300">
          CYouMedia Architecture // 2026
        </p>
      </footer>
    </div>
  );
}