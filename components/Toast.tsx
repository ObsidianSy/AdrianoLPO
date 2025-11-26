import React, { useEffect } from 'react';
import { CheckCircle2, X, AlertCircle } from 'lucide-react';

export interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({ message, type, onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const bgColor = type === 'success' ? 'bg-green-600' : type === 'error' ? 'bg-red-600' : 'bg-blue-600';
  const Icon = type === 'success' ? CheckCircle2 : AlertCircle;

  return (
    <div className={`fixed top-6 right-6 z-[100] ${bgColor} text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-fade-in max-w-md`}>
      <Icon size={20} />
      <p className="text-sm font-medium flex-grow">{message}</p>
      <button onClick={onClose} className="hover:bg-white/20 p-1 rounded transition-colors" aria-label="Fechar notificação">
        <X size={16} />
      </button>
    </div>
  );
};
