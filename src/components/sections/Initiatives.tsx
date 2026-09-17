import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Droplets, GraduationCap, TreePine, Mail, ArrowRight, CheckCircle2, HeartHandshake } from 'lucide-react';

const tabs = [
  { id: 'cataract', label: 'Cataract Surgery Support', icon: Eye },
  { id: 'water', label: 'Drinking Water & Hygiene', icon: Droplets },
  { id: 'schools', label: 'Support for Rural Schools', icon: GraduationCap },
  { id: 'environment', label: 'Environment & Tree Planting', icon: TreePine },
];

export const Initiatives: React.FC = () => {
  const [activeTab, setActiveTab] = useState('cataract');
  const [sliderPos, setSliderPos] = useState(65);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="initiatives" className="py-12 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-label="Our Core Initiatives">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2 mb-8 sm:mb-10">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald">
          Four Pillars of Relief
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-brand-charcoal tracking-tight">
          Our Core Humanitarian Initiatives
        </h2>
        <p className="text-xs sm:text-sm text-brand-muted font-light">
          Delivering practical assistance directly to hospitals, schools, and rural communities across Sri Lanka.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-8">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isSel = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all min-h-[40px] ${
                isSel
                  ? 'bg-brand-forest text-white shadow-md'
                  : 'bg-white border border-brand-border text-brand-text hover:border-brand-emerald hover:bg-brand-sand/40'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isSel ? 'text-brand-gold-pure' : 'text-brand-emerald'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Tab Box */}
      <div className="p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white border border-brand-border shadow-lg">
        <AnimatePresence mode="wait">
          
          {/* 1. CATARACT SURGERY SUPPORT */}
          {activeTab === 'cataract' && (
            <motion.div
              key="cataract"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald">
                    Flagship Healthcare Initiative
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-charcoal mt-0.5">
                    Cataract Surgery Support
                  </h3>
                  <p className="text-sm font-serif italic text-brand-forest mt-1">
                    &ldquo;Light the vision with our kindness&rdquo;
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-brand-text leading-relaxed font-light">
                  Through this initiative, the trust has been providing cataract surgeries to disadvantaged individuals, restoring their vision and, with it, their hope for a brighter future. These surgeries not only transform individual lives but also have a ripple effect on their families and communities, allowing them to participate fully in daily life and contribute to society.
                </p>

                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light">
                  Ms Doreen Wissmann supplies lenses and surgical consumables to island-wide hospitals for conducting cataract surgeries for underprivileged people. The hospitals are performing surgeries on a regular basis with the support of ADW trust.
                </p>

                <div className="p-4 rounded-2xl bg-brand-canvas border border-brand-border space-y-2">
                  <div className="text-xs font-bold text-brand-forest">Our Operational Objective:</div>
                  <p className="text-xs text-brand-muted leading-relaxed font-light">
                    The objective is to perform cataract surgeries at government hospitals, utilizing the hospital infrastructure and health professionals by providing essential surgical supplies including lenses and other consumables. The surgeries happen in a regular manner, and we are aiming to extend our cataract surgeries to other needy hospitals within the country. On average, we support approximately <strong>27 cataract surgeries every month</strong>.
                  </p>
                </div>

                <div className="pt-1">
                  <button
                    onClick={() => scrollTo('#contact')}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-brand-forest hover:bg-brand-onyx text-white text-xs sm:text-sm font-bold shadow-md transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Contact Us About Cataract Surgeries</span>
                  </button>
                </div>
              </div>

              {/* Vision Slider */}
              <div className="lg:col-span-6 space-y-3">
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-brand-forest border border-brand-border shadow-sm">
                  <img
                    src="/images/cataract.webp"
                    alt="Vision Clarity Simulation"
                    className="w-full h-full object-cover transition-all duration-200"
                    loading="lazy"
                    decoding="async"
                    width={900}
                    height={562}
                    style={{
                      filter: `blur(${(100 - sliderPos) * 0.1}px) brightness(${0.7 + (sliderPos / 100) * 0.3})`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white pointer-events-none">
                    <div className="text-xs font-bold">
                      {sliderPos > 60 ? '✓ Clear Vision with ADW Intraocular Lens' : '⚠ Clouded Cataract Impairment'}
                    </div>
                    <div className="text-xs px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md">
                      {sliderPos}% Clarity
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-brand-canvas border border-brand-border space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-brand-forest">
                    <span>Before Surgery</span>
                    <span>Restored Sight</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPos}
                    onChange={(e) => setSliderPos(Number(e.target.value))}
                    className="w-full h-2 bg-brand-border rounded-lg appearance-none cursor-pointer accent-brand-emerald"
                    aria-label="Vision clarity slider"
                  />
                  <div className="text-center text-[11px] text-brand-muted">
                    Drag slider to compare cataract blur vs. restored vision.
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* 2. DRINKING WATER & HYGIENE IN SCHOOLS */}
          {activeTab === 'water' && (
            <motion.div
              key="water"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald">
                    School Health &amp; Hydration
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-charcoal mt-0.5">
                    Drinking Water, Sanitation and Hygiene in Schools
                  </h3>
                  <p className="text-xs text-brand-muted font-medium">Water Access in Schools &mdash; For Everyone</p>
                </div>

                {/* At a glance */}
                <div className="p-4 rounded-2xl bg-brand-canvas border border-brand-border space-y-2">
                  <div className="text-xs font-bold text-brand-forest uppercase tracking-wider">At a Glance:</div>
                  <ul className="text-xs text-brand-text space-y-1.5 font-light">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-emerald font-bold">&bull;</span>
                      <span>Access to drinking water gives students a healthy alternative to sugar-sweetened beverages.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-emerald font-bold">&bull;</span>
                      <span>Increasing access to water helps students stay properly hydrated throughout school hours.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-emerald font-bold">&bull;</span>
                      <span>Staying hydrated improves cognitive function, focus, and memory in children and adolescents.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-emerald font-bold">&bull;</span>
                      <span>Fluoridated clean drinking water plays a vital role in preventing dental cavities.</span>
                    </li>
                  </ul>
                </div>

                {/* Why it's important */}
                <div className="p-4 rounded-2xl bg-white border border-brand-border space-y-2">
                  <div className="text-xs font-bold text-brand-forest uppercase tracking-wider">Why It&rsquo;s Important:</div>
                  <ul className="text-xs text-brand-muted space-y-1 font-light">
                    <li>&bull; Ensure that water fountains and dispensers are clean and properly maintained.</li>
                    <li>&bull; Provide water dispensers and hydration stations throughout the school grounds.</li>
                    <li>&bull; Allow students to have water bottles in class or access drinking points freely.</li>
                    <li>&bull; Help make clean, free drinking water available from multiple sources in school settings.</li>
                    <li>&bull; Promote water as a primary healthy beverage for child growth and well-being.</li>
                  </ul>
                </div>

                <div className="pt-1">
                  <button
                    onClick={() => scrollTo('#contact')}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-brand-forest hover:bg-brand-onyx text-white text-xs sm:text-sm font-bold shadow-md transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Contact Us About School Water</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 rounded-2xl overflow-hidden aspect-[16/10] bg-brand-forest border border-brand-border shadow-sm relative">
                <img
                  src="/images/water.webp"
                  alt="Children drinking clean water"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={900}
                  height={562}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-bold">School Hydration Facilities</div>
                  <div className="text-[11px] text-white/80">Supplying water dispensers and safe filtration units for children</div>
                </div>
              </div>
            </motion.div>
          )}

          {/* 3. SUPPORT FOR RURAL SCHOOLS */}
          {activeTab === 'schools' && (
            <motion.div
              key="schools"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald">
                    Educational Dignity &amp; Access
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-charcoal mt-0.5">
                    Support for Rural Schools
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-brand-text leading-relaxed font-light">
                  Support for children and rural communities by helping schools access essential educational resources, textbooks, stationery materials, classroom furniture, and learning facilities.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {[
                    { title: 'Study Kits & Textbooks', desc: 'Providing essential textbooks, exercise books, pencils, and educational activity packs.' },
                    { title: 'Classroom Desks & Chairs', desc: 'Equipping rural classrooms with durable study desks and comfortable seating.' },
                    { title: 'Sanitation & Hygiene', desc: 'Upgrading student washrooms and functional sanitation facilities in village schools.' },
                    { title: 'Teacher Collaboration', desc: 'Direct partnership with rural school principals to fulfill specific academic needs.' },
                  ].map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-brand-canvas border border-brand-border space-y-0.5">
                      <div className="text-xs font-bold text-brand-forest">{item.title}</div>
                      <div className="text-[11px] text-brand-muted">{item.desc}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-1">
                  <button
                    onClick={() => scrollTo('#contact')}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-brand-forest hover:bg-brand-onyx text-white text-xs sm:text-sm font-bold shadow-md transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Contact Us About Rural Schools</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 rounded-2xl overflow-hidden aspect-[16/10] bg-brand-forest border border-brand-border shadow-sm relative">
                <img
                  src="/images/schools.webp"
                  alt="Rural classroom education"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={900}
                  height={562}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <blockquote className="text-xs font-serif italic text-white/90">
                    &ldquo;Education is the foundation on which every brighter future is built.&rdquo;
                  </blockquote>
                </div>
              </div>
            </motion.div>
          )}

          {/* 4. ENVIRONMENT & TREE PLANTING */}
          {activeTab === 'environment' && (
            <motion.div
              key="environment"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald">
                    Ecological Stewardship
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-charcoal mt-0.5">
                    Environment &amp; Tree Planting
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-brand-text leading-relaxed font-light">
                  Fostering sustainable ecological balance across Sri Lanka through community tree planting, environmental education, and sustainable practices.
                </p>

                <div className="space-y-2.5 pt-1">
                  <div className="p-3.5 rounded-xl bg-brand-canvas border border-brand-border space-y-1">
                    <div className="text-xs font-bold text-brand-forest uppercase tracking-wider">Community:</div>
                    <p className="text-xs text-brand-muted font-light">
                      We work to promote reforestation, share knowledge and resources, and facilitate collaborative community tree planting projects.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-brand-canvas border border-brand-border space-y-1">
                    <div className="text-xs font-bold text-brand-forest uppercase tracking-wider">Education:</div>
                    <p className="text-xs text-brand-muted font-light">
                      We are committed to continuous learning, sharing knowledge, collaborating with educational institutions, and promoting best practices in tree planting and environmental stewardship.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-brand-canvas border border-brand-border space-y-1">
                    <div className="text-xs font-bold text-brand-forest uppercase tracking-wider">Sustainability:</div>
                    <p className="text-xs text-brand-muted font-light">
                      Prioritizes sustainable practices, including the use of local, natural, and renewable materials whenever feasible. We strive to minimize our environmental footprint.
                    </p>
                  </div>
                </div>

                <div className="pt-1">
                  <button
                    onClick={() => scrollTo('#contact')}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-brand-forest hover:bg-brand-onyx text-white text-xs sm:text-sm font-bold shadow-md transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Contact Us About Tree Planting</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 rounded-2xl overflow-hidden aspect-[16/10] bg-brand-forest border border-brand-border shadow-sm relative">
                <img
                  src="/images/environment.webp"
                  alt="Community tree planting in Sri Lanka"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={900}
                  height={562}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-bold">Community Tree Planting</div>
                  <div className="text-[11px] text-white/80">Collaborative reforestation and environmental stewardship projects</div>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

    </section>
  );
};
