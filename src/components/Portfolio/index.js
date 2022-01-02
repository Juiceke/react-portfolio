import React, { useState } from "react";
// import photos of my projects
import TestPhoto from "../../assets/logo192.png";

function Portfolio({ section }) {
  const [currentPhoto, setCurrentPhoto] = useState(false);

  const [photos] = useState([
    {
      name: "test photo",
      section: "Portfolio",
      description: "This is the first project on the list",
    },
    {
      name: "test photos",
      section: "Portfolio",
      description: "This is the second project on the list",
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.section === section);

  //   const { currentSection } = props;
  return (
    <section>
      {currentPhotos.map((image, i) => (
        <p key={image.name}>{image.description}</p>
      ))}
    </section>
  );
}

export default Portfolio;
