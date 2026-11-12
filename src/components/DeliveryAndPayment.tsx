import React from 'react';
import { Truck, CreditCard, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { siteConfig } from '../config/siteConfig';
import { openWhatsAppDirect } from '../utils/whatsapp';

export const DeliveryAndPayment: React.FC = () => {
  return (
    <section id="entregas" className="py-12 lg:py-20 bg-zinc-950 border-b border-zinc-800 text-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-red-500 mb-2">
            Logística & Pagamento
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Envio Seguro e Condições Transparentes
          </h2>
          <p className="mt-3 text-zinc-300 text-sm sm:text-base leading-relaxed">
            Consulte o frete do motor para sua cidade no WhatsApp. Atendemos todo o Brasil com embalagem paletizada e seguro total de carga.
          </p>
        </div>

        {/* 2 Main Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          
          {/* Card 1: Logística e Envio */}
          <div className="bg-zinc-900 rounded-3xl border-2 border-zinc-800 p-6 sm:p-8 shadow-xl flex flex-col justify-between w-full">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-950 text-red-500 flex items-center justify-center">
                <Truck className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-black text-white">
                Logística e Envio de Motores
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed">
                Opções adequadas para o transporte de motores completos e parciais:
              </p>

              <div className="space-y-3 pt-2 text-sm text-zinc-300">
                <div className="p-4 bg-black/60 rounded-2xl border border-zinc-800">
                  <span className="font-bold block text-white mb-1">
                    1. Envio em Engradado com Seguro Total
                  </span>
                  <p className="text-xs text-zinc-400">
                    Motores despachados fixados em paletes ou engradados reforçados, acompanhados de garantia e nota com seguro total de carga para todo o Brasil.
                  </p>
                </div>

                <div className="p-4 bg-black/60 rounded-2xl border border-zinc-800">
                  <span className="font-bold block text-white mb-1">
                    2. Retirada Agendada
                  </span>
                  <p className="text-xs text-zinc-400">
                    Disponível sob consulta prévia no WhatsApp. Contamos com estrutura para acomodação segura do motor no seu veículo.
                  </p>
                </div>

                <div className="p-4 bg-black/60 rounded-2xl border border-zinc-800">
                  <span className="font-bold block text-white mb-1">
                    3. Despacho Rápido para Oficinas e Frotistas
                  </span>
                  <p className="text-xs text-zinc-400">
                    Atendimento ágil para oficinas mecânicas e frotas, com envio rápido e rastreamento em tempo real.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 flex items-start gap-2 text-xs text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Cálculo transparente de frete de acordo com peso, cubagem e CEP da sua cidade.</span>
            </div>
          </div>

          {/* Card 2: Pagamento Seguro */}
          <div className="bg-zinc-900 rounded-3xl border-2 border-zinc-800 p-6 sm:p-8 shadow-xl flex flex-col justify-between w-full">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-950 text-emerald-400 flex items-center justify-center">
                <CreditCard className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-black text-white">
                Condições de Pagamento
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed">
                Opções claras e seguras acertadas diretamente com nossos consultores comerciais no WhatsApp:
              </p>

              <div className="space-y-3 pt-2 text-sm text-zinc-300">
                <div className="p-4 bg-black/60 rounded-2xl border border-zinc-800">
                  <span className="font-bold block text-white mb-1">
                    Pix Oficial da Empresa (CNPJ)
                  </span>
                  <p className="text-xs text-zinc-400">
                    Chave Pix oficial atrelada ao CNPJ da empresa, conferindo agilidade e máxima segurança com emissão imediata da nota.
                  </p>
                </div>

                <div className="p-4 bg-black/60 rounded-2xl border border-zinc-800">
                  <span className="font-bold block text-white mb-1">
                    Cartão de Crédito
                  </span>
                  <p className="text-xs text-zinc-400">
                    Possibilidade de parcelamento com link de pagamento seguro das principais adquirentes do mercado.
                  </p>
                </div>

                <div className="p-4 bg-black/60 rounded-2xl border border-zinc-800">
                  <span className="font-bold block text-white mb-1">
                    Faturamento para Empresas e Oficinas
                  </span>
                  <p className="text-xs text-zinc-400">
                    Condições especiais de faturamento sob análise cadastral prévia para pessoas jurídicas, mecânicas e frotistas.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 flex items-start gap-2 text-xs text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Emitimos garantia e nota em todas as operações: 1 ano para novos e 6 meses para seminovos.</span>
            </div>
          </div>

        </div>

        {/* WhatsApp Quote Bar */}
        <div className="mt-10 bg-gradient-to-r from-red-950 via-zinc-900 to-black border-2 border-red-600/70 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl w-full">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl font-black text-white">
              Deseja cotar o frete do motor para sua cidade?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300">
              Envie o CEP do seu mecânico ou residência junto com o modelo do motor para cálculo imediato no WhatsApp.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openWhatsAppDirect(`Olá! Gostaria de cotar o frete para envio de um motor para o meu CEP na ${siteConfig.company.displayName}.`)}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm sm:text-base font-black text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-600/30 transition-all cursor-pointer whitespace-nowrap shrink-0 w-full sm:w-auto ring-2 ring-emerald-500/30"
          >
            <WhatsAppIcon className="w-5 h-5 fill-current shrink-0" />
            <span>Consultar Frete no WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
