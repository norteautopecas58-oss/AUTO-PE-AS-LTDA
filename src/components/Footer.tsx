import React from 'react';
import { Phone, Mail, ArrowUp } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { siteConfig } from '../config/siteConfig';
import { openWhatsAppDirect } from '../utils/whatsapp';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenLegalTab: (tab: 'privacidade' | 'trocas' | 'termos') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onScrollToSection,
  onOpenLegalTab,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-zinc-400 border-t-2 border-red-600 text-xs sm:text-sm w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12 w-full">
          
          {/* Column 1 & 2: Brand & Corporate CNPJ Identification */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Logo AUTO MOTORES LTDA"
                className="w-12 h-12 rounded-full object-contain bg-zinc-900 border-2 border-red-600 shadow-md shrink-0"
              />
              <span className="text-xl font-black text-white tracking-tight">
                {siteConfig.company.displayName}
              </span>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed pr-4">
              Comércio especializado em motores automotivos novos e seminovos revisados. Emitimos garantia e nota: 1 ano de garantia para motores novos e 6 meses para seminovos revisados.
            </p>

            {/* Corporate Identification Box with CNPJ */}
            <div className="p-4 bg-zinc-950 rounded-2xl border border-zinc-800 text-xs space-y-1.5 text-zinc-300 font-mono">
              <p className="text-red-500 font-sans font-black uppercase text-[10px] tracking-wider mb-1">
                Identificação Cadastral da Empresa:
              </p>
              <p><span className="text-zinc-500">Razão Social:</span> {siteConfig.company.legalName}</p>
              <p><span className="text-zinc-500">Nome Comercial:</span> {siteConfig.company.displayName}</p>
              <p><span className="text-zinc-500">CNPJ:</span> {siteConfig.company.cnpj}</p>
              <p><span className="text-zinc-500">Inscrição Estadual:</span> Ativa e Regular</p>
            </div>
          </div>

          {/* Column 3: Navegação do Site */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onScrollToSection('topo')}
                  className="hover:text-red-400 transition-colors cursor-pointer text-left"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('consulta-motor')}
                  className="text-red-400 hover:text-red-300 font-bold transition-colors cursor-pointer text-left"
                >
                  Consultar Disponibilidade do Motor
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('motores')}
                  className="hover:text-red-400 transition-colors cursor-pointer text-left"
                >
                  Motores Novos e Seminovos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('nossa-loja')}
                  className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors cursor-pointer text-left"
                >
                  Fotos de Motores & Oficina
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('diferenca')}
                  className="hover:text-red-400 transition-colors cursor-pointer text-left"
                >
                  Motor Completo vs Parcial
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('garantia')}
                  className="hover:text-red-400 transition-colors cursor-pointer text-left"
                >
                  Garantia e Procedência
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Políticas & Termos (Google Ads Compliant) */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Políticas e Termos
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onOpenLegalTab('privacidade')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Política de Privacidade (LGPD)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalTab('trocas')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Garantia e Trocas (CDC)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalTab('termos')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Termos de Uso do Catálogo
                </button>
              </li>
              <li className="pt-2 text-[11px] text-zinc-500">
                Atendimento 100% alinhado às diretrizes do Código de Defesa do Consumidor.
              </li>
            </ul>
          </div>

          {/* Column 5: Contatos Diretos & Atendimento */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Atendimento Comercial
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4 text-emerald-400 shrink-0 fill-current" />
                <button
                  onClick={() => openWhatsAppDirect(undefined, 'footer_phone')}
                  className="hover:text-emerald-300 font-mono font-bold cursor-pointer"
                >
                  {siteConfig.company.contact.whatsapp}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <a href={`tel:+55${siteConfig.company.contact.phoneRaw}`} className="hover:text-white font-mono">
                  {siteConfig.company.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-zinc-400 shrink-0" />
                <a href={`mailto:${siteConfig.company.contact.email}`} className="hover:text-white break-all">
                  {siteConfig.company.contact.email}
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openWhatsAppDirect(undefined, 'footer_cta')}
                  className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-black text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow transition-colors cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Falar no WhatsApp</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer */}
        <div className="pt-6 border-t border-zinc-800 text-[11px] text-zinc-500 leading-relaxed space-y-2">
          <p>
            A <strong>{siteConfig.company.displayName}</strong> opera com o compromisso de máxima transparência comercial. Emitimos garantia e nota com numeração e rastreabilidade cadastral em conformidade com as normas vigentes. As fotos exibidas no site ilustram nosso estoque real de motores novos e seminovos inspecionados.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} {siteConfig.company.displayName} — {siteConfig.company.legalName}. CNPJ: {siteConfig.company.cnpj}. Todos os direitos reservados.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
