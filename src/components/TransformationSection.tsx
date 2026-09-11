import { transformations } from '@/data/content';
import { delay } from './ui';

const DELAYS: Record<string, number> = { 't-a': 0, 't-b': 70, 't-c': 60, 't-d': 130, 't-e': 0, 't-f': 70 };

/** Grade editorial assimétrica — imagem alta à esquerda, texto respirando à direita. */
export default function TransformationSection() {
  const card = (slot: string) => {
    const t = transformations.find((x) => x.slot === slot)!;
    return (
      <article className={`t-card ${slot}`} data-reveal style={delay(DELAYS[slot] ?? 0)} key={slot}>
        <span className="bar" />
        <h3>{t.title}</h3>
        <p>{t.text}</p>
      </article>
    );
  };

  return (
    <section className="s-light s-pad" id="transformacao" aria-labelledby="transf-title">
      <div className="wrap">
        <p className="eyebrow" data-reveal>
          <span>02 — A transformação</span>
        </p>
        <h2 className="h2" id="transf-title" data-reveal style={{ ...delay(60), marginTop: 22, maxWidth: '20ch' }}>
          O que muda quando as pessoas passam a enxergar a segurança por uma nova perspectiva?
        </h2>

        <div className="transf__grid">
          {card('t-a')}
          {card('t-b')}

          <figure className="t-fig" data-reveal style={delay(120)}>
            <img
              src="/images/plateia-reflexao-640.webp"
              srcSet="/images/plateia-reflexao-640.webp 640w, /images/plateia-reflexao-900.webp 900w"
              sizes="(max-width: 1180px) 100vw, 40vw"
              width={640}
              height={853}
              loading="lazy"
              decoding="async"
              alt="Participantes em momento de reflexão durante palestra sobre comportamento seguro"
            />
          </figure>

          {card('t-c')}
          {card('t-d')}
          {card('t-e')}
          {card('t-f')}

          <blockquote className="quote t-quote" data-reveal>
            “A melhor palestra não termina no aplauso. Ela reaparece na mente da pessoa quando uma
            decisão precisa ser tomada.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}
