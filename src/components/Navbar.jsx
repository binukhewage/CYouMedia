"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function FloatingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Services", "About", "Careers"];

  const pillStyle =
    "bg-white backdrop-blur-2xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]";

  const textMain = "text-[#020617]";
  const textMuted = "text-[#020617]/50 hover:text-[#89cff1]";
  const borderDivider = "border-[#020617]/10";

  const menuBtnStyle =
    "text-[#020617] bg-white/80 backdrop-blur-md border border-white shadow-sm hover:bg-white";

  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-6 left-0 w-full px-4 md:px-8 z-[100] flex justify-between items-start pointer-events-none"
    >
      {/* ================= LEFT PILL ================= */}
      <div
        className={`pointer-events-auto flex items-center py-3.5 px-7 rounded-full gap-6 ${pillStyle}`}
      >
        {/* Logo */}
        <Link
          href="/"
          className={`text-sm lg:text-base font-extrabold tracking-tighter flex items-center gap-1 ${textMain}`}
        >
          <span>
            <span className="text-[#89cff1]">CYou</span>
            Media<span className="text-[#89cff1]">.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div
          className={`hidden md:flex items-center space-x-6 border-l pl-6 ${borderDivider}`}
        >
          {navLinks.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className={`text-[10px] lg:text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${textMuted}`}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* ================= RIGHT PILL ================= */}
      <div className="pointer-events-auto relative flex flex-col items-end">
        <div className="flex items-center gap-3">
          {/* CTA */}
          <Link
            href="/contact"
            className="hidden sm:block text-[10px] lg:text-xs font-black uppercase tracking-widest px-8 py-3.5 rounded-full bg-[#89cff1] text-[#020617] hover:bg-[#a6e0f7] transition-all shadow-[0_4px_20px_rgba(137,207,241,0.2)] hover:shadow-[0_6px_25px_rgba(137,207,241,0.4)] hover:-translate-y-0.5"
          >
            Get in Touch
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-3.5 focus:outline-none rounded-full ${menuBtnStyle}`}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5 flex flex-col items-end">
              <span
                className={`block h-0.5 bg-current transition-transform origin-right ${
                  isOpen ? "w-5 -rotate-45 -translate-y-[1px]" : "w-5"
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-opacity ${
                  isOpen ? "w-4 opacity-0" : "w-4"
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-transform origin-right ${
                  isOpen ? "w-5 rotate-45 translate-y-[1px]" : "w-5"
                }`}
              />
            </div>
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 10 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full right-0 mt-3 w-64 p-6 rounded-[2rem] bg-white/95 backdrop-blur-3xl border border-white shadow-2xl z-[101] md:hidden"
            >
              <div className="flex flex-col gap-5 text-right">
                {navLinks.map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-bold text-[#020617] hover:text-[#89cff1] transition-colors"
                  >
                    {item}
                  </Link>
                ))}

                <hr className={`my-2 ${borderDivider}`} />

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="font-bold text-sm uppercase tracking-widest text-[#89cff1]"
                >
                  Start a project →
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}