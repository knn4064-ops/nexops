"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Prestanite da gubite pacijente <br className="hidden md:block" />
              <span className="text-brand-gold text-glow">van radnog vremena.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg md:text-xl text-brand-gray-light opacity-80 mb-8 max-w-2xl leading-relaxed"
            >
              Naš AI Recepcionar odgovara na upite, kvalifikuje pacijente i zakazuje termine 24/7 — direktno preko WhatsApp-a. Dok vi spavate, vaš kalendar se puni.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="https://calendly.com/nikola-nexops/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-btn bg-brand-gold text-brand-dark px-8 py-4 rounded-md font-bold text-lg text-center hover:bg-brand-goldHover transition-colors flex items-center justify-center gap-2"
              >
                Zakažite Besplatan Demo <span aria-hidden="true">→</span>
              </a>
              <a 
                href="#kako-radi"
                className="px-8 py-4 rounded-md font-medium text-lg text-center text-brand-light hover:text-brand-gold border border-transparent hover:border-brand-gold/30 transition-all flex items-center justify-center gap-2"
              >
                Pogledajte kako radi <span aria-hidden="true">↓</span>
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-brand-gray-light opacity-70 font-medium"
            >
              <span className="flex items-center gap-1">🔒 GDPR usklađeno</span>
              <span className="hidden sm:block">|</span>
              <span className="flex items-center gap-1">⚡ Aktivacija za 48h</span>
              <span className="hidden sm:block">|</span>
              <span className="flex items-center gap-1">🇷🇸 🇭🇷 🇧🇦 Na našim jezicima</span>
            </motion.div>
          </div>

          {/* Hero Visual - CSS/SVG WhatsApp Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-gold/20 blur-[100px] rounded-full pointer-events-none"></div>
            
            {/* Phone Mockup Frame */}
            <div className="glass-card rounded-[2rem] p-4 relative mx-auto max-w-sm border-brand-gray border-[4px] shadow-2xl">
              {/* Screen */}
              <div className="bg-[#0b141a] rounded-xl overflow-hidden relative h-[500px] flex flex-col">
                {/* Header */}
                <div className="bg-[#202c33] px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center text-brand-dark font-bold font-display text-sm">
                    AI
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm">NexOps Asistent</h3>
                    <p className="text-brand-gold text-[10px]">Online</p>
                  </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 p-3 space-y-3 flex flex-col justify-end pb-4 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] relative">
                  <div className="absolute inset-0 bg-[#0b141a]/80"></div>
                  
                  {/* Messages */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="flex justify-end relative z-10"
                  >
                    <div className="bg-[#005c4b] text-white rounded-lg rounded-tr-none p-2.5 text-xs max-w-[85%] shadow-sm">
                      Da li imate slobodan termin u subotu?
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5 }}
                    className="flex justify-start relative z-10"
                  >
                    <div className="bg-[#202c33] text-[#e9edef] border border-brand-gold/20 rounded-lg rounded-tl-none p-2.5 text-xs max-w-[85%] shadow-sm">
                      Pozdrav! Naravno, imam slobodne termine u subotu u 10:00 i 14:00. Koji vam više odgovara?
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 4 }}
                    className="flex justify-end relative z-10"
                  >
                    <div className="bg-[#005c4b] text-white rounded-lg rounded-tr-none p-2.5 text-xs max-w-[85%] shadow-sm">
                      14:00 bi bilo idealno
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 5.5 }}
                    className="flex justify-start relative z-10"
                  >
                    <div className="bg-[#202c33] text-[#e9edef] border border-brand-gold/20 rounded-lg rounded-tl-none p-2.5 text-xs max-w-[85%] shadow-sm">
                      Odlično! Termin je zakazan za subotu u 14:00. Dobićete potvrdu SMS-om. ✅
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
