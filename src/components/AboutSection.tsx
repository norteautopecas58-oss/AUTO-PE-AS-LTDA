import React from 'react';
import { Building2, ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-12 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2">
            Procedência & Segurança
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Sobre a {siteConfig.company.displayName}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Especialistas em motores automotivos com estoque dedicado, teste de bancada e Nota Fiscal para regularização veicular.
          </p>
        </div>

        {/* Corporate Trust Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8">
          
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-blue-900 shrink-0" />
              <span>Fornecimento Especializado em Motores</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Atuamos no comércio atacadista e varejista de motores de reposição para veículos automotores. Nosso foco é fornecer soluções completas e parciais que devolvam o desempenho, a segurança e a confiabilidade mecânica ao seu carro, com atendimento ágil para mecânicas, frotistas e clientes finais.
            </p>
          </div>

          {/* 3 Pillars of Credibility */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-2">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <FileCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Nota Fiscal para Detran</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Toda venda é acompanhada de Nota Fiscal com numeração gravada para cadastro e regularização no documento do veículo.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-2">
              <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Garantia por Escrito</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Garantia legal de 90 dias conforme o Código de Defesa do Consumidor, com suporte técnico para conferência da aplicação.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-2">
              <div className="w-9 h-9 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Teste de Bancada</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Verificação minuciosa de compressão, vedação e componentes internos antes da liberação para entrega.
              </p>
            </div>
          </div>

          {/* Official Registration Details */}
          <div className="pt-6 border-t border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Dados Cadastrais Oficiais da Empresa
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-800 font-mono bg-white p-4 rounded-xl border border-slate-200">
              <div>
                <p className="text-slate-500 font-sans text-xs">Razão Social:</p>
                <p className="font-bold">{siteConfig.company.legalName}</p>
                <p className="text-slate-500 font-sans text-xs mt-2">Nome Comercial:</p>
                <p className="font-bold">{siteConfig.company.displayName}</p>
              </div>
              <div>
                <p className="text-slate-500 font-sans text-xs">CNPJ:</p>
                <p className="font-bold">{siteConfig.company.cnpj}</p>
                <p className="text-slate-500 font-sans text-xs mt-2">Localização:</p>
                <p className="font-sans text-slate-700">{siteConfig.company.address.fullFormatted}</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
