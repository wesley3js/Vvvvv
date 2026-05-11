import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
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
          <p className="text-zinc-400 text-base md:text-xl max-w-md mb-8 md:mb-12 font-light leading-relaxed">
            Transformo a essência do seu negócio em narrativas cinematográficas que geram autoridade e desejo imediato.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 md:gap-10">
            <a href="#contato" className="w-full sm:w-auto text-center bg-gold text-white px-10 md:px-12 py-4 md:py-5 rounded-full font-bold uppercase text-[11px] tracking-widest shadow-2xl shadow-gold/30 hover:bg-white hover:text-zinc-950 transition-all duration-500 hover:-translate-y-1">
              Iniciar Projecto
            </a>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-zinc-900 bg-zinc-800 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">+120 Clientes VIP</div>
            </div>
          </div>

          <div className="mt-12 md:mt-20 grid grid-cols-3 gap-4 md:gap-8 border-t border-zinc-800 pt-10 max-w-lg">
            <div><div className="text-3xl md:text-4xl font-black text-gold">500k+</div><div className="text-[9px] uppercase font-bold text-zinc-400">Leads</div></div>
            <div><div className="text-3xl md:text-4xl font-black text-gold">15M+</div><div className="text-[9px] uppercase font-bold text-zinc-400">Impressões</div></div>
            <div><div className="text-3xl md:text-4xl font-black text-gold">98%</div><div className="text-[9px] uppercase font-bold text-zinc-400">Retenção</div></div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 relative h-[450px] md:h-[650px] lg:h-[750px] w-full mt-10 lg:mt-0"
        >
          <div className="absolute inset-0 lg:inset-8 bg-zinc-900 rounded-[40px] lg:rounded-[70px] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1000" 
              className="w-full h-full object-cover"
              alt="Framing"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-10 md:bottom-12 left-6 md:left-10 right-6 md:right-10">
              <div className="glass rounded-3xl p-4 md:p-6 border-white/10">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-gold text-[10px] font-bold uppercase tracking-widest">Última Obra</span>
                    <h3 className="text-white text-xl md:text-2xl font-bold uppercase mt-1">Herança Industrial</h3>
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-zinc-900 transition-colors cursor-pointer shrink-0">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
