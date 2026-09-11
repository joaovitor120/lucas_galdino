# Lucas Galdino — Palestras Corporativas

Redesign completo do site de Lucas Galdino (palestras sobre segurança do trabalho,
comportamento humano, neurociência e percepção de riscos).

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS · zero dependências de animação.

---

## Rodando o projeto

```bash
npm install
npm run dev       # http://localhost:3000
```

Outros comandos:

```bash
npm run build     # build de produção
npm run start     # servir o build
npm run lint      # eslint (next/core-web-vitals)
npm run typecheck # tsc --noEmit
```

> **Antes do primeiro `npm run dev`:** copie o arquivo
> `media-kit-lucas-galdino.pdf` para dentro de `public/`.
> Ele não veio no pacote porque tem 38 MB — veja "Pendências" no fim deste arquivo.

## Publicando

O projeto é um site estático com App Router — funciona em qualquer host que rode Next.js
(Vercel, Netlify, Cloudflare Pages, Railway). Na Vercel basta importar o repositório:
não há variáveis de ambiente, banco nem API a configurar.

---

## Arquitetura

```
src/
  app/
    layout.tsx            metadata, OG/Twitter, preload de fontes e do LCP
    page.tsx              a jornada da página, seção a seção
    structured-data.ts    JSON-LD (Person + Service + FAQPage)
    globals.css           DESIGN SYSTEM completo (tokens + componentes)
  components/
    Header.tsx            client — menu fullscreen, focus trap, ESC, body lock
    Hero.tsx              "the speaker"
    ProblemSection.tsx    diagnóstico com coluna sticky
    Manifesto.tsx         "O acidente acontece primeiro na mente."
    TransformationSection.tsx
    MentalModel.tsx       percepção → consciência → decisão → comportamento → cultura
    PerceptionMoment.tsx  interação exclusiva da marca
    FeaturedTalk.tsx      palestra-assinatura
    TalksSection.tsx      repertório por público
    ExperienceGallery.tsx
    MissionSection.tsx    a origem
    SpeakerBio.tsx
    LiveInCast.tsx
    ProcessTimeline.tsx
    FAQ.tsx               client — accordion acessível
    FinalCTA.tsx
    ProposalForm.tsx      client — formulário em 2 etapas
    Footer.tsx
    WhatsAppFab.tsx
    SiteEffects.tsx       client — toda a camada de motion, em um único listener
    ui.tsx                ícones e helpers compartilhados
  data/
    site.ts               métricas, contatos, credenciais
    talks.ts              palestras
    content.ts            problemas, transformações, modelo mental, processo, FAQ
  lib/
    whatsapp.ts           links wa.me com mensagem contextual
    analytics.ts          eventos (no-op sem ferramenta instalada)
```

### Por que o CSS não está em utilitários Tailwind

O sistema visual (escala tipográfica com `clamp()`, máscaras da fotografia do hero,
a linha de progresso do modelo mental, a revelação da palavra RISCO) depende de
regras que não têm equivalente direto em utilitários. Ele vive em `globals.css`,
organizado em tokens + classes de componente, e o Tailwind está configurado com
**os mesmos tokens** (`bg-ink-900`, `text-brand-500`, `font-display`…) em
`tailwind.config.ts`. Utilitários funcionam normalmente e sempre puxam as cores da
marca — nunca um hex avulso.

### Por que `<img>` e não `next/image`

As imagens já são entregues otimizadas (WebP, múltiplas larguras, `srcset`/`sizes`,
`width`/`height` explícitos, `loading="lazy"` exceto no LCP). O hero usa
`object-fit: contain` com máscara alfa, composição que o `next/image` atrapalha.
Se quiser migrar, os dados de cada imagem estão em `src/data/talks.ts`.

---

## Design system

**Cor** — a paleta é a mesma do site anterior, apenas organizada:
`hsl(222 47% 5%)` de fundo, `hsl(142 71% 45%)` de marca, `hsl(215 16% 63%)` de texto
secundário. A partir delas foram derivadas as escalas `--ink-50…950` e
`--brand-50…900`. Nenhuma hue nova foi introduzida. `--brand-600` existe só para
atingir contraste AA sobre fundos claros.

**Tipografia** — Archivo (display) + Inter (texto) + Newsreader itálico (citações).
Self-hosted, subset latin, 3 arquivos, 86 KB no total. Escala responsiva em `clamp()`.

**Grid** — 12 colunas no desktop, container 1240px (1440px em seções full-bleed),
gutter `clamp(20px, 5vw, 64px)`.

**Motion** — `cubic-bezier(.16, 1, .3, 1)`, 200–700 ms na UI. Apenas `transform` e
`opacity`. Um único listener de scroll em `requestAnimationFrame`; o resto é
`IntersectionObserver`. Tudo desliga em `prefers-reduced-motion` e nada de conteúdo
depende de animação para existir.

---

## Conteúdo

Nenhuma informação foi inventada. Todos os números, palestras, objeções e a história
pessoal vêm do conteúdo oficial publicado por Lucas. Os textos vivem em `src/data/`
para edição sem tocar em componente.

## Analytics e LGPD

O site não carrega nenhuma ferramenta de tracking. `src/lib/analytics.ts` dispara os
eventos `hero_cta_click`, `whatsapp_click`, `proposal_form_start`,
`proposal_form_submit`, `talk_view`, `media_kit_download` e `footer_contact_click`
**se** existir `gtag` ou `dataLayer` na página. Sem ferramenta instalada, é no-op e
nenhum dado pessoal é coletado — por isso também não há cookie banner.

O formulário não envia dados para servidor nenhum: ele monta a mensagem e abre o
WhatsApp ou o cliente de e-mail do próprio visitante. Os dados ficam apenas no
`sessionStorage` do navegador dele enquanto preenche. Se um dia houver backend,
valide sempre no servidor — o honeypot e a validação atuais são só a primeira camada.

---

## Pendências para confirmar com Lucas

1. **Mídia kit (38 MB)** — copiar `media-kit-lucas-galdino.pdf` para `public/`.
   Vale comprimir: 38 MB é pesado para download em celular.
2. **Depoimentos** — não existe nenhum depoimento identificado no material atual.
   Nada foi inventado e a seção não foi criada. Com 3–4 depoimentos reais
   (texto, nome, cargo, empresa e autorização) dá para montar a seção.
3. **Logos de clientes** — mesma situação: sem arquivos e sem autorização de uso,
   não há logo rail.
4. **Vídeo** — não há vídeo oficial nos assets. Por isso o CTA secundário é
   "Ver a experiência" (âncora para a galeria) e não "Assistir à experiência".
   Com um vídeo, vale uma seção própria com modal acessível.
5. **Fotografias** — só existem quatro cenas de evento distintas
   (`plateia-atencao`, `plateia-evento`, `plateia-reflexao`, `grupo-evento` — este
   último é o mesmo take de `equipe-evento`) e uma foto de palco real
   (ENGMINAS, qualidade de celular). Mais fotos de palco com plateia grande
   elevariam bastante a seção "A experiência".
6. **Redes sociais** — nenhum perfil estava linkado no site anterior. O rodapé está
   pronto para receber os links.
7. **Livros** — existem 2 livros publicados, mas não há capas nem títulos nos
   assets. Com as capas, cabe uma composição editorial curta na seção "Sobre Lucas".
8. **Spotify / Live In Cast** — falta o link do podcast para virar CTA real.
9. **Domínio no JSON-LD** — o `Person` do site anterior apontava para
   `lucasgaldino.com.br`, diferente do domínio publicado. Confirmar qual é o oficial.
