import React from 'react';
import { Mail, ArrowRight, Hospital } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-24 sm:pt-32 lg:pt-36 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-label="Hero">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Bold Typography & Contact Action */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-6">
          
          {/* High-Impact Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-brand-charcoal tracking-tight leading-[1.1]">
            Creating Change.<br />
            <span className="text-brand-emerald italic font-normal">
              Restoring Hope.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base md:text-lg text-brand-muted font-sans font-light max-w-xl leading-relaxed">
            Supporting underprivileged communities across Sri Lanka through direct cataract surgery medical supplies, clean drinking water in schools, rural education, and environmental reforestation.
          </p>

          {/* Action Buttons */}
          <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 max-w-md">
            <button
              onClick={() => scrollTo('#contact')}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-brand-forest hover:bg-brand-onyx text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl active:scale-95 transition-all group"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo('#initiatives')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white hover:bg-brand-sand border border-brand-border text-brand-charcoal font-semibold text-xs sm:text-sm shadow-sm transition-all"
            >
              <span>Explore Initiatives</span>
            </button>
          </div>

          {/* Micro Stat Highlights */}
          <div className="pt-4 border-t border-brand-border/80 grid grid-cols-3 gap-2 sm:gap-4 text-left">
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-brand-forest font-serif">27+</div>
              <div className="text-[10px] sm:text-[11px] text-brand-muted font-medium">Surgeries / Mo</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-brand-charcoal font-serif">100%</div>
              <div className="text-[10px] sm:text-[11px] text-brand-muted font-medium">Direct Supply</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-brand-forest font-serif">Island-Wide</div>
              <div className="text-[10px] sm:text-[11px] text-brand-muted font-medium">Hospital Trust</div>
            </div>
          </div>

        </div>

        {/* Right Column: Editorial Photo Showcase with Floating Badge */}
        <div className="lg:col-span-5 relative max-w-md mx-auto lg:max-w-none w-full">
          
          <div className="relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-brand-forest aspect-[4/5]">
            <img
              src="/images/hero.webp"
              alt="Humanitarian care and community support in Sri Lanka"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
              // @ts-ignore
              fetchpriority="high"
              width={1200}
              height={1500}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-onyx/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white space-y-1">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-brand-emerald/90 px-2.5 sm:px-3 py-1 rounded-full">
                Sri Lankan Humanitarian Mission
              </span>
              <div className="text-sm sm:text-base font-serif italic text-white/95 pt-1">
                Founded by Madam Doreen Wissmann
              </div>
            </div>
          </div>

          {/* Floating High-Contrast Badge */}
          <div className="absolute -top-3 left-3 sm:-top-4 sm:-left-4 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl border border-brand-border flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-brand-sage text-brand-forest flex items-center justify-center shrink-0">
              <Hospital className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-[11px] sm:text-xs font-bold text-brand-charcoal">Public Hospital Network</div>
              <div className="text-[9px] sm:text-[10px] text-brand-muted">Lenses Delivered Direct</div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
