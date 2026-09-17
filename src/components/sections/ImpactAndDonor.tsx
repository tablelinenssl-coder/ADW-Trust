import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Eye, Droplets, GraduationCap, TreePine, ShieldCheck, CheckCircle2 } from 'lucide-react';

const transparencySteps = [
  {
    step: '01',
    title: 'Hospital Waitlist Verification',
    desc: 'Public hospital ophthalmic teams identify patients waiting for cataract surgery who cannot afford lenses.'
  },
  {
    step: '02',
    title: 'Direct Sourcing of Supplies',
    desc: 'High-grade foldable intraocular lenses (IOLs) and viscoelastic consumables are procured directly from certified manufacturers.'
  },
  {
    step: '03',
    title: 'Operating Theater Delivery',
    desc: 'Consumables are delivered straight into surgical units with 100% direct allocation and zero administrative cuts.'
  },
  {
    step: '04',
    title: 'Restored Sight & Livelihood',
    desc: 'Patients regain their vision, autonomy, and the ability to work and care for their families with dignity.'
  }
];

const focusAreas = [
  {
    icon: Eye,
    title: 'Cataract Surgical Supplies',
    sub: 'Direct Lens & Consumables',
    desc: 'Provides foldable intraocular lenses (IOLs), viscoelastic ophthalmic gel, and sterile surgical consumables to hospitals.'
  },
  {
    icon: Droplets,
    title: 'School Hydration Units',
    sub: 'Safe Drinking Water Facility',
    desc: 'Installs heavy-duty stainless steel water dispensers, multi-stage filtration systems, and clean drinking stations in rural schools.'
  },
  {
    icon: GraduationCap,
    title: 'Student Academic Kits',
    sub: 'Classroom Learning Supplies',
    desc: 'Equips underprivileged children with textbooks, exercise books, stationery sets, geometry kits, and durable school bags.'
  },
  {
    icon: TreePine,
    title: 'Native Tree Groves',
    sub: 'Endemic Reforestation',
    desc: 'Funds native saplings (such as Kumbuk, Mee, and fruit trees) alongside student environmental stewardship workshops.'
  }
];

export const ImpactAndDonor: React.FC = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="impact" className="py-12 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-label="Our Impact & Transparency">
      
      <div className="space-y-10 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald">
            Trust &amp; Direct Accountability
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-brand-charcoal tracking-tight">
            How ADW Trust Delivers Lasting Change
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted font-light">
            Operating on a transparent, direct-to-community delivery model personally overseen by Madam Doreen Wissmann.
          </p>
        </div>

        {/* Step-by-Step Transparency Lifecycle */}
        <div className="p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white border border-brand-border shadow-sm space-y-4 sm:space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-forest">
              Direct Supply Lifecycle
            </span>
            <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-brand-charcoal mt-0.5">
              From Need Identification to Community Transformation
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {transparencySteps.map((s, idx) => (
              <div key={idx} className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-brand-canvas border border-brand-border space-y-1.5 sm:space-y-2 relative">
                <div className="text-xl sm:text-2xl font-serif font-extrabold text-brand-emerald">
                  {s.step}
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-brand-charcoal">
                  {s.title}
                </h4>
                <p className="text-xs text-brand-muted leading-relaxed font-light">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Practical Focus Areas */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald">
              Our Core Focus Areas
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-charcoal mt-0.5">
              Key Community Interventions
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {focusAreas.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-brand-border hover:border-brand-emerald hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-brand-sage text-brand-forest flex items-center justify-center">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    <div className="space-y-0.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-brand-emerald">
                        {item.sub}
                      </div>
                      <h4 className="text-sm sm:text-base font-serif font-bold text-brand-charcoal">
                        {item.title}
                      </h4>
                    </div>

                    <p className="text-xs text-brand-muted leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
