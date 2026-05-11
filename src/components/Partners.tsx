export const Partners = () => (
  <section className="py-16 md:py-24 border-y border-zinc-900/50 bg-zinc-950/30">
    <div className="max-w-6xl mx-auto px-6">
      <p className="text-center text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-10 md:mb-14">Parceiros em Excelência</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 opacity-30 grayscale hover:opacity-100 transition-all duration-700">
        {['LUX_CARS', 'VOGUE_ST', 'TECH_HUB', 'ROYAL_RE', 'FINE_DIN', 'GLOBAL_M'].map(brand => (
          <div key={brand} className="flex items-center justify-center font-black text-lg md:text-xl italic tracking-tighter text-white">{brand}</div>
        ))}
      </div>
    </div>
  </section>
);
