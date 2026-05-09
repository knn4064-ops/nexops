import Link from "next/link";
import { Mail } from "lucide-react";
import { InstagramIcon, YoutubeIcon, LinkedinIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Logo & Tagline */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-1 mb-4">
              <span className="font-display font-bold text-3xl tracking-tighter text-gradient">nexops</span>
              <span className="font-display font-bold text-3xl tracking-tighter text-white/40">.agency</span>
            </Link>
            <p className="text-white/60 max-w-sm mb-6">
              We build and monetize custom apps for micro-influencers. From idea to predictable revenue.
            </p>
            <a href="mailto:andrijana@nexops.agency" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              <Mail size={18} className="text-primary" />
              andrijana@nexops.agency
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#how-it-works" className="text-white/60 hover:text-white transition-colors">How it works</Link></li>
              <li><Link href="#results" className="text-white/60 hover:text-white transition-colors">Results</Link></li>
              <li><Link href="#pricing" className="text-white/60 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#faq" className="text-white/60 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-4 mb-8">
              <li><Link href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-primary transition-all border border-white/10">
                <InstagramIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-pink transition-all border border-white/10">
                {/* TikTok placeholder */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-red-500 transition-all border border-white/10">
                <YoutubeIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-blue-500 transition-all border border-white/10">
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-white/40">
          <p>© 2025 nexops.agency — Built for creators, by builders.</p>
          <p className="mt-2 md:mt-0">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
