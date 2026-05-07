import { motion } from 'motion/react';
import { Instagram, MessageCircle } from 'lucide-react';

const team = [
  {
    name: "Nicolas Dias",
    role: "Sócio / Estrategista Digital",
    bio: "Especialista em estratégia digital, posicionamento de marca e estruturação de operações online.",
    image: "/input_file_0.png",
    socials: { 
      whatsapp: "https://wa.me/5535998675984", 
      instagram: "https://www.instagram.com/eusounicolasdias/" 
    }
  },
  {
    name: "Tulio Bacellar",
    role: "Sócio / Especialista em Performance",
    bio: "Focado em tráfego pago, crescimento digital, análise de dados e otimização de campanhas.",
    image: "/input_file_1.png",
    socials: { 
      whatsapp: "https://wa.me/5535984583792" 
    }
  }
];

export default function Team() {
  return (
    <section id="equipe" className="py-24 bg-brand-dark px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display font-black text-4xl md:text-6xl mb-6">
              Mentes por trás da <span className="text-orange-gradient">Zacro</span>
            </h2>
            <p className="text-gray-400 text-lg font-light">
              Especialistas apaixonados por transformar negócios através da tecnologia e criatividade.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="text-right">
              <div className="text-5xl font-display font-black text-white/10 uppercase">Expertise</div>
              <div className="text-brand-orange font-mono text-xs tracking-[0.2em] uppercase">Results Driven</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6 bg-brand-black/40 border border-white/5">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                
                {/* Social links hover overlay */}
                <div className="absolute bottom-6 left-6 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <a href={member.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-black hover:bg-brand-orange hover:text-white transition-colors">
                    <MessageCircle size={20} />
                  </a>
                  {member.socials.instagram && (
                    <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-black hover:bg-brand-orange hover:text-white transition-colors">
                      <Instagram size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="font-display font-bold text-2xl mb-1 group-hover:text-brand-orange transition-colors">{member.name}</h3>
              <p className="text-brand-orange font-bold text-xs uppercase tracking-widest mb-4">{member.role}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
          
          <motion.a
            href="https://wa.me/5535998675984?text=Olá,%20vi%20a%20vaga%20no%20site%20da%20Zacro%20e%20gostaria%20de%20me%20candidatar."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center p-12 rounded-3xl border-2 border-dashed border-white/10 group hover:border-brand-orange transition-colors bg-brand-black/20"
          >
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 text-gray-500 group-hover:text-brand-orange transition-colors">
              <span className="text-4xl">+</span>
            </div>
            <h3 className="font-display font-bold text-xl mb-2">Sua vaga aqui?</h3>
            <p className="text-gray-500 text-center text-sm">Estamos sempre em busca de novos talentos para o time.</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
