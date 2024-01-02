import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/AboutSection.module.css";
import data from "../../../data/projects-data";

function ProjectSection() {
  return data.map((item) => (
    <section key={item.id} className={styles.about}>
      <div className={styles.image}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <Link to={item.buttonLink}>
          <button type='button' className='btn-green'>
            {item.button}
          </button>
        </Link>
      </div>
      <div className={styles.content}>
        <img src={item.img.src} alt={item.img.alt} />
      </div>
    </section>
  ));
}

export default ProjectSection;
