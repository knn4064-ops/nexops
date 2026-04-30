"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Da li AI razume balkanske dijalekte i jezike?",
    answer: "Da. AI je obučen na srpskom, hrvatskom i bosanskom jeziku, uključujući lokalne izraze. Možete ga konfigurisati za konkretan region i dijalekt."
  },
  {
    question: "Koji sistemi za zakazivanje su podržani?",
    answer: "Integrišemo se sa Google Calendar, Calendly, Doctoralia i većinom lokalnih sistema. Ako koristite drugi sistem, javite nam se — verovatno možemo da to rešimo."
  },
  {
    question: "Koliko traje implementacija?",
    answer: "Standardna implementacija traje 48 sati od potpisivanja ugovora. Nije vam potrebno tehničko znanje — sve uradimo mi."
  },
  {
    question: "Šta se dešava ako AI ne zna odgovor na pitanje?",
    answer: "AI eskalira upit — obaveštava vas putem SMS-a ili email-a da postoji pitanje koje zahteva vaš lični odgovor."
  },
  {
    question: "Da li je ovo GDPR usklađeno?",
    answer: "Apsolutno. Svi podaci se čuvaju na EU serverima, nema deljenja sa trećim stranama, a pacijenti uvek mogu da zatraže brisanje podataka."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">Često postavljana pitanja</h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl overflow-hidden border border-brand-gray/50 hover:border-brand-gold/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
              >
                <span className="font-bold pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-brand-gold transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180" : ""}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-brand-gray-light opacity-80 leading-relaxed border-t border-brand-gray/30 pt-4 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
