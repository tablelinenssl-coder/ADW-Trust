import React from 'react';
import { Sprout, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-10 sm:py-12 border-t border-brand-border bg-white text-brand-charcoal" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-brand-emerald text-white flex items-center justify-center shadow-sm">
              <Sprout className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-extrabold text-brand-charcoal">
                ADW <span className="text-brand-emerald font-semibold">Trust</span>
              </div>
              <p className="text-xs text-brand-muted italic">
                &ldquo;Light the Vision with Our Kindness&rdquo;
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-6 text-xs font-bold text-brand-muted">
            <button onClick={() => scrollTo('#home')} className="hover:text-brand-forest transition-colors py-1">Home</button>
            <button onClick={() => scrollTo('#about')} className="hover:text-brand-forest transition-colors py-1">About</button>
            <button onClick={() => scrollTo('#initiatives')} className="hover:text-brand-forest transition-colors py-1">Initiatives</button>
            <button onClick={() => scrollTo('#impact')} className="hover:text-brand-forest transition-colors py-1">Impact</button>
            <button onClick={() => scrollTo('#contact')} className="hover:text-brand-forest transition-colors py-1">Contact</button>
          </div>

          {/* Direct Email CTA */}
          <div className="flex items-center gap-2">
            <a
              href="mailto:doreen.wissmann@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-canvas hover:bg-brand-sand border border-brand-border text-xs font-bold text-brand-charcoal transition-colors max-w-full truncate"
            >
              <Mail className="w-3.5 h-3.5 text-brand-emerald shrink-0" />
              <span className="truncate">doreen.wissmann@gmail.com</span>
            </a>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 border-t border-brand-border/60 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-brand-muted gap-2 text-center sm:text-left">
          <div>
            &copy; 2026 ADW Trust. All Rights Reserved.
          </div>
          <div>
            Founded by Madam Doreen Wissmann in loving memory of Wissmann &amp; Astrid Dymond.
          </div>
        </div>

      </div>
    </footer>
  );
};
