import { siteConfig } from '../config/siteConfig';
import { trackWhatsAppClick } from './analytics';

export interface EngineQuoteFormData {
  name: string;
  brand: string;
  model: string;
  year: string;
  engineDisplacement: string; // Ex: 1.0, 1.4, 1.6, 2.0, 2.8 Diesel
  engineType: string; // Motor Completo, Motor Parcial, Cabeçote
  observations?: string;
}

/**
 * Monta mensagem estruturada e profissional de consulta de motor automotivo.
 */
export function buildEngineQuoteMessage(data: EngineQuoteFormData): string {
  const lines = [
    `Olá! Gostaria de consultar a disponibilidade de um MOTOR na ${siteConfig.company.displayName}.`,
    '',
    `Meu nome: ${data.name.trim()}`,
    `Veículo: ${data.brand.trim()} ${data.model.trim()}`,
    `Ano do carro: ${data.year.trim()}`,
    `Motorização: ${data.engineDisplacement.trim() || 'A confirmar'}`,
    `Tipo desejado: ${data.engineType || 'Motor Completo'}`,
    `Observações: ${data.observations?.trim() || 'Nenhuma'}`,
    '',
    'Gostaria de confirmar valor, disponibilidade com Nota Fiscal para Detran e garantia.',
  ];

  return lines.join('\n');
}

/**
 * Cria a URL do WhatsApp com encodeURIComponent.
 */
export function buildWhatsAppUrl(message?: string, number: string = siteConfig.company.contact.whatsappRaw): string {
  const cleanNumber = number.replace(/\D/g, '');
  if (!message) {
    return `https://wa.me/${cleanNumber}`;
  }
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Abre o WhatsApp de forma segura e dispara evento no dataLayer.
 */
export function openWhatsAppDirect(message?: string, source: string = 'direct_button') {
  trackWhatsAppClick(source, { has_custom_message: !!message });
  const url = buildWhatsAppUrl(
    message || `Olá! Acessei o site da ${siteConfig.company.displayName} e gostaria de consultar a disponibilidade de um motor para o meu veículo.`
  );
  window.open(url, '_blank', 'noopener,noreferrer');
}
