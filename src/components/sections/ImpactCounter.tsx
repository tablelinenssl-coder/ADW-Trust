import React from 'react';
import { Eye, Droplets, GraduationCap, TreePine } from 'lucide-react';

export const ImpactCounter: React.FC = () => {
  return (
    <section className="bg-brand-forest text-white py-10 px-4 sm:px-6 lg:px-8 border-y border-brand-emerald" aria-label="Key Impact Metrics">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        
        <div className="space-y-1">
          <div className="text-3xl sm:text-4xl font-serif font-extrabold text-brand-gold-pure">
            27+
          </div>
          <div className="text-xs sm:text-sm font-bold text-white">
            Cataract Surgeries / Month
          </div>
          <div className="text-[11px] text-brand-sage-light/80">
            Intraocular lenses &amp; consumables
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-3xl sm:text-4xl font-serif font-extrabold text-white">
            100%
          </div>
          <div className="text-xs sm:text-sm font-bold text-brand-gold-light">
            Direct Supply Line
          </div>
          <div className="text-[11px] text-brand-sage-light/80">
            Zero administrative overhead
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-3xl sm:text-4xl font-serif font-extrabold text-brand-gold-pure">
            Island-Wide
          </div>
          <div className="text-xs sm:text-sm font-bold text-white">
            Hospital Collaboration
          </div>
          <div className="text-[11px] text-brand-sage-light/80">
            Public health surgical theaters
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-3xl sm:text-4xl font-serif font-extrabold text-white">
            4 Pillars
          </div>
          <div className="text-xs sm:text-sm font-bold text-brand-gold-light">
            Holistic Relief
          </div>
          <div className="text-[11px] text-brand-sage-light/80">
            Health, Water, School, Nature
          </div>
        </div>

      </div>
    </section>
  );
};
