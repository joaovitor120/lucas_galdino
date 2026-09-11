import { perceptionWords } from '@/data/content';

/**
 * Interação exclusiva da marca. A palavra RISCO está no meio de palavras da
 * rotina desde o primeiro frame — ela não entra, ela volta a ser percebida.
 * Metáfora visual, sem afirmar mecanismos neurocientíficos.
 * Funciona sem JS (regra .no-js) e sob prefers-reduced-motion.
 */
export default function PerceptionMoment() {
  return (
    <section className="perc" id="percepcao" aria-labelledby="perc-title">
      <div className="wrap">
        <h2 className="visually-hidden" id="perc-title">
          Um exercício de percepção
        </h2>

        <p className="perc__field" id="perc-field" aria-hidden="true">
          {perceptionWords.map((w, i) =>
            w === '__RISCO__' ? (
              <span className="perc__risk" key={i}>
                RISCO
              </span>
            ) : (
              <span className="w" key={i}>
                {w}
              </span>
            )
          )}
        </p>

        <p className="visually-hidden">
          Entre palavras como rotina, pressa, meta, confiança e produção, a palavra risco aparece —
          presente o tempo todo, mesmo quando deixa de ser notada.
        </p>

        <div className="perc__after">
          <p className="quote">“O risco não apareceu agora. Você apenas voltou a percebê-lo.”</p>
        </div>
      </div>
    </section>
  );
}
