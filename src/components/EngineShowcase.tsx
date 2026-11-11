import React from 'react';
import { MessageCircle, CheckCircle2, ShieldCheck, ArrowRight, Sparkles, Check } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { openWhatsAppDirect } from '../utils/whatsapp';

interface EngineShowcaseProps {
  onSelectEngineForQuote: (engineName: string) => void;
  displayName: string;
}

interface EngineItem {
  id: string;
  category: 'novo' | 'seminovo';
  title: string;
  subtitle: string;
  description: string;
  warranty: string;
  image: string;
  badge: string;
  badgeColor: string;
}

const REAL_ENGINES: EngineItem[] = [
  // 3 MOTORES NOVOS — 1 ANO DE GARANTIA
  {
    id: 'novo-1',
    category: 'novo',
    title: 'Motor Parcial 1.0 8V Flex Novo',
    subtitle: 'Bloco montado novo de fábrica',
    description: 'Composto por bloco usinado com virabrequim, bielas e pistões montados com componentes novos. Pronto para receber o cabeçote e periféricos.',
    warranty: '1 Ano de Garantia',
    image: '/assets/aistudio/imgi_32_D_Q_NP_749373-MLB119323763464_112026-F-motor-parcial-gol-g5-g6-fox-voyage-10-8v-flex-2008-a-2016_b3d1bca0.png',
    badge: 'Motor Novo — 1 Ano de Garantia',
    badgeColor: 'bg-emerald-600',
  },
  {
    id: 'novo-2',
    category: 'novo',
    title: 'Motor Parcial 1.6 16V Novo',
    subtitle: 'Conjunto montado com componentes novos',
    description: 'Bloco de cilindros com pistões, anéis e virabrequim novos e balanceados. Máxima durabilidade e perfeito encaixe.',
    warranty: '1 Ano de Garantia',
    image: '/assets/aistudio/imgi_35_D_Q_NP_619096-MLB119204856490_112026-F-motor-parcial-new-fiesta-ecosport-16-16v-sigma-d3bg6006ea_6f16b3bf.png',
    badge: 'Motor Novo — 1 Ano de Garantia',
    badgeColor: 'bg-emerald-600',
  },
  {
    id: 'novo-3',
    category: 'novo',
    title: 'Motor Completo 3 Cilindros 12V Novo',
    subtitle: 'Motor fechado novo pronto para instalação',
    description: 'Motor completo novo de fábrica montado com bloco, cabeçote, carter e conjunto de distribuição. Instalação rápida e sem adaptações.',
    warranty: '1 Ano de Garantia',
    image: '/assets/aistudio/imgi_62_D_Q_NP_939376-MLB93149281772_092025-F-motor-completo-renault-kwid-motor-b4d-10-12v-3-cilindros_008c2aa3.png',
    badge: 'Motor Novo — 1 Ano de Garantia',
    badgeColor: 'bg-emerald-600',
  },

  // 3 MOTORES SEMINOVOS — 6 MESES DE GARANTIA
  {
    id: 'seminovo-1',
    category: 'seminovo',
    title: 'Motor Completo 1.6 Seminovo Revisado',
    subtitle: 'Retirado, inspecionado e testado em bancada',
    description: 'Motor seminovo revisado com verificação rigorosa de compressão dos cilindros, pressão de óleo e folgas axiais. Acompanha nota e garantia.',
    warranty: '6 Meses de Garantia',
    image: '/assets/aistudio/imgi_27_180_motor_completo_citroen_c3_1_6_2012_1457349_1_30f4c2faf5043a454f69700866bfad39_c29e21b8.png',
    badge: 'Seminovo Revisado — 6 Meses de Garantia',
    badgeColor: 'bg-blue-600',
  },
  {
    id: 'seminovo-2',
    category: 'seminovo',
    title: 'Motor 2.0 16V Seminovo Revisado',
    subtitle: 'Inspecionado por equipe técnica',
    description: 'Motor seminovo com excelente estado de conservação, revisado em bancada e testado antes da liberação. Emitimos garantia e nota.',
    warranty: '6 Meses de Garantia',
    image: '/assets/aistudio/imgi_20_motor_completo_hyundai_tucson_2_0_2017_1439775_1_9f33e797a135f8df3b4eb5ca5f339259_e5601312.png',
    badge: 'Seminovo Revisado — 6 Meses de Garantia',
    badgeColor: 'bg-blue-600',
  },
  {
    id: 'seminovo-3',
    category: 'seminovo',
    title: 'Motor Completo 1.0 Seminovo Inspecionado',
    subtitle: 'Pronto para instalação com procedência',
    description: 'Motor seminovo inspecionado, testado quanto a vedação e pressão interna. Opção econômica com garantia e nota inclusas.',
    warranty: '6 Meses de Garantia',
    image: '/assets/aistudio/imgi_21_motor_completo_hyundai_hb20_1_0_2013_1472471_2_6aea357c2e57104926f7ca443327fb8a_a9d6ef22.png',
    badge: 'Seminovo Revisado — 6 Meses de Garantia',
    badgeColor: 'bg-blue-600',
  },
];

