import React from 'react';
import {
  Link,
} from 'react-router-dom';

import styles from '../Section/Section.module.css';
import data from '../../utils/projectData'; 

function Project() {
  return (
    data.map((item) => (
      <section key={item.id} className={styles.about}>
        <div className={styles.image}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <Link to={item.buttonLink}>
            <button type="button" className="btn-green">{item.button}</button>
          </Link>
        </div>
        <div className={styles.content}>
          <img src={item.img.src} alt={item.img.alt} />
        </div>
      </section>
    ))
  );
}

export default Project;
