import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="relative z-10 w-full bg-white px-6 md:px-16 lg:px-24 py-16"
      style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Top divider */}
        <div className="h-px bg-[#020617]/08 mb-14" />

        {/* Main row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="text-2xl font-bold tracking-[-0.03em] text-[#020617]">
              CYouMedia.
            </Link>
            <p className="text-[#020617]/40 text-sm font-light max-w-[220px] leading-relaxed">
              Strategic growth & digital visibility, worldwide.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex flex-wrap gap-x-16 gap-y-10">

            <div className="flex flex-col gap-3">
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#020617]/30 mb-1">Services</p>
              {[
                ["Strategic Expansion", "/services/strategic-expansion"],
                ["Digital Presence",    "/services/digital-presence"   ],
                ["Proprietary AI",      "/services/proprietary-ai"     ],
              ].map(([label, href]) => (
                <Link key={label} href={href} className="text-sm text-[#020617]/50 hover:text-[#020617] font-light transition-colors duration-200">
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#020617]/30 mb-1">Company</p>
              {[
                ["Who We Are",   "/about"       ],
                ["Global Reach", "/global-reach"],
                ["Careers",      "/careers"     ],
                ["Contact",      "/contact"     ],
              ].map(([label, href]) => (
                <Link key={label} href={href} className="text-sm text-[#020617]/50 hover:text-[#020617] font-light transition-colors duration-200">
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#020617]/30 mb-1">Connect</p>
              {[
                ["LinkedIn",      "#"],
                ["Twitter / X",   "#"],
                ["Client Portal", "#"],
              ].map(([label, href]) => (
                <a key={label} href={href} className="text-sm text-[#020617]/50 hover:text-[#020617] font-light transition-colors duration-200">
                  {label}
                </a>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="h-px bg-[#020617]/08 mt-14 mb-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#020617]/30">
            © {new Date().getFullYear()} CYouMedia · All Rights Reserved
          </p>
          <p className="text-[10px] italic font-light text-[#020617]/30">
            Syns du, finns du.
          </p>
        </div>

      </div>
    </footer>
  );
}