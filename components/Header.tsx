import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from '../types';

const NAV_LINKS: NavLink[] = [
  { name: 'Sobre', href: '#sobre' },
  { name: 'Rota 360', href: '#metodo' },
  { name: 'Pilares', href: '#pilares' },
  { name: 'Contato', href: '#contato' },
];

const smoothScrollTo = (id: string) => {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-luxury-950/95 backdrop-blur-md py-4 border-b border-luxury-800 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" onClick={() => window.scrollTo(0,0)} className="flex flex-col items-center group cursor-pointer">
          <span className="font-serif text-lg tracking-[0.2em] text-gold-200 font-bold group-hover:text-gold-400 transition-colors">ADRIANO</span>
          <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 group-hover:text-gold-300 transition-colors">Rodrigo</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-12">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo(link.href);
              }}
              className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-gold-400 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 focus:ring-offset-luxury-950 rounded-sm px-2 py-1"
              aria-label={`Navegar para seção ${link.name}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gold-200 p-2 rounded-full hover:bg-white/5 transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full bg-luxury-950 border-b border-gold-900/50 shadow-2xl transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col items-center py-12 space-y-8 h-screen bg-luxury-950/95 backdrop-blur-xl">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                smoothScrollTo(link.href);
              }}
              className="text-lg font-serif uppercase tracking-widest text-gray-400 hover:text-gold-400 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
