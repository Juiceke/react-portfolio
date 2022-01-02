import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
// import the Contact section
// import the Resume section

function App() {
  const [sections] = useState([
    {
      name: "Portfolio",
      project1: "This is a test description for the first project!",
      project2: "This is a test description for the second project!",
      project3: "This is a test description for the third project!",
      project4: "This is a test description for the fourth project!",
      project5: "This is a test description for the fifth project!",
      project6: "This is a test description for the sixth project!",
    },
  ]);

  const [currentSection, setCurrentSection] = useState(sections[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header
        sections={sections}
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Header>
      <About></About>
      <Portfolio
        currentSection={currentSection}
        section={currentSection.name}
      ></Portfolio>
      <main>yo{/* Actual content */}</main>
      <Footer></Footer>
    </div>
  );
}

export default App;
