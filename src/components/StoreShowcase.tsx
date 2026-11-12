import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { openWhatsAppDirect } from '../utils/whatsapp';
import { ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface MotorPhotoItem {
  id: string;
  image: string;
  title: string;
  category: 'novo' | 'seminovo';
  badge: string;
  description: string;
  whatsappMessage: string;
}

const MOTOR_PHOTOS: MotorPhotoItem[] = [
  {
    id: 'montagem-novos',
    image: '/assets/aistudio/imgi_169_images_385520f2.png',
    title: 'Montagem Técnica & Revisão de Motores Novos',
    category: 'novo',
    badge: 'MOTOR NOVO · 1 ANO DE GARANTIA',
    description:
      'Motores novos parciais e completos montados com componentes de altíssima precisão. Testados em bancada para assegurar máxima compressão e durabilidade.',
    whatsappMessage: 'Olá! Gostaria de consultar a disponibilidade de um motor novo com 1 ano de garantia na AUTO MOTORES LTDA.',
  },
  {
    id: 'linha-montagem',
    image: '/assets/aistudio/imgi_195_images_897014a4.png',
    title: 'Linha de Motores Novos com Içamento Técnico',
    category: 'novo',
    badge: 'MOTOR NOVO · 1 ANO DE GARANTIA',
    description:
      'Setor de preparação e encaixe de motores com equipamentos dedicados. Cada motor passa por rigorosa checagem antes de ser liberado com garantia e nota.',
    whatsappMessage: 'Olá! Gostaria de falar com o atendimento da AUTO MOTORES LTDA sobre cotação de motor novo.',
  },
  {
    id: 'blocos-cabecotes',
    image: '/assets/aistudio/imgi_193_images_0ab2a8b0.png',
    title: 'Blocos e Cabeçotes Novos de Precisão',
    category: 'novo',
    badge: 'MOTOR NOVO · 1 ANO DE GARANTIA',
    description:
      'Blocos usinados e cabeçotes novos prontos para montagem rápida. Ideal para quem procura reposição confiável e economia sem abrir mão da garantia.',
    whatsappMessage: 'Olá! Gostaria de consultar preços de bloco e motor novo na AUTO MOTORES LTDA.',
  },
  {
    id: 'prateleiras-estoque',
    image: '/assets/aistudio/imgi_27_images_5e861c24.png',
    title: 'Estoque Estruturado de Motores e Componentes',
    category: 'seminovo',
    badge: 'SEMINOVO REVISADO · 6 MESES DE GARANTIA',
    description:
      'Grande estoque organizado em prateleiras reforçadas com motores seminovos revisados e catalogados para pronta entrega ou envio rápido.',
    whatsappMessage: 'Olá! Gostaria de consultar um motor seminovo revisado com 6 meses de garantia na AUTO MOTORES LTDA.',
  },
  {
    id: 'patio-seminovos',
    image: '/assets/aistudio/imgi_175_images_2a710a12.png',
    title: 'Pátio com Amplo Estoque de Motores Seminovos',
    category: 'seminovo',
    badge: 'SEMINOVO REVISADO · 6 MESES DE GARANTIA',
    description:
      'Variedade imensa de motores automotivos seminovos inspecionados, paletizados e protegidos, prontos para despacho com procedência legal e nota.',
    whatsappMessage: 'Olá! Gostaria de consultar a disponibilidade de um motor seminovo em estoque na AUTO MOTORES LTDA.',
  },
];

export const StoreShowcase: React.FC = () => {
  return (
    <section id="nossa-loja" className="py-12 lg:py-20 bg-black border-b border-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950 border border-red-600/50 text-red-400 text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-red-500" />
            <span>Estoque Real & Oficina Especializada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Temos Motores <span className="text-red-500">Novos</span> e <span className="text-red-500">Seminovos</span>
          </h2>
          <p className="mt-3 text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Quer encontrar o motor que precisa? Fale conosco! Orçamento sem compromisso em poucos minutos diretamente pelo WhatsApp.
          </p>
        </div>

        {/* Grid de Fotos Reais de Motores e Oficina */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOTOR_PHOTOS.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-900 rounded-3xl border-2 border-zinc-800 hover:border-red-600/80 overflow-hidden shadow-xl shadow-black/80 hover:shadow-red-950/30 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Imagem do Motor / Oficina */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Badge de Garantia */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 text-[11px] font-black tracking-wider uppercase rounded-lg shadow-lg border ${
                      item.category === 'novo'
                        ? 'bg-red-600 text-white border-red-400'
                        : 'bg-zinc-900/95 text-emerald-400 border-emerald-500/50'
                    }`}>
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg sm:text-xl font-black text-white tracking-tight leading-snug group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="pt-1 flex items-center gap-2 text-xs text-zinc-300 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Emitimos garantia e nota</span>
                  </div>
                </div>
              </div>

              {/* Botão de WhatsApp em Verde com Logo Oficial */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => openWhatsAppDirect(item.whatsappMessage, `motor_photo_${item.id}`)}
                  className="w-full flex items-center justify-center gap-2.5 px-4 py-3.5 text-xs sm:text-sm font-black text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl shadow-lg shadow-emerald-600/30 hover:shadow-emerald-500/40 transition-all cursor-pointer ring-2 ring-emerald-500/30 active:scale-98"
                >
                  <WhatsAppIcon className="w-5 h-5 shrink-0 fill-current" />
                  <span>Consulte Disponibilidade no WhatsApp</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Banner de Chamada Rápida: Quer encontrar seu motor? */}
        <div className="bg-gradient-to-r from-red-950 via-zinc-900 to-black border-2 border-red-600/70 rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl shadow-red-950/50">
          <div className="space-y-2 text-center lg:text-left">
            <span className="px-3 py-1 rounded-full bg-red-600 text-white text-xs font-black uppercase tracking-wider inline-block">
              Atendimento Imediato
            </span>
            <h4 className="text-2xl sm:text-3xl font-black text-white">
              Quer encontrar o motor que precisa? Fale conosco!
            </h4>
            <p className="text-sm text-zinc-300 max-w-xl">
              Nossa equipe consulta o estoque na hora, verifica a aplicação exata para o seu carro e passa o orçamento sem compromisso em poucos minutos.
            </p>
          </div>

          <button
            type="button"
            onClick={() => openWhatsAppDirect('Olá! Gostaria de consultar um motor para o meu carro. Preciso de um orçamento rápido na AUTO MOTORES LTDA.')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4.5 text-base sm:text-lg font-black text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-2xl shadow-xl shadow-emerald-600/35 hover:shadow-emerald-500/45 transition-all cursor-pointer whitespace-nowrap shrink-0 ring-4 ring-emerald-500/30 active:scale-98"
          >
            <WhatsAppIcon className="w-6 h-6 shrink-0 fill-current" />
            <span>Falar Agora no WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
