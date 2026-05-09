"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Launchpad",
    description: "For creators ready to start monetizing their audience.",
    price: { monthly: "499", annual: "399" },
    features: [
      "Custom Branded App (iOS/Android)",
      "Standard UI Templates",
      "Up to 1,000 Active Users",
      "1 Monetization Model",
      "Email Support"
    ],
    popular: false
  },
  {
    name: "Creator Pro",
    description: "For serious monetization and growing communities.",
    price: { monthly: "999", annual: "799" },
    features: [
      "Everything in Launchpad",
      "Custom UI & Animations",
      "Up to 10,000 Active Users",
      "Unlimited Monetization Models",
      "Creator Dashboard Analytics",
      "Priority 24/7 Support",
      "Launch Strategy Call"
    ],
    popular: true
  },
  {
    name: "Agency Partner",
    description: "Full white-glove service for massive audiences.",
    price: { monthly: "Custom", annual: "Custom" },
    features: [
      "Everything in Creator Pro",
      "Unlimited Active Users",
      "Custom Feature Development",
      "Dedicated App Manager",
      "Revenue Optimization Strategy",
      "Zero Revenue Share"
    ],
    popular: false
  }
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

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
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/60"
          >
            No hidden fees. No surprises. Just results.
          </motion.p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-16">
          <div className="glass-card p-1.5 rounded-full flex items-center relative">
            <button
              onClick={() => setIsAnnual(false)}
              className={cn(
                "relative z-10 px-8 py-3 rounded-full font-medium transition-colors duration-300",
                !isAnnual ? "text-white" : "text-white/50 hover:text-white/80"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={cn(
                "relative z-10 px-8 py-3 rounded-full font-medium transition-colors duration-300 flex items-center gap-2",
                isAnnual ? "text-white" : "text-white/50 hover:text-white/80"
              )}
            >
              Annual
              <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full border border-accent/20">
                Save 20%
              </span>
            </button>
            
            {/* Animated Pill Background */}
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="absolute top-1.5 bottom-1.5 bg-white/10 rounded-full"
              initial={false}
              animate={{
                left: isAnnual ? "50%" : "0.375rem",
                width: isAnnual ? "calc(50% - 0.375rem)" : "calc(50% - 0.375rem)"
              }}
            />
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                "glass-card rounded-[2.5rem] p-8 flex flex-col relative",
                plan.popular ? "border-primary/50 shadow-[0_0_30px_rgba(124,58,237,0.15)] md:-translate-y-4" : "border-white/10"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-pink text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg border border-white/20 z-10">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
              <p className="text-white/60 text-sm mb-8 h-10">{plan.description}</p>

              <div className="mb-8">
                {plan.price.monthly === "Custom" ? (
                  <div className="text-5xl font-display font-extrabold text-white">
                    Custom
                  </div>
                ) : (
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-display font-extrabold text-white">
                      €{isAnnual ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span className="text-white/40 mb-1">/mo</span>
                  </div>
                )}
                {isAnnual && plan.price.monthly !== "Custom" && (
                  <div className="text-sm text-accent mt-2 font-medium">
                    Billed annually
                  </div>
                )}
              </div>

              <button className={cn(
                "w-full py-4 rounded-full font-bold transition-all duration-200 mb-8 flex items-center justify-center gap-2 group",
                plan.popular 
                  ? "bg-white text-background hover:scale-[1.02] hover:shadow-xl" 
                  : "bg-white/5 border border-white/10 hover:bg-white/10 text-white"
              )}>
                {plan.price.monthly === "Custom" ? "Contact Us" : "Start Your App"}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="space-y-4 mt-auto">
                <p className="text-sm font-medium text-white/80 uppercase tracking-wider mb-4">What&apos;s included</p>
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-full bg-primary/20 p-1">
                      <Check size={12} className="text-primary" />
                    </div>
                    <span className="text-sm text-white/70">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
