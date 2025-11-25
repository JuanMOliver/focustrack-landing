import React from "react";

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__content">
        <h1 id="hero-title">
          Organize seus estudos com clareza e foco em um só lugar.
        </h1>
        <p className="hero__subtitle">
          O FocusTrack transforma sua semana de estudos em um plano simples:
          tarefas claras, prioridades visíveis e um modo foco que reduz
          distrações.
        </p>
        <form
          className="hero__form"
          aria-label="Formulário para receber convite do FocusTrack"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="hero__form-group">
            <label className="visually-hidden" htmlFor="email-hero">
              Digite seu e-mail para receber o convite
            </label>
            <input
              id="email-hero"
              name="email"
              type="email"
              placeholder="Digite seu e-mail institucional"
              required
            />
          </div>
          <button type="submit" className="btn-primary">
            Quero organizar meus estudos
          </button>
        </form>

        <p className="hero__helper-text">
          Sem spam. Enviaremos apenas o convite e materiais de estudo
          organizados.
        </p>
      </div>

      <div className="hero__preview" aria-hidden="true">
        <div className="hero-card">
          <span className="hero-card__badge">Hoje</span>
          <h2>Checklist de estudo</h2>
          <ul>
            <li>📚 Revisar capítulo 3 de Marketing</li>
            <li>📝 Resumo de 2 artigos</li>
            <li>⏱ 1 ciclo de Pomodoro para exercícios</li>
          </ul>
          <p className="hero-card__footer">Tudo em 90 minutos, sem caos.</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
