import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
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

  const isFormValid = motorQuery.trim().length >= 3 && isYearValid(vehicleYear);

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
    <section id="consulta-motor" className="py-12 lg:py-16 bg-white border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container do Formulário */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-10 shadow-sm">
          
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Consulte a disponibilidade do seu motor
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Preencha os dados abaixo para consultar nossa equipe diretamente pelo WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            
            {/* Campo 1: Qual motor você procura? */}
            <div>
              <label htmlFor="motor-query" className="block text-sm sm:text-base font-bold text-slate-900 mb-2">
                1. Qual motor você procura? <span className="text-red-600">*</span>
              </label>
              <input
                id="motor-query"
                type="text"
                required
                value={motorQuery}
                onChange={(e) => setMotorQuery(e.target.value)}
                placeholder="Ex.: Motor Gol 1.0 Flex, motor Onix 1.4, motor Corolla 2.0..."
                className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all shadow-2xs"
              />
            </div>

            {/* Campo 2: Ano do veículo */}
            <div>
              <label htmlFor="vehicle-year" className="block text-sm sm:text-base font-bold text-slate-900 mb-2">
                2. Ano do veículo <span className="text-red-600">*</span>
              </label>
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
                className={`w-full sm:w-48 px-4 py-3.5 rounded-xl border text-sm sm:text-base bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all shadow-2xs font-mono ${
                  yearError
                    ? 'border-red-500 focus:ring-red-200 focus:border-red-600'
                    : 'border-slate-300 focus:ring-blue-900/20 focus:border-blue-900'
                }`}
              />
              {yearError && (
                <p className="mt-1.5 text-xs text-red-600 font-medium">
                  {yearError}
                </p>
              )}
            </div>

            {/* Botão Verde: Consultar pelo WhatsApp */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-base sm:text-lg font-bold text-white transition-all shadow-md ${
                  isFormValid
                    ? 'bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 cursor-pointer shadow-emerald-600/25 active:scale-99'
                    : 'bg-slate-300 text-slate-500 cursor-not-allowed shadow-none'
                }`}
              >
                <MessageCircle className="w-6 h-6 fill-current shrink-0" />
                <span>Consultar pelo WhatsApp</span>
              </button>
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
