"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Pre smo imali problem sa pacijentima iz dijaspore koji zovu kasno uveče. Otkako smo ubacili ovaj sistem, imamo prosečno 4-5 zakazanih pregleda svake noći. Ljudi zaista misle da imamo radnika u trećoj smeni.",
      author: "Nemanja Ristić",
      clinic: "Menadžer klinike, Beograd",
      stars: 5
    },
    {
      text: "Bila sam jako skeptična jer naši ljudi ne vole botove. Međutim, podešeno je tako dobro da ni stariji pacijenti ne provale. Odgovara na pitanja o cenama preciznije nego moja bivša asistentkinja na pultu.",
      author: "Dr Jelena Matić",
      clinic: "Vlasnica ordinacije, Novi Sad",
      stars: 5
    },
    {
      text: "Nema više onog haosa ponedeljkom ujutru sa 15 propuštenih poziva na WhatsApp-u i gomile nepročitanih poruka. Sve nas čeka sortirano i zakazano u kalendaru. Investicija nam se isplatila u prva tri dana.",
      author: "Dr Stefan Kovačević",
      clinic: "Stomatolog, Banja Luka",
      stars: 5
    }
  ];

  return (
    <section className="py-24 relative bg-brand-darker/30 border-t border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">Klinike koje su prestale da propuštaju pacijente</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card rounded-2xl p-8 relative flex flex-col h-full"
            >
              <div className="text-brand-gold flex gap-1 mb-6">
                {[...Array(t.stars)].map((_, idx) => (
                  <svg key={idx} width="20" height="20" viewBox="0 0 24 24" fill="#C9A84C" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ))}
              </div>
              <p className="text-brand-light/90 italic leading-relaxed mb-8 flex-grow">
                &quot;{t.text}&quot;
              </p>
              <div>
                <h4 className="font-bold text-brand-gold">{t.author}</h4>
                <p className="text-sm text-brand-gray-light opacity-70">{t.clinic}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
