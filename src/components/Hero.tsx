import React from 'react';
import { MessageCircle, ArrowDown, ShieldCheck, CheckCircle2, FileText, Truck } from 'lucide-react';
import { openWhatsAppDirect } from '../utils/whatsapp';

interface HeroProps {
  onScrollToForm: () => void;
  onScrollToEngines: () => void;
  displayName: string;
}

export const Hero: React.FC<HeroProps> = ({
  onScrollToForm,
  displayName,
}) => {
  // Foto real da fachada da loja conforme solicitado
  const storefrontImage = '/assets/aistudio/Fachada_da_Auto_Pe_as_Ltda-1_9a51a879.png';

  const handleHeroWhatsAppClick = () => {
    openWhatsAppDirect(
      `Olá! Gostaria de consultar a disponibilidade e valor de um motor na ${displayName}. Emitimos garantia e nota.`,
      'hero_whatsapp_cta'
    );
  };

  return (
    <section id="topo" className="relative bg-slate-900 text-white overflow-hidden border-b border-slate-800 w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-slate-900 to-slate-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* FOTO DA FACHADA — No celular vem PRIMEIRO (order-1), no desktop fica na direita (lg:order-2) */}
          <div className="order-1 lg:order-2 lg:col-span-5 w-full">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-800 shadow-2xl w-full">
              <img
                src={storefrontImage}
                alt="Fachada oficial da loja Auto Peças Ltda no Ipiranga - São Paulo"
                className="w-full h-64 sm:h-80 lg:h-[400px] object-cover"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    Loja Física e Balcão no Ipiranga - SP
                  </span>
                  <span className="bg-red-600/90 px-2 py-0.5 rounded text-white font-semibold text-[11px]">
                    Motores Novos e Seminovos
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* TEXTO E BOTÕES — No celular vem DEPOIS (order-2), no desktop fica na esquerda (lg:order-1) */}
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-6 text-left w-full">
            
            {/* Tagline sem marcas */}
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-red-500">
              <span>{displayName}</span>
              <span aria-hidden="true">·</span>
              <span>Motores Novos & Seminovos</span>
              <span aria-hidden="true">·</span>
              <span>Emitimos Garantia e Nota</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Motores Automotivos Novos e Seminovos com Garantia e Nota
            </h1>

            {/* Subtitle sem nomes de marcas */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Trabalhamos com motores novos com <strong className="text-white">1 ano de garantia</strong> e motores seminovos revisados com <strong className="text-white">6 meses de garantia</strong>. Consulte disponibilidade e condições no WhatsApp.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
              <button
                type="button"
                onClick={onScrollToForm}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm sm:text-base font-extrabold text-white bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-xl shadow-lg hover:shadow-red-600/25 transition-all cursor-pointer"
              >
                <ArrowDown className="w-5 h-5 shrink-0" />
                <span>Consulte a disponibilidade do seu motor</span>
              </button>

              <button
                type="button"
                onClick={handleHeroWhatsAppClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm sm:text-base font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl shadow-md transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 shrink-0 fill-current" />
                <span>Faça seu orçamento no WhatsApp</span>
              </button>
            </div>

            {/* Trust Pillars */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300 w-full">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Garantia e Nota</span>
                  <span className="text-slate-400">1 ano nos novos e 6 meses nos seminovos</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <FileText className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Documentação Completa</span>
                  <span className="text-slate-400">Emitimos garantia e nota</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Truck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Envio ou Retirada</span>
                  <span className="text-slate-400">Retirada em SP ou envio com segurança</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
