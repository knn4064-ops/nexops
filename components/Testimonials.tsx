"use client";

import { motion } from "framer-motion";
import { Star, User } from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "./icons";
import { useState } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Fitness Influencer",
    niche: "Fitness Coach",
    followers: "120k",
    platform: <InstagramIcon size={16} />,
    quote: "NexOps literally changed my life. I went from praying for brand deals to making $15k a month from my own app. The team handled everything perfectly."
  },
  {
    name: "YouTube Chef",
    niche: "Food & Recipes",
    followers: "85k",
    platform: <YoutubeIcon size={16} />,
    quote: "I had no idea how to build an app. They took my vision and made it reality in 2 weeks. My community loves it and the revenue is over $12k monthly now."
  },
  {
    name: "Tech Reviewer",
    niche: "Gadget Reviews",
    followers: "200k",
    platform: <YoutubeIcon size={16} />,
    quote: "The tech stack they use is top-tier. My app generates $18k+ in subscription revenue, converting my viewers into paying members effortlessly."
  },
  {
    name: "Fashion Creator",
    niche: "Style & Beauty",
    followers: "55k",
    platform: <InstagramIcon size={16} />,
    quote: "I thought I needed a million followers. NexOps showed me how to monetize my 55k audience to reach $10k+ in monthly recurring revenue."
  },
  {
    name: "Music Educator",
    niche: "Guitar Lessons",
    followers: "92k",
    platform: <YoutubeIcon size={16} />,
    quote: "Selling courses through my own app instead of third-party platforms has boosted my monthly take-home pay to over $14k."
  }
];

export default function Testimonials() {
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate for infinite scroll
  const scrollItems = [...testimonials, ...testimonials];

  return (
    <section className="py-24 overflow-hidden relative">
      <div className="container mx-auto px-4 text-center mb-16 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold"
        >
          What <span className="text-gradient">Creators Say</span>
        </motion.h2>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="absolute top-0 left-0 bottom-0 w-32 md:w-64 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
        
        <div 
          className={cn(
            "flex gap-6 whitespace-nowrap items-center py-4",
            isHovered ? "animate-marquee-paused" : "animate-marquee"
          )}
          style={{ animationDuration: '60s' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {scrollItems.map((testimonial, i) => (
            <div 
              key={i} 
              className="glass-card rounded-3xl p-8 w-[400px] shrink-0 whitespace-normal hover:bg-white/10 transition-colors border border-white/5"
            >
              <div className="flex text-accent mb-6 gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-lg text-white/90 leading-relaxed mb-8 italic">
                &quot;{testimonial.quote}&quot;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                  <User size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-white font-display">{testimonial.name}</h4>
                  <div className="flex items-center gap-2 text-sm text-white/50">
                    <span className="text-primary">{testimonial.platform}</span>
                    <span>{testimonial.niche}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20"></span>
                    <span>{testimonial.followers}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute top-0 right-0 bottom-0 w-32 md:w-64 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
