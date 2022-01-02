import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import the About section
// import the Contact section
// import the Resume section

function App() {
  const [sections] = useState([
    {
      name: "Test",
      description: "This is a test description!",
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
      <main>yo{/* Actual content */}</main>
      <Footer></Footer>
    </div>
  );
}

export default App;
