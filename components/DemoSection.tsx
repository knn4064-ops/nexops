"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DemoSection() {
  const demos = [
    {
      title: "Implanti i protetika",
      description: "AI agent specijalizovan za upite o dentalnim implantima, cijenama i zakazivanju.",
      link: "/demo/implanti",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2c2 0 4 1.5 4 4 0 2-1 4-2 6-1 2-2 4-2 6v2c0 1.1-.9 2-2 2s-2-.9-2-2v-2c0-2-1-4-2-6-1-2-2-4-2-6 0-2.5 2-4 4-4z"/><path d="M12 18v2"/></svg>
      )
    },
    {
      title: "Estetska stomatologija",
      description: "AI agent za beljenje zuba, ljuspice (veneers) i osmeh dizajn.",
      link: "/demo/estetika",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
      )
    },
    {
      title: "Opšta stomatologija",
      description: "AI agent za preglede, plombe, ortodonciju i hitne slučajeve.",
      link: "/demo/opsta",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg>
      )
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden border-t border-brand-gold/10" id="demo">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-gold/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">Isprobajte AI agenta uživo</h2>
          <p className="text-lg text-brand-gray-light opacity-80 max-w-2xl mx-auto">
            Izaberite tip vaše ordinacije i razgovarajte sa AI agentom koji bi radio za vas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {demos.map((demo, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card rounded-2xl p-8 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-brand-gold/10 text-brand-gold rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-gold/20 transition-all duration-300">
                {demo.icon}
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">{demo.title}</h3>
              <p className="text-brand-gray-light opacity-80 mb-8 flex-grow">
                {demo.description}
              </p>
              <Link 
                href={demo.link}
                className="w-full py-4 rounded-md font-bold text-brand-dark bg-brand-gold hover:bg-brand-goldHover transition-colors shimmer-btn"
              >
                Isprobajte Demo <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
