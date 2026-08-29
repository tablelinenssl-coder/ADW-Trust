import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { ImpactCounter } from './components/sections/ImpactCounter';
import { About } from './components/sections/About';
import { Initiatives } from './components/sections/Initiatives';
import { ImpactAndDonor } from './components/sections/ImpactAndDonor';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/ui/BackToTop';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.4,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-brand-canvas text-brand-charcoal selection:bg-brand-gold-pure/30 selection:text-brand-onyx">
      <Navbar />
      
      <main id="main-content" className="flex-grow">
        <Hero />
        <ImpactCounter />
        <About />
        <Initiatives />
        <ImpactAndDonor />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
