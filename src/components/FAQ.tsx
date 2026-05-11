import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-800 last:border-0">
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
            <p className="pb-8 text-zinc-400 text-base md:text-lg font-light leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = () => (
  <section className="py-24 md:py-40 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-black mb-16 md:mb-20 text-center uppercase leading-tight">
        Dúvidas <span className="italic font-serif text-gold underline underline-offset-8">Frequentes</span>
      </h2>
      <div className="space-y-4">
        <FAQItem 
          question="Qual o prazo médio de entrega?" 
          answer="Dependendo da complexidade do projeto, o prazo varia entre 15 a 30 dias após a captação. Mantemos uma comunicação transparente durante todo o fluxo da edição."
        />
        <FAQItem 
          question="Trabalha fora de Portugal?" 
          answer="Sim. Françoa atua globalmente, acompanhando marcas e empresas onde quer que a história cinematográfica precise de ser contada."
        />
        <FAQItem 
          question="Os vídeos são para redes sociais?" 
          answer="Sim, todas as produções incluem entregáveis adaptados nativamente. Formatos verticais (9:16) otimizados para Reels e TikTok, mantendo a mais alta retenção."
        />
      </div>
    </div>
  </section>
);
