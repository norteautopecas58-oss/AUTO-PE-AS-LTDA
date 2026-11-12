import React from 'react';
import { Phone, Mail, Clock, ShieldCheck, Truck, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { siteConfig } from '../config/siteConfig';
import { openWhatsAppDirect } from '../utils/whatsapp';
import { trackContactClick } from '../utils/analytics';

export const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-12 lg:py-20 bg-black border-b border-zinc-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-red-500 mb-2">
            Atendimento Especializado
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Fale com Nossos Especialistas em Motores
          </h2>
          <p className="mt-3 text-zinc-300 text-sm sm:text-base leading-relaxed">
            Tire dúvidas sobre compatibilidade mecânica, bloco parcial ou motor completo e receba cotações imediatas com garantia e nota.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          {/* Card 1: WhatsApp Comercial */}
          <div className="bg-zinc-900 rounded-3xl border-2 border-red-600/60 p-6 flex flex-col justify-between shadow-xl shadow-red-950/20">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-950 text-emerald-400 flex items-center justify-center">
                <WhatsAppIcon className="w-6 h-6 fill-current" />
              </div>
              <h3 className="text-lg font-black text-white">WhatsApp Comercial</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Canal mais rápido para envio de fotos do motor, conferência de especificação e orçamento em poucos minutos.
              </p>
              <div className="pt-2">
                <span className="text-lg font-mono font-black text-white block">
                  {siteConfig.company.contact.whatsapp}
                </span>
                <span className="text-xs text-emerald-400 font-bold">Resposta rápida no horário comercial</span>
              </div>
            </div>

            <div className="pt-6">
              <button
                type="button"
                onClick={() => openWhatsAppDirect(undefined, 'contact_card_whatsapp')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-black text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow transition-colors cursor-pointer ring-2 ring-emerald-500/30"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Conversar no WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Card 2: Telefone & E-mail */}
          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-red-950 text-red-500 flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-white">Central Telefônica & E-mail</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Linha direta para orçamentos, vendas corporativas e suporte técnico pós-venda.
              </p>
              <div className="pt-2 space-y-1">
                <a
                  href={`tel:+55${siteConfig.company.contact.phoneRaw}`}
                  onClick={() => trackContactClick('phone')}
                  className="text-base font-mono font-black text-white hover:text-red-400 block"
                >
                  {siteConfig.company.contact.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.company.contact.email}`}
                  onClick={() => trackContactClick('email')}
                  className="text-xs text-zinc-400 hover:text-white flex items-center gap-1.5 break-all"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0 text-red-500" />
                  <span>{siteConfig.company.contact.email}</span>
                </a>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={`tel:+55${siteConfig.company.contact.phoneRaw}`}
                onClick={() => trackContactClick('phone')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold text-zinc-200 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-xl transition-colors text-center"
              >
                <Phone className="w-4 h-4" />
                <span>Ligar Agora</span>
              </a>
            </div>
          </div>

          {/* Card 3: Horários de Atendimento */}
          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-zinc-800 text-zinc-300 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-white">Horário de Atendimento</h3>
              <p className="text-xs text-zinc-400">
                Horário da equipe técnica e comercial:
              </p>

              <div className="pt-1 space-y-2 text-xs text-zinc-300">
                <div className="flex justify-between py-1 border-b border-zinc-800">
                  <span className="font-medium text-zinc-400">Segunda a Sexta:</span>
                  <span className="font-bold text-white">08:00 às 18:00</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-800">
                  <span className="font-medium text-zinc-400">Sábados:</span>
                  <span className="font-bold text-white">08:00 às 13:00</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-800">
                  <span className="font-medium text-zinc-400">Domingos e Feriados:</span>
                  <span className="text-zinc-500">Fechado</span>
                </div>
              </div>
            </div>

            <div className="pt-4 text-[11px] text-zinc-500 italic">
              {siteConfig.company.businessHours.note}
            </div>
          </div>

        </div>

        {/* Informações de Atendimento & Expedição Segura */}
        <div className="bg-gradient-to-r from-red-950/60 via-zinc-900 to-black rounded-3xl border-2 border-red-600/70 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-500">
                <ShieldCheck className="w-4 h-4" />
                <span>Atendimento & Envio Especializado</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Cotações Ágeis com Garantia e Nota
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Nossos consultores prestam atendimento completo para oficinas mecânicas, frotistas e proprietários. Consultamos em tempo real a compatibilidade do motor ideal para o seu veículo.
              </p>
              <p className="text-xs text-zinc-400">
                Motores novos com 1 ano de garantia e seminovos com 6 meses de garantia, todos acompanhados de garantia e nota.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => openWhatsAppDirect('Olá! Gostaria de falar com um consultor da AUTO MOTORES LTDA para tirar dúvidas sobre um motor.')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-black text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors cursor-pointer shadow-lg shadow-emerald-600/30 ring-2 ring-emerald-500/30"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                  <span>Falar com Consultor no WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-black/80 rounded-2xl p-5 border border-zinc-800 text-xs text-zinc-300 space-y-3">
              <span className="font-bold text-white block text-sm flex items-center gap-2">
                <Truck className="w-4 h-4 text-red-500" />
                Logística e Despacho de Motores:
              </span>
              <ul className="space-y-2 list-disc list-inside text-zinc-300">
                <li>Atendimento consultivo rápido pelo WhatsApp para confirmar especificação e ano.</li>
                <li>Despacho seguro com embalagem paletizada e proteção especial de componentes.</li>
                <li>Garantia e nota com numeração cadastral de motor e rastreabilidade total.</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
