import React, { useState } from 'react';
import { MessageCircle, CheckCircle2, AlertCircle, Eye, Wrench, ShieldCheck, FileCheck } from 'lucide-react';
import { EngineQuoteFormData, buildEngineQuoteMessage, buildWhatsAppUrl } from '../utils/whatsapp';
import { trackQuoteFormSubmit, trackWhatsAppClick } from '../utils/analytics';

interface QuoteFormProps {
  displayName: string;
  whatsappNumber: string;
  prefilledEngineType?: string;
}

const COMMON_BRANDS = [
  'Volkswagen',
  'Chevrolet / GM',
  'Fiat',
  'Toyota',
  'Ford',
  'Hyundai',
  'Renault',
  'Honda',
  'Jeep',
  'Nissan',
  'Mitsubishi',
];

const COMMON_DISPLACEMENTS = [
  '1.0 8V Flex',
  '1.0 3 Cilindros (12V)',
  '1.4 8V Flex',
  '1.6 8V / 16V',
  '1.8 8V / 16V',
  '2.0 Flex / Gasolina',
  '2.0 Turbo Diesel',
  '2.2 / 3.2 TDCi Diesel',
  '2.8 Turbo Diesel',
  '3.0 D-4D / V6',
];

export const QuoteForm: React.FC<QuoteFormProps> = ({
  displayName,
  whatsappNumber,
  prefilledEngineType,
}) => {
  const [formData, setFormData] = useState<EngineQuoteFormData>({
    name: '',
    brand: '',
    model: '',
    year: '',
    engineDisplacement: '',
    engineType: prefilledEngineType || 'Motor Completo (Fechado)',
    observations: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EngineQuoteFormData, string>>>({});
  const [showPreview, setShowPreview] = useState(false);
  const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);

  React.useEffect(() => {
    if (prefilledEngineType) {
      setFormData((prev) => ({ ...prev, engineType: prefilledEngineType }));
    }
  }, [prefilledEngineType]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EngineQuoteFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Por favor, informe seu nome para o atendimento.';
    }

    if (!formData.brand.trim()) {
      newErrors.brand = 'Informe a marca ou montadora do carro.';
    }

    if (!formData.model.trim()) {
      newErrors.model = 'Informe o modelo do veículo (ex: Gol, Onix, Hilux, Strada).';
    }

    if (!formData.year.trim()) {
      newErrors.year = 'Informe o ano do veículo.';
    }

    if (!formData.engineDisplacement.trim()) {
      newErrors.engineDisplacement = 'Informe a motorização (ex: 1.0, 1.6, 2.0, 2.8 Diesel).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      const firstError = document.querySelector('.has-error input') as HTMLElement;
      if (firstError) firstError.focus();
      return;
    }

    // 1. dataLayer tracking
    trackQuoteFormSubmit({
      clientName: formData.name,
      vehicleBrand: formData.brand,
      vehicleModel: formData.model,
      vehicleYear: formData.year,
      partName: `${formData.engineType} - ${formData.engineDisplacement}`,
      hasObservations: !!formData.observations?.trim(),
    });

    trackWhatsAppClick('engine_quote_form', {
      engine_type: formData.engineType,
      displacement: formData.engineDisplacement,
    });

    // 2. Build message and URL
    const message = buildEngineQuoteMessage(formData);
    const url = buildWhatsAppUrl(message, whatsappNumber);

    setSubmittedSuccessfully(true);

    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 150);
  };

  const previewText = buildEngineQuoteMessage(formData);

  return (
    <section id="consulta-motor" className="py-12 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2">
            Cotação Rápida de Motores
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Consulte a disponibilidade do seu motor
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Informe abaixo o modelo e o ano do veículo para verificarmos o motor correspondente em estoque com Nota Fiscal e garantia.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            
            {/* Field: Nome */}
            <div>
              <label htmlFor="client-name" className="block text-sm font-semibold text-slate-800 mb-1.5">
                Seu Nome Completo <span className="text-red-600">*</span>
              </label>
              <input
                id="client-name"
                type="text"
                required
                placeholder="Ex: Rodrigo Mendonça"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: undefined });
                }}
                className={`w-full px-4 py-3 rounded-lg border text-sm sm:text-base bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.name
                    ? 'border-red-500 focus:ring-red-200'
                    : 'border-slate-300 focus:ring-blue-100 focus:border-blue-600'
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Grid: Marca, Modelo e Ano */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              <div className={errors.brand ? 'has-error' : ''}>
                <label htmlFor="vehicle-brand" className="block text-sm font-semibold text-slate-800 mb-1.5">
                  Marca do Carro <span className="text-red-600">*</span>
                </label>
                <input
                  id="vehicle-brand"
                  type="text"
                  required
                  placeholder="Ex: Fiat, Chevrolet, VW"
                  value={formData.brand}
                  onChange={(e) => {
                    setFormData({ ...formData, brand: e.target.value });
                    if (errors.brand) setErrors({ ...errors, brand: undefined });
                  }}
                  className={`w-full px-4 py-3 rounded-lg border text-sm bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.brand
                      ? 'border-red-500 focus:ring-red-200'
                      : 'border-slate-300 focus:ring-blue-100 focus:border-blue-600'
                  }`}
                />
                {errors.brand && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.brand}
                  </p>
                )}
              </div>

              <div className={errors.model ? 'has-error' : ''}>
                <label htmlFor="vehicle-model" className="block text-sm font-semibold text-slate-800 mb-1.5">
                  Modelo do Carro <span className="text-red-600">*</span>
                </label>
                <input
                  id="vehicle-model"
                  type="text"
                  required
                  placeholder="Ex: Gol G5, Onix, Hilux"
                  value={formData.model}
                  onChange={(e) => {
                    setFormData({ ...formData, model: e.target.value });
                    if (errors.model) setErrors({ ...errors, model: undefined });
                  }}
                  className={`w-full px-4 py-3 rounded-lg border text-sm bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.model
                      ? 'border-red-500 focus:ring-red-200'
                      : 'border-slate-300 focus:ring-blue-100 focus:border-blue-600'
                  }`}
                />
                {errors.model && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.model}
                  </p>
                )}
              </div>

              <div className={errors.year ? 'has-error' : ''}>
                <label htmlFor="vehicle-year" className="block text-sm font-semibold text-slate-800 mb-1.5">
                  Ano do Veículo <span className="text-red-600">*</span>
                </label>
                <input
                  id="vehicle-year"
                  type="text"
                  required
                  placeholder="Ex: 2018 ou 2021"
                  value={formData.year}
                  onChange={(e) => {
                    setFormData({ ...formData, year: e.target.value });
                    if (errors.year) setErrors({ ...errors, year: undefined });
                  }}
                  className={`w-full px-4 py-3 rounded-lg border text-sm bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.year
                      ? 'border-red-500 focus:ring-red-200'
                      : 'border-slate-300 focus:ring-blue-100 focus:border-blue-600'
                  }`}
                />
                {errors.year && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.year}
                  </p>
                )}
              </div>

            </div>

            {/* Quick Brand Clickers */}
            <div>
              <span className="text-xs text-slate-500 font-medium block mb-1.5">Sugestões rápidas de montadora:</span>
              <div className="flex flex-wrap gap-1.5">
                {COMMON_BRANDS.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, brand: b }));
                      if (errors.brand) setErrors({ ...errors, brand: undefined });
                    }}
                    className={`text-xs px-2.5 py-1 rounded border transition-colors cursor-pointer ${
                      formData.brand === b
                        ? 'bg-blue-900 text-white border-blue-900 font-medium'
                        : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid: Motorização e Tipo de Motor */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className={errors.engineDisplacement ? 'has-error' : ''}>
                <label htmlFor="engine-disp" className="block text-sm font-semibold text-slate-800 mb-1.5">
                  Motorização / Cilindrada <span className="text-red-600">*</span>
                </label>
                <input
                  id="engine-disp"
                  type="text"
                  required
                  placeholder="Ex: 1.0 8V, 1.6 16V, 2.0 Flex, 2.8 Diesel"
                  value={formData.engineDisplacement}
                  onChange={(e) => {
                    setFormData({ ...formData, engineDisplacement: e.target.value });
                    if (errors.engineDisplacement) setErrors({ ...errors, engineDisplacement: undefined });
                  }}
                  className={`w-full px-4 py-3 rounded-lg border text-sm bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.engineDisplacement
                      ? 'border-red-500 focus:ring-red-200'
                      : 'border-slate-300 focus:ring-blue-100 focus:border-blue-600'
                  }`}
                />
                {errors.engineDisplacement && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.engineDisplacement}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="engine-type" className="block text-sm font-semibold text-slate-800 mb-1.5">
                  Tipo de Motor Desejado
                </label>
                <select
                  id="engine-type"
                  value={formData.engineType}
                  onChange={(e) => setFormData({ ...formData, engineType: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600 cursor-pointer"
                >
                  <option value="Motor Completo (Fechado)">Motor Completo (Fechado - pronto para instalar)</option>
                  <option value="Motor Parcial (Bloco montado com virabrequim e pistões)">Motor Parcial (Bloco com virabrequim e pistões)</option>
                  <option value="Cabeçote Montado e Testado">Cabeçote Montado e Testado</option>
                  <option value="Bloco de Motor Virgem ou Baixado">Bloco de Motor (com Nota Fiscal)</option>
                </select>
              </div>

            </div>

            {/* Quick Engine Displacements */}
            <div>
              <span className="text-xs text-slate-500 font-medium block mb-1.5">Motorizações comuns:</span>
              <div className="flex flex-wrap gap-1.5">
                {COMMON_DISPLACEMENTS.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, engineDisplacement: d }));
                      if (errors.engineDisplacement) setErrors({ ...errors, engineDisplacement: undefined });
                    }}
                    className="text-xs px-2.5 py-1 rounded border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
                  >
                    + {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Observações */}
            <div>
              <label htmlFor="engine-obs" className="block text-sm font-semibold text-slate-800 mb-1.5">
                Observações ou Dúvidas Adicionais <span className="text-slate-400 font-normal text-xs">(Opcional)</span>
              </label>
              <textarea
                id="engine-obs"
                rows={3}
                placeholder="Ex: Câmbio manual ou automático, motor flex ou gasolina, se precisa de envio para o interior ou retira em São Paulo..."
                value={formData.observations}
                onChange={(e) => setFormData({ ...formData, observations: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600 transition-all"
              />
            </div>

            {/* Live Message Preview Toggle */}
            <div className="pt-1">
              <button
                type="button"
                onClick={() => setShowPreview(!showPreview)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{showPreview ? 'Ocultar prévia' : 'Ver prévia da mensagem formatada para o WhatsApp'}</span>
              </button>

              {showPreview && (
                <div className="mt-2 p-3 bg-slate-900 text-slate-200 rounded-lg text-xs font-mono whitespace-pre-wrap border border-slate-800">
                  {previewText}
                </div>
              )}
            </div>

            {/* High Conversion Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 text-base sm:text-lg font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl shadow-lg hover:shadow-emerald-600/20 transition-all cursor-pointer active:scale-99"
              >
                <MessageCircle className="w-6 h-6 fill-current shrink-0" />
                <span>Consulte a disponibilidade do seu motor no WhatsApp</span>
              </button>
            </div>

            {submittedSuccessfully && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-xs sm:text-sm flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Atendimento iniciado!</strong> A janela do WhatsApp foi aberta com sua solicitação de motor preenchida. Se a janela não abriu, use o botão flutuante no canto da tela.
                </div>
              </div>
            )}

            {/* Legal Notice on Engines */}
            <div className="pt-4 border-t border-slate-200 text-center text-xs text-slate-500 leading-normal">
              <span className="font-semibold text-slate-700">Garantia e Regularização:</span> Todos os motores comercializados acompanham Nota Fiscal Eletrônica com numeração para cadastro junto ao Detran e garantia legal de 90 dias conforme o Código de Defesa do Consumidor.
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};
