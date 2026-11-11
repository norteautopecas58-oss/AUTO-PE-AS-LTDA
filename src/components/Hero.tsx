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
  onScrollToEngines,
  displayName,
}) => {
  const heroEngineImage = '/src/assets/images/hero_car_engine_1794367042904.jpg';

  const handleHeroWhatsAppClick = () => {
    openWhatsAppDirect(
      `Olá! Gostaria de consultar a disponibilidade e valor de um MOTOR para o meu carro na ${displayName}.`,
      'hero_whatsapp_cta'
    );
  };

  return (
    <section id="topo" className="relative bg-slate-900 text-white overflow-hidden border-b border-slate-800">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-slate-900 to-slate-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-18">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Proposition and Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tagline */}
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-red-500">
              <span>{displayName}</span>
              <span aria-hidden="true">·</span>
              <span>Especialista em Motores de Carro</span>
              <span aria-hidden="true">·</span>
              <span>Linha Leve, SUVs & Utilitários</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.12] text-white">
              Motores Automotivos com Nota Fiscal e Garantia
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Procurando motor para o seu veículo? Trabalhamos com <strong className="text-white">motores completos</strong> e <strong className="text-white">motores parciais</strong> revisados e testados, com procedência legal e Nota Fiscal Eletrônica para regularização junto ao Detran.
            </p>

            {/* CTAs: Consulte disponibilidade do seu motor & WhatsApp Orçamento */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onScrollToForm}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm sm:text-base font-extrabold text-white bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-xl shadow-lg hover:shadow-red-600/25 transition-all cursor-pointer"
              >
                <ArrowDown className="w-5 h-5 shrink-0" />
                <span>Consulte a disponibilidade do seu motor</span>
              </button>

              <button
                onClick={handleHeroWhatsAppClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm sm:text-base font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl shadow-md transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 shrink-0 fill-current" />
                <span>Faça seu orçamento no WhatsApp</span>
              </button>
            </div>

            {/* Google Ads Compliance Trust Pillars */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Nota Fiscal para Detran</span>
                  <span className="text-slate-400">Numeração pronta para cadastro veicular</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Garantia de 90 Dias</span>
                  <span className="text-slate-400">Cobertura legal de 3 meses pelo CDC</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Truck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Envio ou Retirada</span>
                  <span className="text-slate-400">Despacho seguro ou balcão em SP</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Engine Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-800 shadow-2xl group">
              <img
                src={heroEngineImage}
                alt="Motor automotivo completo montado e pronto para instalação com turbo e periféricos"
                className="w-full h-80 sm:h-96 lg:h-[420px] object-cover"
                loading="eager"
                referrerPolicy="no-referrer"
              />

              {/* Verified Visual Tag */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Motor Testado em Bancada
                  </span>
                  <span className="bg-blue-900/80 px-2 py-0.5 rounded text-blue-200 font-mono text-[11px]">
                    Linha Flex & Diesel
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
