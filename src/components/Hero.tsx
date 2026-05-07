import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background "Z" Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-brand-orange animate-float" strokeWidth="1">
          <path d="M20 20H80L20 80H80" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest mb-6">
            Estratégia • Design • Performance
          </span>
          <h1 className="font-display font-black text-5xl md:text-8xl lg:text-[9rem] leading-[0.9] tracking-tighter mb-8 max-w-5xl mx-auto">
            ZACRO <span className="text-orange-gradient">AGENCY</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-10 font-light">
            Estratégia, design e performance para marcas que querem crescer no digital de forma estruturada e profissional.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a 
              href="#contato"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-brand-orange text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 group transition-all hover:bg-orange-600 shadow-xl shadow-brand-orange/20"
            >
              Fale com a Zacro
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              href="#servicos"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all"
            >
              Conheça nossos serviços
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative details */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="flex flex-col gap-2 font-mono text-[10px] text-gray-500 uppercase tracking-widest">
          <span>Posicionamento Digital</span>
          <span>Presença Online</span>
          <span>Vendas Estratégicas</span>
        </div>
      </div>
      
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="w-px h-24 bg-linear-to-b from-brand-orange to-transparent"></div>
      </div>
    </section>
  );
}
