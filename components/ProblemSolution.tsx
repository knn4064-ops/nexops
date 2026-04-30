"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Counter({ end, duration = 2, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span className="font-display font-bold text-4xl text-brand-gold text-glow">{count}{suffix}</span>;
}

export default function ProblemSolution() {
  return (
    <section className="py-24 relative border-t border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">Koliko pacijenata gubite svaki mesec?</h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { end: 40, suffix: "%", text: "pacijenata zove van radnog vremena" },
            { end: 68, suffix: "%", text: "ne ostavi poruku ako niko ne odgovori" },
            { end: 3, suffix: "× više", text: "konverzija kada se odgovori u roku od 5 minuta" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card rounded-2xl p-8 text-center"
            >
              <div className="mb-2"><Counter end={stat.end} suffix={stat.suffix} /></div>
              <p className="text-brand-gray-light opacity-80">{stat.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-red-950/20 border border-red-500/20 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-6 text-red-500">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.6 3.4a1 1 0 0 0-.6 1.6l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 0 .6 1.6h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-7z"/><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/><line x1="14" y1="2" x2="22" y2="10"/><line x1="22" y1="2" x2="14" y2="10"/></svg>
            </div>
            <h3 className="font-display text-2xl font-bold mb-4 text-red-200">Problem</h3>
            <p className="text-red-100/70 leading-relaxed">
              Vaša ordinacija radi 8 sati. Pacijenti imaju pitanja 24 sata. Svaki propušten poziv = izgubljen pacijent i prihod.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-gold/10 border border-brand-gold/30 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 blur-2xl rounded-full"></div>
            <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mb-6 text-brand-gold">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>
            </div>
            <h3 className="font-display text-2xl font-bold mb-4 text-brand-gold text-glow">Rešenje</h3>
            <p className="text-brand-light/80 leading-relaxed">
              NexOps AI nikad ne spava. Odgovori u sekundi, kvalifikuje pacijenta, zakazuje termin — sve automatski, bez ijednog zaposlenog.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
