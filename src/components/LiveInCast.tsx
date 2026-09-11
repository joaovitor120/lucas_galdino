import { castStats } from '@/data/site';
import { delay } from './ui';

/** Número sem contexto não é autoridade: cada métrica vem com a frase que a explica. */
export default function LiveInCast() {
  return (
    <section className="cast s-pad" aria-labelledby="cast-title">
      <div className="wrap">
        <div className="cast__grid">
          <div>
            <p className="eyebrow" data-reveal>
              <span>Live In Cast</span>
            </p>
            <h2 className="h2" id="cast-title" data-reveal style={{ ...delay(60), marginTop: 18, maxWidth: '17ch' }}>
              Uma conversa sobre segurança que atravessou fronteiras.
            </h2>
            <p className="lead" data-reveal style={{ ...delay(110), marginTop: 22 }}>
              O podcast apresentado por Lucas leva discussões sobre segurança, comportamento e
              trabalho para muito além do ambiente técnico — e encontrou audiência em 95 países.
            </p>

            <div className="cast__stats" data-reveal style={delay(170)}>
              {castStats.map((s) => (
                <div className="cast__stat" key={s.label}>
                  <b className="mono-num">
                    {s.prefix ?? ''}
                    <span data-count={s.value}>{s.value}</span>
                    {s.suffix ?? ''}
                    {s.unit ?? ''}
                  </b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <figure className="cast__media" data-reveal style={delay(120)}>
            <img
              src="/images/lucas-sentado-640.webp"
              srcSet="/images/lucas-sentado-640.webp 640w, /images/lucas-sentado-960.webp 960w"
              sizes="(max-width:980px) 80vw, 30vw"
              width={640}
              height={800}
              loading="lazy"
              decoding="async"
              alt="Lucas Galdino, apresentador do Live In Cast"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
