# Redesign do site de Lucas Galdino — resumo do projeto

Conceito central: **percepção antes do acidente**.
O site não fala sobre percepção — ele faz o visitante experimentar o conceito.

---

## 1. Arquitetura

A página é uma jornada, não uma pilha de seções. Cada seção responde à próxima
dúvida de quem contrata:

| # | Seção | Responde |
|---|---|---|
| — | **Hero** (escuro) | Quem é ele? O que faz? Para quem? |
| — | Prova imediata (4 métricas) | Ele tem estrada? |
| 01 | **O problema** (claro, coluna sticky) | Ele entende meu problema? |
| — | **A virada** (manifesto, escuro) | Qual é a ideia central? |
| 02 | **A transformação** (claro, grid assimétrico) | Que resultado isso gera? |
| 03 | **A abordagem** (escuro, timeline de scroll) | Por que a abordagem é diferente? |
| — | **Exercício de percepção** (escuro) | *experiência* do conceito |
| — | **Palestra-assinatura** (escuro, cinematográfico) | Qual palestra ele oferece? |
| 04 | **Repertório** (claro, cards) | Ele atende o meu público? |
| 05 | **A experiência** (escuro, galeria editorial) | Consigo imaginá-lo no meu evento? |
| 06 | **A origem** (claro, muito respiro) | Por que ele faz isso? |
| 07 | **Sobre Lucas** (escuro) | Ele domina o assunto? |
| — | **Live In Cast** | Ele tem autoridade fora do palco? |
| 08 | **Como funciona** (claro) | Como funciona contratar? |
| 09 | **Dúvidas** (claro, accordion) | E as minhas objeções? |
| — | **CTA final** (escuro, fotografia forte) | Decisão |
| 10 | **Formulário em 2 etapas** | Quanto esforço para conversar? |
| — | **Rodapé** | fecha a experiência |

O ritmo alterna escuro/claro de propósito: impacto → respiro → conteúdo → imagem →
prova → impacto → conversão. A separação é feita por direção de arte (fundo,
fotografia full-bleed, espaçamento), nunca por `border-top`.

## 2. Design system

**Cor — a paleta atual foi preservada integralmente.** Ela foi extraída do CSS do
site publicado, não estimada visualmente:

| Papel | Valor | Origem |
|---|---|---|
| Fundo base | `hsl(222 47% 5%)` | idêntico ao site atual (`--background`) |
| Superfície | `hsl(222 47% 7%)` | idêntico (`--card`) |
| Marca / accent | `hsl(142 71% 45%)` | idêntico (`--primary` / `--accent`) |
| Texto secundário | `hsl(215 16% 63%)` | idêntico (`--muted-foreground`) |
| Bordas | `hsl(0 0% 100% / .09)` | idêntico (`--border`) |

A partir delas foram derivadas as escalas `--ink-50…950` (hue 222) e
`--brand-50…900` (hue 142). **Nenhuma hue nova foi introduzida.** Os fundos claros
são neutros da mesma família (`hsl(220 33% 97%)`), e `--brand-600`
(`hsl(142 72% 31%)`) existe apenas para atingir contraste AA sobre fundo claro —
correção de acessibilidade, não mudança de identidade.

Proporção ~80/20: neutros e fotografia dominam; o verde aparece em eyebrow, número,
palavra estratégica, CTA e detalhe gráfico.

**Tipografia** — Archivo (display) + Inter (texto, mesma do site atual) + Newsreader
itálico (citações, uso pontual). Self-hosted, subset latin, 3 arquivos, 86 KB.
Escala em `clamp()`: H1 31→69px, H2 31→51px, corpo 17px/1,65.

**Grid** — 12 colunas no desktop, 8 no tablet, 4 no mobile. Container 1240px
(1440px em seções full-bleed), gutter `clamp(20px, 5vw, 64px)`. Quebras editoriais
intencionais: a fotografia ultrapassa o container em algumas composições.

**Forma** — raio 4px (moderado, nunca 30px), bordas de 1px, sombra praticamente
ausente: a profundidade vem do contraste e da fotografia.

**Motion** — `cubic-bezier(.16, 1, .3, 1)`, 200–700 ms. Só `transform` e `opacity`.
Um único listener de scroll em `requestAnimationFrame`; o resto é
`IntersectionObserver`. Sem bounce, sem elastic, sem cursor customizado, sem
scroll hijacking.

