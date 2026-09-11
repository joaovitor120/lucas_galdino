export type Talk = {
  id: string;
  category: string;
  title: string;
  /** quebra de linha controlada no título (evita órfãs em breakpoints ruins) */
  titleBreak?: string;
  description: string;
  image: { src: string; srcSet: string; width: number; height: number; alt: string };
  /** card largo na grade de 12 colunas */
  wide?: boolean;
};

export const featuredTalk = {
  label: 'Palestra-assinatura',
  title: 'O acidente acontece primeiro na mente.',
  intro:
    'Uma experiência sobre tudo o que acontece antes do erro, antes da decisão insegura e antes de o risco se transformar em acidente.',
  topics: [
    'Por que conhecer o risco não significa percebê-lo',
    'Como a repetição transforma perigos em parte da paisagem',
    'Como pressa e excesso de confiança afetam decisões',
    'Como o ambiente pode favorecer comportamentos inseguros',
    'Como lideranças moldam a cultura por meio de exemplos e prioridades',
    'Como despertar consciência sem culpabilizar o trabalhador',
  ],
} as const;

export const talks: Talk[] = [
  {
    id: 'neuropercepcao',
    category: 'Equipes operacionais',
    title: 'Neuropercepção de riscos',
    description:
      'Como habituação, rotina, confiança e contexto fazem ameaças reais deixarem de ser percebidas.',
    image: {
      src: '/images/plateia-evento-900.webp',
      srcSet: '/images/plateia-evento-900.webp 900w, /images/plateia-evento-1400.webp 1400w',
      width: 900,
      height: 506,
      alt: 'Equipe operacional reunida durante palestra corporativa',
    },
    wide: true,
  },
  {
    id: 'conhecem-e-se-acidentam',
    category: 'Equipes operacionais',
    title: 'Por que pessoas conhecem',
    titleBreak: 'os riscos e ainda se acidentam',
    description:
      'Uma reflexão que vai além da culpa e investiga os fatores humanos, ambientais e organizacionais que antecedem o acidente.',
    image: {
      src: '/images/talk-percepcao-800.webp',
      srcSet: '/images/talk-percepcao-800.webp 800w, /images/talk-percepcao-1200.webp 1200w',
      width: 800,
      height: 500,
      alt: 'Participante atenta durante palestra sobre fatores humanos e acidentes',
    },
    wide: true,
  },
  {
    id: 'lideranca-comportamento-seguranca',
    category: 'Lideranças',
    title: 'Liderança, comportamento',
    titleBreak: 'e segurança',
    description:
      'Como comunicação, decisões, cobranças, prioridades e relações de poder influenciam a maneira como as equipes agem.',
    image: {
      src: '/images/talk-liderancas-800.webp',
      srcSet: '/images/talk-liderancas-800.webp 800w, /images/talk-liderancas-1200.webp 1200w',
      width: 800,
      height: 500,
      alt: 'Lucas Galdino em momento de reflexão sobre liderança e segurança',
    },
  },
  {
    id: 'fatores-psicossociais',
    category: 'RH · Gestão · SST',
    title: 'Fatores psicossociais e',
    titleBreak: 'organização do trabalho',
    description:
      'Como pressão, sobrecarga, conflitos, falta de clareza e modelos de gestão podem afetar saúde, segurança e desempenho.',
    image: {
      src: '/images/grupo-evento-900.webp',
      srcSet: '/images/grupo-evento-900.webp 900w, /images/grupo-evento-1400.webp 1400w',
      width: 900,
      height: 506,
      alt: 'Equipe completa reunida ao final de um evento corporativo',
    },
  },
  {
    id: 'saude-mental',
    category: 'RH · Gestão · SST',
    title: 'Saúde mental não transforma',
    titleBreak: 'empresas em consultórios',
    description:
      'Uma abordagem que esclarece o papel da organização diante dos fatores psicossociais, sem transformar problemas organizacionais em fragilidades individuais.',
    image: {
      src: '/images/talk-saude-800.webp',
      srcSet: '/images/talk-saude-800.webp 800w, /images/talk-saude-1200.webp 1200w',
      width: 800,
      height: 500,
      alt: 'Lucas Galdino em conversa sobre fatores psicossociais e saúde mental no trabalho',
    },
  },
];

export const strategicTalk = {
  category: 'Eventos estratégicos',
  title: 'Segurança',
  titleBreak: 'fora do óbvio',
  description:
    'Uma experiência para empresas que querem retirar a segurança do piloto automático e construir uma discussão mais consciente, humana e estratégica.',
} as const;
