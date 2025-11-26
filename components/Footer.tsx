import React from 'react';
import { Instagram, Linkedin, Mail, Lock } from 'lucide-react';

const WHATSAPP_DEFAULT_MESSAGE = 'Olá, vi o site e o método Rota 360. Gostaria de agendar uma sessão para alinhar minha direção e meu posicionamento. Meu nome: [SEU_NOME].';
const WA_LINK = (phone: string) => `https://wa.me/${phone}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`;
import { FooterProps } from '../types';

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  return (
    <footer id="contato" className="bg-black py-20 rounded-t-[3rem] border-t border-luxury-800 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
          
          <div className="text-center md:text-left max-w-sm">
            <h2 className="font-serif text-3xl text-white mb-2">ADRIANO RODRIGO</h2>
            <p className="text-xs text-gold-600 uppercase tracking-[0.3em] mb-8">Mentor de Posicionamento</p>
            <p className="text-gray-600 text-sm mb-8 leading-relaxed">
              Você não precisa de mais velocidade.<br/>
              Precisa de direção.
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gold-400 transition-colors bg-white/5 p-3 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gold-500" aria-label="Instagram de Adriano Rodrigo"><Instagram size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gold-400 transition-colors bg-white/5 p-3 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gold-500" aria-label="LinkedIn de Adriano Rodrigo"><Linkedin size={18} /></a>
              <a href="mailto:contato@adrianorodrigo.com" className="text-gray-600 hover:text-gold-400 transition-colors bg-white/5 p-3 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gold-500" aria-label="Enviar email para contato"><Mail size={18} /></a>
            </div>
          </div>

          <div className="text-center md:text-right max-w-md">
            <h3 className="font-serif text-2xl text-white mb-6">Vamos Conversar?</h3>
            <p className="text-gray-500 font-light text-sm mb-8 leading-relaxed">
              Se você busca direção e não apenas velocidade, está no lugar certo. Agende uma sessão de Rota 360 ou Mentoria.
            </p>
            <a href={WA_LINK('5511999999999')} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-gold-700 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold-600 transition-colors shadow-lg shadow-black/50 rounded-full focus:outline-none focus:ring-2 focus:ring-gold-500">
              Agendar Conversa
            </a>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-luxury-900 flex flex-col md:flex-row justify-between items-center text-xs text-gray-700 gap-4">
          <p>&copy; {new Date().getFullYear()} Adriano Rodrigo. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <p className="tracking-widest uppercase">Rota 360° Method</p>
            <button 
              onClick={onOpenAdmin}
              className="flex items-center gap-2 text-gray-700 hover:text-gold-700 transition-colors px-3 py-1 rounded border border-transparent hover:border-gold-900/10 focus:outline-none focus:ring-2 focus:ring-gold-500"
              aria-label="Abrir área administrativa"
            >
              <Lock size={12} />
              <span className="font-bold uppercase tracking-wider text-[10px]">Área do Mentor</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
