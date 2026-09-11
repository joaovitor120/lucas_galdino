import { waMessages, whatsappHref } from '@/lib/whatsapp';
import { WhatsAppIcon } from './ui';

/** Discreto: só aparece depois da primeira dobra e nunca cobre conteúdo. */
export default function WhatsAppFab() {
  return (
    <a
      className="wa"
      id="wa"
      href={whatsappHref(waMessages.geral)}
      target="_blank"
      rel="noopener"
      aria-label="Conversar no WhatsApp"
      data-track="whatsapp_click"
    >
      <WhatsAppIcon />
    </a>
  );
}
