/**
 * Dados institucionais.
 * REGRA: nada aqui pode ser inventado. Todo número/afirmação vem do conteúdo
 * oficial publicado por Lucas Galdino (site anterior e mídia kit).
 */

export const site = {
  name: 'Lucas Galdino',
  role: 'Palestras corporativas',
  url: 'https://lucasgaldinopalestras.com',
  email: 'lucas@liveocupacional.com',
  phoneDisplay: '(27) 99988-4668',
  phoneE164: '5527999884668',
  mediaKit: '/media-kit-lucas-galdino.pdf',
  title:
    'Lucas Galdino · Palestras sobre Segurança, Comportamento e Percepção de Riscos',
  description:
    'Palestras corporativas que conectam neurociência, comportamento humano, liderança e Segurança do Trabalho para que o risco volte a ser percebido antes de se transformar em acidente. SIPAT, congressos e eventos corporativos.',
  ogImage: '/og-image.jpg',
} as const;

/** Métricas do hero — no máximo quatro, todas verificáveis. */
export const heroStats = [
  { prefix: '+', value: 200, label: 'palestras realizadas' },
  { value: 95, label: 'países ouvem o Live In Cast' },
  { prefix: 'Top ', value: 1, suffix: '%', label: 'Spotify 2025 · Live In Cast' },
  { value: 2, label: 'livros publicados' },
] as const;

/** Indicadores da seção “Sobre Lucas”. */
export const facts = [
  { term: 'Atuação em SST', value: 'Desde 2008' },
  { term: 'Ecossistema', value: '~2 mil empresas · 9 estados' },
  { term: 'Publicações', value: '2 livros publicados' },
  { term: 'Mídia', value: 'Live In Cast · Top 1% Spotify 2025' },
] as const;

/** Números do podcast, sempre com contexto (número solto não é autoridade). */
export const castStats = [
  { value: 95, label: 'países de audiência' },
  { value: 245, unit: ' mil', label: 'minutos ouvidos em 2025' },
  { prefix: 'Top ', value: 1, suffix: '%', label: 'Spotify 2025' },
] as const;

export const credentials = [
  'Eng. de Produção',
  'Eng. de Segurança do Trabalho',
  'Ergonomia',
  'Neurociência do Comportamento',
  'Psicologia Positiva',
] as const;
