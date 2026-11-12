import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
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
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 pointer-events-auto">
      <button
        onClick={handleClick}
        className="group flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-full shadow-2xl shadow-emerald-950/60 transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer focus:outline-none ring-4 ring-emerald-500/30"
        aria-label="Consulte disponibilidade do motor no WhatsApp"
      >
        <div className="relative">
          <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 fill-current shrink-0 animate-pulse" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-xs sm:text-sm font-black tracking-tight whitespace-nowrap leading-tight">
            Consulte seu motor no WhatsApp
          </span>
          <span className="text-[10px] text-emerald-100 font-semibold leading-tight hidden sm:block">
            Orçamento em poucos minutos
          </span>
        </div>
      </button>
    </div>
  );
};
