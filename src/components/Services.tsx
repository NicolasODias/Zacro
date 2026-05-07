import { motion } from 'motion/react';
import { 
  Palette, 
  Share2, 
  ShoppingCart, 
  LayoutGrid, 
  TrendingUp, 
  Globe, 
  PenTool 
} from 'lucide-react';

const services = [
  {
    title: "Branding",
    icon: Palette,
    description: "Construção de identidade visual, posicionamento de marca e comunicação estratégica."
  },
  {
    title: "Social Media",
    icon: Share2,
    description: "Gestão de redes sociais, criação de conteúdo, planejamento editorial e fortalecimento da presença digital."
  },
  {
    title: "E-commerce",
    icon: ShoppingCart,
    description: "Estruturação, otimização e gestão de lojas virtuais para aumentar vendas online."
  },
  {
    title: "Marketplaces",
    icon: LayoutGrid,
    description: "Estratégias para venda em plataformas como Mercado Livre, Amazon, Shopee e outros canais."
  },
  {
    title: "Tráfego Pago",
    icon: TrendingUp,
    description: "Criação, gestão e otimização de campanhas de mídia paga com foco em conversão e performance."
  },
  {
    title: "Sites & Landing Pages",
    icon: Globe,
    description: "Desenvolvimento de sites institucionais e páginas de venda modernas, rápidas e otimizadas."
  },
  {
    title: "Design",
    icon: PenTool,
    description: "Criação de peças visuais, materiais digitais, campanhas e criativos para anúncios."
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-orange font-bold text-sm uppercase tracking-[0.3em]"
          >
            Nossas Soluções
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display font-black text-4xl md:text-6xl mt-4 mb-6"
          >
            Serviços <span className="text-orange-gradient">Completos</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Soluções digitais integradas para posicionamento, presença online, vendas e crescimento exponencial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-brand-dark border border-white/5 hover:border-brand-orange/50 transition-all group"
            >
              <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-6 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                <service.icon size={28} />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4 group-hover:text-brand-orange transition-colors">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-8 rounded-3xl bg-linear-to-br from-brand-orange to-orange-700 flex flex-col items-center justify-center text-center gap-4 group cursor-pointer"
          >
            <h3 className="font-display font-black text-3xl">Precisa de algo sob medida?</h3>
            <p className="text-white/80 text-sm">Criamos estratégias exclusivas para o seu modelo de negócio.</p>
            <a href="#contato" className="mt-2 bg-white text-brand-orange px-6 py-2 rounded-full font-bold text-sm tracking-tight hover:bg-black hover:text-white transition-all">
              Consultoria Grátis
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
