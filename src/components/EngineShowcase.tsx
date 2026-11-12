import React from 'react';
import { CheckCircle2, ShieldCheck, Sparkles, Check, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
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
    badgeColor: 'bg-red-600 text-white',
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
    badgeColor: 'bg-red-600 text-white',
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
    badgeColor: 'bg-red-600 text-white',
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
    badgeColor: 'bg-zinc-800 text-emerald-400 border border-emerald-500/40',
  },
  {
    id: 'seminovo-2',
    category: 'seminovo',
    title: 'Motor Completo 2.0 16V Flex Seminovo',
    subtitle: 'Motor revisado com baixa quilometragem',
    description: 'Motor completo testado em funcionamento prévio, com excelente vazão de compressão e estanqueidade comprovada. Pronto para despacho.',
    warranty: '6 Meses de Garantia',
    image: '/assets/aistudio/imgi_20_motor_completo_hyundai_tucson_2_0_2017_1439775_1_9f33e797a135f8df3b4eb5ca5f339259_e5601312.png',
    badge: 'Seminovo Revisado — 6 Meses de Garantia',
    badgeColor: 'bg-zinc-800 text-emerald-400 border border-emerald-500/40',
  },
  {
    id: 'seminovo-3',
    category: 'seminovo',
    title: 'Motor Completo 1.0 12V 3 Cilindros Seminovo',
    subtitle: 'Retirado de veículo com baixa rodagem',
    description: 'Motor seminovo desmontado por técnicos credenciados, revisado e conferido. Excelente custo-benefício com total procedência.',
    warranty: '6 Meses de Garantia',
    image: '/assets/aistudio/imgi_21_motor_completo_hyundai_hb20_1_0_2013_1472471_2_6aea357c2e57104926f7ca443327fb8a_a9d6ef22.png',
    badge: 'Seminovo Revisado — 6 Meses de Garantia',
    badgeColor: 'bg-zinc-800 text-emerald-400 border border-emerald-500/40',
  },
];

