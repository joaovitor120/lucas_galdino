'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { navLinks } from '@/data/content';
import { waMessages, whatsappHref } from '@/lib/whatsapp';
import { BrandMark } from './ui';

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  /* trava o scroll, ESC e focus trap enquanto o menu está aberto */
  useEffect(() => {
    if (!open) {
      document.body.style.overflow = '';
      return;
    }
    document.body.style.overflow = 'hidden';
    const first = menuRef.current?.querySelector<HTMLElement>('a, button');
    first?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
        burgerRef.current?.focus();
        return;
      }
      if (e.key !== 'Tab' || !menuRef.current) return;
      const nodes = menuRef.current.querySelectorAll<HTMLElement>('a, button');
      const items: HTMLElement[] = [];
      nodes.forEach((el: HTMLElement) => {
        if (el.offsetParent !== null) items.push(el);
      });
      if (items.length === 0) return;
      const firstEl = items[0];
      const lastEl = items[items.length - 1];
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close]);

  return (
    <>
      <header className="header" id="header">
        <div className="wrap-wide header__inner">
          <a className="brand" href="#top" aria-label="Lucas Galdino — início">
            <BrandMark />
            <span className="brand__name">
              LUCAS GALDINO<span>PALESTRAS CORPORATIVAS</span>
            </span>
          </a>

          <nav className="nav" aria-label="Navegação principal">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="header__cta">
            <a className="btn btn--sm" href="#proposta">
              Solicitar proposta
            </a>
            <button
              ref={burgerRef}
              className="burger"
              id="burger"
              type="button"
              aria-expanded={open}
              aria-controls="menu"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        className={open ? 'menu is-open' : 'menu'}
        id="menu"
        ref={menuRef}
        hidden={!open}
      >
        <nav aria-label="Navegação">
          <ol>
            {navLinks.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={close}
                  style={{ ['--d' as string]: `${60 + i * 50}ms` }}
                >
                  <i>{String(i + 1).padStart(2, '0')}</i>
                  {l.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="menu__foot">
          <a className="btn" href="#proposta" onClick={close}>
            Solicitar uma proposta
          </a>
          <a
            className="btn btn--ghost"
            href={whatsappHref(waMessages.geral)}
            target="_blank"
            rel="noopener"
            data-track="whatsapp_click"
            onClick={close}
          >
            Conversar no WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
