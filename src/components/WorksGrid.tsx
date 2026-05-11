import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export const WorksGrid = () => {
  const works = [
    { title: "Herança", cat: "Institucional", img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1" },
    { title: "Inovação", cat: "Luxury", img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7" },
    { title: "Floresta", cat: "Docs", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728" },
    { title: "Escala", cat: "Ads", img: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd" },
    { title: "Vortex", cat: "Clipes", img: "https://images.unsplash.com/photo-1518131672697-613becd4fab5" },
    { title: "Noite", cat: "Fashion", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b" },
    { title: "Sombras", cat: "Docs", img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4" },
    { title: "Motor", cat: "Automotive", img: "https://images.unsplash.com/photo-1520106202447-fdcd798b31ea" },
  ];

  return (
    <section id="obras" className="py-24 md:py-40 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="mb-12 md:mb-20">
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
          Obras <br /> <span className="text-gold italic font-serif">de Françoa</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {works.map((work, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: (idx % 4) * 0.1, duration: 0.6 }}
            className="aspect-[4/5] md:aspect-square rounded-2xl md:rounded-3xl overflow-hidden relative group shadow-2xl bg-zinc-900 cursor-pointer"
          >
            <img 
              src={`${work.img}?auto=format&fit=crop&q=80&w=600`} 
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:opacity-60"
              alt={work.title}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-300 delay-100">
                <Play size={20} className="ml-1" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-5 md:p-6 flex flex-col justify-end">
              <span className="text-gold text-[10px] md:text-xs font-bold uppercase">{work.cat}</span>
              <h3 className="text-lg md:text-2xl font-bold uppercase text-white leading-tight mt-1">{work.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
