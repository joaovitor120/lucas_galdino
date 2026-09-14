import { faq } from '@/data/content';
import { site } from '@/data/site';
import { talks, featuredTalk, strategicTalk } from '@/data/talks';

/**
 * Dados estruturados. Só entram afirmações verificáveis no conteúdo oficial.
 * Person + Service + FAQPage em um único @graph.
 */
export const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${site.url}/#lucas`,
      name: 'Lucas Galdino',
      jobTitle: 'Palestrante corporativo, engenheiro de segurança do trabalho e ergonomista',
      description:
        'Engenheiro de produção, engenheiro de segurança do trabalho, ergonomista, palestrante e escritor. Atua com saúde e segurança do trabalho desde 2008 e apresenta o Live In Cast.',
      url: `${site.url}/`,
      image: `${site.url}${site.ogImage}`,
      email: site.email,
      telephone: '+55-27-99988-4234',
      knowsLanguage: 'pt-BR',
      knowsAbout: [
        'Segurança do Trabalho',
        'Neurociência do Comportamento',
        'Percepção de Riscos',
        'Ergonomia',
        'Fatores Psicossociais',
        'Liderança',
        'Cultura de Segurança',
        'SIPAT',
      ],
    },
    {
      '@type': 'Service',
      name: 'Palestras corporativas sobre segurança do trabalho, comportamento e percepção de riscos',
      serviceType: 'Palestra corporativa',
      provider: { '@id': `${site.url}/#lucas` },
      areaServed: { '@type': 'Country', name: 'Brasil' },
      audience: {
        '@type': 'BusinessAudience',
        name: 'Empresas, SIPATs, congressos e eventos corporativos',
      },
      description:
        'Palestras que conectam neurociência, comportamento humano, liderança e Segurança do Trabalho para despertar consciência, influenciar decisões e fortalecer a cultura de prevenção.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Palestras',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: featuredTalk.title } },
          ...talks.map((t) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: t.titleBreak ? `${t.title} ${t.titleBreak}` : t.title,
            },
          })),
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: `${strategicTalk.title} ${strategicTalk.titleBreak}`,
            },
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};
