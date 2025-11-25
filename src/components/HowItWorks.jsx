import React from "react";

function HowItWorks() {
  const steps = [
    {
      title: "Capture suas tarefas",
      description:
        "Anote tudo que precisa estudar ou entregar: provas, trabalhos, leituras, projetos.",
    },
    {
      title: "Classifique e priorize",
      description:
        "Defina categoria (faculdade, trabalho, pessoal) e prioridade. Visualize o que vem primeiro.",
    },
    {
      title: "Planeje a semana",
      description:
        "Monte sua semana em blocos de estudo, com tempo estimado para cada tarefa.",
    },
    {
      title: "Ative o modo foco",
      description:
        "Reduza distrações, foque em uma tarefa por vez e acompanhe seu progresso.",
    },
  ];

  return (
    <section id="como-funciona" className="section" aria-labelledby="how-title">
      <div className="section__header">
        <h2 id="how-title">Como o FocusTrack te ajuda na prática</h2>
        <p>
          Pensado para estudantes que precisam conciliar faculdade, trabalho e
          vida pessoal sem perder prazos.
        </p>
      </div>

      <div className="steps-grid">
        {steps.map((step, index) => (
          <article key={step.title} className="step-card">
            <div className="step-card__number" aria-hidden="true">
              {index + 1}
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
