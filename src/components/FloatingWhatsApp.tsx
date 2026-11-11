import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { openWhatsAppDirect } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const handleClick = () => {
    openWhatsAppDirect(
      `Olá! Acessei o site da ${siteConfig.company.displayName} e gostaria de consultar a disponibilidade de um motor para o meu carro.`,
      'floating_button'
    );
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 pointer-events-auto">
      <button
        onClick={handleClick}
        className="group flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-full shadow-2xl hover:shadow-emerald-600/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
        aria-label="Consulte disponibilidade do motor no WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-current shrink-0" />
        </div>
        <span className="text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap">
          Consulte seu motor no WhatsApp
        </span>
      </button>
    </div>
  );
};
