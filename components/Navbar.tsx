"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="font-display text-2xl font-bold tracking-tighter">
              NexOps <span className="text-brand-gold">AI</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#kako-radi" className="hover:text-brand-gold transition-colors text-sm font-medium">Kako radi</a>
              <a href="#cene" className="hover:text-brand-gold transition-colors text-sm font-medium">Cene</a>
              <a href="#kontakt" className="hover:text-brand-gold transition-colors text-sm font-medium">Kontakt</a>
              <a 
                href="https://calendly.com/nikola-nexops/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 px-5 py-2.5 rounded-md text-sm font-medium"
              >
                Zakažite Demo
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-light hover:text-brand-gold focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-t border-brand-gray/50"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#kako-radi" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-brand-gold">Kako radi</a>
            <a href="#cene" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-brand-gold">Cene</a>
            <a href="#kontakt" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-brand-gold">Kontakt</a>
            <a 
              href="https://calendly.com/nikola-nexops/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-center bg-brand-gold text-brand-dark px-3 py-3 rounded-md text-base font-bold"
            >
              Zakažite Demo
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
