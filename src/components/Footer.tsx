import Logo from './Logo';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

const links = {
  internal: [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Equipe', href: '#equipe' },
    { name: 'Cases', href: '#cases' },
  ],
  services: [
    { name: 'Branding', href: '#servicos' },
    { name: 'Social Media', href: '#servicos' },
    { name: 'E-commerce', href: '#servicos' },
    { name: 'Tráfego Pago', href: '#servicos' },
  ],
  social: [
    { icon: Instagram, href: 'https://www.instagram.com/zacroagency/' },
    { icon: MessageCircle, href: 'https://wa.me/5535998675984' },
    { icon: Linkedin, href: '#' },
  ]
};

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 bg-brand-black px-6 border-t border-white/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-8">
              <Logo className="w-10 h-10" />
              <span className="font-display font-bold text-2xl tracking-tighter uppercase">Zacro <span className="text-brand-orange">Agency</span></span>
            </a>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed max-w-xs">
              Estratégia, design e performance para marcas que querem crescer no digital de forma estruturada e profissional.
            </p>
            <div className="flex gap-4">
              {links.social.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-orange transition-colors">
                  <s.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-lg mb-8 uppercase tracking-widest text-white/50 text-xs">Links Rápidos</h4>
            <ul className="space-y-4">
              {links.internal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-brand-orange transition-colors text-sm font-medium">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-8 uppercase tracking-widest text-white/50 text-xs">Serviços</h4>
            <ul className="space-y-4">
              {links.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-brand-orange transition-colors text-sm font-medium">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-8 uppercase tracking-widest text-white/50 text-xs">Novidades</h4>
            <p className="text-gray-500 text-sm mb-6">Receba insights mensais sobre estratégia e performance.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Seu email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm outline-hidden focus:border-brand-orange w-full" />
              <button className="bg-brand-orange text-white px-4 py-2 rounded-lg font-bold text-xs uppercase hover:bg-orange-600 transition-colors">OK</button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Zacro Agency. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-[10px] text-gray-600 uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
