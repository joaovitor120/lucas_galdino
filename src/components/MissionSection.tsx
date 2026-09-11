import { delay } from './ui';

/**
 * A origem. Assunto delicado: a força vem da sobriedade, não do efeito.
 * Muito espaço negativo, nenhuma animação além do fade de entrada.
 */
export default function MissionSection() {
  return (
    <section className="story s-light s-pad" id="missao" aria-labelledby="story-title">
      <div className="wrap">
        <div className="story__grid">
          <figure className="story__media" data-reveal>
            <img
              src="/images/lucas-sorrindo-640.webp"
              srcSet="/images/lucas-sorrindo-640.webp 640w, /images/lucas-sorrindo-960.webp 960w"
              sizes="(max-width:980px) 80vw, 38vw"
              width={640}
              height={800}
              loading="lazy"
              decoding="async"
              alt="Retrato de Lucas Galdino"
            />
          </figure>

          <div className="story__body">
            <p className="eyebrow" data-reveal>
              <span>06 — A origem</span>
            </p>
            <h2 className="h2" id="story-title" data-reveal style={{ ...delay(60), marginTop: 20, maxWidth: '17ch' }}>
              Para que mais pessoas terminem o dia sorrindo ao lado de suas famílias.
            </h2>

            <p data-reveal style={delay(120)}>
              A falta de percepção de riscos fez com que minha mãe nunca chegasse ao seu trabalho.
            </p>
            <p data-reveal style={delay(160)}>
              Um acidente de trabalho atravessou a minha família e transformou para sempre a maneira
              como eu compreendo a segurança.
            </p>
            <p data-reveal style={delay(200)}>
              Eu não conto essa história para gerar pena. Conto porque, depois que um acidente
              acontece, nenhuma norma, relatório ou investigação é capaz de devolver para uma família
              aquilo que ela perdeu.
            </p>
            <p data-reveal style={delay(240)}>
              Foi dessa experiência que nasceu uma missão: ajudar empresas, lideranças e trabalhadores
              a perceberem o que precisa ser percebido antes que seja tarde.
            </p>
            <p data-reveal style={delay(280)}>
              Porque, por trás de cada trabalhador, existe alguém esperando sua volta.
            </p>

            <div className="story__seal" data-reveal>
              <p className="quote" style={{ maxWidth: '20ch' }}>
                O acidente acontece primeiro na mente.
                <br />A prevenção também.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
