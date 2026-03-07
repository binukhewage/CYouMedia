import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#031A17] border-t border-white/10 pt-24 overflow-hidden z-10 flex flex-col">
      
      {/* Subtle Ambient Emerald Glow centered in the background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Centered Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            {/* Logo matching the Navbar style */}
            <Link href="/" className="text-2xl font-bold tracking-tighter text-white mb-6 block">
              <span className="text-teal-500">CYou</span>Media<span className="text-teal-500">.</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-light">
              We are a strategic partner combining business development with digital visibility, creating opportunities across borders.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6 border-b border-white/10 pb-4 inline-block w-full sm:w-auto">
              Services
            </h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><Link href="/services/strategic-expansion" className="hover:text-emerald-400 transition-colors">Strategic Expansion</Link></li>
              <li><Link href="/services/digital-presence" className="hover:text-emerald-400 transition-colors">Digital Presence</Link></li>
              <li><Link href="/services/proprietary-ai" className="hover:text-emerald-400 transition-colors">Proprietary AI Platform</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6 border-b border-white/10 pb-4 inline-block w-full sm:w-auto">
              Company
            </h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors">Who We Are</Link></li>
              <li><Link href="/global-reach" className="hover:text-emerald-400 transition-colors">Global Reach</Link></li>
              <li><Link href="/careers" className="hover:text-emerald-400 transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6 border-b border-white/10 pb-4 inline-block w-full sm:w-auto">
              Connect
            </h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Client Portal</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">
            <span>© {new Date().getFullYear()} CYouMedia</span>
            <span className="w-1 h-1 bg-emerald-500/50 rounded-full" />
            <span>All Rights Reserved</span>
          </div>
          
          {/* Updated Locations matching your global reach section */}
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">
            {["Sweden", "London", "South Africa", "USA", "Singapore", "Sri Lanka"].map((city, i, arr) => (
              <div key={city} className="flex items-center gap-3 md:gap-4">
                <span className="hover:text-white transition-colors cursor-pointer">{city}</span>
                {i !== arr.length - 1 && <span className="text-emerald-500/50">•</span>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= MASSIVE WATERMARK ================= */}
      <div className="w-full flex justify-center items-end mt-12 md:mt-20 pointer-events-none select-none">
        {/* Viewport Width (vw) sizing ensures it perfectly spans the screen across all devices */}
        <h1 className="text-[16vw] lg:text-[13vw] font-black leading-[0.75] tracking-tighter text-white/[0.03] uppercase whitespace-nowrap">
          CYouMedia
        </h1>
      </div>
        
    </footer>
  );
}