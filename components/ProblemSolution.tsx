"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";

const problems = [
  "Relying on sponsorships that dry up",
  "No real asset that works while you sleep",
  "No idea where to start with tech"
];

const solutions = [
  "Predictable monthly revenue from your own app",
  "A digital product your audience pays for daily",
  "We handle 100% of tech. You just show up."
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function ProblemSolution() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
          >
            Your audience is worth <br/>
            <span className="text-gradient">more than brand deals</span>
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 relative"
        >
          {problems.map((problem, i) => (
            <motion.div key={i} variants={itemVariants} className="relative group">
              <div className="glass-card rounded-3xl p-8 h-full flex flex-col border border-red-500/10 group-hover:border-red-500/30 transition-colors bg-gradient-to-b from-red-500/5 to-transparent">
                <div className="flex items-start gap-4 mb-12 opacity-70">
                  <XCircle className="text-red-500 shrink-0 mt-1" />
                  <p className="text-lg text-white/80">{problem}</p>
                </div>

                <div className="mt-auto relative z-10">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 md:translate-x-0 md:-right-4 md:left-auto md:-top-16 md:rotate-90 bg-background rounded-full p-2 border border-white/10 z-20 shadow-xl">
                     <ArrowRight className="text-primary" />
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 to-pink/10 rounded-2xl p-6 border border-primary/20 backdrop-blur-xl relative overflow-hidden group-hover:border-primary/40 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="flex items-start gap-4 relative z-10">
                      <CheckCircle2 className="text-primary shrink-0 mt-1" />
                      <p className="text-lg font-medium text-white">{solutions[i]}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
