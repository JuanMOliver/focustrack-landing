import React from "react";

function Header({ isDarkMode, onToggleDarkMode, isFocusMode, onToggleFocusMode }) {
  return (
    <header className="site-header">
      <nav className="nav" aria-label="Navegação principal">
        <div className="nav__brand">
          <span className="nav__logo" aria-hidden="true">
            ⏱
          </span>
          <span className="nav__title">FocusTrack</span>
        </div>

        <ul className="nav__links">
          <li>
            <a href="#como-funciona">Como funciona</a>
          </li>
          <li>
            <a href="#demo">Demo</a>
          </li>
          <li>
            <a href="#planner">Planner semanal</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>

        <div className="nav__actions">
          <button
            type="button"
            className="nav__button"
            onClick={onToggleFocusMode}
            aria-pressed={isFocusMode}
          >
            {isFocusMode ? "Sair do modo foco" : "Modo foco"}
          </button>

          <button
            type="button"
            className="nav__icon-button"
            onClick={onToggleDarkMode}
            aria-pressed={isDarkMode}
            aria-label={`Ativar modo ${isDarkMode ? "claro" : "escuro"}`}
          >
            {isDarkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
