import { waMessages, whatsappHref } from '@/lib/whatsapp';
import { ArrowIcon, delay } from './ui';

export default function FinalCTA() {
  return (
    <section className="final s-pad" aria-labelledby="final-title">
      <div className="final__photo" aria-hidden="true">
        <img
          src="/images/lucas-bracos-700.webp"
          srcSet="/images/lucas-bracos-700.webp 700w, /images/lucas-bracos-1050.webp 1050w"
          sizes="(max-width:980px) 100vw, 52vw"
          width={700}
          height={933}
          loading="lazy"
          decoding="async"
          alt=""
        />
      </div>
      <div className="final__scrim" aria-hidden="true" />

      <div className="wrap-wide">
        <div className="final__inner">
          <p className="eyebrow" data-reveal>
            <span>Próximo passo</span>
          </p>
          <h2 className="h2" id="final-title" data-reveal style={{ ...delay(60), marginTop: 20, maxWidth: '16ch' }}>
            Não espere um acidente criar a consciência que sua empresa pode começar a despertar hoje.
          </h2>
          <p className="lead" data-reveal style={{ ...delay(120), marginTop: 24, maxWidth: '46ch' }}>
            Construa uma mensagem capaz de permanecer na mente das pessoas quando uma decisão precisar
            ser tomada.
          </p>
          <div className="hero__actions" data-reveal style={delay(180)}>
            <a className="btn" href="#proposta">
              Solicitar uma proposta
              <ArrowIcon />
            </a>
            <a
              className="btn btn--ghost"
              href={whatsappHref(waMessages.geral)}
              target="_blank"
              rel="noopener"
              data-track="whatsapp_click"
            >
              Conversar sobre meu evento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
