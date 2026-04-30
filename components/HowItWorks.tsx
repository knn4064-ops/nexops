"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      title: "Korak 1 — Pacijent piše",
      description: "Pacijent pošalje poruku u bilo koje doba dana ili noći.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
      )
    },
    {
      title: "Korak 2 — AI odgovara i kvalifikuje",
      description: "Naš AI odmah odgovara na lokalnom jeziku, prikuplja informacije i nudi slobodne termine.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="4"/></svg>
      )
    },
    {
      title: "Korak 3 — Termin je zakazan",
      description: "Termin se automatski pojavljuje u vašem Google Calendar-u ili sistemu za zakazivanje.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M9 16l2 2 4-4"/></svg>
      )
    }
  ];

  return (
    <section className="py-24 relative bg-brand-darker/50 border-t border-brand-gray/30" id="kako-radi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">Jednostavno kao WhatsApp</h2>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-24 right-24 h-[2px] bg-brand-gray">
            <motion.div 
              className="h-full bg-brand-gold shadow-[0_0_10px_#C9A84C]"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.3 }}
                className="relative flex flex-col items-center text-center z-10"
              >
                <div className="w-24 h-24 rounded-full bg-brand-dark border-2 border-brand-gray flex items-center justify-center mb-6 shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-brand-gold/5 blur-xl"></div>
                  {step.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-brand-gray-light opacity-80 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
