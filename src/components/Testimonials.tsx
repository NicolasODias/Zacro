import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    content: "A Zacro Agency transformou nossa presença digital. O trabalho trouxe mais profissionalismo para nossa marca e resultados reais em vendas.",
    author: "Ricardo Senna",
    role: "CEO, TechInnovate",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&fit=crop"
  },
  {
    content: "O foco em performance da equipe é impressionante. Nossas campanhas nunca tiveram ROI tão alto como agora.",
    author: "Marina Lopes",
    role: "Diretora de Marketing, LuxHome",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&fit=crop"
  },
  {
    content: "O processo de branding foi incrível. Eles entenderam a essência da nossa marca e traduziram isso perfeitamente no visual.",
    author: "Gabriel Santos",
    role: "Fundador, EcoCycle",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&h=256&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-dark px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-4xl md:text-5xl">O que nossos <span className="text-brand-orange">clientes dizem</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-3xl bg-brand-black border border-white/5 relative group hover:border-brand-orange/30 transition-all"
            >
              <div className="absolute top-10 right-10 text-brand-orange opacity-20 group-hover:opacity-100 transition-opacity">
                <Quote size={40} />
              </div>
              
              <p className="text-gray-400 text-lg italic mb-8 relative z-10">"{t.content}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-orange/20">
                  <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white leading-tight">{t.author}</h4>
                  <p className="text-brand-orange text-xs font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
