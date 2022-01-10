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

  function titleChange() {
    document.title = "Contact";
  }

  return (
    <header className="header">
      <h1 className="name">David Herrell</h1>
      <nav className="header-nav">
        <ul className="header-list">
          {sections.map((sections) => (
            <li
              className={`${
                currentSection.name === sections.name &&
                !contactSelected &&
                "navActive"
              } `}
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
          <li id="contact" className={`${contactSelected && "navActive"}`}>
            <span
              onClick={() => {
                setContactSelected(true);
                titleChange();
              }}
            >
              Contact
            </span>
          </li>

          <li id="resume">Resume</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
