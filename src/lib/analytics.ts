/**
 * Camada fina de eventos. Nenhuma ferramenta é carregada pelo site:
 * se o cliente instalar GA4/GTM/Plausible, os eventos passam a ser enviados
 * automaticamente. Sem ferramenta instalada, isto é um no-op — e nenhum dado
 * pessoal é coletado (LGPD).
 */
export type TrackEvent =
  | 'hero_cta_click'
  | 'whatsapp_click'
  | 'proposal_form_start'
  | 'proposal_form_submit'
  | 'talk_view'
  | 'media_kit_download'
  | 'footer_contact_click';

type Win = Window & {
  gtag?: (...args: unknown[]) => void;
  dataLayer?: Record<string, unknown>[];
};

export function track(event: TrackEvent | string, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return;
  const w = window as Win;
  try {
    if (typeof w.gtag === 'function') {
      w.gtag('event', event, params);
    } else if (Array.isArray(w.dataLayer)) {
      w.dataLayer.push({ event, ...params });
    }
  } catch {
    /* analytics nunca pode quebrar a página */
  }
}
