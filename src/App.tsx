import { Navbar, WhatsAppFloat } from './components/Navigation';
import { Hero } from './components/Hero';
import { Partners } from './components/Partners';
import { About } from './components/About';
import { WorksGrid } from './components/WorksGrid';
import { Marquee } from './components/Marquee';
import { MethodTimeline } from './components/MethodTimeline';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <WhatsAppFloat />

      {/* Side Label */}
      <div className="fixed left-0 top-0 h-full w-12 border-r border-zinc-900/50 hidden lg:flex items-center justify-center z-[500] pointer-events-none">
        <div className="vertical-text text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">
          Cinematic Strategy & Production
        </div>
      </div>

      <main>
        <Hero />
        <Partners />
        <About />
        <WorksGrid />
        <Marquee />
        <MethodTimeline />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
