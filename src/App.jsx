import React, { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import TaskDemo from "./components/TaskDemo.jsx";
import WeeklyPlanner from "./components/WeeklyPlanner.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isFocusMode, setIsFocusMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("theme-dark");
    } else {
      document.documentElement.classList.remove("theme-dark");
    }
  }, [isDarkMode]);

  return (
    <>
      {/* Link de pulo para acessibilidade */}
      <a href="#main-content" className="skip-link">
        Pular para conteúdo principal
      </a>

      <div className={`app-shell ${isFocusMode ? "is-focus-mode" : ""}`}>
        <Header
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode((prev) => !prev)}
          isFocusMode={isFocusMode}
          onToggleFocusMode={() => setIsFocusMode((prev) => !prev)}
        />
        <main id="main-content">
          <Hero />
          <HowItWorks />
          <TaskDemo />
          <WeeklyPlanner />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
