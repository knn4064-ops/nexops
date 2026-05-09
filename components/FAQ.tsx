"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Do I need any tech skills?",
    answer: "No. None. Zero. We handle 100% of the design, development, deployment, and ongoing maintenance. You just focus on creating content and marketing to your audience."
  },
  {
    question: "How long to build my app?",
    answer: "Typically 4–6 weeks from our kickoff call to your app being live on the iOS App Store and Google Play Store. Complex custom features may take slightly longer."
  },
  {
    question: "What if I'm under 10k followers?",
    answer: "We work with creators who have 1k+ highly engaged followers. It's about engagement, not just sheer numbers. A loyal audience of 2,000 can generate significant revenue with the right app."
  },
  {
    question: "Which platforms do you support?",
    answer: "Our apps are native for iOS and Android. They integrate seamlessly with your existing platforms like Instagram, TikTok, YouTube, and X."
  },
  {
    question: "How does the partnership model work?",
    answer: "Your app, your brand. Model saradnje dogovaramo individualno na osnovu tvojih ciljeva i potencijala za rast. Naš cilj je da uskladimo naš uspeh sa tvojim."
  },
  {
    question: "What kind of app will I get?",
    answer: "It depends on your niche! Fitness creators get workout and diet tracking apps. Food creators get recipe and meal planning apps. Educators get course and community apps. It's fully custom."
  },
  {
    question: "Do you offer a strategy session?",
    answer: "Yes. Send us an email and we'll map out exactly what your app would look like and its revenue potential. No commitment required."
  },
  {
    question: "How do I get started?",
    answer: "Simply send an email to andrijana@nexops.agency. We'll discuss your brand, your audience, and show you exactly how we can turn them into a predictable revenue stream."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 relative bg-white/[0.02]">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
          >
            Got <span className="text-gradient">Questions?</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={cn(
                "glass-card rounded-2xl overflow-hidden transition-colors duration-300",
                openIndex === i ? "border-primary/50 bg-white/[0.08]" : "border-white/10 hover:border-white/20 hover:bg-white/5"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex items-center justify-between w-full p-6 text-left"
              >
                <span className="text-lg font-medium text-white/90 pr-8">{faq.question}</span>
                <div className={cn(
                  "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                  openIndex === i ? "bg-primary text-white" : "bg-white/10 text-white/50"
                )}>
                  {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-white/60 leading-relaxed border-t border-white/5 pt-4">
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
