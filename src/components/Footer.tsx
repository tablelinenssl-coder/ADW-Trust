import React from 'react';
import { Sprout, Mail, MessageCircle, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-brand-border bg-white text-brand-charcoal" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-brand-emerald text-white flex items-center justify-center shadow-sm">
              <Sprout className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base font-extrabold text-brand-charcoal">
                ADW <span className="text-brand-emerald font-semibold">Trust</span>
              </div>
              <p className="text-xs text-brand-muted italic">
                &ldquo;Light the Vision with Our Kindness&rdquo;
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-brand-muted">
            <button onClick={() => scrollTo('#home')} className="hover:text-brand-forest transition-colors">Home</button>
            <button onClick={() => scrollTo('#about')} className="hover:text-brand-forest transition-colors">About</button>
            <button onClick={() => scrollTo('#initiatives')} className="hover:text-brand-forest transition-colors">Initiatives</button>
            <button onClick={() => scrollTo('#impact')} className="hover:text-brand-forest transition-colors">Impact</button>
            <button onClick={() => scrollTo('#contact')} className="hover:text-brand-forest transition-colors">Contact</button>
          </div>

          {/* Direct WhatsApp CTA */}
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/4915201080100"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-canvas hover:bg-brand-sand border border-brand-border text-xs font-bold text-brand-charcoal transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-current" />
              <span>+49 1520 1080100</span>
            </a>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 border-t border-brand-border/60 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-muted gap-2">
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
