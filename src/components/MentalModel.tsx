import { mentalModel, pillars } from '@/data/content';
import { delay } from './ui';

/**
 * A assinatura conceitual do projeto: percepção → consciência → decisão →
 * comportamento → cultura. A linha progride com o scroll e cada etapa acende.
 * No mobile vira timeline vertical. Sem JS, tudo aparece aceso.
 */
export default function MentalModel() {
  return (
    <section className="model s-dark s-pad" id="modelo" aria-labelledby="modelo-title">
      <div className="wrap">
        <p className="eyebrow" data-reveal>
          <span>03 — A abordagem</span>
        </p>
        <h2 className="h2" id="modelo-title" data-reveal style={{ ...delay(60), marginTop: 22, maxWidth: '18ch' }}>
          Da informação à consciência. Da consciência ao comportamento.
        </h2>
        <p className="lead" data-reveal style={delay(120)}>
          Conhecer uma regra é apenas o começo. A construção de comportamentos seguros depende de
          como as pessoas percebem o risco, interpretam o contexto, entendem as consequências,
          observam as lideranças, lidam com a pressão e atribuem significado à segurança.
        </p>

        <div className="model__track" id="model-track">
          <div className="model__rail" aria-hidden="true" />
          <div className="model__fill" aria-hidden="true" />
          <ol className="model__steps">
            {mentalModel.map((s) => (
              <li className="model__step" key={s.n}>
                <div className="model__dot" />
                <span className="idx">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="pillars">
          {pillars.map((p, i) => (
            <article className="pillar" data-reveal style={delay(i * 70)} key={p.n}>
              <span className="idx">{p.n}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
