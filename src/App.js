import React, { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  const [sections] = useState([
    {
      name: "About Me",
      description: "About Me!",
    },
    {
      name: "Portfolio",
      description: "Some Projects I've done over the last few months!",
    },
  ]);

  const [currentSection, setCurrentSection] = useState(sections[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className="main-container">
      <Header
        sections={sections}
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Header>

      <main>
        {!contactSelected ? (
          <>
            <About></About>
            <Portfolio
              currentSection={currentSection}
              section={currentSection.name}
            ></Portfolio>
          </>
        ) : (
          <Contact></Contact>
        )}
        {/* Actual content */}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
