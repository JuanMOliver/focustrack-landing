import React from "react";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__content">
        <p>© {new Date().getFullYear()} FocusTrack. Conceito de aplicação para organização de estudos.</p>
        <p className="site-footer__small">
          Landing page desenvolvida para demonstrar domínio de React, UX e acessibilidade. Feito por Juan Marco Oliver.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