export const EngineShowcase: React.FC<EngineShowcaseProps> = ({
  onSelectEngineForQuote,
  displayName,
}) => {
  const handleWhatsAppEngineClick = (engineTitle: string, warranty: string) => {
    const message = [
      'Olá! Gostaria de consultar um motor.',
      '',
      `Motor desejado: ${engineTitle}`,
      '',
      'Ano do veículo: A confirmar no atendimento',
      '',
      `Gostaria de confirmar preço, disponibilidade e condições (${warranty} e nota).`,
    ].join('\n');

    openWhatsAppDirect(message, `engine_card_${engineTitle.replace(/\s+/g, '_')}`);
  };

  return (
    <div id="motores" className="py-12 lg:py-20 bg-slate-50 border-b border-slate-200 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2">
            Catálogo de Motores Reais
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Motores Novos e Seminovos Disponíveis
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Trabalhamos com motores novos com <strong className="text-slate-900 font-bold">1 ano de garantia</strong> e motores seminovos revisados com <strong className="text-slate-900 font-bold">6 meses de garantia</strong>. Emitimos garantia e nota para todos os motores.
          </p>
        </div>

        {/* Bloco 1: Motores Novos (1 Ano de Garantia) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block">
                Linha 0 Km
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Motores Novos — 1 Ano de Garantia
              </h3>
            </div>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full self-start sm:self-auto">
              Emitimos Garantia e Nota
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {REAL_ENGINES.filter((e) => e.category === 'novo').map((engine) => (
              <div
                key={engine.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Imagem do Motor */}
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900 flex items-center justify-center p-3">
                    <img
                      src={engine.image}
                      alt={engine.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 ${engine.badgeColor} text-white text-[11px] font-bold rounded-md shadow`}>
                        {engine.warranty}
                      </span>
                    </div>
                  </div>

                  {/* Detalhes */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <div>
                      <span className="text-xs font-semibold text-slate-400 block">
                        {engine.subtitle}
                      </span>
                      <h4 className="text-lg font-bold text-slate-900 mt-1">
                        {engine.title}
                      </h4>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {engine.description}
                    </p>

                    <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                      <ShieldCheck className="w-4 h-4 shrink-0" />
                      <span>{engine.warranty} com nota emitida</span>
                    </div>
                  </div>
                </div>

                {/* Botões de Ação */}
                <div className="p-5 sm:p-6 pt-0 space-y-2">
                  <button
                    type="button"
                    onClick={() => handleWhatsAppEngineClick(engine.title, engine.warranty)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl shadow transition-colors cursor-pointer active:scale-99"
                  >
                    <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                    <span>Consultar este motor no WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectEngineForQuote(engine.title)}
                    className="w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Informar o ano no formulário</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Bloco 2: Motores Seminovos Revisados (6 Meses de Garantia) */}
        <div className="space-y-6 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block">
                Linha Seminovos Revisados
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Motores Seminovos — 6 Meses de Garantia
              </h3>
            </div>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full self-start sm:self-auto">
              Testados em Bancada e com Nota
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {REAL_ENGINES.filter((e) => e.category === 'seminovo').map((engine) => (
              <div
                key={engine.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Imagem do Motor */}
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900 flex items-center justify-center p-3">
                    <img
                      src={engine.image}
                      alt={engine.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 ${engine.badgeColor} text-white text-[11px] font-bold rounded-md shadow`}>
                        {engine.warranty}
                      </span>
                    </div>
                  </div>

                  {/* Detalhes */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <div>
                      <span className="text-xs font-semibold text-slate-400 block">
                        {engine.subtitle}
                      </span>
                      <h4 className="text-lg font-bold text-slate-900 mt-1">
                        {engine.title}
                      </h4>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {engine.description}
                    </p>

                    <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-blue-700">
                      <ShieldCheck className="w-4 h-4 shrink-0" />
                      <span>{engine.warranty} com nota emitida</span>
                    </div>
                  </div>
                </div>

                {/* Botões de Ação */}
                <div className="p-5 sm:p-6 pt-0 space-y-2">
                  <button
                    type="button"
                    onClick={() => handleWhatsAppEngineClick(engine.title, engine.warranty)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl shadow transition-colors cursor-pointer active:scale-99"
                  >
                    <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                    <span>Consultar este motor no WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectEngineForQuote(engine.title)}
                    className="w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Informar o ano no formulário</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Guia Técnico Informativo: Motor Completo vs Motor Parcial */}
        <div id="diferenca" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block mb-1">
              Guia para o Comprador
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Motor Completo ou Motor Parcial: Qual a melhor opção?
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Trabalhamos com ambas as opções para atender à sua necessidade e ao orçamento da sua oficina:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-slate-900 text-base">Motor Completo</h4>
                <span className="text-[11px] font-bold text-blue-900 bg-blue-100 px-2 py-0.5 rounded">
                  Troca Rápida
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Vem com bloco montado, pistões, virabrequim, cabeçote e conjunto de válvulas. Indicado para quem busca menor tempo de oficina e substituição imediata.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-1">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Substituição direta no veículo</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Emitimos garantia e nota</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Disponível novo ou seminovo revisado</span>
                </li>
              </ul>
            </div>

            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-slate-900 text-base">Motor Parcial (Short Block)</h4>
                <span className="text-[11px] font-bold text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded">
                  Mais Econômico
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Composto pelo bloco de cilindros com virabrequim, bielas e pistões novos ou retificados. Você aproveita o seu cabeçote original reduzindo o custo final.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-1">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Economia substancial no valor do investimento</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Emitimos garantia e nota</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Numeração pronta para regularização</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500 text-center sm:text-left">
              Dúvidas sobre o motor certo para o seu veículo? Fale com nossa equipe técnica.
            </span>
            <button
              type="button"
              onClick={() => openWhatsAppDirect('Olá! Gostaria de consultar um motor. Gostaria de confirmar preço, disponibilidade e condições.')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Consultar no WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
