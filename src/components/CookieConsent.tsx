import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cookie, X } from 'lucide-react';
import { pushDataLayer } from '../utils/analytics';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('auto_pecas_cookie_consent');
    if (!consent) {
      // Delay slightly so it doesn't jarringly pop up immediately
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('auto_pecas_cookie_consent', 'all');
    pushDataLayer('consent_update', {
      analytics_storage: 'granted',
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
    });
    setIsVisible(false);
  };

  const handleNecessaryOnly = () => {
    localStorage.setItem('auto_pecas_cookie_consent', 'necessary');
    pushDataLayer('consent_update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 sm:left-4 sm:bottom-4 z-40 max-w-lg w-full p-4 pointer-events-auto">
      <div className="bg-slate-900/95 text-white border border-slate-800 rounded-xl p-4 sm:p-5 shadow-2xl backdrop-blur-md text-xs space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2 text-white font-bold text-sm">
            <Cookie className="w-4 h-4 text-amber-400" />
            <span>Privacidade e Cookies</span>
          </div>
          <button
            onClick={handleNecessaryOnly}
            className="text-slate-400 hover:text-white p-1"
            aria-label="Dispensar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-slate-300 leading-relaxed text-xs">
          Utilizamos cookies estritamente necessários para o funcionamento e cookies analíticos para mensuração das campanhas do Google Ads, em conformidade com a LGPD.
        </p>

        {showDetails && (
          <div className="p-3 bg-slate-800/80 rounded-lg text-[11px] text-slate-300 space-y-1.5 border border-slate-700">
            <div className="flex justify-between font-semibold text-white">
              <span>Cookies Necessários:</span>
              <span className="text-emerald-400">Ativos (Sessão & Segurança)</span>
            </div>
            <div className="flex justify-between font-semibold text-white">
              <span>Métricas Google Ads & GTM:</span>
              <span className="text-blue-300">Mensuração de conversão</span>
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-slate-400 hover:text-slate-200 underline text-[11px] cursor-pointer"
          >
            {showDetails ? 'Menos detalhes' : 'Personalizar preferências'}
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleNecessaryOnly}
              className="px-3 py-1.5 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              Apenas necessários
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-3 py-1.5 text-white bg-blue-600 hover:bg-blue-500 font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Aceitar todos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
