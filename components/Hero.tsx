"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "./icons";
import { useEffect, useState } from "react";

const words = "Stop Renting Your Audience. Start Owning It.".split(" ");

export default function Hero() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 50;
    const duration = 2000;
    const incrementTime = duration / end;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-blob pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-pink/20 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[150px] mix-blend-screen animate-blob animation-delay-4000 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Column - Content */}
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-white/10 mb-8"
          >
            <span className="text-xl">🚀</span>
            <span className="text-sm font-medium text-white/90">
              Trusted by <span className="text-accent font-bold">{count}+</span> creators
            </span>
          </motion.div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[86px] font-extrabold leading-[1.1] tracking-tight mb-8">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={word === "Revenue" || word === "Machine" ? "text-gradient inline-block mr-[0.3em]" : "inline-block mr-[0.3em]"}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed"
          >
            We build premium, custom apps for creators. You focus on making content and growing your brand — we handle all the tech, deployment, and monetization.
          </motion.p>


          {/* Social Proof Row */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex items-center gap-6 text-white/50"
          >
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-sm border border-white/10">
                <InstagramIcon size={20} />
              </div>
              {/* Note: using Twitter icon as placeholder for TikTok since lucide doesn't have tiktok natively without custom SVG, will use a custom SVG for Tiktok */}
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-sm border border-white/10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-sm border border-white/10">
                <YoutubeIcon size={20} />
              </div>
            </div>
            <div className="h-8 w-px bg-white/10"></div>
            <p className="text-sm font-medium text-white/70">10M+ audience reached</p>
          </motion.div>

        </div>

        {/* Right Column - Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 w-full max-w-md lg:max-w-none relative hidden md:block"
        >
          <div className="relative w-[320px] h-[650px] mx-auto rounded-[3rem] border-[8px] border-[#1e1e2d] bg-[#0A0A0F] shadow-2xl overflow-hidden glass-card before:absolute before:top-0 before:inset-x-1/4 before:h-6 before:bg-[#1e1e2d] before:rounded-b-3xl before:z-20">
            {/* Phone Screen Mockup Content */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-pink/10 flex flex-col p-6 pt-12 animate-float">
               <div className="flex items-center gap-4 mb-8">
                 <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-primary to-pink p-1">
                   <div className="w-full h-full rounded-full bg-[#1e1e2d] border-2 border-background"></div>
                 </div>
                 <div>
                   <div className="w-32 h-4 bg-white/20 rounded mb-2"></div>
                   <div className="w-20 h-3 bg-white/10 rounded"></div>
                 </div>
               </div>
               
               <div className="w-full h-40 rounded-2xl bg-white/5 border border-white/10 mb-4 p-4 flex flex-col justify-end">
                 <div className="w-24 h-6 bg-accent/20 rounded mb-2"></div>
                 <div className="w-16 h-4 bg-white/20 rounded"></div>
               </div>
               
               <div className="flex gap-4 mb-4">
                 <div className="flex-1 h-24 rounded-2xl bg-white/5 border border-white/10"></div>
                 <div className="flex-1 h-24 rounded-2xl bg-white/5 border border-white/10"></div>
               </div>

               <div className="mt-auto w-full h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                  <div className="w-1/2 h-4 bg-white/20 rounded"></div>
               </div>
            </div>
          </div>
          
          {/* Floating UI Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 -left-12 glass-card p-4 rounded-2xl flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
              <span className="text-green-500 font-bold">€</span>
            </div>
            <div>
              <p className="text-xs text-white/50">New Subscriber</p>
              <p className="font-bold text-white">+€19.99</p>
            </div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-32 -right-12 glass-card p-4 rounded-2xl flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <span className="text-accent font-bold">★</span>
            </div>
            <div>
              <p className="text-xs text-white/50">App Rating</p>
              <p className="font-bold text-white">4.9 / 5.0</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={24} className="text-white/30" />
      </motion.div>
    </section>
  );
}
