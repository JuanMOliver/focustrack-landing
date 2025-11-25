import React, { useState } from "react";

const faqItems = [
  {
    question: "O FocusTrack é um aplicativo ou só uma página?",
    answer:
      "Esta landing page apresenta o conceito do FocusTrack. A ideia é evoluir para um aplicativo web completo para organização de estudos.",
  },
  {
    question: "Vou conseguir usar no celular?",
    answer:
      "Sim, o layout foi pensado para funcionar bem em telas pequenas, mantendo a clareza das tarefas e da semana.",
  },
  {
    question: "Preciso pagar para usar?",
    answer:
      "A proposta inicial é ter um plano gratuito para estudantes, com funcionalidades avançadas em um plano premium.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  function toggleIndex(index) {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  }

  return (
    <section id="faq" className="section section--muted" aria-labelledby="faq-title">
      <div className="section__header">
        <h2 id="faq-title">Perguntas frequentes</h2>
        <p>Dúvidas comuns sobre a experiência com o FocusTrack.</p>
      </div>

      <div className="faq">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          const questionId = `faq-question-${index}`;
          const panelId = `faq-panel-${index}`;

          return (
            <div key={item.question} className="faq__item">
              <h3 className="faq__question">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  id={questionId}
                  onClick={() => toggleIndex(index)}
                >
                  {item.question}
                  <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={questionId}
                hidden={!isOpen}
                className="faq__panel"
              >
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;
