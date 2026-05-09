"use client";

import { motion, useInView } from "framer-motion";
import { User, TrendingUp } from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "./icons";
import { useRef, useEffect, useState } from "react";

// Custom hook for animated counter
function AnimatedCounter({ from, to, duration, inView }: { from: number, to: number, duration: number, inView: boolean }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!inView) return;
    let start = from;
    const increment = (to - from) / (duration * 60);
    
    const animate = () => {
      start += increment;
      if (start >= to) {
        setCount(to);
      } else {
        setCount(Math.ceil(start));
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [inView, from, to, duration]);

  return <span>{count.toLocaleString()}</span>;
}

const cases = [
  {
    handle: "@fitwithlara",
    platform: <InstagramIcon size={18} />,
    followers: "45k",
    revenue: 2400,
    quote: "from her fitness app",
    color: "from-pink-500/20 to-purple-500/20"
  },
  {
    handle: "@chefmarcotv",
    platform: <YoutubeIcon size={18} />,
    followers: "89k",
    revenue: 1800,
    quote: "from recipe membership",
    color: "from-red-500/20 to-orange-500/20"
  },
  {
    handle: "@stylebynikolina",
    // TikTok icon SVG placeholder
    platform: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>,
    followers: "32k",
    revenue: 3100,
    quote: "from style community app",
    color: "from-cyan-500/20 to-blue-500/20"
  }
];

export default function CaseStudies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" className="py-24 md:py-32 relative bg-white/[0.02]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
          >
            Real Creators. <span className="text-gradient">Real Revenue.</span>
          </motion.h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {cases.map((study, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="glass-card rounded-3xl p-1 relative overflow-hidden group">
                <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="bg-background/90 backdrop-blur-sm rounded-[22px] p-8 relative z-10 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                        <User size={24} className="text-white/50" />
                      </div>
                      <div>
                        <h4 className="font-bold font-display">{study.handle}</h4>
                        <div className="flex items-center gap-2 text-sm text-white/50">
                          {study.platform}
                          <span>{study.followers} followers</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <p className="text-sm text-white/60 mb-2 flex items-center gap-2 uppercase tracking-wider font-bold">
                      <TrendingUp size={16} className="text-accent" />
                      Monthly Revenue
                    </p>
                    <div className="text-5xl font-display font-extrabold text-accent mb-4 tracking-tighter">
                      €<AnimatedCounter from={0} to={study.revenue} duration={2} inView={inView} />
                      <span className="text-xl text-white/40 font-sans tracking-normal font-medium">/mo</span>
                    </div>
                    <p className="text-lg text-white/80 font-medium">
                      &quot;{study.quote}&quot;
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
