import { problems } from '@/data/content';
import { delay } from './ui';

/**
 * Diagnóstico. Coluna esquerda fixa (sticky) enquanto os sintomas passam à direita:
 * a leitura vira um argumento, não uma grade de seis cards iguais.
 */
export default function ProblemSection() {
  return (
    <section className="s-light s-pad" id="problema" aria-labelledby="problema-title">
      <div className="wrap">
        <div className="problem__grid">
          <div className="problem__sticky">
            <p className="eyebrow" data-reveal>
              <span>01 — O diagnóstico</span>
            </p>
            <h2 className="h2" id="problema-title" data-reveal style={{ ...delay(60), marginTop: 22 }}>
              Sua empresa pode ter tudo no papel e ainda assim conviver com decisões inseguras.
            </h2>
            <p className="lead" data-reveal style={delay(120)}>
              Procedimentos bem elaborados, treinamentos atualizados, equipamentos adequados e
              profissionais tecnicamente competentes são indispensáveis. Mas nada disso garante, por
              si só, que o risco será percebido no momento em que uma decisão estiver sendo tomada.
            </p>
            <p className="lead" data-reveal style={delay(170)}>
              É nesse espaço entre conhecer a regra e agir diante da realidade que muitos acidentes
              começam.
            </p>
            <figure className="problem__photo" data-reveal style={delay(230)}>
              <img
                src="/images/plateia-atencao-900.webp"
                srcSet="/images/plateia-atencao-900.webp 900w, /images/plateia-atencao-1400.webp 1400w"
                sizes="(max-width: 980px) 100vw, 44vw"
                width={900}
                height={600}
                loading="lazy"
                decoding="async"
                alt="Profissionais atentos durante palestra corporativa sobre percepção de riscos"
              />
            </figure>
          </div>

          <ol className="problem__list">
            {problems.map((p, i) => (
              <li className="problem__item" data-reveal style={delay(i * 70)} key={p.title}>
                <span className="idx">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="problem__out" data-reveal>
          <p className="h1">
            O desafio não é apenas ensinar o risco. É impedir que ele desapareça da percepção.
          </p>
        </div>
      </div>
    </section>
  );
}
