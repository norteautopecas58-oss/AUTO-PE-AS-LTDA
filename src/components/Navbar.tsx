import React, { useState } from 'react';
import { MessageCircle, Menu, X, ShieldCheck } from 'lucide-react';
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
      `Olá! Gostaria de consultar a disponibilidade de um motor automotivo na ${siteConfig.company.displayName}.`,
      'navbar_cta'
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white border-b border-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-2 sm:gap-8 w-full">
        
        {/* Zone 1: Clean Brand Name */}
        <button
          onClick={() => handleNavClick('topo')}
          className="text-left group flex items-center gap-1.5 sm:gap-2 cursor-pointer focus:outline-none shrink-0"
          title="Página Inicial"
        >
          <div className="flex flex-col">
            <span className="text-lg sm:text-2xl font-extrabold tracking-tight text-white group-hover:text-blue-400 transition-colors whitespace-nowrap">
              {siteConfig.company.displayName}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-red-500 -mt-1 hidden sm:block">
              Motores Automotivos & Parciais
            </span>
          </div>
          <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" aria-hidden="true" />
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-slate-300">
          <button
            onClick={() => handleNavClick('topo')}
            className="cursor-pointer whitespace-nowrap shrink-0 hover:text-white transition-colors py-1"
          >
            Início
          </button>
          <button
            onClick={() => handleNavClick('motores')}
            className="cursor-pointer whitespace-nowrap shrink-0 hover:text-white transition-colors py-1"
          >
            Motores Disponíveis
          </button>
          <button
            onClick={() => handleNavClick('nossa-loja')}
            className="cursor-pointer whitespace-nowrap shrink-0 hover:text-white transition-colors py-1 text-emerald-400 font-semibold"
          >
            Fotos da Loja & Equipe
          </button>
          <button
            onClick={() => handleNavClick('diferenca')}
            className="cursor-pointer whitespace-nowrap shrink-0 hover:text-white transition-colors py-1"
          >
            Completo vs Parcial
          </button>
          <button
            onClick={() => handleNavClick('garantia')}
            className="cursor-pointer whitespace-nowrap shrink-0 hover:text-white transition-colors py-1"
          >
            Garantia & Procedência
          </button>
          <button
            onClick={() => handleNavClick('contato')}
            className="cursor-pointer whitespace-nowrap shrink-0 hover:text-white transition-colors py-1"
          >
            Localização & Contato
          </button>
        </nav>

        {/* Zone 3: Primary Action CTA */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onScrollToForm}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-red-600 hover:bg-red-500 rounded-lg shadow transition-colors cursor-pointer"
          >
            <span>Cotar Motor</span>
          </button>

          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 shrink-0 fill-current" />
            <span className="hidden sm:inline">Consulte no WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            <button
              onClick={() => handleNavClick('topo')}
              className="text-left px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800"
            >
              Início
            </button>
            <button
              onClick={() => handleNavClick('motores')}
              className="text-left px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800"
            >
              Motores Disponíveis
            </button>
            <button
              onClick={() => handleNavClick('nossa-loja')}
              className="text-left px-3 py-2 rounded-md text-base font-medium text-emerald-400 hover:bg-slate-800"
            >
              Fotos da Loja & Equipe
            </button>
            <button
              onClick={() => handleNavClick('diferenca')}
              className="text-left px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800"
            >
              Completo vs Parcial
            </button>
            <button
              onClick={() => handleNavClick('garantia')}
              className="text-left px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800"
            >
              Garantia & Procedência
            </button>
            <button
              onClick={() => handleNavClick('contato')}
              className="text-left px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800"
            >
              Localização & Contato
            </button>
          </div>

          <div className="pt-2 border-t border-slate-800 space-y-2">
            <button
              onClick={() => {
                onScrollToForm();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-center font-bold text-white bg-red-600 rounded-lg text-sm shadow"
            >
              Preencher Dados do Motor
            </button>
            <button
              onClick={() => {
                handleWhatsAppClick();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-center font-bold text-white bg-emerald-600 rounded-lg text-sm shadow"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Falar no WhatsApp Comercial</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
