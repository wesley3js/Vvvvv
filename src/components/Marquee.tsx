import { motion } from 'motion/react';

export const Marquee = () => (
  <section className="h-40 md:h-48 bg-zinc-950 overflow-hidden relative flex items-center">
    <motion.div 
      style={{ rotate: -2, scale: 1.05 }}
      className="absolute w-[110%] left-[-5%] bg-gold h-14 md:h-16 flex items-center z-10 shadow-xl overflow-hidden"
    >
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        <span className="px-10 text-white font-black uppercase text-xs md:text-sm">Françoa • 8K Resolution • Color Grading • Sound Design • </span>
        <span className="px-10 text-white font-black uppercase text-xs md:text-sm">Françoa • 8K Resolution • Color Grading • Sound Design • </span>
        <span className="px-10 text-white font-black uppercase text-xs md:text-sm">Françoa • 8K Resolution • Color Grading • Sound Design • </span>
      </motion.div>
    </motion.div>
    
    <motion.div 
      style={{ rotate: 1, scale: 1.05 }}
      className="absolute w-[110%] left-[-5%] bg-zinc-900 border-y border-zinc-800 h-14 md:h-16 flex items-center shadow-xl overflow-hidden"
    >
      <motion.div 
        animate={{ x: [-1000, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        <span className="px-10 text-white font-black uppercase text-xs md:text-sm">Brand Authority • ROI Focused • Storytelling • Cinematic • </span>
        <span className="px-10 text-white font-black uppercase text-xs md:text-sm">Brand Authority • ROI Focused • Storytelling • Cinematic • </span>
        <span className="px-10 text-white font-black uppercase text-xs md:text-sm">Brand Authority • ROI Focused • Storytelling • Cinematic • </span>
      </motion.div>
    </motion.div>
  </section>
);
