import React from 'react';
import { motion } from 'framer-motion';
import { User, Flame, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-label="About ADW Trust">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Portrait & Founder Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white bg-brand-forest aspect-[4/5] relative">
            <img
              src="/images/about.webp"
              alt="Community solidarity and compassionate care in Sri Lanka"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              width={900}
              height={1125}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-onyx/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold-pure">
                Humanitarian Dedication
              </span>
              <div className="text-lg font-serif italic text-white">
                Driven by Love, Memory &amp; Compassion
              </div>
            </div>
          </div>

          {/* Founder Signature Card */}
          <div className="p-5 rounded-3xl bg-white border border-brand-border shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-brand-sage border-2 border-brand-emerald flex items-center justify-center shrink-0">
                <User className="w-5 h-5 text-brand-emerald" />
              </div>
              <div>
                <h4 className="text-sm font-serif font-bold text-brand-charcoal">Madam Doreen Wissmann</h4>
                <p className="text-xs text-brand-emerald font-semibold">Founder &amp; Visionary, ADW Trust</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] uppercase tracking-wider font-bold text-brand-forest bg-brand-sage px-2.5 py-1 rounded-full">
                Personal Leadership
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative & Memorial Story */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald">
              Our Origin &amp; Mission
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal tracking-tight mt-1">
              Transforming Compassion into Enduring Positive Change
            </h2>
          </div>

          <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
            ADW Trust was founded by <strong>Madam Doreen Wissmann</strong>. In memory of her husband <strong>Wissmann</strong> and her daughter <strong>Astrid Dymond</strong>, she decided to dedicate her life to supporting underprivileged people across Sri Lanka and is on a mission to change this narrative through direct, compassionate action.
          </p>

          {/* Memorial Tribute Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-brand-forest to-brand-onyx text-white border border-brand-gold-pure/30 shadow-xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-gold-pure">
              <Flame className="w-4 h-4 fill-brand-gold-pure" />
              <span>A Loving Memorial Dedication</span>
            </div>

            <blockquote className="text-base sm:text-lg font-serif italic text-white/95 leading-relaxed">
              &ldquo;In memory of her husband <strong>Wissmann</strong> and her daughter <strong>Astrid Dymond</strong>, Madam Doreen Wissmann established ADW Trust to bring restored vision, essential resources, and dignified hope to communities in need across Sri Lanka.&rdquo;
            </blockquote>
          </div>

          {/* 3 Core Operating Commitments */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
            <div className="p-4 rounded-2xl bg-white border border-brand-border space-y-1">
              <div className="text-xs font-bold text-brand-forest">Direct Allocation</div>
              <p className="text-[11px] text-brand-muted">Surgical lenses &amp; school supplies handed directly to recipients.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-brand-border space-y-1">
              <div className="text-xs font-bold text-brand-forest">Hospital Trust</div>
              <p className="text-[11px] text-brand-muted">Working hand-in-hand with regional public ophthalmic surgeons.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-brand-border space-y-1">
              <div className="text-xs font-bold text-brand-forest">Sustainable Care</div>
              <p className="text-[11px] text-brand-muted">Building continuous surgeries, water units, and tree nurseries.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
