import { site } from '@/data/site';

/**
 * Monta um link wa.me com a mensagem já contextualizada.
 * Nunca use "Olá" seco: a mensagem deve conversar com o momento do visitante.
 */
export function whatsappHref(message: string): string {
  return `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  geral:
    'Olá, Lucas! Conheci seu trabalho pelo site e gostaria de conversar sobre uma palestra para minha empresa.',
  assinatura:
    'Olá, Lucas! Gostaria de saber mais sobre a palestra “O acidente acontece primeiro na mente” para um evento da minha empresa.',
  exclusiva:
    'Olá, Lucas! Gostaria de conversar sobre uma palestra exclusiva para um evento estratégico da minha empresa.',
  talk: (nome: string) =>
    `Olá, Lucas! Gostaria de saber mais sobre a palestra “${nome}” para um evento da minha empresa.`,
};
