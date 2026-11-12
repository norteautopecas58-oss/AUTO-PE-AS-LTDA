import React, { useState } from 'react';
import { Menu, X, ArrowDown } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { siteConfig } from '../config/siteConfig';
import { openWhatsAppDirect } from '../utils/whatsapp';

interface NavbarProps {
  onScrollToForm: () => void;
  onScrollToSection: (sectionId: string) => void;
  onOpenPolicies?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onScrollToForm,
  onScrollToSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onScrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    openWhatsAppDirect(
      `Olá! Gostaria de consultar a disponibilidade de um motor na ${siteConfig.company.displayName}.`,
      'navbar_cta'
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-black text-white border-b-2 border-red-600 shadow-xl shadow-black/80">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-2 sm:gap-6 w-full">
        
        {/* Logo Redonda e Nome da Empresa: AUTO MOTORES LTDA */}
        <button
          onClick={() => handleNavClick('topo')}
          className="text-left group flex items-center gap-2.5 sm:gap-3 cursor-pointer focus:outline-none shrink-0"
          title="Página Inicial - AUTO MOTORES LTDA"
        >
          <img
            src="/logo.png"
            alt="Logo Circular AUTO MOTORES LTDA"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-contain bg-zinc-900 border-2 border-red-600 shadow-md shrink-0 transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="text-lg sm:text-2xl font-black tracking-tight text-white group-hover:text-red-400 transition-colors whitespace-nowrap">
              {siteConfig.company.displayName}
            </span>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-500 -mt-1 hidden sm:block">
              Motores Novos & Seminovos
            </span>
          </div>
        </button>

        {/* Links de Navegação */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-semibold text-zinc-300">
          <button
            onClick={() => handleNavClick('topo')}
            className="cursor-pointer whitespace-nowrap shrink-0 hover:text-red-400 transition-colors py-1"
          >
            Início
          </button>
          <button
            onClick={() => handleNavClick('consulta-motor')}
            className="cursor-pointer whitespace-nowrap shrink-0 hover:text-red-400 transition-colors py-1 text-red-400 font-bold"
          >
            Consultar Motor
          </button>
          <button
            onClick={() => handleNavClick('motores')}
            className="cursor-pointer whitespace-nowrap shrink-0 hover:text-red-400 transition-colors py-1"
          >
            Motores Disponíveis
          </button>
          <button
            onClick={() => handleNavClick('nossa-loja')}
            className="cursor-pointer whitespace-nowrap shrink-0 hover:text-emerald-400 transition-colors py-1 text-emerald-400"
          >
            Fotos de Motores & Oficina
          </button>
          <button
            onClick={() => handleNavClick('garantia')}
            className="cursor-pointer whitespace-nowrap shrink-0 hover:text-red-400 transition-colors py-1"
          >
            Garantia & Nota
          </button>
          <button
            onClick={() => handleNavClick('contato')}
            className="cursor-pointer whitespace-nowrap shrink-0 hover:text-red-400 transition-colors py-1"
          >
            Fale Conosco
          </button>
        </nav>

        {/* Ação Principal: WhatsApp com Logo Oficial */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onScrollToForm}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-black text-white bg-red-600 hover:bg-red-500 rounded-lg shadow-md hover:shadow-red-600/30 transition-all cursor-pointer uppercase tracking-wider"
          >
            <ArrowDown className="w-3.5 h-3.5" />
            <span>Cotar Motor</span>
          </button>

          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-black text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-lg shadow-md transition-all whitespace-nowrap shrink-0 cursor-pointer ring-2 ring-emerald-500/40"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0 fill-current" />
            <span className="hidden sm:inline">Consulte no WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </button>

          {/* Botão Menu Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 text-zinc-300 hover:text-white focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950 border-b border-red-600/40 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            <button
              onClick={() => handleNavClick('topo')}
              className="text-left px-3 py-2 rounded-md text-base font-semibold text-zinc-200 hover:bg-zinc-900"
            >
              Início
            </button>
            <button
              onClick={() => handleNavClick('consulta-motor')}
              className="text-left px-3 py-2 rounded-md text-base font-bold text-red-400 hover:bg-zinc-900"
            >
              Consultar Disponibilidade do Motor
            </button>
            <button
              onClick={() => handleNavClick('motores')}
              className="text-left px-3 py-2 rounded-md text-base font-semibold text-zinc-200 hover:bg-zinc-900"
            >
              Motores Novos e Seminovos
            </button>
            <button
              onClick={() => handleNavClick('nossa-loja')}
              className="text-left px-3 py-2 rounded-md text-base font-semibold text-emerald-400 hover:bg-zinc-900"
            >
              Fotos de Motores & Oficina
            </button>
            <button
              onClick={() => handleNavClick('garantia')}
              className="text-left px-3 py-2 rounded-md text-base font-semibold text-zinc-200 hover:bg-zinc-900"
            >
              Garantia e Nota
            </button>
            <button
              onClick={() => handleNavClick('contato')}
              className="text-left px-3 py-2 rounded-md text-base font-semibold text-zinc-200 hover:bg-zinc-900"
            >
              Fale Conosco
            </button>
          </div>

          <div className="pt-2 border-t border-zinc-800 space-y-2">
            <button
              onClick={() => {
                onScrollToForm();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-center font-black text-white bg-red-600 rounded-lg text-sm shadow uppercase tracking-wider"
            >
              Preencher Dados do Motor
            </button>
            <button
              onClick={() => {
                handleWhatsAppClick();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-center font-black text-white bg-emerald-600 rounded-lg text-sm shadow ring-2 ring-emerald-500/40"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              <span>Chamar no WhatsApp Comercial</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
