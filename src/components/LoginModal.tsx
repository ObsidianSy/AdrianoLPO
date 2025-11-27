// Login Modal Component
// Displays authentication form for admin access

import React, { useState, useEffect, useRef } from 'react';
import { X, LogIn, AlertCircle, Loader } from 'lucide-react';
import { loginWithEmail } from '../services/auth.service';

interface LoginModalProps {
  onClose: () => void;
  onLoginSuccess: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    // Focus close button on mount
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const result = await loginWithEmail(email, password);

    setIsLoading(false);

    if (result.success) {
      onLoginSuccess();
      onClose();
    } else {
      setError(result.error || 'Erro ao fazer login');
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 animate-fade-in" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="login-modal-title"
    >
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-md" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-luxury-900 w-full max-w-md rounded-3xl border border-gold-900/30 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-gold-900/20 bg-gradient-to-r from-luxury-950 to-luxury-900">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-gold-500/10 p-2.5 rounded-xl text-gold-500">
                <LogIn size={22} />
              </div>
              <div>
                <h2 id="login-modal-title" className="text-white font-serif text-xl">
                  Área do Mentor
                </h2>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  Acesso Restrito
                </p>
              </div>
            </div>
            <button 
              ref={closeButtonRef}
              onClick={onClose} 
              className="text-gray-500 hover:text-white transition-colors bg-white/5 p-2.5 rounded-xl hover:bg-white/10" 
              aria-label="Fechar modal"
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          
          {/* Error Message */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-start gap-3 animate-fade-in">
              <AlertCircle className="text-red-400 flex-shrink-0 mt-0.5" size={20} />
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {/* Email Field */}
          <div>
            <label className="block text-xs uppercase text-gray-400 font-bold mb-2">
              Email
            </label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              disabled={isLoading}
              className="w-full bg-luxury-950 border border-luxury-600/30 rounded-xl p-4 text-white focus:border-gold-500 outline-none transition-all placeholder-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-xs uppercase text-gray-400 font-bold mb-2">
              Senha
            </label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              disabled={isLoading}
              className="w-full bg-luxury-950 border border-luxury-600/30 rounded-xl p-4 text-white focus:border-gold-500 outline-none transition-all placeholder-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            disabled={isLoading}
            className="w-full bg-gold-600 hover:bg-gold-500 text-white font-bold uppercase tracking-wider text-sm py-4 rounded-xl transition-all shadow-lg hover:shadow-gold-600/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader className="animate-spin" size={18} />
                Entrando...
              </>
            ) : (
              <>
                <LogIn size={18} />
                Entrar
              </>
            )}
          </button>

          {/* Info Text */}
          <p className="text-center text-gray-600 text-xs mt-4">
            🔒 Acesso exclusivo para administradores autorizados
          </p>
        </form>
      </div>
    </div>
  );
};
