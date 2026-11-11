import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuoteForm } from './components/QuoteForm';
import { EngineShowcase } from './components/EngineShowcase';
import { AboutSection } from './components/AboutSection';
import { DeliveryAndPayment } from './components/DeliveryAndPayment';
import { ContactSection } from './components/ContactSection';
import { LegalPoliciesView } from './components/LegalPoliciesView';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CookieConsent } from './components/CookieConsent';
import { Footer } from './components/Footer';
import { siteConfig } from './config/siteConfig';
import { X } from 'lucide-react';

export default function App() {
  const [prefilledEngineType, setPrefilledEngineType] = useState<string>('Motor Completo (Fechado)');
  const [legalModalTab, setLegalModalTab] = useState<'privacidade' | 'trocas' | 'termos' | null>(null);

  const handleScrollToForm = () => {
    const formEl = document.getElementById('consulta-motor');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToSection = (sectionId: string) => {
    if (sectionId === 'topo') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const targetEl = document.getElementById(sectionId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectEngineForQuote = (engineType: string) => {
    setPrefilledEngineType(engineType);
    handleScrollToForm();
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-blue-900 selection:text-white">
      
      {/* Top Navigation */}
      <Navbar
        onScrollToForm={handleScrollToForm}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main High-Conversion Engines Page */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero
          displayName={siteConfig.company.displayName}
          onScrollToForm={handleScrollToForm}
          onScrollToEngines={() => handleScrollToSection('motores')}
        />

        {/* Engine Quote Form */}
        <QuoteForm
          displayName={siteConfig.company.displayName}
          whatsappNumber={siteConfig.company.contact.whatsappRaw}
          prefilledEngineType={prefilledEngineType}
        />

        {/* Engine Catalog & Educational Visual Showcase */}
        <EngineShowcase
          displayName={siteConfig.company.displayName}
          onSelectEngineForQuote={handleSelectEngineForQuote}
        />

        {/* About & Corporate Credibility */}
        <AboutSection />

        {/* Engine Freight & Safe Payment */}
        <DeliveryAndPayment />

        {/* Contact, Pick-up Location & Hours */}
        <ContactSection />

      </main>

      {/* Official Footer with CNPJ and Corporate Data */}
      <Footer
        onScrollToSection={handleScrollToSection}
        onOpenLegalTab={(tab) => {
          setLegalModalTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp />

      {/* Cookie Consent Banner */}
      <CookieConsent />

      {/* Legal Policies Modal for Google Ads Full Transparency */}
      {legalModalTab && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
              <span className="font-bold text-base sm:text-lg">
                Políticas Legais — {siteConfig.company.displayName}
              </span>
              <button
                onClick={() => setLegalModalTab(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-y-auto flex-1 p-2 sm:p-6 bg-slate-50">
              <LegalPoliciesView
                initialTab={legalModalTab}
                onBackToHome={() => setLegalModalTab(null)}
              />
            </div>
            <div className="px-6 py-3 bg-slate-100 border-t border-slate-200 flex justify-end shrink-0">
              <button
                onClick={() => setLegalModalTab(null)}
                className="px-5 py-2 text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
