'use client';

import { useEffect } from 'react';
import { track } from '@/lib/analytics';

/**
 * Camada única de motion e feedback.
 * Um só listener de scroll em rAF; IntersectionObserver para o resto.
 * Tudo desliga sob prefers-reduced-motion — o conteúdo nunca depende de animação.
 */
export default function SiteEffects() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const $ = <T extends Element>(s: string) => document.querySelector<T>(s);
    const $$ = <T extends Element>(s: string) => Array.from(document.querySelectorAll<T>(s));
    const cleanups: Array<() => void> = [];

    /* ---------- reveals ---------- */
    const revealEls = $$<HTMLElement>('[data-reveal], [data-reveal-line], .step');
    if ('IntersectionObserver' in window && !reduce) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          });
        },
        { rootMargin: '0px 0px -12% 0px', threshold: 0.12 }
      );
      revealEls.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    } else {
      revealEls.forEach((el) => el.classList.add('is-in'));
    }

    /* ---------- contadores ---------- */
    const counters = $$<HTMLElement>('[data-count]');
    const runCounter = (el: HTMLElement) => {
      const target = Number(el.dataset.count);
      if (!Number.isFinite(target) || reduce) {
        el.textContent = String(target);
        return;
      }
      const dur = 820;
      let start = 0;
      const frame = (ts: number) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        el.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 4))));
        if (p < 1) requestAnimationFrame(frame);
        else el.textContent = String(target);
      };
      requestAnimationFrame(frame);
    };
    if ('IntersectionObserver' in window) {
      const ioC = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              runCounter(e.target as HTMLElement);
              ioC.unobserve(e.target);
            }
          });
        },
        { threshold: 0.6 }
      );
      counters.forEach((el) => ioC.observe(el));
      cleanups.push(() => ioC.disconnect());
    }

    /* ---------- percepção: a palavra que volta a ser vista ---------- */
    const perc = $<HTMLElement>('#percepcao');
    if (perc) {
      if (reduce || !('IntersectionObserver' in window)) {
        perc.classList.add('is-revealed');
      } else {
        const ioP = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                perc.classList.add('is-revealed');
                ioP.unobserve(e.target);
              }
            });
          },
          { threshold: 0.55 }
        );
        ioP.observe(perc);
        cleanups.push(() => ioP.disconnect());
      }
    }

    /* ---------- scroll: header, modelo mental, nav corrente, whatsapp ---------- */
    const header = $<HTMLElement>('#header');
    const wa = $<HTMLElement>('#wa');
    const track_ = $<HTMLElement>('#model-track');
    const steps = track_ ? $$<HTMLElement>('.model__step') : [];
    const fill = track_ ? track_.querySelector<HTMLElement>('.model__fill') : null;
    const navAnchors = $$<HTMLAnchorElement>('.nav a[href^="#"]');
    const sections = navAnchors.map((a) => document.getElementById(a.getAttribute('href')!.slice(1)));
    let stuck = false;
    let ticking = false;

    const update = () => {
      const s = window.scrollY > 40;
      if (header && s !== stuck) {
        stuck = s;
        header.classList.toggle('is-stuck', s);
      }
      if (wa) wa.classList.toggle('is-on', window.scrollY > window.innerHeight * 0.9);

      if (track_ && fill) {
        const r = track_.getBoundingClientRect();
        const vh = window.innerHeight;
        const from = vh * 0.82;
        const to = vh * 0.3;
        let p = (from - r.top) / (from - to + r.height * 0.55);
        p = Math.max(0, Math.min(1, p));
        fill.style.setProperty('--p', `${(p * 100).toFixed(1)}%`);
        const active = Math.round(p * steps.length);
        steps.forEach((st, i) => st.classList.toggle('is-on', reduce || i < active));
      }

      const y = window.scrollY + window.innerHeight * 0.35;
      let best = -1;
      sections.forEach((sec, i) => {
        if (sec && sec.offsetTop <= y) best = i;
      });
      navAnchors.forEach((a, i) => {
        if (i === best) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });

      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    cleanups.push(() => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    });
    update();

    /* ---------- eventos ---------- */
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const tracked = t.closest<HTMLElement>('[data-track]');
      if (tracked) track(tracked.dataset.track as string);
      if (t.closest('.hero .btn')) track('hero_cta_click');
    };
    document.addEventListener('click', onClick);
    cleanups.push(() => document.removeEventListener('click', onClick));

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
