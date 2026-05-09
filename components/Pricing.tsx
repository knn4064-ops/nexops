"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const plan = {
  name: "The NexOps Partnership",
  description: "A complete, high-performance ecosystem built exclusively for your brand and audience.",
  price: "Custom",
  features: [
    "Custom Branded App (iOS & Android)",
    "Premium UI Design & Smooth Animations",
    "Unlimited Active Users & Scalability",
    "Multi-Channel Monetization Systems",
    "Advanced Creator Analytics Dashboard",
    "Dedicated App & Growth Manager",
    "Launch & Scaling Strategy Implementation",
    "Priority Technical Support"
  ]
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
          >
            Flexible <span className="text-gradient">Partnership</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/60"
          >
            We don&apos;t just build apps; we build revenue machines. We tailor every partnership to your specific brand and goals.
          </motion.p>
        </div>

        {/* Single Pricing Card */}
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-[2.5rem] p-8 md:p-12 flex flex-col relative border-primary/30 shadow-[0_0_50px_rgba(124,58,237,0.1)]"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-pink text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg border border-white/20 z-10 uppercase tracking-widest">
              Limited Slots Available
            </div>

            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">{plan.name}</h3>
            <p className="text-white/60 text-center text-lg mb-10 leading-relaxed">{plan.description}</p>

            <div className="mb-10 text-center">
              <div className="text-6xl font-display font-extrabold text-white mb-2">
                Custom
              </div>
              <div className="text-base text-white/40 font-medium">
                Tailored Partnership Model
              </div>
            </div>

            <a 
              href="mailto:andrijana@nexops.agency"
              className="w-full py-5 rounded-full font-bold transition-all duration-300 mb-10 flex items-center justify-center gap-3 group text-center bg-white text-background hover:scale-[1.02] hover:shadow-2xl text-xl"
            >
              Get a Quote
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="space-y-5">
              <p className="text-sm font-bold text-white/80 uppercase tracking-widest mb-6 border-b border-white/5 pb-4">What&apos;s included in the partnership</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-primary/20 p-1 shrink-0">
                      <Check size={14} className="text-primary" />
                    </div>
                    <span className="text-white/70 leading-tight">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
