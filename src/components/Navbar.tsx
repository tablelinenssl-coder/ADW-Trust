import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, Sprout } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Initiatives', href: '#initiatives' },
  { label: 'Impact', href: '#impact' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'initiatives', 'impact', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 py-3.5 px-4 sm:px-6 lg:px-8 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
          className="flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-brand-border shadow-sm group"
        >
          <div className="w-8 h-8 rounded-full bg-brand-emerald text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <Sprout className="w-4 h-4" />
          </div>
          <div className="text-sm font-extrabold text-brand-charcoal tracking-tight">
            ADW <span className="text-brand-emerald font-semibold">Trust</span>
          </div>
        </a>

        {/* Center Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/95 backdrop-blur-md px-2 py-1.5 rounded-full border border-brand-border shadow-sm">
          {navLinks.map((link) => {
            const isCurrent = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  isCurrent
                    ? 'bg-brand-forest text-white shadow-sm'
                    : 'text-brand-text hover:text-brand-charcoal hover:bg-brand-sand/50'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA -> Contact Us */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => scrollTo('#contact')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-forest hover:bg-brand-onyx text-white text-xs font-bold shadow-md hover:shadow-lg transition-all"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Us</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 rounded-full bg-white/95 backdrop-blur-md border border-brand-border flex items-center justify-center text-brand-charcoal shadow-sm"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 max-w-sm mx-auto bg-white rounded-3xl p-4 border border-brand-border shadow-2xl space-y-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="block px-4 py-2.5 rounded-xl text-sm font-bold text-brand-charcoal hover:bg-brand-sand/50"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-brand-border">
              <button
                onClick={() => scrollTo('#contact')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-brand-forest text-white text-xs font-bold shadow-md"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Us</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
