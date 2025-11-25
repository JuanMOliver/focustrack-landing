import React, { useState } from "react";

const plannerData = {
  segunda: [
    "18:30 – Revisar anotações da aula",
    "19:00 – Leitura de artigo (30 min)",
    "19:40 – Exercícios de revisão",
  ],
  terca: [
    "18:00 – Planejar trabalho em grupo",
    "18:45 – Pesquisar referências",
  ],
  quarta: [
    "19:00 – Vídeo-aula complementar",
    "19:40 – Resumo em mapa mental",
  ],
  quinta: [
    "18:30 – Treino de questões",
    "19:15 – Revisar erros",
  ],
  sexta: ["18:00 – Organização geral da semana seguinte"],
};

const dayLabels = {
  segunda: "Seg",
  terca: "Ter",
  quarta: "Qua",
  quinta: "Qui",
  sexta: "Sex",
};

function WeeklyPlanner() {
  const [activeDay, setActiveDay] = useState("segunda");

  return (
    <section id="planner" className="section" aria-labelledby="planner-title">
      <div className="section__header">
        <h2 id="planner-title">Visualize sua semana em blocos de estudo</h2>
        <p>
          Com o FocusTrack, você enxerga claramente quanto tempo tem disponível
          e em quais dias vai se dedicar a cada matéria.
        </p>
      </div>

      <div className="planner">
        <div
          className="planner__tabs"
          role="tablist"
          aria-label="Escolha o dia da semana para visualizar o plano de estudos"
        >
          {Object.keys(plannerData).map((dayKey) => (
            <button
              key={dayKey}
              role="tab"
              type="button"
              className={`planner__tab ${
                activeDay === dayKey ? "planner__tab--active" : ""
              }`}
              aria-selected={activeDay === dayKey}
              aria-controls={`panel-${dayKey}`}
              id={`tab-${dayKey}`}
              onClick={() => setActiveDay(dayKey)}
            >
              {dayLabels[dayKey]}
            </button>
          ))}
        </div>

        {Object.keys(plannerData).map((dayKey) => (
          <div
            key={dayKey}
            role="tabpanel"
            id={`panel-${dayKey}`}
            aria-labelledby={`tab-${dayKey}`}
            hidden={activeDay !== dayKey}
            className="planner__panel"
          >
            <h3>Plano de estudos – {dayLabels[dayKey]}</h3>
            <ul>
              {plannerData[dayKey].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="planner__hint">
              Essa é uma simulação. Na aplicação real, você arrastaria e
              reorganizaria blocos de estudo com drag &amp; drop.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WeeklyPlanner;
