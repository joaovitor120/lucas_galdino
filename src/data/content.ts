/** Conteúdo editorial das seções. Texto preservado do site oficial de Lucas Galdino. */

export const problems = [
  {
    title: 'Treinamentos que informam, mas não permanecem',
    text: 'O trabalhador participa, recebe a orientação e conhece o procedimento. Pouco tempo depois, porém, a mensagem perde força diante da rotina.',
  },
  {
    title: 'Riscos que deixaram de chamar atenção',
    text: 'Repetição, familiaridade, excesso de confiança e ausência de consequências anteriores podem fazer situações perigosas parecerem normais.',
  },
  {
    title: 'Equipes que conhecem as regras, mas normalizam desvios',
    text: 'A pessoa pode saber o que precisa fazer e, ainda assim, escolher um atalho quando o ambiente recompensa velocidade, produção ou improviso.',
  },
  {
    title: 'Lideranças que defendem a segurança, mas comunicam outras prioridades',
    text: 'A cultura real não é formada apenas pelo discurso. Ela também é construída pelo exemplo, pelas cobranças, pelas decisões e pelo que a empresa tolera.',
  },
  {
    title: 'SIPATs e eventos esquecidos depois do aplauso',
    text: 'Muitas palestras entretêm durante uma hora, mas não constroem uma mensagem capaz de reaparecer quando uma decisão precisa ser tomada.',
  },
] as const;

export const transformations = [
  {
    slot: 't-a',
    title: 'Percepção de riscos renovada',
    text: 'A audiência é provocada a identificar situações que, por repetição ou familiaridade, deixaram de chamar sua atenção.',
  },
  {
    slot: 't-b',
    title: 'Decisões mais conscientes',
    text: 'As pessoas compreendem melhor como pressa, confiança, emoções, contexto e prioridades influenciam suas escolhas.',
  },
  {
    slot: 't-c',
    title: 'Maior envolvimento com a segurança',
    text: 'A segurança deixa de ser apresentada apenas como norma e passa a se conectar com escolhas, histórias e consequências reais.',
  },
  {
    slot: 't-d',
    title: 'Uma linguagem comum entre equipes e lideranças',
    text: 'Trabalhadores, gestores, RH e profissionais de segurança passam a compartilhar conceitos que podem continuar sendo utilizados depois do evento.',
  },
  {
    slot: 't-e',
    title: 'Lideranças mais conscientes de sua influência',
    text: 'Gestores percebem como sua comunicação, seus exemplos, suas cobranças e suas decisões moldam o comportamento das equipes.',
  },
  {
    slot: 't-f',
    title: 'Fortalecimento da cultura de segurança',
    text: 'A palestra ajuda a iniciar, reforçar ou reposicionar conversas importantes sobre prevenção, responsabilidade compartilhada e organização do trabalho.',
  },
] as const;

/** Informação → Percepção → Consciência → Decisão → Comportamento → Cultura */
export const mentalModel = [
  { n: '01', title: 'Informação', text: 'A regra existe e é comunicada.' },
  { n: '02', title: 'Percepção', text: 'O risco é notado — ou deixa de ser.' },
  { n: '03', title: 'Consciência', text: 'O risco ganha significado pessoal.' },
  { n: '04', title: 'Decisão', text: 'A escolha acontece sob contexto e pressão.' },
  { n: '05', title: 'Comportamento', text: 'A decisão vira ação observável.' },
  { n: '06', title: 'Cultura', text: 'Ações repetidas viram o jeito da empresa.' },
] as const;

export const pillars = [
  {
    n: 'A',
    title: 'Neurociência e percepção',
    text: 'Compreensão acessível sobre atenção, habituação, excesso de confiança, tomada de decisão e percepção de ameaças.',
  },
  {
    n: 'B',
    title: 'Comportamento e contexto',
    text: 'Análise do comportamento sem reduzir acidentes à ideia simplista de imprudência individual.',
  },
  {
    n: 'C',
    title: 'Emoção e identificação',
    text: 'Histórias e provocações que aproximam o tema da realidade humana de quem está ouvindo.',
  },
  {
    n: 'D',
    title: 'Aplicação organizacional',
    text: 'Conexão entre a mensagem apresentada e os desafios reais da empresa, das equipes e das lideranças.',
  },
] as const;

