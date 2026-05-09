"use client";

const niches = [
  "Fitness", "Fashion", "Gaming", "Food", "Travel", 
  "Beauty", "Lifestyle", "Music", "Podcasts", "Comedy",
  "Education", "Finance", "Art", "Tech", "Sports"
];

// Duplicate for seamless infinite scrolling
const scrollItems = [...niches, ...niches];

export default function SocialProofBar() {
  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02] overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-8">
        <p className="text-sm font-medium text-white/50 tracking-widest uppercase">
          We build apps for creators in every niche
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        {/* Left Gradient Fade */}
        <div className="absolute top-0 left-0 bottom-0 w-32 z-10 bg-gradient-to-r from-background to-transparent"></div>
        
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {scrollItems.map((niche, index) => (
            <div key={index} className="flex items-center mx-8">
              <span className="text-2xl md:text-3xl font-display font-bold text-white/20 uppercase tracking-wider hover:text-white/40 transition-colors duration-300">
                {niche}
              </span>
              <div className="w-2 h-2 rounded-full bg-primary/50 ml-16 hidden md:block"></div>
            </div>
          ))}
        </div>

        {/* Right Gradient Fade */}
        <div className="absolute top-0 right-0 bottom-0 w-32 z-10 bg-gradient-to-l from-background to-transparent"></div>
      </div>
    </section>
  );
}
