"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated Aurora Background */}
      <div className="absolute inset-0 bg-background z-0"></div>
      <div className="absolute inset-0 opacity-40 z-0 overflow-hidden mix-blend-screen">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary/40 blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] -right-[10%] w-[60%] h-[80%] rounded-full bg-pink/40 blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[80%] h-[60%] rounded-full bg-secondary/40 blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-card max-w-5xl mx-auto rounded-[3rem] p-8 md:p-16 text-center border-white/20 shadow-2xl relative overflow-hidden bg-white/5 backdrop-blur-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50"></div>
          
          <div className="relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold mb-6 tracking-tight"
            >
              Your App Could Be Live <br/>
              <span className="text-gradient">in 4 Weeks</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-12 font-medium"
            >
              Join 50+ creators who turned their following into a predictable revenue business.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-6"
            >
              <button className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-lg text-white transition-all duration-300 bg-white text-background rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
                <span className="flex items-center gap-2">
                  <Calendar size={20} />
                  Book Your Free Strategy Call
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <div className="flex items-center gap-2 text-sm font-medium text-white/50 bg-background/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                No commitment. No credit card. Just a 30-min call.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
