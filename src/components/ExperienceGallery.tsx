import { delay } from './ui';

/** Composição editorial assimétrica — três fotografias e uma frase, com respiro. */
export default function ExperienceGallery() {
  return (
    <section className="gallery s-darker s-pad" id="experiencia" aria-labelledby="exp-title">
      <div className="wrap-wide">
        <p className="eyebrow" data-reveal>
          <span>05 — A experiência</span>
        </p>
        <h2 className="h2" id="exp-title" data-reveal style={{ ...delay(60), marginTop: 20, maxWidth: '17ch' }}>
          Uma mensagem que precisa ser vista, ouvida e sentida.
        </h2>

        <div className="gallery__grid">
          <figure className="g g--a" data-reveal>
            <img
              src="/images/g-palco-900.webp"
              srcSet="/images/g-palco-900.webp 900w, /images/g-palco-1400.webp 1400w"
              sizes="(max-width:980px) 100vw, 56vw"
              width={900}
              height={600}
              loading="lazy"
              decoding="async"
              alt="Lucas Galdino palestrando em congresso técnico sobre segurança"
            />
            <figcaption className="g__cap">XVIII ENGMINAS · segurança na mineração</figcaption>
          </figure>

          <figure className="g g--b" data-reveal style={delay(80)}>
            <img
              src="/images/g-atencao-640.webp"
              srcSet="/images/g-atencao-640.webp 640w, /images/g-atencao-900.webp 900w"
              sizes="(max-width:980px) 100vw, 38vw"
              width={640}
              height={853}
              loading="lazy"
              decoding="async"
              alt="Participante concentrado durante palestra sobre percepção de riscos"
            />
          </figure>

          <div className="g g--quote" data-reveal>
            <blockquote className="quote" style={{ maxWidth: '20ch' }}>
              “Conhecer o risco não é o mesmo que percebê-lo.”
            </blockquote>
          </div>

          <figure className="g g--d" data-reveal style={delay(80)}>
            <img
              src="/images/grupo-evento-1400.webp"
              srcSet="/images/grupo-evento-900.webp 900w, /images/grupo-evento-1400.webp 1400w"
              sizes="(max-width:980px) 100vw, 60vw"
              width={1400}
              height={788}
              loading="lazy"
              decoding="async"
              alt="Equipe de colaboradores reunida e engajada ao final de uma palestra corporativa"
            />
            <figcaption className="g__cap">Encerramento de evento corporativo com a equipe completa.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