export const EngineShowcase: React.FC<EngineShowcaseProps> = ({
  onSelectEngineForQuote,
  displayName,
}) => {
  const novos = REAL_ENGINES.filter((e) => e.category === 'novo');
  const seminovos = REAL_ENGINES.filter((e) => e.category === 'seminovo');

  const handleConsultEngine = (engine: EngineItem) => {
    const text = `Olá! Gostaria de consultar a disponibilidade do ${engine.title} (${engine.warranty}) na ${displayName}.`;
    openWhatsAppDirect(text, `engine_showcase_${engine.id}`);
  };

  return (
    <div id="motores" className="py-12 lg:py-20 bg-zinc-950 border-b border-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950 border border-red-600/50 text-red-400 text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-red-500" />
            <span>Catálogo Especializado de Motores</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Consulte a Disponibilidade do Seu Motor
          </h2>
          <p className="mt-3 text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Orçamento sem compromisso em poucos minutos. Motores novos com <strong className="text-white">1 ano de garantia</strong> e seminovos revisados com <strong className="text-white">6 meses de garantia</strong>. Emitimos garantia e nota.
          </p>
        </div>

        {/* 1. SEÇÃO DE MOTORES NOVOS */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-red-600/60 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-4 h-8 bg-red-600 rounded-full shrink-0" />
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Linha de Motores Novos — 1 Ano de Garantia
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400">
                  Conjuntos zero km montados de fábrica. Emitimos garantia e nota.
                </p>
              </div>
            </div>
            <span className="px-3 py-1 bg-red-600 text-white text-xs font-black rounded-lg uppercase tracking-wider self-start sm:self-auto shadow-md">
              1 Ano de Garantia
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {novos.map((engine) => (
              <div
                key={engine.id}
                className="bg-zinc-900 rounded-3xl border-2 border-zinc-800 hover:border-red-600/70 overflow-hidden shadow-xl shadow-black/70 hover:shadow-red-950/20 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-60 sm:h-64 bg-black flex items-center justify-center p-4 overflow-hidden border-b border-zinc-800">
                    <img
                      src={engine.image}
                      alt={engine.title}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 text-[11px] font-black rounded-lg shadow uppercase tracking-wider ${engine.badgeColor}`}>
                        {engine.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h4 className="text-lg sm:text-xl font-black text-white tracking-tight group-hover:text-red-400 transition-colors">
                      {engine.title}
                    </h4>
                    <p className="text-xs font-semibold text-red-400">
                      {engine.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {engine.description}
                    </p>

                    <div className="pt-2 flex items-center gap-2 text-xs text-zinc-300 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Emitimos garantia e nota</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-2">
                  <button
                    type="button"
                    onClick={() => handleConsultEngine(engine)}
                    className="w-full flex items-center justify-center gap-2.5 px-4 py-3.5 text-xs sm:text-sm font-black text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl shadow-lg shadow-emerald-600/30 hover:shadow-emerald-500/40 transition-all cursor-pointer ring-2 ring-emerald-500/30 active:scale-98"
                  >
                    <WhatsAppIcon className="w-5 h-5 shrink-0 fill-current" />
                    <span>Consulte Disponibilidade no WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectEngineForQuote(engine.title)}
                    className="w-full text-center text-xs font-bold text-zinc-400 hover:text-white py-1.5 transition-colors cursor-pointer"
                  >
                    Preencher dados do veículo
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* 2. SEÇÃO DE MOTORES SEMINOVOS */}
        <div className="space-y-6 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-red-600/60 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-4 h-8 bg-zinc-700 rounded-full shrink-0" />
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Linha de Motores Seminovos Revisados — 6 Meses de Garantia
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400">
                  Motores inspecionados com teste de estanqueidade e compressão. Emitimos garantia e nota.
                </p>
              </div>
            </div>
            <span className="px-3 py-1 bg-zinc-800 text-emerald-400 border border-emerald-500/40 text-xs font-black rounded-lg uppercase tracking-wider self-start sm:self-auto shadow">
              6 Meses de Garantia
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seminovos.map((engine) => (
              <div
                key={engine.id}
                className="bg-zinc-900 rounded-3xl border-2 border-zinc-800 hover:border-red-600/70 overflow-hidden shadow-xl shadow-black/70 hover:shadow-red-950/20 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-60 sm:h-64 bg-black flex items-center justify-center p-4 overflow-hidden border-b border-zinc-800">
                    <img
                      src={engine.image}
                      alt={engine.title}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 text-[11px] font-black rounded-lg shadow uppercase tracking-wider ${engine.badgeColor}`}>
                        {engine.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h4 className="text-lg sm:text-xl font-black text-white tracking-tight group-hover:text-red-400 transition-colors">
                      {engine.title}
                    </h4>
                    <p className="text-xs font-semibold text-zinc-400">
                      {engine.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {engine.description}
                    </p>

                    <div className="pt-2 flex items-center gap-2 text-xs text-zinc-300 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Emitimos garantia e nota</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-2">
                  <button
                    type="button"
                    onClick={() => handleConsultEngine(engine)}
                    className="w-full flex items-center justify-center gap-2.5 px-4 py-3.5 text-xs sm:text-sm font-black text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl shadow-lg shadow-emerald-600/30 hover:shadow-emerald-500/40 transition-all cursor-pointer ring-2 ring-emerald-500/30 active:scale-98"
                  >
                    <WhatsAppIcon className="w-5 h-5 shrink-0 fill-current" />
                    <span>Consulte Disponibilidade no WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectEngineForQuote(engine.title)}
                    className="w-full text-center text-xs font-bold text-zinc-400 hover:text-white py-1.5 transition-colors cursor-pointer"
                  >
                    Preencher dados do veículo
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Guia Técnico Informativo: Motor Completo vs Motor Parcial */}
        <div id="diferenca" className="bg-zinc-900 rounded-3xl border-2 border-zinc-800 p-6 sm:p-10 shadow-xl space-y-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-red-500 block mb-1">
              Guia Rápido
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Motor Completo ou Motor Parcial: Qual a melhor opção?
            </h3>
            <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
              Trabalhamos com ambas as opções para atender à sua necessidade e ao orçamento da sua oficina:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            <div className="p-5 bg-black/60 rounded-2xl border border-zinc-800 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-black text-white text-base">Motor Completo</h4>
                <span className="text-[11px] font-bold text-red-400 bg-red-950 border border-red-700/50 px-2 py-0.5 rounded">
                  Troca Rápida
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Vem com bloco montado, pistões, virabrequim, cabeçote e conjunto de distribuição. Indicado para menor tempo de oficina e substituição imediata.
              </p>
              <ul className="text-xs text-zinc-300 space-y-1.5 pt-1">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Substituição direta no veículo</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Emitimos garantia e nota</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Disponível novo ou seminovo revisado</span>
                </li>
              </ul>
            </div>

            <div className="p-5 bg-black/60 rounded-2xl border border-zinc-800 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-black text-white text-base">Motor Parcial (Short Block)</h4>
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950 border border-emerald-700/50 px-2 py-0.5 rounded">
                  Mais Econômico
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Composto pelo bloco de cilindros com virabrequim, bielas e pistões novos ou revisados. Você reaproveita o seu cabeçote original, reduzindo o custo final.
              </p>
              <ul className="text-xs text-zinc-300 space-y-1.5 pt-1">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Economia substancial no valor do investimento</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Emitimos garantia e nota</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Numeração pronta para regularização</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-zinc-400 text-center sm:text-left">
              Dúvidas sobre o motor certo para o seu veículo? Fale com nossa equipe técnica pelo WhatsApp.
            </span>
            <button
              type="button"
              onClick={() => openWhatsAppDirect('Olá! Gostaria de consultar um motor. Gostaria de confirmar preço, disponibilidade e condições.')}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-black text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors cursor-pointer whitespace-nowrap shadow-md ring-2 ring-emerald-500/30"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>Consultar no WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