**Sistema gráfico próprio** — retícula de foco (círculos concêntricos com um ponto
central), linhas de conexão que progridem, marcações numeradas, grão sutil nas
seções escuras, contraste seletivo. Nada de capacete amarelo, fita zebrada ou
triângulo de perigo.

## 3. Referências — o que foi extraído

**Juliana Bley → direção editorial.** Blocos de cor full-bleed alternados criando
ritmo sem linhas divisórias; tipografia de statement em medida curta; eyebrow
minúsculo em caixa-alta com muito letter-spacing; assimetria controlada (texto e
imagem nunca em colunas iguais); listas separadas por fio de 1px em vez de cards;
muito espaço negativo. **Nada de identidade visual, forma, texto ou asset foi
copiado** — a paleta terracota/creme dela não aparece em lugar nenhum.

**Ayrton Brandão → impacto e estrutura comercial.** Palestrante como protagonista
do hero; prova social imediatamente abaixo da dobra; seção de diagnóstico antes de
oferecer a solução; palestras apresentadas por público; CTA em momentos de alta
intenção; formulário de proposta como destino do funil. **A atmosfera de partículas
e o fundo de palco não foram reproduzidos** — o hero de Lucas é composição
fotográfica com máscara alfa sobre o navy da própria marca.

**O que Lucas tem que nenhum dos dois tem:** a linguagem visual construída em torno
de percepção → consciência → decisão → comportamento → cultura, que aparece três
vezes na página (a timeline do modelo mental, a retícula do manifesto e o exercício
de percepção).

## 4. Assets reaproveitados

Todas as fotografias vêm do site atual. Nenhuma imagem de banco, nenhuma pessoa
gerada por IA. Das 14 imagens publicadas, 12 são distintas (duas eram duplicatas
exatas). Todas foram reprocessadas: recorte editorial por uso, color grading leve
em direção ao navy da marca (pele preservada), WebP em 2 larguras.

| Uso | Origem | Tratamento |
|---|---|---|
| Hero | `lucas-perfil` | grade navy seletivo no fundo + máscara alfa à esquerda e na base; o olhar aponta para a headline |
| O problema | `plateia-atencao` | recorte 3:2 |
| A transformação | `plateia-reflexao` | recorte 3:4 |
| Palestra-assinatura + galeria | `lucas-palco-engminas-2` | dois recortes diferentes (4:3 e 3:2) |
| Repertório | `plateia-evento`, `plateia-atencao` (recorte fechado), `lucas-pensativo`, `grupo-evento`, `lucas-sentado` | recortes 16:10 centrados no rosto |
| A experiência | `lucas-palco`, `plateia-atencao` (vertical), `grupo-evento` | composição assimétrica |
| A origem | `lucas-sorrindo` | 4:5 |
| Sobre Lucas | `lucas-em-pe` | 3:4 |
| Live In Cast | `lucas-sentado` | 4:5 |
| CTA final | `lucas-bracos-cruzados` | 3:4 + scrim diagonal |

Criados do zero: OG image 1200×630 (com a tipografia e a fotografia do próprio
site), favicon e apple-touch-icon a partir da marca de retícula.

## 5. Copy — headlines e CTAs

Frases que o visitante leva embora:

- "O acidente acontece primeiro na mente. A prevenção também." *(preservada — é o centro narrativo)*
- "Palestras que mudam a forma como as pessoas **percebem** o risco." *(hero)*
- "O desafio não é apenas ensinar o risco. É impedir que ele desapareça da percepção." *(preservada)*
- "Conhecer o risco não é o mesmo que percebê-lo."
- "O risco não apareceu agora. Você apenas voltou a percebê-lo." *(fecha o exercício de percepção)*

CTAs variam conforme o momento psicológico, todos caindo no mesmo funil:
Hero "Solicitar uma proposta" · Palestra "Levar esta palestra para minha empresa" ·
Card "Falar sobre esta palestra" (com o nome da palestra já na mensagem do WhatsApp) ·
Processo "Planejar meu evento com Lucas" · Final "Conversar sobre meu evento".

Nenhuma afirmação neurocientífica indevida: a linguagem fala em conexões entre
comportamento, percepção e decisão — nunca em "reprogramar o cérebro".

