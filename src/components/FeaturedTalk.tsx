import { featuredTalk } from '@/data/talks';
import { waMessages, whatsappHref } from '@/lib/whatsapp';
import { ArrowIcon, delay } from './ui';

export default function FeaturedTalk() {
  return (
    <section className="signature s-dark s-pad" id="palestras" aria-labelledby="sig-title">
      <div className="wrap">
        <div className="signature__grid">
          <div>
            <p className="eyebrow" data-reveal>
              <span>{featuredTalk.label}</span>
            </p>
            <h2 className="h2" id="sig-title" data-reveal style={{ ...delay(60), marginTop: 20, maxWidth: '16ch' }}>
              {featuredTalk.title}
            </h2>
            <p className="lead" data-reveal style={{ ...delay(120), marginTop: 24 }}>
              {featuredTalk.intro} Em vez de perguntar apenas <em>“quem errou?”</em>, passamos a
              investigar: <em>“o que aconteceu antes de essa pessoa tomar essa decisão?”</em>
            </p>

            <ul className="topics" data-reveal style={delay(180)}>
              {featuredTalk.topics.map((t) => (
                <li key={t}>
                  <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                    <circle cx="5" cy="5" r="3" fill="currentColor" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>

            <div style={{ marginTop: 32 }} data-reveal>
              <a
                className="btn"
                href={whatsappHref(waMessages.assinatura)}
                target="_blank"
                rel="noopener"
                data-track="whatsapp_click"
              >
                Levar esta palestra para minha empresa
                <ArrowIcon />
              </a>
            </div>
          </div>

          <figure className="signature__media" data-reveal style={delay(160)}>
            <img
              src="/images/lucas-palco-800.webp"
              srcSet="/images/lucas-palco-800.webp 800w, /images/lucas-palco-1200.webp 1200w"
              sizes="(max-width: 980px) 100vw, 46vw"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
              alt="Lucas Galdino palestrando no XVIII ENGMINAS 2026 sobre segurança na mineração"
            />
            <figcaption className="signature__tag">XVIII ENGMINAS · 2026</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
