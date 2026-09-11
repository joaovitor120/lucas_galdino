import { credentials, facts, site } from '@/data/site';
import { DownloadIcon, delay } from './ui';

export default function SpeakerBio() {
  return (
    <section className="s-dark s-pad" id="lucas" aria-labelledby="lucas-title">
      <div className="wrap">
        <div className="about__grid">
          <figure className="about__media" data-reveal>
            <img
              src="/images/lucas-em-pe-640.webp"
              srcSet="/images/lucas-em-pe-640.webp 640w, /images/lucas-em-pe-960.webp 960w"
              sizes="(max-width:980px) 80vw, 34vw"
              width={640}
              height={853}
              loading="lazy"
              decoding="async"
              alt="Lucas Galdino, engenheiro de segurança do trabalho, ergonomista e palestrante"
            />
          </figure>

          <div>
            <p className="eyebrow" data-reveal>
              <span>07 — Quem conduz</span>
            </p>
            <h2 className="h2" id="lucas-title" data-reveal style={{ ...delay(60), marginTop: 18 }}>
              Lucas Galdino
            </h2>
            <p className="lead" data-reveal style={{ ...delay(110), marginTop: 18, maxWidth: '44ch' }}>
              Engenheiro, ergonomista e estudioso do comportamento humano: a voz por trás de uma nova
              forma de enxergar a Segurança do Trabalho.
            </p>

            <div className="chips" data-reveal style={delay(160)}>
              {credentials.map((c) => (
                <span className="chip" key={c}>
                  {c}
                </span>
              ))}
            </div>

            <p
              className="muted"
              data-reveal
              style={{ ...delay(200), marginTop: 28, maxWidth: '58ch', fontSize: '.985rem', lineHeight: 1.7 }}
            >
              Atua com saúde e segurança do trabalho desde 2008 e lidera um ecossistema que atende
              aproximadamente duas mil empresas e milhares de trabalhadores em nove estados
              brasileiros, unindo na prática gestão empresarial e conhecimento técnico de alto nível.
              É palestrante, escritor, produtor de conteúdo e apresentador do Live In Cast.
            </p>

            <dl className="facts" data-reveal style={delay(240)}>
              {facts.map((f) => (
                <div className="fact" key={f.term}>
                  <dt>{f.term}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>

            <div style={{ marginTop: 30, display: 'flex', flexWrap: 'wrap', gap: 12 }} data-reveal>
              <a
                className="btn btn--ghost"
                href={site.mediaKit}
                target="_blank"
                rel="noopener"
                data-track="media_kit_download"
              >
                Baixar mídia kit
                <DownloadIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
