import React, { useState } from "react";

function Portfolio({ section }) {
  const [photos] = useState([
    {
      name: "Run Buddy",
      section: "Portfolio",
      description: "This is the first project on the list",
      link: "https://juiceke.github.io/run-buddy/",
    },
    {
      name: "ReadMe Generator",
      section: "Portfolio",
      description: "This is the second project on the list",
      link: "https://github.com/Juiceke/readme-generator",
    },
    {
      name: "Work Day Scheduler",
      section: "Portfolio",
      description: "This is the third project on the list",
      link: "https://juiceke.github.io/work-schedule/",
    },
    {
      name: "Crypto Watcher",
      section: "Portfolio",
      description: "This is the second project on the list",
      link: "https://john-harris-iii.github.io/crypto-watcher/",
    },
    {
      name: "My Tech Blog",
      section: "Portfolio",
      description: "This is the second project on the list",
      link: "https://afternoon-plateau-04038.herokuapp.com/",
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.section === section);

  return (
    <section className="Portfolio">
      {currentPhotos.map((image, i) => (
        <div className="Project" key={image.name}>
          <h3 className="Project-name">{image.name}</h3>
          <a href={image.link}>
            <img
              src={require(`../../assets/large/${section}/${i}.jpg`)}
              alt={image.name}
              className="project-images"
            />
          </a>
        </div>
      ))}
    </section>
  );
}

export default Portfolio;
