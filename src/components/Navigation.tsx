import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageCircle } from 'lucide-react';

export const Navbar = () => {
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
        <a href="#contato" className="bg-white text-zinc-950 text-[9px] font-bold py-2 md:py-2.5 px-4 md:px-6 rounded-full uppercase tracking-widest hover:bg-gold hover:text-white transition-all duration-300 whitespace-nowrap">
          Projecto
        </a>
        <button 
          className="md:hidden text-white"
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
            <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest text-white hover:text-gold transition-colors">Sobre</a>
            <a href="#obras" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest text-white hover:text-gold transition-colors">Obras</a>
            <a href="#metodo" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest text-white hover:text-gold transition-colors">Método</a>
            <a href="#contato" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest text-white hover:text-gold transition-colors">Contacto</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const WhatsAppFloat = () => (
  <a 
    href="https://wa.me/seunumeroporto" 
    target="_blank" 
    referrerPolicy="no-referrer"
    className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-[#25d366] text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-xl z-[900] hover:scale-110 transition-all duration-300"
  >
    <MessageCircle size={28} />
  </a>
);