## 6. SEO

`title`, `description` e `canonical` reescritos; Open Graph e Twitter Cards completos
com OG image própria; JSON-LD com `Person` + `Service` (com `OfferCatalog` das 7
palestras) + `FAQPage` (9 perguntas); um único `<h1>`; hierarquia H1→H2→H3 coerente;
`alt` descritivo em todas as imagens; `lang="pt-BR"`; redirects de `/contato`,
`/palestras` e `/sobre` para as âncoras equivalentes, preservando URLs comerciais.

Keywords trabalhadas naturalmente no texto: palestrante segurança do trabalho,
palestra SIPAT, percepção de riscos, comportamento seguro, cultura de segurança,
fatores psicossociais, palestra para líderes.

## 7. Performance

- Fontes self-hosted (86 KB, 3 arquivos, `font-display: swap`, `preload` das duas críticas)
- Hero com `preload` + `fetchpriority="high"`; todo o resto `loading="lazy"`
- WebP em 2 larguras com `srcset`/`sizes` — o celular nunca baixa a imagem do desktop
- `width`/`height` explícitos em todas as imagens: zero layout shift
- Zero biblioteca de animação (sem GSAP, sem Framer Motion); ~7 KB de JS próprio
- Um listener de scroll em `requestAnimationFrame`; o resto em `IntersectionObserver`
- Só `transform` e `opacity` são animados
- Sem splash screen, sem cookie banner, sem tracker

## 8. Responsividade

Verificado em 360, 390, 430, 768, 1024, 1280, 1440 e 1920. Nenhum overflow horizontal.
Touch targets ≥ 44px.

O mobile não é o desktop empilhado. O hero tem composição própria: fotografia no topo
dissolvendo no fundo (até 430px de altura), depois eyebrow → headline em 3 linhas →
texto → CTAs, tudo acima da dobra em 390×844. A timeline horizontal do modelo mental
vira vertical. A galeria assimétrica vira empilhamento de largura cheia. O menu é
overlay fullscreen com numeração, focus trap, ESC e bloqueio de scroll.

## 9. Acessibilidade (WCAG AA)

Contraste verificado em todas as combinações — inclusive corrigindo o que o site
anterior não atendia (o verde da marca sobre fundo claro passou a usar a variação
`--brand-600`). Estados de foco visíveis em toda a navegação. HTML semântico com
`<main>`, `<section aria-labelledby>`, `<nav aria-label>`, `<h1>` único.
Accordion com `aria-expanded`/`aria-controls`, navegação por teclado.
Menu com focus trap, ESC e restauração de foco. Formulário com `<label>` real,
`autocomplete`, `inputmode`, erros com `role="alert"`. `alt` em todas as imagens
(vazio nas decorativas). Skip link. O exercício de percepção tem equivalente textual
para leitores de tela. `prefers-reduced-motion` remove parallax, reveals e smooth
scroll — e nenhuma informação depende de animação. Sem JavaScript, a página continua
inteiramente legível e navegável.

## 10. Pendências — o que precisa ser confirmado com Lucas

1. **Mídia kit** — copiar `media-kit-lucas-galdino.pdf` para `public/` (38 MB; vale comprimir)
2. **Depoimentos** — não existe nenhum depoimento identificado no material atual; nada foi inventado e a seção não foi criada
3. **Logos de clientes** — sem arquivos e sem autorização de uso, não há logo rail
4. **Vídeo** — não há vídeo oficial; por isso o CTA secundário é "Ver a experiência" e não "Assistir à experiência"
5. **Fotografias** — só há 4 cenas de evento distintas e uma foto de palco real (qualidade de celular); mais fotos de palco elevariam muito a seção "A experiência"
6. **Redes sociais** — nenhum perfil estava linkado; o rodapé está pronto para recebê-los
7. **Livros** — 2 livros publicados, mas sem capas nem títulos nos assets
8. **Live In Cast** — falta o link do podcast para virar CTA
9. **Domínio no JSON-LD** — o site anterior declarava `lucasgaldino.com.br`, diferente do domínio publicado; confirmar qual é o oficial
10. **Analytics** — não havia nenhuma ferramenta instalada; os eventos estão prontos para GA4/GTM quando quiserem
