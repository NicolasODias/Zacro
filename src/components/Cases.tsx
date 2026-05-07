import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const cases = [
  {
    client: "Local Retailer",
    title: "Reposicionamento de Marca",
    description: "Criação de nova identidade visual e estratégia de comunicação digital.",
    metrics: "+85% alcance",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80"
  },
  {
    client: "Fashion Hub",
    title: "Aumento de Vendas E-commerce",
    description: "Otimização de checkout e campanhas focadas em CRO.",
    metrics: "+120% vendas",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
  },
  {
    client: "B2B Solutions",
    title: "Tráfego Pago & Performance",
    description: "Gestão estratégica de Google e Meta Ads para geração de leads.",
    metrics: "+60% leads",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80"
  }
];

export default function Cases() {
  return (
    <section id="cases" className="py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-orange font-bold text-sm uppercase tracking-widest">Portfólio</span>
            <h2 className="font-display font-black text-4xl md:text-6xl mt-4 mb-6">
              Cases de <span className="text-orange-gradient">Sucesso</span>
            </h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-sm font-bold border-b border-brand-orange pb-1 hover:text-brand-orange transition-colors">
            Ver todos os projetos <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-6">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-black/10 transition-colors"></div>
                <div className="absolute top-6 right-6">
                  <div className="bg-brand-orange text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    {project.metrics}
                  </div>
                </div>
              </div>
              
              <p className="text-brand-orange font-bold text-[10px] uppercase tracking-widest mb-2">{project.client}</p>
              <h3 className="font-display font-bold text-2xl mb-2 group-hover:text-brand-orange transition-colors">{project.title}</h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">{project.description}</p>
              
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-500">
                <ExternalLink size={18} className="group-hover:text-white transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:hidden text-center">
           <a href="#" className="inline-flex items-center gap-2 text-sm font-bold border-b border-brand-orange pb-1 text-brand-orange">
            Ver todos os projetos <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
