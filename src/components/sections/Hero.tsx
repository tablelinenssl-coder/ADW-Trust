import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Eye, ShieldCheck, CheckCircle2, Hospital } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-28 sm:pt-36 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-label="Hero">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Bold Typography & Contact Action */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Main Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-sage border border-brand-emerald/20 text-xs font-extrabold uppercase tracking-wider text-brand-forest">
            <Eye className="w-3.5 h-3.5 text-brand-emerald" />
            <span>&ldquo;Light the Vision with Our Kindness&rdquo;</span>
          </div>

          {/* High-Impact Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-brand-charcoal tracking-tight leading-[1.06]">
            Creating Change.<br />
            <span className="text-brand-emerald italic font-normal">
              Restoring Hope.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-brand-muted font-sans font-light max-w-xl leading-relaxed">
            Supporting underprivileged communities across Sri Lanka through direct cataract surgery medical supplies, clean drinking water in schools, rural education, and environmental reforestation.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 max-w-md">
            <button
              onClick={() => scrollTo('#contact')}
              className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-brand-forest hover:bg-brand-onyx text-white font-bold text-sm shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all group"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo('#initiatives')}
              className="flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-brand-sand border border-brand-border text-brand-charcoal font-semibold text-sm shadow-sm transition-all"
            >
              <span>Explore Initiatives</span>
            </button>
          </div>

          {/* Micro Stat Highlights */}
          <div className="pt-4 border-t border-brand-border/80 grid grid-cols-3 gap-4 text-left">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-brand-forest font-serif">27+</div>
              <div className="text-[11px] text-brand-muted font-medium">Surgeries / Month</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal font-serif">100%</div>
              <div className="text-[11px] text-brand-muted font-medium">Direct Supply</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-brand-forest font-serif">Island-Wide</div>
              <div className="text-[11px] text-brand-muted font-medium">Hospital Collaboration</div>
            </div>
          </div>

        </div>

        {/* Right Column: Editorial Photo Showcase with Floating Badge */}
        <div className="lg:col-span-5 relative">
          
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-brand-forest aspect-[4/5]">
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
            
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider bg-brand-emerald/90 px-3 py-1 rounded-full">
                Sri Lankan Humanitarian Mission
              </span>
              <div className="text-base font-serif italic text-white/95 pt-1">
                Founded by Madam Doreen Wissmann
              </div>
            </div>
          </div>

          {/* Floating High-Contrast Badge */}
          <div className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-brand-border hidden sm:flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-sage text-brand-forest flex items-center justify-center shrink-0">
              <Hospital className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-brand-charcoal">Public Hospital Network</div>
              <div className="text-[10px] text-brand-muted">Lenses &amp; Consumables Delivered Direct</div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
