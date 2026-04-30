"use client";

import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section className="py-24 relative border-t border-brand-gold/10" id="cene">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">Transparentne cijene, mjerljivi rezultati</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto relative"
        >
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-brand-gold/20 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="glass-card rounded-[2rem] p-8 md:p-12 relative border-brand-gold/30 shadow-[0_0_50px_rgba(201,168,76,0.1)]">
            <div className="absolute top-0 right-10 -translate-y-1/2">
              <span className="bg-brand-gold text-brand-dark text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
                Najpopularnije
              </span>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between mb-8 border-b border-brand-gray pb-8">
              <div>
                <h3 className="font-display text-2xl font-bold mb-2">Setup & Integracija</h3>
                <p className="text-brand-gray-light opacity-80 text-sm">Jednokratno — uključuje integraciju, obuku AI-a i testiranje</p>
              </div>
              <div className="text-3xl font-bold text-brand-gold text-glow">990€</div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between mb-12">
              <div>
                <h3 className="font-display text-2xl font-bold mb-2">Mesečno održavanje</h3>
                <p className="text-brand-gray-light opacity-80 text-sm">Hosting, podrška, mesečni izveštaji i optimizacija</p>
              </div>
              <div className="text-3xl font-bold">
                289€<span className="text-lg text-brand-gray-light opacity-70 font-normal">/mes</span>
              </div>
            </div>

            <div className="bg-brand-dark/50 border border-brand-gold/30 rounded-xl p-6 mb-8 flex items-start gap-4">
              <div className="text-2xl">🛡️</div>
              <div>
                <h4 className="font-bold text-brand-gold mb-1">30-dnevna garancija povrata novca</h4>
                <p className="text-sm text-brand-light/80 leading-relaxed">
                  Ako AI ne zakaže minimum 10 novih pacijenata u prvom mesecu, vraćamo vam pun iznos. Bez pitanja.
                </p>
              </div>
            </div>

            <a 
              href="https://calendly.com/nikola-nexops/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-4 rounded-md font-bold text-lg text-brand-dark bg-brand-gold hover:bg-brand-goldHover transition-colors shimmer-btn mb-4"
            >
              Počnite danas — Zakažite Demo
            </a>
            <p className="text-center text-xs text-brand-gray-light opacity-60">
              Bez godišnjih ugovora. Otkažite u bilo kom trenutku.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
