import { motion } from 'motion/react';

export const MethodTimeline = () => {
  const steps = [
    { label: "Briefing", title: "Imersão em Metas", desc: "Mergulhamos na essência da sua marca e definimos os KPI's visuais." },
    { label: "Roteiro", title: "Engenharia Narrativa", desc: "Criamos scripts baseados em psicologia de retenção." },
    { label: "Captura", title: "Execução High-End", desc: "Filmagem com equipamentos de cinema, luzes esculpidas e direção de arte." },
    { label: "Edição", title: "Alquimia Visual", desc: "Color grading rico, sound design imersivo e cortes precisos." },
    { label: "Escala", title: "Distribuição", desc: "Formatos adaptados nativamente para maximizar conversão e ROI." },
  ];

  return (
    <section id="metodo" className="py-24 md:py-40 px-6 max-w-5xl mx-auto overflow-hidden">
      <div className="text-center mb-16 md:mb-24">
        <p className="text-gold uppercase tracking-[0.4em] font-mono text-[10px] mb-4">Método Françoa</p>
        <h2 className="text-5xl md:text-7xl font-black uppercase leading-tight">Fluxo de <br /> <span className="text-gold italic font-serif">Impacto</span></h2>
      </div>
      
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2"></div>
        
        {steps.map((step, idx) => {
          // Alternating sides for desktop
          const isEven = idx % 2 === 0;
          
          return (
            <div key={idx} className="relative flex items-center mb-12 md:mb-24 last:mb-0">
              
              {/* Desktop layout: left/right alternating */}
              <div className={`hidden md:flex w-full ${isEven ? 'justify-start' : 'justify-end'} relative`}>
                {/* Node dot on the center line */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-4 h-4 rounded-full bg-zinc-950 border-2 border-gold outline outline-4 outline-zinc-950"></div>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`w-1/2 flex flex-col ${isEven ? 'text-right pr-16' : 'text-left pl-16'}`}
                >
                  <span className="text-gold text-[10px] font-bold uppercase tracking-widest mb-2">{String(idx + 1).padStart(2, '0')}. {step.label}</span>
                  <h3 className="text-2xl md:text-3xl font-black uppercase mb-3">{step.title}</h3>
                  <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed">{step.desc}</p>
                </motion.div>
              </div>

              {/* Mobile layout: strict timeline on the left */}
              <div className="flex md:hidden w-full pl-16 relative">
                 <div className="absolute top-0 left-6 -translate-x-1/2 mt-2">
                  <div className="w-4 h-4 rounded-full bg-zinc-950 border-2 border-gold outline outline-4 outline-zinc-950 z-10 relative"></div>
                </div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col text-left py-1"
                >
                  <span className="text-gold text-[10px] font-bold uppercase tracking-widest mb-1">{String(idx + 1).padStart(2, '0')}. {step.label}</span>
                  <h3 className="text-xl font-black uppercase mb-2">{step.title}</h3>
                  <p className="text-zinc-400 font-light text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
