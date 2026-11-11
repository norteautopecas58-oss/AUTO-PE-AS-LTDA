import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, ArrowUp, ShieldCheck, FileCheck } from 'lucide-react';
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
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Column 1 & 2: Brand & Corporate CNPJ Identification */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold text-white tracking-tight">
                {siteConfig.company.displayName}
              </span>
              <span className="w-2 h-2 rounded-full bg-red-600" />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed pr-4">
              Comércio especializado em motores automotivos novos, parciais e revisados para veículos nacionais e importados. Fornecimento com Nota Fiscal Eletrônica e garantia conforme a legislação vigente.
            </p>

            {/* Corporate Identification Box with CNPJ */}
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-xs space-y-1.5 text-slate-300 font-mono">
              <p className="text-slate-400 font-sans font-bold uppercase text-[10px] tracking-wider mb-1">
                Identificação Cadastral da Empresa:
              </p>
              <p><span className="text-slate-400">Razão Social:</span> {siteConfig.company.legalName}</p>
              <p><span className="text-slate-400">Nome Fantasia:</span> {siteConfig.company.tradeNameReceipt}</p>
              <p><span className="text-slate-400">CNPJ:</span> {siteConfig.company.cnpj}</p>
              <p><span className="text-slate-400">Inscrição Estadual:</span> Ativa no Estado de SP</p>
            </div>
          </div>

          {/* Column 3: Navegação do Site */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onScrollToSection('topo')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('motores')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Motores Disponíveis
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('diferenca')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Motor Completo vs Parcial
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('garantia')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Garantia e Procedência
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('consulta-motor')}
                  className="text-red-400 hover:text-red-300 font-semibold transition-colors cursor-pointer text-left"
                >
                  Cotar Motor no WhatsApp
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Políticas & Termos (Google Ads Compliant) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
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
              <li className="pt-2 text-[11px] text-slate-400">
                Atendimento 100% alinhado às diretrizes do Código de Defesa do Consumidor.
              </li>
            </ul>
          </div>

          {/* Column 5: Contatos Diretos & Balcão */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Atendimento e Localização
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>
                  {siteConfig.company.address.street}, {siteConfig.company.address.number}<br />
                  Ipiranga — São Paulo/SP<br />
                  CEP: {siteConfig.company.address.cep}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <button
                  onClick={() => openWhatsAppDirect(undefined, 'footer_phone')}
                  className="hover:text-emerald-300 font-mono font-medium cursor-pointer"
                >
                  {siteConfig.company.contact.whatsapp}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:+55${siteConfig.company.contact.phoneRaw}`} className="hover:text-white font-mono">
                  {siteConfig.company.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href={`mailto:${siteConfig.company.contact.email}`} className="hover:text-white break-all">
                  {siteConfig.company.contact.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer compliant with Google Ads and Consumer Law */}
        <div className="pt-6 border-t border-slate-800 text-[11px] text-slate-400 leading-relaxed space-y-2">
          <p>
            A <strong>{siteConfig.company.displayName}</strong> opera com o compromisso de máxima transparência comercial. Todos os motores comercializados acompanham Nota Fiscal Eletrônica com numeração específica e rastreabilidade cadastral em conformidade com as diretrizes do Detran e legislação brasileira. As imagens de motores exibidas no site têm finalidade ilustrativa e técnica para demonstração da configuração dos blocos e periféricos.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {siteConfig.company.displayName} — {siteConfig.company.legalName}. CNPJ: {siteConfig.company.cnpj}. Todos os direitos reservados.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
