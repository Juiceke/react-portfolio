import React, { useEffect } from "react";

function Header(props) {
  const {
    sections = [],
    setCurrentSection,
    contactSelected,
    currentSection,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = currentSection.name;
  }, [currentSection]);

  return (
    <header className="header">
      <h1 className="name">David Herrell</h1>
      <nav className="header-nav">
        <ul className="header-list">
          <li id="about">About Me</li>
          <li id="portfolio">Portfolio</li>
          {sections.map((sections) => (
            <li
              className={`${currentSection.name === sections.name}`}
              key={sections.name}
            >
              <span
                onClick={() => {
                  setCurrentSection(sections);
                  setContactSelected(false);
                }}
              >
                {sections.name}
              </span>
            </li>
          ))}
          <li id="contact">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
