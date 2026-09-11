import { delay } from './ui';

/**
 * A virada. Frase central da marca, em dois tempos: o usuário lê a primeira,
 * atravessa um respiro (a retícula de foco) e só então recebe a segunda.
 */
export default function Manifesto() {
  return (
    <section className="manifesto s-darker" aria-label="O acidente acontece primeiro na mente">
      <svg className="manifesto__reticle" viewBox="0 0 600 600" fill="none" aria-hidden="true">
        <circle cx="300" cy="300" r="299" stroke="hsl(142 71% 45%)" strokeOpacity=".07" />
        <circle cx="300" cy="300" r="205" stroke="hsl(142 71% 45%)" strokeOpacity=".09" />
        <circle cx="300" cy="300" r="118" stroke="hsl(142 71% 45%)" strokeOpacity=".12" />
        <path d="M300 0v54M300 546v54M0 300h54M546 300h54" stroke="hsl(142 71% 45%)" strokeOpacity=".2" />
      </svg>

      <div className="wrap">
        <h2 className="mega manifesto__line-1" data-reveal>
          O acidente acontece primeiro na mente.
        </h2>

        <div className="manifesto__mid" data-reveal style={delay(120)}>
          <span className="rule" />
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <circle cx="6.5" cy="6.5" r="6" stroke="hsl(142 71% 45%)" strokeOpacity=".45" />
            <circle cx="6.5" cy="6.5" r="1.7" fill="hsl(142 71% 45%)" />
          </svg>
          <span className="rule" />
        </div>

        <p className="mega manifesto__line-2" data-reveal style={delay(220)}>
          A prevenção também.
        </p>
      </div>
    </section>
  );
}
