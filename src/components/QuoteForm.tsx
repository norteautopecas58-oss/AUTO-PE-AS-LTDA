import React, { useState } from 'react';
import { MessageCircle, Search, Calendar, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
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
    // "Olá! Gostaria de consultar um motor.
    //
    // Motor desejado: [texto digitado]
    //
    // Ano do veículo: [ano informado]
    //
    // Gostaria de confirmar preço, disponibilidade e condições."
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
    <section id="consulta-motor" className="py-12 lg:py-16 bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container do Formulário com destaque visual e ícone de lupa */}
        <div className="relative bg-white border-2 border-blue-900/15 rounded-3xl p-6 sm:p-10 shadow-xl shadow-blue-950/5 overflow-hidden">
          
          {/* Faixa decorativa superior com as cores do site */}
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-blue-900 via-blue-700 to-red-600" />

          {/* Cabeçalho com Ícone de Lupa em destaque */}
          <div className="text-center mb-8 pt-2">
            
            {/* Tag / Badge com a lupa */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-950 text-xs sm:text-sm font-extrabold tracking-wide uppercase mb-3 shadow-2xs">
              <span className="p-1 rounded-full bg-blue-900 text-white">
                <Search className="w-3.5 h-3.5" />
              </span>
              <span>Busca Rápida de Motores</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Consulte a disponibilidade do seu motor
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
              Digite o motor e o ano do veículo abaixo para consultar nossa equipe de especialistas diretamente no WhatsApp.
            </p>

            {/* Passo a passo visual de como a pessoa faz */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-xl mx-auto text-left">
              <div className={`p-2.5 rounded-xl border transition-all ${isMotorValid ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
                <div className="flex items-center gap-2">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${isMotorValid ? 'bg-emerald-600 text-white' : 'bg-blue-900 text-white'}`}>
                    {isMotorValid ? '✓' : '1'}
                  </span>
                  <span className="text-xs font-bold leading-tight">1. Digite o motor</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1 pl-7 leading-tight">Ex.: Gol 1.0, Onix 1.4...</p>
              </div>

              <div className={`p-2.5 rounded-xl border transition-all ${isYearInputValid ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
                <div className="flex items-center gap-2">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${isYearInputValid ? 'bg-emerald-600 text-white' : 'bg-blue-900 text-white'}`}>
                    {isYearInputValid ? '✓' : '2'}
                  </span>
                  <span className="text-xs font-bold leading-tight">2. Digite o ano</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1 pl-7 leading-tight">4 dígitos (ex.: 2018)</p>
              </div>

              <div className={`p-2.5 rounded-xl border transition-all ${isFormValid ? 'bg-emerald-100 border-emerald-400 text-emerald-900 shadow-xs' : 'bg-slate-50 border-slate-200 text-slate-500'}`}>
                <div className="flex items-center gap-2">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${isFormValid ? 'bg-emerald-600 text-white animate-pulse' : 'bg-slate-300 text-slate-600'}`}>
                    3
                  </span>
                  <span className="text-xs font-bold leading-tight">3. Chame no WhatsApp</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1 pl-7 leading-tight">Botão verde libera abaixo</p>
              </div>
            </div>

          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            
            {/* Campo 1: Qual motor você procura? (Com lupa de pesquisa dentro) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="motor-query" className="flex items-center gap-2 text-sm sm:text-base font-bold text-slate-900">
                  <Search className="w-4 h-4 text-blue-900 shrink-0" />
                  <span>1. Qual motor você procura?</span>
                  <span className="text-red-600">*</span>
                </label>
                {isMotorValid && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Preenchido
                  </span>
                )}
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Search className="w-5 h-5 text-blue-900/60" />
                </div>
                <input
                  id="motor-query"
                  type="text"
                  required
                  value={motorQuery}
                  onChange={(e) => setMotorQuery(e.target.value)}
                  placeholder="Ex.: Motor Gol 1.0 Flex, motor Onix 1.4, motor Corolla 2.0..."
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 text-sm sm:text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-900/25 focus:border-blue-900 transition-all shadow-xs"
                />
              </div>
            </div>

            {/* Campo 2: Ano do veículo */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="vehicle-year" className="flex items-center gap-2 text-sm sm:text-base font-bold text-slate-900">
                  <Calendar className="w-4 h-4 text-blue-900 shrink-0" />
                  <span>2. Ano do veículo</span>
                  <span className="text-red-600">*</span>
                </label>
                {isYearInputValid && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Ano válido
                  </span>
                )}
              </div>

              <div className="relative w-full sm:w-56">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Calendar className="w-5 h-5 text-blue-900/60" />
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
                  className={`w-full pl-11 pr-4 py-3.5 rounded-xl border text-sm sm:text-base bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all shadow-xs font-mono font-bold tracking-wider ${
                    yearError
                      ? 'border-red-500 focus:ring-red-200 focus:border-red-600'
                      : 'border-slate-300 focus:ring-blue-900/25 focus:border-blue-900'
                  }`}
                />
              </div>
              {yearError && (
                <p className="mt-1.5 text-xs text-red-600 font-medium">
                  {yearError}
                </p>
              )}
            </div>

            {/* Apenas mostra o botão após preencher os dois campos! */}
            <div className="pt-3">
              {isFormValid ? (
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-700">
                    <Sparkles className="w-4 h-4 text-emerald-600 animate-spin" />
                    <span>Campos preenchidos! Clique abaixo para abrir a conversa no WhatsApp:</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-6 py-4.5 rounded-2xl text-lg sm:text-xl font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 cursor-pointer shadow-xl shadow-emerald-600/35 hover:shadow-emerald-500/45 transition-all transform hover:-translate-y-0.5 active:scale-98 ring-4 ring-emerald-500/30"
                  >
                    <MessageCircle className="w-7 h-7 fill-current shrink-0" />
                    <span>Consultar pelo WhatsApp</span>
                    <ArrowRight className="w-5 h-5 shrink-0 ml-1 hidden sm:inline" />
                  </button>
                </div>
              ) : (
                /* Card explicativo amigável em vez de botão apagado/com cara de erro */
                <div className="rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50/60 p-4 sm:p-5 text-center">
                  <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-bold text-blue-950">
                    <Search className="w-5 h-5 text-blue-800 animate-bounce" />
                    <span>Preencha os 2 campos acima para liberar o botão de atendimento</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
                    Assim que você informar qual motor procura e o ano do veículo, o botão verde do WhatsApp será ativado na hora para você confirmar o preço e a disponibilidade.
                  </p>
                </div>
              )}
            </div>

            {/* Aviso Discreto Obrigatório */}
            <p className="text-center text-xs text-slate-500 leading-relaxed pt-1">
              A disponibilidade, compatibilidade, preço e condições do motor serão confirmados durante o atendimento.
            </p>

          </form>

        </div>

      </div>
    </section>
  );
};
