import { motion } from 'motion/react';
import { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, Phone, Instagram, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `Olá, meu nome é ${formData.name}. %0A%0AEmpresa: ${formData.company}%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0A%0AMensagem: ${formData.message}`;
    window.open(`https://wa.me/5535998675984?text=${message}`, '_blank');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contato" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-orange font-bold text-sm uppercase tracking-widest">Contato</span>
            <h2 className="font-display font-black text-4xl md:text-6xl mt-4 mb-8">
              Pronto para transformar sua <span className="text-orange-gradient">presença digital?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 font-light max-w-lg">
              Entre em contato com a Zacro Agency e descubra como podemos ajudar sua marca a crescer com estratégia, design e performance.
            </p>
            
            <div className="space-y-6">
              <a href="https://wa.me/5535998675984" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Telefone</p>
                  <p className="text-lg font-medium">(35) 99867-5984</p>
                </div>
              </a>
              
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Email</p>
                  <p className="text-lg font-medium">contato@zacro.agency</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="https://www.instagram.com/zacroagency/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/5535998675984" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all">
                <MessageCircle size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-dark p-10 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden"
          >
            {/* Background Z decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none translate-x-1/2 -translate-y-1/2">
               <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-brand-orange" strokeWidth="2">
                <path d="M20 20H80L20 80H80" />
              </svg>
            </div>

            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Nome</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-brand-black border border-white/10 rounded-xl px-5 py-4 focus:border-brand-orange outline-hidden transition-all placeholder:text-gray-700" 
                    placeholder="Seu nome" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">E-mail</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-brand-black border border-white/10 rounded-xl px-5 py-4 focus:border-brand-orange outline-hidden transition-all placeholder:text-gray-700" 
                    placeholder="seu@email.com" 
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-brand-black border border-white/10 rounded-xl px-5 py-4 focus:border-brand-orange outline-hidden transition-all placeholder:text-gray-700" 
                    placeholder="(11) 99999-9999" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Empresa</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-brand-black border border-white/10 rounded-xl px-5 py-4 focus:border-brand-orange outline-hidden transition-all placeholder:text-gray-700" 
                    placeholder="Nome da empresa" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Mensagem</label>
                <textarea 
                  rows={4} 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-brand-black border border-white/10 rounded-xl px-5 py-4 focus:border-brand-orange outline-hidden transition-all placeholder:text-gray-700 resize-none" 
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-brand-orange text-white py-5 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-orange-600 transition-all shadow-lg shadow-brand-orange/20"
              >
                Enviar Mensagem <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
