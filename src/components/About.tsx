import { motion } from 'motion/react';

export default function About() {
  const points = [
    { title: "História", content: "A Zacro Agency nasceu para ajudar marcas a se posicionarem com força no ambiente digital." },
    { title: "Missão", content: "Unir estratégia, criatividade e performance para criar soluções que conectam empresas aos seus públicos." },
    { title: "Visão", content: "Ser referência mundial em estruturação de operações digitais e crescimento de marcas." },
    { title: "Valores", content: "Transparência, foco em resultados, inovação constante e excelência em design." }
  ];

  return (
    <section id="sobre" className="py-24 bg-brand-dark px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-8">
              A agência que une <span className="text-brand-orange">estratégia, criatividade e performance.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Unimos estratégia, design e performance para criar soluções que conectam empresas aos seus públicos, fortalecem marcas e geram crescimento real. Na Zacro Agency, não apenas entregamos serviços, mas construímos o futuro digital de nossos parceiros.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {points.map((point) => (
                <div key={point.title} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-orange/30 transition-all group">
                  <h3 className="font-display font-bold text-xl mb-2 group-hover:text-brand-orange transition-colors">{point.title}</h3>
                  <p className="text-gray-500 text-sm">{point.content}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-linear-to-br from-brand-orange/20 to-transparent rounded-3xl overflow-hidden flex items-center justify-center p-8 group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay group-hover:scale-110 transition-transform duration-700"></div>
              <div className="text-[15rem] font-display font-black text-white/5 select-none transition-all group-hover:text-brand-orange/10 group-hover:scale-110 duration-500">Z</div>
              <div className="relative z-10 text-center">
                <p className="text-3xl font-display font-bold italic text-white/80">"Estratégia é o caminho, Performance é o destino."</p>
              </div>
            </div>
            
            {/* Stats highlight */}
            <div className="absolute -bottom-6 -right-6 md:-bottom-12 md:-right-12 bg-brand-orange p-8 rounded-3xl shadow-2xl shadow-brand-orange/40">
              <div className="text-4xl font-display font-black">+100k</div>
              <div className="text-xs uppercase tracking-widest font-bold opacity-80">Leads Gerados</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
