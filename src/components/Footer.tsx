import { Instagram, Linkedin } from 'lucide-react';

export const Footer = () => (
  <footer id="contato" className="bg-zinc-950 text-white py-24 md:py-40 px-6 border-t border-zinc-900/50">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-end mb-20 md:mb-32">
        <div>
          <h2 className="text-6xl md:text-9xl font-black italic font-serif mb-8 md:mb-12 leading-none">Vamos <br /> Escalar?</h2>
          <a href="mailto:contato@francoa.com" className="text-xl md:text-4xl text-gold font-light hover:tracking-widest transition-all duration-700 break-words">
            contato@francoa.com
          </a>
        </div>
        <div className="space-y-8 md:space-y-12">
          <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed uppercase">
            Pronto para elevar a percepção da sua marca ao nível cinematográfico?
          </p>
          <div className="flex gap-6">
            <a href="#" className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10 pt-16 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div className="font-black italic text-2xl">Françoa <span className="text-gold">.</span></div>
        <p className="text-zinc-500 text-[10px] uppercase tracking-widest leading-none">
          © 2026 Françoa Filmmaker • Estratégia de Percepção Audiovisual
        </p>
      </div>
    </div>
  </footer>
);
