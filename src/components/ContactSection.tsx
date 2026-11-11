import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Copy, Check, ExternalLink } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { openWhatsAppDirect } from '../utils/whatsapp';
import { trackContactClick } from '../utils/analytics';

export const ContactSection: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${siteConfig.company.address.street}, ${siteConfig.company.address.number}, ${siteConfig.company.address.neighborhood}, ${siteConfig.company.address.city} - ${siteConfig.company.address.state}`
  )}`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(siteConfig.company.address.fullFormatted);
    setCopiedAddress(true);
    trackContactClick('address');
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <section id="contato" className="py-12 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2">
            Atendimento Especializado
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Fale com Nossos Especialistas em Motores
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Tire dúvidas sobre compatibilidade mecânica, bloco parcial, cabeçotes e receba cotações imediatas com Nota Fiscal.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          {/* Card 1: WhatsApp Comercial */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">WhatsApp Comercial</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Canal mais rápido para envio de fotos do motor, conferência de código e orçamento com pronta entrega.
              </p>
              <div className="pt-2">
                <span className="text-lg font-mono font-bold text-slate-900 block">
                  {siteConfig.company.contact.whatsapp}
                </span>
                <span className="text-xs text-emerald-700 font-semibold">Resposta rápida no horário comercial</span>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => openWhatsAppDirect(undefined, 'contact_card_whatsapp')}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-sm transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Conversar no WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Card 2: Telefone & E-mail */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Telefone e E-mail</h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-xs text-slate-400 uppercase font-semibold block">Ligação Direta</span>
                  <a
                    href={`tel:+55${siteConfig.company.contact.phoneRaw}`}
                    onClick={() => trackContactClick('phone')}
                    className="text-base font-mono font-bold text-slate-900 hover:text-blue-900 transition-colors"
                  >
                    {siteConfig.company.contact.phone}
                  </a>
                </div>

                <div>
                  <span className="text-xs text-slate-400 uppercase font-semibold block">E-mail Comercial</span>
                  <a
                    href={`mailto:${siteConfig.company.contact.email}`}
                    onClick={() => trackContactClick('email')}
                    className="text-sm font-medium text-slate-800 hover:text-blue-900 transition-colors break-all"
                  >
                    {siteConfig.company.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={`mailto:${siteConfig.company.contact.email}`}
                onClick={() => trackContactClick('email')}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-600" />
                <span>Enviar E-mail</span>
              </a>
            </div>
          </div>

          {/* Card 3: Horários de Atendimento */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-slate-200 text-slate-800 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Horário de Operação</h3>
              <p className="text-xs text-slate-600">
                Horário da equipe técnica e comercial:
              </p>

              <div className="pt-1 space-y-2 text-xs text-slate-700">
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="font-medium">Segunda a Sexta:</span>
                  <span className="font-bold text-slate-900">08:00 às 18:00</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="font-medium">Sábados:</span>
                  <span className="font-bold text-slate-900">08:00 às 13:00</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="font-medium">Domingos e Feriados:</span>
                  <span className="text-slate-500">Fechado</span>
                </div>
              </div>
            </div>

            <div className="pt-4 text-[11px] text-slate-500 italic">
              {siteConfig.company.businessHours.note}
            </div>
          </div>

        </div>

        {/* Location Box */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-500">
                <MapPin className="w-4 h-4" />
                <span>Endereço Comercial para Retirada</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                {siteConfig.company.address.street}, {siteConfig.company.address.number}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Bairro {siteConfig.company.address.neighborhood} — {siteConfig.company.address.city}/{siteConfig.company.address.state} — CEP: {siteConfig.company.address.cep}
              </p>
              <p className="text-xs text-slate-400">
                Localização de fácil acesso na região do Ipiranga em São Paulo. Disponível para retirada física de motores de grande porte com auxílio de guincho/talha mecânica.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
                >
                  {copiedAddress ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedAddress ? 'Endereço copiado!' : 'Copiar endereço'}</span>
                </button>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackContactClick('maps')}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Ver rota no Google Maps</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-800/80 rounded-xl p-5 border border-slate-700 text-xs text-slate-300 space-y-3">
              <span className="font-bold text-white block text-sm">Estrutura para Retirada de Motores:</span>
              <ul className="space-y-2 list-disc list-inside text-slate-300">
                <li>Agende previamente via WhatsApp para deixar o motor separado e conferido.</li>
                <li>Temos estrutura e equipe para acomodar o motor com segurança no seu veículo ou carretinha.</li>
                <li>Nota Fiscal Eletrônica e termo de garantia impressos e entregues na hora.</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
