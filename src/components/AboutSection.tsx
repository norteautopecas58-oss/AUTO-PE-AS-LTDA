import React from 'react';
import { Building2, ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const AboutSection: React.FC = () => {
  return (
    <section id="garantia" className="py-12 lg:py-20 bg-black border-b border-zinc-800 w-full overflow-hidden text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-red-500 mb-2">
            Procedência & Segurança
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Sobre a {siteConfig.company.displayName}
          </h2>
          <p className="mt-3 text-zinc-300 text-sm sm:text-base leading-relaxed">
            Especialistas em motores automotivos novos e seminovos com estoque dedicado, teste de bancada e garantia com nota emitida.
          </p>
        </div>

        {/* Corporate Trust Card */}
        <div className="bg-zinc-900 border-2 border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8 w-full">
          
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
              <Building2 className="w-5 h-5 text-red-500 shrink-0" />
              <span>Fornecimento Especializado em Motores</span>
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Atuamos no comércio de motores de reposição para veículos automotores. Nosso foco é fornecer motores novos (com 1 ano de garantia) e seminovos revisados (com 6 meses de garantia), atendendo proprietários de veículos, mecânicas e frotistas com procedência e nota.
            </p>
          </div>

          {/* 3 Pillars of Credibility */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 w-full">
            <div className="bg-black/60 p-5 rounded-2xl border border-zinc-800 shadow-md space-y-2">
              <div className="w-9 h-9 rounded-lg bg-emerald-950 text-emerald-400 flex items-center justify-center font-bold">
                <FileCheck className="w-5 h-5" />
              </div>
              <h4 className="font-black text-white text-sm">Garantia e Nota Emitida</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Toda operação acompanha nota e termo de garantia com numeração do motor para sua total tranquilidade.
              </p>
            </div>

            <div className="bg-black/60 p-5 rounded-2xl border border-zinc-800 shadow-md space-y-2">
              <div className="w-9 h-9 rounded-lg bg-red-950 text-red-400 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-black text-white text-sm">Garantia Diferenciada</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Motores novos contam com 1 ano de garantia. Motores seminovos revisados contam com 6 meses de garantia.
              </p>
            </div>

            <div className="bg-black/60 p-5 rounded-2xl border border-zinc-800 shadow-md space-y-2">
              <div className="w-9 h-9 rounded-lg bg-red-950 text-red-400 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="font-black text-white text-sm">Teste de Bancada</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Verificação minuciosa de compressão, vedação e componentes internos antes da liberação para entrega.
              </p>
            </div>
          </div>

          {/* Official Registration Details */}
          <div className="pt-6 border-t border-zinc-800 w-full">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">
              Identificação Cadastral da Empresa
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-zinc-200 font-mono bg-black/80 p-4 rounded-xl border border-zinc-800 w-full overflow-hidden">
              <div className="space-y-1">
                <p className="text-zinc-500 font-sans text-xs">Razão Social:</p>
                <p className="font-bold break-words">{siteConfig.company.legalName}</p>
                <p className="text-zinc-500 font-sans text-xs mt-2">Nome Comercial:</p>
                <p className="font-bold text-red-400">{siteConfig.company.displayName}</p>
              </div>
              <div className="space-y-1">
                <p className="text-zinc-500 font-sans text-xs">CNPJ:</p>
                <p className="font-bold">{siteConfig.company.cnpj}</p>
                <p className="text-zinc-500 font-sans text-xs mt-2">Situação Cadastral:</p>
                <p className="font-sans text-emerald-400 font-bold">Ativa e Regular</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
