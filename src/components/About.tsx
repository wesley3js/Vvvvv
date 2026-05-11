import { motion, useScroll, useTransform, useMotionTemplate } from 'motion/react';
import { useRef } from 'react';

export const About = () => {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const insetY = useTransform(scrollYProgress, [0.15, 0.4], [25, 0]);
  const insetX = useTransform(scrollYProgress, [0.15, 0.4], [15, 0]);
  const round = useTransform(scrollYProgress, [0.15, 0.4], [40, 0]);

  // FIX: Using motion template to safely apply multiple dynamic values to clip-path
  const clipPath = useMotionTemplate`inset(${insetY}% ${insetX}% ${insetY}% ${insetX}% round ${round}px)`;

  return (
    <section id="sobre" ref={containerRef} className="h-[200vh] relative overflow-hidden bg-zinc-950">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        <motion.div 
          style={{ clipPath }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Visão de Autor"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-6 md:p-10 backdrop-blur-sm">
            <h2 className="text-5xl md:text-8xl font-black text-white italic font-serif leading-none">Visão <br /> Autoral</h2>
            <p className="max-w-2xl mt-8 md:mt-10 text-zinc-200 text-lg md:text-xl font-light leading-relaxed">
              Chamo-me Françoa e não apenas capto imagens; desenho estratégias de percepção. O meu foco é colocar o seu produto no topo da pirâmide visual, onde a qualidade não é discutida, mas admirada.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
