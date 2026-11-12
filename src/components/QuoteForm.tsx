import React, { useState } from 'react';
import { Search, Calendar, CheckCircle2, Sparkles, ArrowRight, Clock } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { trackQuoteFormSubmit, trackWhatsAppClick } from '../utils/analytics';

interface QuoteFormProps {
  displayName?: string;
  whatsappNumber?: string;
  prefilledMotorQuery?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  whatsappNumber = '5511992434631',
  prefilledMotorQuery = '',
}) => {
  const [motorQuery, setMotorQuery] = useState(prefilledMotorQuery);
  const [vehicleYear, setVehicleYear] = useState('');
  const [yearError, setYearError] = useState('');

  React.useEffect(() => {
    if (prefilledMotorQuery) {
      setMotorQuery(prefilledMotorQuery);
    }
  }, [prefilledMotorQuery]);

  // Validação de 4 dígitos para o ano (entre 1950 e ano atual + 2)
  const currentYear = new Date().getFullYear();
  const isYearValid = (yearStr: string): boolean => {
    const clean = yearStr.trim();
    if (!/^\d{4}$/.test(clean)) return false;
    const num = parseInt(clean, 10);
    return num >= 1950 && num <= currentYear + 2;
  };

  const isMotorValid = motorQuery.trim().length >= 3;
  const isYearInputValid = isYearValid(vehicleYear);
  const isFormValid = isMotorValid && isYearInputValid;

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 4);
    setVehicleYear(val);

    if (val.length === 4) {
      if (!isYearValid(val)) {
        setYearError(`Informe um ano válido entre 1950 e ${currentYear + 1}`);
      } else {
        setYearError('');
      }
    } else if (val.length > 0 && val.length < 4) {
      setYearError('O ano deve conter 4 dígitos (ex.: 2018)');
    } else {
      setYearError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) return;

    // Disparar dataLayer para Google Ads e GTM
    trackQuoteFormSubmit({
      partName: motorQuery.trim(),
      vehicleYear: vehicleYear.trim(),
    });

    trackWhatsAppClick('quote_form_simplified', {
      motor_desejado: motorQuery.trim(),
      ano_veiculo: vehicleYear.trim(),
    });

    // Montar a mensagem exatamente como solicitada:
    const messageLines = [
      'Olá! Gostaria de consultar um motor.',
      '',
      `Motor desejado: ${motorQuery.trim()}`,
      '',
      `Ano do veículo: ${vehicleYear.trim()}`,
      '',
      'Gostaria de confirmar preço, disponibilidade e condições.',
    ];

    const messageText = messageLines.join('\n');
    const cleanNumber = whatsappNumber.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(messageText)}`;

    // Apenas abrir a conversa para o cliente confirmar o envio
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="consulta-motor" className="py-12 lg:py-16 bg-zinc-950 border-b border-zinc-800 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container do Formulário Preto e Vermelho */}
        <div className="relative bg-zinc-900 border-2 border-red-600/70 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-red-950/40 overflow-hidden">
          
          {/* Faixa decorativa superior vermelha */}
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-red-700 via-red-500 to-red-600" />

          {/* Cabeçalho */}
          <div className="text-center mb-8 pt-2">
            
            {/* Tag com Lupa e Orçamento Rápido */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/90 border border-red-600/60 text-red-300 text-xs sm:text-sm font-black tracking-wide uppercase mb-3 shadow-md">
              <span className="p-1 rounded-full bg-red-600 text-white">
                <Search className="w-3.5 h-3.5" />
              </span>
              <span>Busca Rápida de Motores · Orçamento em Poucos Minutos</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-snug sm:leading-tight text-balance max-w-xl mx-auto hyphens-none">
              Consulte a Disponibilidade do Seu Motor
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-300 max-w-xl mx-auto leading-relaxed text-balance">
              Orçamento sem compromisso em poucos minutos. Digite o motor e o ano do veículo abaixo para consultar no WhatsApp.
            </p>

            {/* Passo a passo visual de como a pessoa faz */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-xl mx-auto text-left">
              <div className={`p-2.5 rounded-xl border transition-all ${isMotorValid ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200' : 'bg-zinc-800/80 border-zinc-700 text-zinc-300'}`}>
                <div className="flex items-center gap-2">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${isMotorValid ? 'bg-emerald-500 text-black' : 'bg-red-600 text-white'}`}>
                    {isMotorValid ? '✓' : '1'}
                  </span>
                  <span className="text-xs font-bold leading-tight">1. Digite o motor</span>
                </div>
                <p className="text-[11px] text-zinc-400 mt-1 pl-7 leading-tight">Ex.: Gol 1.0, Onix 1.4...</p>
              </div>

              <div className={`p-2.5 rounded-xl border transition-all ${isYearInputValid ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200' : 'bg-zinc-800/80 border-zinc-700 text-zinc-300'}`}>
                <div className="flex items-center gap-2">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${isYearInputValid ? 'bg-emerald-500 text-black' : 'bg-red-600 text-white'}`}>
                    {isYearInputValid ? '✓' : '2'}
                  </span>
                  <span className="text-xs font-bold leading-tight">2. Digite o ano</span>
                </div>
                <p className="text-[11px] text-zinc-400 mt-1 pl-7 leading-tight">4 dígitos (ex.: 2018)</p>
              </div>

              <div className={`p-2.5 rounded-xl border transition-all ${isFormValid ? 'bg-emerald-950 border-emerald-400 text-emerald-200 shadow-md' : 'bg-zinc-800/80 border-zinc-700 text-zinc-500'}`}>
                <div className="flex items-center gap-2">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${isFormValid ? 'bg-emerald-500 text-black animate-pulse' : 'bg-zinc-700 text-zinc-400'}`}>
                    3
                  </span>
                  <span className="text-xs font-bold leading-tight">3. Chame no WhatsApp</span>
                </div>
                <p className="text-[11px] text-zinc-400 mt-1 pl-7 leading-tight">Botão verde libera abaixo</p>
              </div>
            </div>

          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            
            {/* Campo 1: Qual motor você procura? */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="motor-query" className="flex items-center gap-2 text-sm sm:text-base font-bold text-white">
                  <Search className="w-4 h-4 text-red-500 shrink-0" />
                  <span>1. Qual motor você procura?</span>
                  <span className="text-red-500">*</span>
                </label>
                {isMotorValid && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-md border border-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Preenchido
                  </span>
                )}
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-400">
                  <Search className="w-5 h-5 text-red-500/80" />
                </div>
                <input
                  id="motor-query"
                  type="text"
                  required
                  value={motorQuery}
                  onChange={(e) => setMotorQuery(e.target.value)}
                  placeholder="Ex.: Motor Gol 1.0 Flex, motor Onix 1.4, motor Corolla 2.0..."
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-zinc-700 bg-zinc-950 text-white placeholder-zinc-500 text-sm sm:text-base font-medium focus:outline-none focus:ring-2 focus:ring-red-600/40 focus:border-red-500 transition-all shadow-inner"
                />
              </div>
            </div>

            {/* Campo 2: Ano do veículo */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="vehicle-year" className="flex items-center gap-2 text-sm sm:text-base font-bold text-white">
                  <Calendar className="w-4 h-4 text-red-500 shrink-0" />
                  <span>2. Ano do veículo</span>
                  <span className="text-red-500">*</span>
                </label>
                {isYearInputValid && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-md border border-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Ano válido
                  </span>
                )}
              </div>

              <div className="relative w-full sm:w-56">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-400">
                  <Calendar className="w-5 h-5 text-red-500/80" />
                </div>
                <input
                  id="vehicle-year"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={4}
                  required
                  value={vehicleYear}
                  onChange={handleYearChange}
                  placeholder="Ex.: 2018"
                  className={`w-full pl-11 pr-4 py-3.5 rounded-xl border text-sm sm:text-base bg-zinc-950 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 transition-all shadow-inner font-mono font-bold tracking-wider ${
                    yearError
                      ? 'border-red-500 focus:ring-red-600/30 focus:border-red-500'
                      : 'border-zinc-700 focus:ring-red-600/30 focus:border-red-500'
                  }`}
                />
              </div>
              {yearError && (
                <p className="mt-1.5 text-xs text-red-400 font-semibold">
                  {yearError}
                </p>
              )}
            </div>

            {/* Botão Verde Vibrante do WhatsApp com Logo Oficial */}
            <div className="pt-3">
              {isFormValid ? (
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-400">
                    <Sparkles className="w-4 h-4 text-emerald-400 animate-spin" />
                    <span>Dados preenchidos! Clique abaixo para consultar no WhatsApp:</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-6 py-4.5 rounded-2xl text-lg sm:text-xl font-black text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 cursor-pointer shadow-2xl shadow-emerald-600/40 hover:shadow-emerald-500/50 transition-all transform hover:-translate-y-0.5 active:scale-98 ring-4 ring-emerald-500/30"
                  >
                    <WhatsAppIcon className="w-7 h-7 fill-current shrink-0" />
                    <span>Consultar pelo WhatsApp</span>
                    <ArrowRight className="w-5 h-5 shrink-0 ml-1 hidden sm:inline" />
                  </button>
                </div>
              ) : (
                /* Card explicativo amigável em vez de botão apagado/com cara de erro */
                <div className="rounded-2xl border-2 border-dashed border-red-900/60 bg-red-950/20 p-4 sm:p-5 text-center">
                  <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-bold text-red-400">
                    <Clock className="w-5 h-5 text-red-500 animate-bounce" />
                    <span>Preencha o motor e o ano acima para liberar a consulta direta</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1 max-w-md mx-auto">
                    Assim que você informar o motor desejado e o ano, o botão oficial do WhatsApp será liberado imediatamente para confirmação de preço e disponibilidade.
                  </p>
                </div>
              )}
            </div>

            {/* Aviso Discreto Obrigatório */}
            <p className="text-center text-xs text-zinc-500 leading-relaxed pt-1">
              A disponibilidade, compatibilidade, preço e condições do motor serão confirmados durante o atendimento.
            </p>

          </form>

        </div>

      </div>
    </section>
  );
};
