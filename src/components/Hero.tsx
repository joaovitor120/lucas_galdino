import { heroStats } from '@/data/site';
import { ArrowIcon, delay } from './ui';

/**
 * HERO — "the speaker".
 * Lucas não está "ao lado" do texto: a fotografia é tratada com máscara alfa
 * (fade à esquerda e na base) e dissolve no fundo da marca. O olhar dele aponta
 * para a headline. No mobile a composição é outra: foto no topo, texto abaixo.
 */
export default function Hero() {
  return (
    <section className="hero s-dark" aria-labelledby="hero-title">
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__photo">
        <img
          src="/images/hero-lucas-1100.webp"
          srcSet="/images/hero-lucas-760.webp 760w, /images/hero-lucas-1100.webp 1100w, /images/hero-lucas-1400.webp 1400w"
          sizes="(max-width: 980px) 100vw, 52vw"
          width={1100}
          height={1654}
          fetchPriority="high"
          decoding="async"
          alt="Lucas Galdino, palestrante corporativo especializado em segurança do trabalho, neurociência do comportamento e percepção de riscos"
        />
      </div>
      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__inner wrap-wide">
        <div className="hero__copy">
          <p className="eyebrow" data-reveal>
            <span>
              <span className="hide-sm">Palestras corporativas · </span>
              Segurança • Comportamento • Neurociência
            </span>
          </p>

          <h1 className="h1" id="hero-title">
            <span className="ln" data-reveal-line style={delay(80)}>
              <span>Palestras que mudam</span>
            </span>
            <span className="ln" data-reveal-line style={delay(170)}>
              <span>a forma como as pessoas</span>
            </span>
            <span className="ln" data-reveal-line style={delay(260)}>
              <span>
                <em>percebem</em> o risco.
              </span>
            </span>
          </h1>

          <p className="lead hero__sub" data-reveal style={delay(380)}>
            Lucas Galdino conecta neurociência, comportamento humano, liderança e Segurança do
            Trabalho para que o risco volte a ser percebido antes de se transformar em acidente.
          </p>

          <div className="hero__actions" data-reveal style={delay(470)}>
            <a className="btn" href="#proposta">
              Solicitar uma proposta
              <ArrowIcon />
            </a>
            <a className="btn btn--ghost" href="#experiencia">
              Ver a experiência
            </a>
          </div>
        </div>

        <div className="proof" data-reveal style={delay(580)}>
          <div className="proof__grid">
            {heroStats.map((s) => (
              <div className="proof__item" key={s.label}>
                <p className="proof__n mono-num">
                  {s.prefix ? (
                    s.prefix === '+' ? (
                      <span className="u">+</span>
                    ) : (
                      <span>{s.prefix}</span>
                    )
                  ) : null}
                  <span data-count={s.value}>{s.value}</span>
                  {s.suffix ? <span className="u">{s.suffix}</span> : null}
                </p>
                <p className="proof__l">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