export const processSteps = [
  {
    n: '01',
    title: 'Entendimento do evento',
    text: 'Levantamento do público, segmento, contexto, objetivo, histórico e principal mensagem desejada.',
  },
  {
    n: '02',
    title: 'Definição da experiência',
    text: 'Seleção ou adaptação do tema de acordo com o momento da empresa e o perfil da audiência.',
  },
  {
    n: '03',
    title: 'Personalização',
    text: 'Adequação da linguagem, dos exemplos, das provocações e das situações apresentadas.',
  },
  {
    n: '04',
    title: 'Realização e continuidade',
    text: 'Entrega de uma experiência construída para informar, envolver, provocar e permanecer na memória.',
  },
] as const;

export const faq = [
  {
    q: 'Nossa equipe já recebe treinamentos obrigatórios.',
    a: 'Os treinamentos técnicos são indispensáveis e não são substituídos pela palestra. Enquanto o treinamento apresenta regras, procedimentos e competências, a palestra trabalha a forma como as pessoas percebem, interpretam e atribuem significado ao risco.',
  },
  {
    q: 'Uma palestra realmente consegue mudar comportamentos?',
    a: 'Nenhuma palestra séria deve prometer uma transformação automática ou isolada. O que uma experiência bem construída pode fazer é provocar um ponto de virada cognitivo e emocional, criar uma linguagem comum e abrir espaço para que mensagens importantes continuem sendo trabalhadas pela empresa.',
  },
  {
    q: 'Não queremos mais uma palestra motivacional.',
    a: 'Esta não é uma apresentação baseada em frases prontas, entusiasmo momentâneo ou emoção vazia. O conteúdo une fundamentação técnica, neurociência, comportamento humano, realidade organizacional e aplicação prática.',
  },
  {
    q: 'Os trabalhadores já conhecem os riscos.',
    a: 'Conhecer o risco não significa continuar percebendo-o. Repetição, confiança, pressa e familiaridade podem fazer uma ameaça conhecida deixar de produzir atenção.',
  },
  {
    q: 'A palestra vai responsabilizar o trabalhador pelo acidente?',
    a: 'Não. A abordagem analisa o comportamento dentro de um sistema e considera ambiente, liderança, comunicação, organização do trabalho, pressão, recursos e contexto.',
  },
  {
    q: 'O conteúdo funciona para públicos operacionais?',
    a: 'Sim. A linguagem, os exemplos e o nível de profundidade são adaptados de acordo com o público, sem perder a consistência da mensagem.',
  },
  {
    q: 'Também é possível trabalhar com lideranças?',
    a: 'Sim. A palestra pode ser direcionada a gestores, empresários, profissionais de RH, equipes de segurança e alta liderança.',
  },
  {
    q: 'É possível criar uma palestra exclusiva?',
    a: 'Sim. A experiência pode ser construída a partir de um desafio, objetivo, evento ou momento específico da organização.',
  },
  {
    q: 'A palestra pode ser presencial ou online?',
    a: 'Sim. Os formatos são apresentados de acordo com a localização, o público e a estrutura do evento.',
  },
] as const;

/** Campo da interação de percepção. A palavra RISCO está presente o tempo todo. */
export const perceptionWords = [
  'rotina',
  'pressa',
  'meta',
  'hábito',
  'turno',
  'confiança',
  'rotina',
  '__RISCO__',
  'prazo',
  'cansaço',
  'atalho',
  'rotina',
  'produção',
  'improviso',
  'familiaridade',
] as const;

export const navLinks = [
  { href: '#problema', label: 'O problema' },
  { href: '#modelo', label: 'A abordagem' },
  { href: '#palestras', label: 'Palestras' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#lucas', label: 'Sobre Lucas' },
  { href: '#duvidas', label: 'Dúvidas' },
] as const;
