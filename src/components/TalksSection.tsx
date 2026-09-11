import { strategicTalk, talks } from '@/data/talks';
import { waMessages, whatsappHref } from '@/lib/whatsapp';
import { ArrowIcon, delay } from './ui';

export default function TalksSection() {
  return (
    <section className="s-light s-pad" aria-labelledby="talks-title">
      <div className="wrap">
        <p className="eyebrow" data-reveal>
          <span>04 — Repertório</span>
        </p>
        <h2 className="h2" id="talks-title" data-reveal style={{ ...delay(60), marginTop: 20, maxWidth: '16ch' }}>
          Palestras organizadas por público e desafio.
        </h2>

        <div className="talks__grid">
          {talks.map((t, i) => (
            <article className={t.wide ? 'talk' : 'talk talk--sm'} data-reveal style={delay((i % 2) * 70)} key={t.id}>
              <div className="talk__media">
                <img
                  src={t.image.src}
                  srcSet={t.image.srcSet}
                  sizes={t.wide ? '(max-width:620px) 100vw, 48vw' : '(max-width:620px) 100vw, 32vw'}
                  width={t.image.width}
                  height={t.image.height}
                  loading="lazy"
                  decoding="async"
                  alt={t.image.alt}
                />
              </div>
              <div className="talk__body">
                <p className="talk__cat">{t.category}</p>
                <h3>
                  {t.title}
                  {t.titleBreak ? (
                    <>
                      <br />
                      {t.titleBreak}
                    </>
                  ) : null}
                </h3>
                <p>{t.description}</p>
                <div className="talk__foot">
                  <a
                    className="link-arrow"
                    href={whatsappHref(
                      waMessages.talk(t.titleBreak ? `${t.title} ${t.titleBreak}` : t.title)
                    )}
                    target="_blank"
                    rel="noopener"
                    data-track="talk_view"
                  >
                    Falar sobre esta palestra <ArrowIcon className="" size={15} />
                  </a>
                </div>
              </div>
            </article>
          ))}

          <article className="talk" style={{ gridColumn: 'span 12' }} data-reveal>
            <div className="talk__body" style={{ paddingBlock: 'clamp(28px,3vw,44px)' }}>
              <p className="talk__cat">{strategicTalk.category}</p>
              <h3 style={{ fontSize: 'clamp(1.3rem,1.1rem+1vw,1.9rem)', maxWidth: '18ch' }}>
                {strategicTalk.title}
                <br />
                {strategicTalk.titleBreak}
              </h3>
              <p style={{ maxWidth: '62ch' }}>{strategicTalk.description}</p>
              <div className="talk__foot" style={{ justifyContent: 'flex-start', gap: 24 }}>
                <a
                  className="btn btn--sm btn--ghost"
                  href={whatsappHref(waMessages.exclusiva)}
                  target="_blank"
                  rel="noopener"
                  data-track="whatsapp_click"
                >
                  Criar uma experiência exclusiva
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
