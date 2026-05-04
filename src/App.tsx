/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  Linkedin, 
  ArrowRight, 
  Plus, 
  Minus,
  MessageCircle,
  Menu,
  X,
  Play
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 w-[92%] max-w-[900px] h-14 md:h-16 glass rounded-full z-[1000] flex items-center justify-between px-6 md:px-10 shadow-sm border-white/60">
      <div className="font-black italic text-lg md:text-xl tracking-tighter">
        Françoa <span className="text-gold">.</span>
      </div>
      
      <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
        <a href="#sobre" className="hover:text-gold transition-colors">Sobre</a>
        <a href="#obras" className="hover:text-gold transition-colors">Obras</a>
        <a href="#metodo" className="hover:text-gold transition-colors">Método</a>
        <a href="#contato" className="hover:text-gold transition-colors">Contacto</a>
      </div>

      <div className="flex items-center gap-4">
        <a href="#contato" className="bg-zinc-950 text-white text-[9px] font-bold py-2 md:py-2.5 px-4 md:px-6 rounded-full uppercase tracking-widest hover:bg-gold transition-all duration-300 whitespace-nowrap">
          Projecto
        </a>
        <button 
          className="md:hidden text-zinc-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full glass rounded-3xl p-8 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest text-zinc-900">Sobre</a>
            <a href="#obras" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest text-zinc-900">Obras</a>
            <a href="#metodo" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest text-zinc-900">Método</a>
            <a href="#contato" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest text-zinc-900">Contacto</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const WhatsAppFloat = () => (
  <a 
    href="https://wa.me/seunumeroporto" 
    target="_blank" 
    referrerPolicy="no-referrer"
    className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-[#25d366] text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-xl z-[900] hover:scale-110 transition-all duration-300"
  >
    <MessageCircle size={28} />
  </a>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 md:py-8 flex justify-between items-center text-left"
      >
        <span className="text-lg md:text-xl font-bold uppercase">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="text-gold"
        >
          <Plus size={24} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-zinc-500 text-base md:text-lg">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Marquee = () => (
  <section className="h-40 md:h-48 bg-zinc-950 overflow-hidden relative flex items-center">
    <div className="absolute w-[200%] md:w-[150%] left-[-50%] md:left-[-25%] rotate-[-2deg] md:rotate-[-1deg] bg-gold h-14 md:h-16 flex items-center z-10 shadow-xl overflow-hidden">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        <span className="px-10 text-white font-black uppercase text-xs md:text-sm">Françoa • 8K Resolution • Color Grading • Sound Design • </span>
        <span className="px-10 text-white font-black uppercase text-xs md:text-sm">Françoa • 8K Resolution • Color Grading • Sound Design • </span>
        <span className="px-10 text-white font-black uppercase text-xs md:text-sm">Françoa • 8K Resolution • Color Grading • Sound Design • </span>
      </motion.div>
    </div>
    <div className="absolute w-[200%] md:w-[150%] left-[-50%] md:left-[-25%] rotate-[2deg] md:rotate-[1deg] bg-white h-14 md:h-16 flex items-center shadow-xl overflow-hidden">
      <motion.div 
        animate={{ x: [-1000, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        <span className="px-10 text-zinc-900 font-black uppercase text-xs md:text-sm">Brand Authority • ROI Focused • Storytelling • Cinematic • </span>
        <span className="px-10 text-zinc-900 font-black uppercase text-xs md:text-sm">Brand Authority • ROI Focused • Storytelling • Cinematic • </span>
        <span className="px-10 text-zinc-900 font-black uppercase text-xs md:text-sm">Brand Authority • ROI Focused • Storytelling • Cinematic • </span>
      </motion.div>
    </div>
  </section>
);

// --- Main App ---

export default function App() {
  const aboutRef = useRef<HTMLElement>(null);
  const obrasRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Scroll Progress for About Reveal (Clip Path)
  const { scrollYProgress: aboutProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });

  const clipInset = useTransform(aboutProgress, [0.3, 0.6], [25, 0]);
  const clipRound = useTransform(aboutProgress, [0.3, 0.6], [60, 0]);

  // Scroll Progress for Horizontal Works
  const { scrollYProgress: obrasProgress } = useScroll({
    target: obrasRef,
  });

  const xTranslate = useTransform(obrasProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div className="font-sans">
      <Navbar />
      <WhatsAppFloat />

      {/* Side Label */}
      <div className="fixed left-0 top-0 h-full w-12 border-r border-zinc-100 hidden lg:flex items-center justify-center z-[500] pointer-events-none">
        <div className="vertical-text text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-300">
          Cinematic Strategy & Production
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 md:px-6 lg:px-24 pt-24 lg:pt-0 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full gap-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <p className="text-gold uppercase tracking-[0.6em] font-bold text-[10px] mb-6 md:mb-8">Françoa Filmmaker</p>
            <h1 className="text-5xl md:text-7xl xl:text-[7.5rem] font-black mb-8 md:mb-10 leading-[0.9] tracking-tighter">
              A ARTE DE <br /> <span className="italic font-serif text-gold">Elevar Marcas.</span>
            </h1>
            <p className="text-zinc-600 text-base md:text-xl max-w-md mb-8 md:mb-12 font-light leading-relaxed">
              Transformo a essência do seu negócio em narrativas cinematográficas que geram autoridade e desejo imediato.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 md:gap-10">
              <a href="#contato" className="w-full sm:w-auto text-center bg-gold text-white px-10 md:px-12 py-4 md:py-5 rounded-full font-bold uppercase text-[11px] tracking-widest shadow-2xl shadow-gold/30 hover:bg-zinc-950 transition-all duration-500 hover:-translate-y-1">
                Iniciar Projecto
              </a>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-zinc-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">+120 Clientes VIP</div>
              </div>
            </div>

            <div className="mt-12 md:mt-20 grid grid-cols-3 gap-4 md:gap-8 border-t border-zinc-100 pt-10 max-w-lg">
              <div><div className="text-3xl md:text-4xl font-black text-gold">500k+</div><div className="text-[9px] uppercase font-bold text-zinc-400">Leads</div></div>
              <div><div className="text-3xl md:text-4xl font-black text-gold">15M+</div><div className="text-[9px] uppercase font-bold text-zinc-400">Impressões</div></div>
              <div><div className="text-3xl md:text-4xl font-black text-gold">98%</div><div className="text-[9px] uppercase font-bold text-zinc-400">Retenção</div></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative h-[450px] md:h-[650px] lg:h-[750px] w-full"
          >
            <div className="absolute inset-0 lg:inset-8 bg-zinc-100 rounded-[40px] lg:rounded-[70px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover"
                alt="Framing"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 md:bottom-12 left-6 md:left-10 right-6 md:right-10">
                <div className="glass rounded-3xl p-4 md:p-6 border-white/30">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-gold text-[10px] font-bold uppercase tracking-widest">Última Obra</span>
                      <h3 className="text-white text-xl md:text-2xl font-bold uppercase mt-1">Herança Industrial</h3>
                    </div>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white hover:text-zinc-900 transition-colors cursor-pointer">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 md:py-24 border-y border-zinc-100 bg-zinc-50/30">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-zinc-400 font-mono text-[10px] uppercase tracking-widest mb-10 md:mb-14">Parceiros em Excelência</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 opacity-30 grayscale hover:opacity-100 transition-all duration-700">
            {['LUX_CARS', 'VOGUE_ST', 'TECH_HUB', 'ROYAL_RE', 'FINE_DIN', 'GLOBAL_M'].map(brand => (
              <div key={brand} className="flex items-center justify-center font-black text-lg md:text-xl italic tracking-tighter text-zinc-900">{brand}</div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Reveal */}
      <section id="sobre" ref={aboutRef} className="h-[200vh] relative bg-white overflow-hidden">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center">
          <motion.div 
            style={{ 
              clipPath: useTransform(
                [clipInset, clipRound], 
                ([inset, round]) => `inset(${inset}% ${inset * 0.6}% ${inset}% ${inset * 0.6}% round ${round}px)`
              )
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-full object-cover"
              alt="Vision"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-white/70 flex flex-col items-center justify-center text-center p-6 md:p-10 backdrop-blur-[4px]">
              <h2 className="text-5xl md:text-8xl font-black italic font-serif leading-none">Visão <br /> Autoral</h2>
              <p className="max-w-2xl mt-8 md:mt-10 text-zinc-800 text-lg md:text-xl font-light leading-relaxed">
                Chamo-me Françoa e não apenas capto imagens; desenho estratégias de percepção. O meu foco é colocar o seu produto no topo da pirâmide visual, onde a qualidade não é discutida, mas admirada.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Works Gallery Horizontal */}
      <section id="obras" ref={obrasRef} className="h-[400vh] relative">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="absolute top-12 md:top-24 left-6 md:left-24 z-20 pointer-events-none">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">Obras <br /> <span className="text-gold italic font-serif">de Françoa</span></h2>
          </div>
          <motion.div 
            style={{ x: xTranslate }}
            className="flex gap-8 md:gap-16 px-[10vw]"
          >
            {[
              { title: "Herança Industrial", cat: "Institucional", img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1" },
              { title: "Gala de Inovação", cat: "Eventos Luxury", img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7" },
              { title: "Vozes da Floresta", cat: "Docs", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728" },
              { title: "Escala Digital", cat: "Ads", img: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd" },
            ].map((work, idx) => (
              <div key={idx} className="flex-shrink-0 w-[85vw] md:w-[70vw] lg:w-[750px] h-[450px] md:h-[520px] rounded-[30px] md:rounded-[40px] overflow-hidden relative group shadow-2xl">
                <img 
                  src={`${work.img}?auto=format&fit=crop&q=80&w=1000`} 
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  alt={work.title}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent p-8 md:p-12 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-gold text-xs font-bold uppercase">{work.cat}</span>
                  <h3 className="text-2xl md:text-3xl font-bold uppercase">{work.title}</h3>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Marquee />

      {/* Orbit Method */}
      <section id="metodo" className="py-24 md:py-40 bg-zinc-50 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center mb-16 md:mb-32 px-6">
          <p className="text-gold uppercase tracking-[0.4em] font-mono text-[10px] mb-4">Método Françoa</p>
          <h2 className="text-5xl md:text-8xl font-black uppercase leading-tight">Fluxo de <br /> <span className="text-gold italic font-serif">Impacto</span></h2>
        </div>
        
        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
          <div className="absolute border border-dashed border-zinc-200 rounded-full w-[300px] h-[300px] md:w-[550px] md:h-[550px]"></div>
          <div className="relative z-10 p-12 md:p-16 bg-white rounded-full border border-zinc-100 shadow-2xl font-black italic text-2xl md:text-3xl flex items-center justify-center">
            F <span className="text-gold">.</span>
          </div>
          
          {/* Orbit Items (Responsive adaptive) */}
          {[
            { label: "Briefing", desc: "Imersão em Metas", pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
            { label: "Roteiro", desc: "Engenharia Narrativa", pos: "top-1/4 right-0 translate-x-1/2" },
            { label: "Captura", desc: "Execução High-End", pos: "bottom-1/4 right-0 translate-x-1/2" },
            { label: "Edição", desc: "Alquimia Visual", pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
            { label: "Escala", desc: "Distribuição", pos: "top-1/2 left-0 -translate-x-1/2" },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`absolute glass p-4 md:p-6 rounded-2xl w-32 md:w-44 text-center ${item.pos}`}
            >
              <h4 className="font-bold text-xs uppercase mb-1">{item.label}</h4>
              <p className="text-[9px] text-zinc-500 uppercase">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-40 bg-white px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-16 md:mb-20 text-center uppercase leading-tight">
            Dúvidas <span className="italic font-serif text-gold underline underline-offset-8">Frequentes</span>
          </h2>
          <div className="space-y-4">
            <FAQItem 
              question="Qual o prazo médio de entrega?" 
              answer="Dependendo da complexidade do projeto, o prazo varia entre 15 a 30 dias após a captação."
            />
            <FAQItem 
              question="Trabalha fora de Portugal?" 
              answer="Sim, Françoa atua globalmente, levando a estética cinematográfica a qualquer parte do mundo."
            />
            <FAQItem 
              question="Os vídeos são para redes sociais?" 
              answer="Sim, todas as produções incluem entregáveis verticais otimizados para Reels e TikTok."
            />
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contato" className="bg-zinc-950 text-white py-24 md:py-40 px-6">
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
    </div>
  );
}
