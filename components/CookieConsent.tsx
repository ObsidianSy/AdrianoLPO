import React, { useState, useEffect } from 'react';
import { X, Shield } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after 2 seconds
      setTimeout(() => {
        setIsVisible(true);
      }, 2000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
    
    // Initialize analytics here when accepted
    // Example: gtag('consent', 'update', { analytics_storage: 'granted' });
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 animate-fade-in">
      <div className="container mx-auto max-w-5xl bg-luxury-900 border border-gold-900/30 rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="flex items-start gap-4 flex-grow">
          <div className="bg-gold-500/10 p-3 rounded-xl text-gold-500 flex-shrink-0">
            <Shield size={24} />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-2">Privacidade & Cookies</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Usamos cookies para melhorar sua experiência, analisar tráfego e personalizar conteúdo. 
              Ao continuar navegando, você concorda com nossa{' '}
              <a href="/privacy" className="text-gold-400 hover:text-gold-300 underline">
                Política de Privacidade
              </a>.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <button
            onClick={acceptCookies}
            className="px-6 py-3 bg-gold-600 hover:bg-gold-500 text-white font-bold text-sm rounded-xl transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-gold-500"
          >
            Aceitar Todos
          </button>
          <button
            onClick={declineCookies}
            className="px-6 py-3 bg-luxury-800 hover:bg-luxury-700 text-gray-300 font-bold text-sm rounded-xl transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Apenas Essenciais
          </button>
        </div>
      </div>
    </div>
  );
};
