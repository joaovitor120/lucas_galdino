import { processSteps } from '@/data/content';
import { ArrowIcon, delay } from './ui';

export default function ProcessTimeline() {
  return (
    <section className="s-light s-pad" id="processo" aria-labelledby="proc-title">
      <div className="wrap">
        <p className="eyebrow" data-reveal>
          <span>08 — Como funciona</span>
        </p>
        <h2 className="h2" id="proc-title" data-reveal style={{ ...delay(60), marginTop: 20, maxWidth: '16ch' }}>
          A palestra conversa com a realidade da sua empresa.
        </h2>
        <p className="lead" data-reveal style={{ ...delay(110), marginTop: 22 }}>
          Nenhuma apresentação é entregue igual para todos. O conteúdo é construído a partir do
          contexto, do público e do momento de cada organização.
        </p>

        <div className="steps">
          {processSteps.map((s, i) => (
            <article className="step" data-reveal style={delay(i * 70)} key={s.n}>
              <span className="idx">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 'clamp(40px,5vw,64px)' }} data-reveal>
          <a className="btn btn--ghost" href="#proposta">
            Planejar meu evento com Lucas
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
