'use client';

import { useState } from 'react';
import { faq } from '@/data/content';
import { delay } from './ui';

/** Accordion acessível: aria-expanded/aria-controls, navegação por teclado nativa. */
export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="s-light s-pad" id="duvidas" style={{ paddingTop: 0 }} aria-labelledby="faq-title">
      <div className="wrap">
        <div className="rule" style={{ marginBottom: 'clamp(56px,7vw,96px)' }} />
        <p className="eyebrow" data-reveal>
          <span>09 — Antes de contratar</span>
        </p>
        <h2 className="h2" id="faq-title" data-reveal style={{ ...delay(60), marginTop: 20, maxWidth: '18ch' }}>
          Antes de contratar, sua empresa pode estar pensando:
        </h2>

        <div className="faq" id="faq">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className={isOpen ? 'faq__item is-open' : 'faq__item'} key={item.q}>
                <h3>
                  <button
                    className="faq__q"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`fa${i}`}
                    id={`fq${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    {item.q}
                    <span className="faq__icon" aria-hidden="true" />
                  </button>
                </h3>
                <div className="faq__a" id={`fa${i}`} role="region" aria-labelledby={`fq${i}`}>
                  <div>
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
