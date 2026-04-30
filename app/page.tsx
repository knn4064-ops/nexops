import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import HowItWorks from "@/components/HowItWorks";
import DemoSection from "@/components/DemoSection";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <DemoSection />
      <Testimonials />
      <Pricing />
      <FAQ />
      
      {/* FINAL CTA SECTION */}
      <section className="py-24 relative overflow-hidden bg-brand-darker border-t border-brand-gray/30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-brand-gold/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-glow">Vaš AI recepcionar vas čeka.</h2>
          <p className="text-xl text-brand-gray-light opacity-80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Zakažite besplatan 30-minutni demo poziv. Pokazaćemo vam tačno kako bi radio za vašu ordinaciju — bez obaveza.
          </p>
          <a 
            href="https://calendly.com/nikola-nexops/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block shimmer-btn bg-brand-gold text-brand-dark px-10 py-5 rounded-md font-bold text-xl hover:bg-brand-goldHover transition-colors shadow-[0_0_30px_rgba(201,168,76,0.3)]"
          >
            Zakažite Demo Poziv Sada <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
