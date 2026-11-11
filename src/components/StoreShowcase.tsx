import React from 'react';
import { MessageCircle, MapPin, Users, Wrench, ShieldCheck, Warehouse } from 'lucide-react';
import { openWhatsAppDirect } from '../utils/whatsapp';

interface StorePhotoItem {
  id: string;
  image: string;
  title: string;
  description: string;
  buttonText: string;
  whatsappMessage: string;
  badge: string;
}

const STORE_PHOTOS: StorePhotoItem[] = [
  {
    id: 'fachada',
    image: '/assets/aistudio/Fachada_da_Auto_Pe_as_Ltda-1_9a51a879.png',
    title: 'Fachada Oficial e Loja Física',
    description:
      'Sede própria localizada na Avenida Juntas Provisórias, 527 — Ipiranga, São Paulo/SP. Loja estabelecida com fácil acesso para retirada presencial de motores e componentes.',
    buttonText: 'Falar com a Loja Física no WhatsApp',
    whatsappMessage: 'Olá! Gostaria de falar com o atendimento da AUTO PEÇAS LTDA sobre a disponibilidade de um motor.',
    badge: 'Loja Física em SP',
  },
  {
    id: 'equipe',
    image: '/assets/aistudio/Equipe_do_Auto_Pe_as_no_Balc_o-4_1a90b70a.png',
    title: 'Equipe Especializada de Atendimento',
    description:
      'Nossos consultores técnicos possuem vasta experiência em motorização automotiva, prontos para orientar sobre compatibilidade por chassi, bloco e ano.',
    buttonText: 'Falar com Consultor no WhatsApp',
    whatsappMessage: 'Olá! Gostaria de falar com um atendente técnico da AUTO PEÇAS LTDA para tirar dúvidas sobre um motor.',
    badge: 'Atendimento Técnico',
  },
  {
    id: 'motores',
    image: '/assets/aistudio/Motores_em_Exposi__o_na_Oficina-3_74da9153.png',
    title: 'Motores em Exposição e Estoque',
    description:
      'Motores automotivos inspecionados com procedência legal, teste de estanqueidade e Nota Fiscal Eletrônica emitida para regularização veicular no Detran.',
    buttonText: 'Consultar Motores no WhatsApp',
    whatsappMessage: 'Olá! Gostaria de consultar um motor em estoque com Nota Fiscal e garantia na AUTO PEÇAS LTDA.',
    badge: 'Pronta Entrega',
  },
  {
    id: 'balcao',
    image: '/assets/aistudio/Balc_o_de_Autope_as_Bem_Abastecido-2_e6c3253f.png',
    title: 'Balcão de Atendimento e Consulta',
    description:
      'Estrutura ágil com catálogo eletrônico e conferência imediata de peças para linha leve, utilitários, picapes e vans.',
    buttonText: 'Chamar no Balcão pelo WhatsApp',
    whatsappMessage: 'Olá! Gostaria de consultar preço e disponibilidade de um motor diretamente pelo balcão da AUTO PEÇAS LTDA.',
    badge: 'Balcão de Atendimento',
  },
  {
    id: 'estoque',
    image: '/assets/aistudio/Corredor_de_Pe_as_Automotivas_no_Estoque-5_953d36b3.png',
    title: 'Estoque Organizado e Setor de Motores',
    description:
      'Galpão com motores montados em paletes reforçados, prontos para despacho seguro via transportadora com seguro ou retirada no balcão.',
    buttonText: 'Consultar Envio ou Retirada no WhatsApp',
    whatsappMessage: 'Olá! Gostaria de consultar prazos de envio ou retirada presencial de um motor na AUTO PEÇAS LTDA.',
    badge: 'Estoque e Envio',
  },
];

export const StoreShowcase: React.FC = () => {
  return (
    <section id="nossa-loja" className="py-12 lg:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2">
            Estrutura Física & Equipe
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Conheça a AUTO PEÇAS LTDA
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Veja imagens reais da nossa loja física, balcão de atendimento, equipe especializada e estoque de motores em São Paulo.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STORE_PHOTOS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-slate-900/90 text-white text-[11px] font-bold tracking-wide rounded-md shadow border border-slate-700">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action Button: WhatsApp */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => openWhatsAppDirect(item.whatsappMessage, `store_photo_${item.id}`)}
                  className="w-full flex items-center justify-center gap-2.5 px-4 py-3 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl shadow transition-colors cursor-pointer active:scale-99"
                >
                  <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                  <span>{item.buttonText}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">
              Quer visitar nossa loja ou retirar seu motor pessoalmente?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Estamos na Avenida Juntas Provisórias, 527 — Ipiranga, São Paulo/SP. Fale conosco no WhatsApp antes de vir para separar seu motor.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openWhatsAppDirect('Olá! Gostaria de agendar uma visita ou confirmar retirada de um motor na loja da AUTO PEÇAS LTDA.')}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Falar no WhatsApp da Loja</span>
          </button>
        </div>

      </div>
    </section>
  );
};
