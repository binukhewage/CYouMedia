import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-24 pb-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-white mb-6 block">
              <span className="text-teal-500">CYou</span>Media<span className="text-teal-500">.</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Performance-led SEO and technical marketing strategies rooted in growth and impact.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">Capabilities</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="/services/organic-search" className="hover:text-teal-400 transition-colors">Organic Search</Link></li>
              <li><Link href="/services/technical-seo" className="hover:text-teal-400 transition-colors">Technical SEO</Link></li>
              <li><Link href="/services/revenue-marketing" className="hover:text-teal-400 transition-colors">Revenue Marketing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="/approach" className="hover:text-teal-400 transition-colors">Our Approach</Link></li>
              <li><Link href="/work" className="hover:text-teal-400 transition-colors">Case Studies</Link></li>
              <li><Link href="/insights" className="hover:text-teal-400 transition-colors">Insights</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">Social</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-teal-400 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-600">
            <span>© {new Date().getFullYear()} CYouMedia</span>
            <span>All Rights Reserved</span>
          </div>
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-600">
            <span>Colombo</span>
            <span className="text-teal-500/50">•</span>
            <span>Singapore</span>
            <span className="text-teal-500/50">•</span>
            <span>Remote</span>
          </div>
        </div>
      </div>
    </footer>
  );
}