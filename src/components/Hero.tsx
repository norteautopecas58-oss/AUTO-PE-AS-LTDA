import React from 'react';
import { ArrowDown, ShieldCheck, CheckCircle2, FileText, Truck, Sparkles, Clock } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
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
  // Imagem real de capa: Linha técnica com içamento de motores
  const heroEngineImage = '/assets/aistudio/imgi_195_images_897014a4.png';

  const handleHeroWhatsAppClick = () => {
    openWhatsAppDirect(
      `Olá! Gostaria de consultar a disponibilidade e valor de um motor na ${displayName}. Preciso de um orçamento sem compromisso.`,
      'hero_whatsapp_cta'
    );
  };

  return (
    <section id="topo" className="relative bg-black text-white overflow-hidden border-b border-red-950/60 w-full">
      {/* Background gradients preto e vermelho */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/30 via-zinc-950 to-black pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* FOTO DO MOTOR / MONTAGEM — No celular vem PRIMEIRO (order-1), no desktop fica na direita (lg:order-2) */}
          <div className="order-1 lg:order-2 lg:col-span-5 w-full">
            <div className="relative rounded-2xl overflow-hidden border-2 border-red-600/40 bg-zinc-900 shadow-2xl shadow-red-950/40 w-full group">
              <img
                src={heroEngineImage}
                alt="Montagem e revisão técnica de motores novos e seminovos na Auto Motores Ltda"
                className="w-full h-64 sm:h-80 lg:h-[420px] object-cover transition-transform duration-500 group-hover:scale-103"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 bg-red-600 text-white font-extrabold text-[11px] uppercase tracking-wider rounded-md shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Motores Novos & Seminovos
                </span>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-black via-black/85 to-transparent">
                <div className="flex items-center justify-between text-xs text-zinc-300">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    Estoque Real Pronta Entrega
                  </span>
                  <span className="bg-zinc-800 text-zinc-200 border border-zinc-700 px-2 py-0.5 rounded text-[11px] font-semibold">
                    Garantia e Nota
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* TEXTO E BOTÕES — No celular vem DEPOIS (order-2), no desktop fica na esquerda (lg:order-1) */}
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-6 text-left w-full">
            
            {/* Tagline Vermelha e Preta */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-950/80 border border-red-600/50 text-red-400 text-xs sm:text-sm font-extrabold tracking-wide uppercase shadow-sm">
              <Clock className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span>Orçamento sem compromisso em poucos minutos</span>
            </div>

            {/* Headline Principal com Foco em Consulta de Disponibilidade */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              Consulte a <span className="text-red-500">Disponibilidade</span> do Seu Motor
            </h1>

            {/* Subtítulo Claro e Direto */}
            <p className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-2xl leading-relaxed">
              Temos <strong className="text-white underline decoration-red-500 decoration-2">Motores Novos</strong> (1 ano de garantia) e <strong className="text-white underline decoration-red-500 decoration-2">Seminovos Revisados</strong> (6 meses de garantia). Encontre o motor perfeito para o seu veículo com garantia e nota.
            </p>

            {/* BOTÕES DE CONVERSÃO NO WHATSAPP COM LOGO OFICIAL */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
              
              {/* Botão WhatsApp Verde Vibrante com Logo Oficial */}
              <button
                type="button"
                onClick={handleHeroWhatsAppClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-4 text-base sm:text-lg font-black text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl shadow-xl shadow-emerald-600/30 hover:shadow-emerald-500/40 transition-all cursor-pointer ring-4 ring-emerald-500/25 transform hover:-translate-y-0.5 active:scale-98"
              >
                <WhatsAppIcon className="w-6 h-6 shrink-0 fill-current" />
                <span>Consulte Disponibilidade no WhatsApp</span>
              </button>

              {/* Botão Secundário para o Formulário */}
              <button
                type="button"
                onClick={onScrollToForm}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 text-sm sm:text-base font-bold text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-red-600/50 hover:border-red-500 rounded-xl transition-all cursor-pointer shadow"
              >
                <ArrowDown className="w-4 h-4 text-red-500 shrink-0" />
                <span>Preencher Dados do Motor</span>
              </button>
            </div>

            {/* Selos de Confiança em Preto e Vermelho */}
            <div className="pt-4 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-zinc-300 w-full">
              <div className="flex items-start gap-2.5 p-2 rounded-lg bg-zinc-950/60 border border-zinc-900">
                <ShieldCheck className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Garantia e Nota</span>
                  <span className="text-zinc-400">1 ano nos novos e 6 meses nos seminovos</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2 rounded-lg bg-zinc-950/60 border border-zinc-900">
                <FileText className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Documentação Legal</span>
                  <span className="text-zinc-400">Emitimos garantia e nota de imediato</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2 rounded-lg bg-zinc-950/60 border border-zinc-900">
                <Truck className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Envio Seguro</span>
                  <span className="text-zinc-400">Despacho para todo o Brasil com seguro</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
