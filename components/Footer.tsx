import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-darker border-t border-brand-gray/30 pt-16 pb-8" id="kontakt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="font-display text-2xl font-bold tracking-tighter block mb-4">
              NexOps <span className="text-brand-gold">AI</span>
            </Link>
            <p className="text-brand-gray-light text-sm opacity-70">
              AI recepcionari za moderne stomatološke ordinacije. Prestanite da gubite pacijente van radnog vremena.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-display text-lg font-bold mb-2">Navigacija</h4>
            <a href="#kako-radi" className="text-sm opacity-70 hover:opacity-100 hover:text-brand-gold transition-colors">Kako radi</a>
            <a href="#cene" className="text-sm opacity-70 hover:opacity-100 hover:text-brand-gold transition-colors">Cene</a>
            <a href="#faq" className="text-sm opacity-70 hover:opacity-100 hover:text-brand-gold transition-colors">Česta pitanja</a>
          </div>

          {/* Contact */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-display text-lg font-bold mb-2">Kontakt</h4>
            <a href="mailto:nikola@nexops.agency" className="text-sm opacity-70 hover:opacity-100 hover:text-brand-gold transition-colors flex items-center gap-2">
              📧 nikola@nexops.agency
            </a>
            <a href="https://wa.me/381628325230" target="_blank" rel="noopener noreferrer" className="text-sm opacity-70 hover:opacity-100 hover:text-brand-gold transition-colors flex items-center gap-2">
              📱 WhatsApp: +381 62 832 5230
            </a>
            <p className="text-sm opacity-70 flex items-center gap-2 mt-2">
              📍 Srbija | Hrvatska | BiH
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-gray/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-50">
            © 2026 NexOps AI. Sva prava zadržana.
          </p>
          <div className="flex gap-4 text-xs opacity-50">
            <Link href="#" className="hover:opacity-100 transition-opacity">Politika privatnosti</Link>
            <span>|</span>
            <Link href="#" className="hover:opacity-100 transition-opacity">GDPR</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
