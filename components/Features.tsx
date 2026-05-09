"use client";

import { motion } from "framer-motion";
import { Smartphone, Wallet, BarChart3, Link2, Rocket, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Smartphone className="text-primary" size={32} />,
    title: "Custom Branded App",
    description: "Fully custom iOS & Android apps that match your exact brand aesthetic."
  },
  {
    icon: <Wallet className="text-accent" size={32} />,
    title: "Built-in Monetization",
    description: "Sell subscriptions, courses, communities, and exclusive premium content."
  },
  {
    icon: <BarChart3 className="text-secondary" size={32} />,
    title: "Creator Dashboard",
    description: "Track earnings, user growth, and deep analytics in one simple dashboard."
  },
  {
    icon: <Link2 className="text-pink" size={32} />,
    title: "All Platforms Connected",
    description: "Seamless integrations with Instagram, TikTok, YouTube, and your existing tools."
  },
  {
    icon: <Rocket className="text-primary" size={32} />,
    title: "Launch Strategy Included",
    description: "We don't just build it. We give you the exact playbook to market it to your audience."
  },
  {
    icon: <ShieldCheck className="text-green-400" size={32} />,
    title: "Ongoing Support & Updates",
    description: "We handle bug fixes, iOS/Android updates, and server maintenance."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function Features() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
          >
            Everything You Need. <br className="hidden md:block" />
            <span className="text-white/40">Nothing You Don&apos;t.</span>
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={itemVariants}>
              <div className="glass-card rounded-3xl p-8 h-full glass-card-hover group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
