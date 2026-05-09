"use client";

import { motion } from "framer-motion";
import { Mail, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: <Mail size={28} />,
    title: "The Partnership Email",
    description: "Send us a quick email. We'll map out the exact app structure and revenue potential for your specific audience.",
    tag: "No commitment"
  },
  {
    icon: <Code2 size={28} />,
    title: "We Build Everything",
    description: "You don't lift a finger. We design, code, and deploy a premium iOS and Android app that matches your brand.",
    tag: "Under 2 Weeks"
  },
  {
    icon: <Rocket size={28} />,
    title: "Launch & Profit",
    description: "Go live. Your audience buys subscriptions, courses, or exclusive content directly from your own platform.",
    tag: "Start Earning"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative bg-white/[0.02]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
          >
            From Idea to Income in <span className="text-gradient">3 Steps</span>
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2 z-0">
            <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-primary to-pink"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.3 }}
                className="relative"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-background border border-white/20 flex items-center justify-center font-display font-bold text-xl text-white/50 z-20">
                  {i + 1}
                </div>

                <div className="glass-card rounded-3xl p-8 h-full flex flex-col items-center text-center hover:border-primary/30 transition-colors group">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-pink/20 flex items-center justify-center mb-8 text-primary group-hover:scale-110 group-hover:text-pink transition-all duration-300">
                    {step.icon}
                  </div>
                  
                  <span className="text-xs font-bold tracking-wider text-accent uppercase mb-4 px-3 py-1 rounded-full bg-accent/10">
                    {step.tag}
                  </span>
                  
                  <h3 className="text-2xl font-display font-bold mb-4">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
