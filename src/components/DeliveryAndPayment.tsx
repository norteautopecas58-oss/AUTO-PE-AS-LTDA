import React from 'react';
import { Truck, CreditCard, ShieldCheck, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { openWhatsAppDirect } from '../utils/whatsapp';

export const DeliveryAndPayment: React.FC = () => {
  return (
    <section id="entregas" className="py-12 lg:py-20 bg-slate-50 border-b border-slate-200 w-full overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2">
            Logística Segura & Pagamento
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Envio Seguro e Meios de Pagamento
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Como motores são componentes pesados e de alto valor, operamos com embalagem reforçada em engradados e transportadoras com seguro de carga total.
          </p>
        </div>

        {/* Informative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          
          {/* Card 1: Entrega de Motores */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between w-full">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center">
                <Truck className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Logística e Envio de Motores
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                Opções adequadas para o transporte de motores completos e parciais:
              </p>

              <div className="space-y-3 pt-2 text-sm text-slate-700">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold block text-slate-900 mb-1">
                    1. Retirada no Balcão em São Paulo
                  </span>
                  <p className="text-xs text-slate-600">
                    Disponível no Ipiranga — São Paulo/SP. Temos estrutura para carregamento do motor diretamente no seu veículo com segurança.
                  </p>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold block text-slate-900 mb-1">
                    2. Envio em Engradado com Seguro Total
                  </span>
                  <p className="text-xs text-slate-600">
                    Motores despachados fixados em paletes ou caixas de madeira, acompanhados de nota e seguro total de carga para todo o Brasil.
                  </p>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold block text-slate-900 mb-1">
                    3. Entrega Expressa na Grande São Paulo
                  </span>
                  <p className="text-xs text-slate-600">
                    Para oficinas e frotistas da região metropolitana de SP com veículo utilitário dedicado.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Cálculo transparente de frete de acordo com peso, cubagem e CEP da sua cidade.</span>
            </div>
          </div>

          {/* Card 2: Pagamento Seguro */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between w-full">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CreditCard className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Condições de Pagamento
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                Opções claras e seguras acertadas diretamente com nossos consultores comerciais no WhatsApp:
              </p>

              <div className="space-y-3 pt-2 text-sm text-slate-700">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold block text-slate-900 mb-1">
                    Pix Oficial da Empresa (CNPJ)
                  </span>
                  <p className="text-xs text-slate-600">
                    Chave Pix oficial atrelada ao CNPJ da empresa, conferindo agilidade e máxima segurança com emissão imediata da nota.
                  </p>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold block text-slate-900 mb-1">
                    Cartão de Crédito
                  </span>
                  <p className="text-xs text-slate-600">
                    Possibilidade de parcelamento no cartão de crédito presencialmente ou por link de pagamento oficial seguro.
                  </p>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold block text-slate-900 mb-1">
                    Faturamento PJ para Oficinas & Frotas
                  </span>
                  <p className="text-xs text-slate-600">
                    Boleto faturado para empresas cadastradas e centros automotivos mediante aprovação de cadastro prévio.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Emitimos garantia e nota em todas as operações: 1 ano para novos e 6 meses para seminovos.</span>
            </div>
          </div>

        </div>

        {/* WhatsApp Quote Bar */}
        <div className="mt-10 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md w-full">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">
              Deseja cotar o frete do motor para sua cidade?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Envie o CEP do seu mecânico ou residência junto com o modelo do motor para cálculo imediato.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openWhatsAppDirect(`Olá! Gostaria de cotar o frete para envio de um motor para o meu CEP na ${siteConfig.company.displayName}.`)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow transition-colors cursor-pointer whitespace-nowrap shrink-0 w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4 fill-current shrink-0" />
            <span>Consultar frete no WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
