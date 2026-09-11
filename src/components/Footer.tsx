import { navLinks } from '@/data/content';
import { site } from '@/data/site';
import { waMessages, whatsappHref } from '@/lib/whatsapp';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div>
            <p className="footer__claim">
              O acidente acontece primeiro na mente.
              <br />
              <span>A prevenção também.</span>
            </p>
            <p className="muted" style={{ marginTop: 26, maxWidth: '36ch', fontSize: '.93rem' }}>
              Lucas Galdino · Palestras corporativas sobre segurança, comportamento humano e percepção
              de riscos.
            </p>
          </div>

          <div>
            <h4>Navegação</h4>
            <ul>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contato</h4>
            <ul>
              <li>
                <a
                  href={whatsappHref(waMessages.geral)}
                  target="_blank"
                  rel="noopener"
                  data-track="whatsapp_click"
                >
                  WhatsApp {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} data-track="footer_contact_click">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.mediaKit} target="_blank" rel="noopener" data-track="media_kit_download">
                  Mídia kit (PDF)
                </a>
              </li>
              <li>
                <a href="#proposta">Solicitar proposta</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Lucas Galdino. Todos os direitos reservados.</span>
          <span aria-hidden="true" style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeOpacity=".35" />
              <circle cx="7" cy="7" r="1.6" fill="hsl(142 71% 45%)" />
            </svg>
            Perceber antes. Decidir melhor.
          </span>
        </div>
      </div>
    </footer>
  );
}
