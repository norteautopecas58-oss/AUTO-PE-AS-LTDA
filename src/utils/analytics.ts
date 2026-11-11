/**
 * Utilitário de Rastreamento compatível com Google Ads e Google Tag Manager
 * Eventos oficiais exigidos:
 * - whatsapp_click
 * - quote_form_submit
 * - contact_click
 *
 * Não utiliza IDs fictícios. Opera via window.dataLayer padrão.
 */

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export interface QuoteEventPayload {
  clientName?: string;
  vehicleBrand?: string;
  vehicleModel?: string;
  vehicleYear?: string;
  partName?: string;
  hasObservations?: boolean;
}

export function pushDataLayer(eventName: string, parameters: Record<string, unknown> = {}) {
  try {
    if (typeof window === 'undefined') return;

    window.dataLayer = window.dataLayer || [];

    const eventData = {
      event: eventName,
      timestamp: new Date().toISOString(),
      ...parameters,
    };

    window.dataLayer.push(eventData);

    // Feedback visual/console transparente para verificação de tags
    if (process.env.NODE_ENV !== 'production' || window.location.hostname === 'localhost') {
      console.info(`[dataLayer Event Dispatched]`, eventData);
    }
  } catch (err) {
    console.warn('[Analytics] Não foi possível despachar evento para o dataLayer:', err);
  }
}

/**
 * Evento disparado quando o usuário clica para abrir o WhatsApp comercial.
 * IMPORTANTE: Conforme requisitos do Google Ads, um clique no WhatsApp
 * NÃO é considerado venda concluída, apenas um lead de consulta comercial.
 */
export function trackWhatsAppClick(source: string, details?: Record<string, unknown>) {
  pushDataLayer('whatsapp_click', {
    click_source: source,
    action_type: 'consultation_intent',
    ...details,
  });
}

/**
 * Evento disparado após validação bem-sucedida do formulário de consulta de peças,
 * imediatamente antes do redirecionamento ao WhatsApp.
 */
export function trackQuoteFormSubmit(payload: QuoteEventPayload) {
  pushDataLayer('quote_form_submit', {
    brand: payload.vehicleBrand,
    model: payload.vehicleModel,
    year: payload.vehicleYear,
    part_query: payload.partName,
    has_notes: payload.hasObservations ?? false,
    form_version: 'v1_auto_pecas',
  });
}

/**
 * Evento disparado ao clicar em canais de contato alternativos (telefone, e-mail, mapa).
 */
export function trackContactClick(channel: 'phone' | 'email' | 'address' | 'maps') {
  pushDataLayer('contact_click', {
    contact_channel: channel,
  });
}
