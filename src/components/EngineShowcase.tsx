import React from 'react';
import { MessageCircle, CheckCircle2, FileText, ArrowRight, ShieldCheck, Gauge, Check } from 'lucide-react';
import { siteConfig, EngineCategory } from '../config/siteConfig';
import { openWhatsAppDirect } from '../utils/whatsapp';

interface EngineShowcaseProps {
  onSelectEngineForQuote: (engineType: string) => void;
  displayName: string;
}

export const EngineShowcase: React.FC<EngineShowcaseProps> = ({
  onSelectEngineForQuote,
  displayName,
}) => {
  const handleConsultEngine = (engineTitle: string) => {
    onSelectEngineForQuote(engineTitle);
  };

  const handleWhatsAppEngine = (engineTitle: string) => {
    openWhatsAppDirect(
      `Olá! Gostaria de consultar a disponibilidade do ${engineTitle} na ${displayName}. Tem a pronta entrega com Nota Fiscal?`,
      `engine_card_${engineTitle.toLowerCase().replace(/\s+/g, '_')}`
    );
  };

  return (
    <div id="motores" className="py-12 lg:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2">
            Estoque Especializado em Motores
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Linha de Motores Automotivos Disponíveis
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Trabalhamos com motores novos, revisados em bancada e motores parciais com Nota Fiscal para todas as marcas nacionais e importadas.
          </p>
        </div>

        {/* 4 Big Engine Cards with Photos, Specs and Direct CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.engineCategories.map((engine) => (
            <div
              key={engine.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Engine Image with Tag */}
                <div className="relative h-60 sm:h-72 overflow-hidden bg-slate-900">
                  <img
                    src={engine.image}
                    alt={engine.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-wide rounded-md shadow">
                      {engine.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-4">
                    <span className="text-xs text-slate-300 font-medium block">
                      {engine.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {engine.title}
                    </h3>
                  </div>
                </div>

                {/* Engine Content */}
                <div className="p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {engine.description}
                  </p>

                  {/* Trust Specs */}
                  <div className="space-y-1.5 pt-1">
                    {engine.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Popular Models List */}
                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Modelos de aplicação frequentes:
                    </span>
                    <ul className="grid grid-cols-1 gap-1 text-xs text-slate-700">
                      {engine.popularModels.map((m, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Bottom CTAs */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={() => handleWhatsAppEngine(engine.title)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl shadow transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Consulte disponibilidade deste motor</span>
                </button>

                <button
                  onClick={() => handleConsultEngine(engine.title)}
                  className="w-full flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  <span>Preencher dados do veículo no formulário</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Informative Comparison: Motor Completo vs Motor Parcial */}
        <div id="diferenca" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block mb-1">
              Guia Técnico para o Comprador
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Motor Completo ou Motor Parcial: Qual a melhor opção?
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Entenda as diferenças para fazer a escolha mais vantajosa para o seu orçamento e tempo de oficina:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            {/* Box 1: Motor Completo */}
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-slate-900 text-base">Motor Completo (Fechado)</h4>
                <span className="text-[11px] font-bold text-blue-900 bg-blue-100 px-2 py-0.5 rounded">
                  Instalação Rápida
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Vem com bloco montado, pistões, virabrequim, cabeçote, válvulas, carter e tampa de válvulas. Indicado quando o motor antigo sofreu danos severos ou quando você busca o menor tempo de oficina possível.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-1">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Substituição direta e mais rápida</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Não depende da retífica do cabeçote antigo</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Garantia sobre todo o conjunto motriz</span>
                </li>
              </ul>
            </div>

            {/* Box 2: Motor Parcial */}
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-slate-900 text-base">Motor Parcial (Short Block)</h4>
                <span className="text-[11px] font-bold text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded">
                  Mais Econômico
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Composto pelo bloco de cilindros com virabrequim, bielas e pistões montados e balanceados. Você aproveita o seu cabeçote, carter e periféricos originais, reduzindo significativamente o custo.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-1">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Economia de até 40% no valor do investimento</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Acompanha Nota Fiscal para regularização no Detran</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Bloco novo ou retificado conforme norma ABNT</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500 text-center sm:text-left">
              Dúvidas sobre qual o motor compatível com o ano e motorização do seu carro?
            </span>
            <button
              onClick={() => openWhatsAppDirect(`Olá! Preciso de orientação para saber se compro o motor completo ou parcial para meu veículo.`)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Falar com especialista em motores no WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Quality and Testing Bench Visual Banner */}
        <div id="garantia" className="bg-slate-900 text-white rounded-2xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 h-72 sm:h-84 lg:h-full relative min-h-[260px]">
            <img
              src="/src/assets/images/engine_bench_test_1794367045239.jpg"
              alt="Bancada de testes de motores com manômetros de pressão de óleo e compressão"
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="lg:col-span-6 p-6 sm:p-10 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-red-500">
              Controle de Qualidade Rigoroso
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Procedência Legal e Testes de Bancada
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Todos os nossos motores passam por conferência mecânica antes de serem disponibilizados: teste de estanqueidade, compressão de cilindros, pressão de óleo e folga axial.
            </p>
            <div className="space-y-2 text-xs text-slate-300 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Nota Fiscal Eletrônica com numeração gravada no documento</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Atestado de procedência e baixa legal conforme leis de trânsito</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Garantia legal de 90 dias com termo por escrito</span>
              </div>
            </div>
            <div className="pt-2">
              <button
                onClick={() => openWhatsAppDirect(`Olá! Gostaria de consultar motores com Nota Fiscal para cadastro no Detran.`)}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Consulte motor com Nota Fiscal no WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
