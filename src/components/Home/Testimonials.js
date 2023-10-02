import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuid } from 'uuid';

import styles from './Testimonials.module.css';

function Testimonials() {
  const myArray = [{
    name: 'Aisha Zayad',
    description: 'I\'ve been a member of this society for a year now.',
    description2: 'The events are always engaging and informative.',
  },
  {
    name: 'Jagun Ashraf',
    description: 'I\'ve been a member of this society for a year now.',
    description2: 'The events are always engaging and informative.',
  },
  {
    name: 'Umar Fadhl',
    description: 'I\'ve been a member of this society for a year now.',
    description2: 'The events are always engaging and informative.',
  }];
  return (
    <section className={styles.testimony}>
      <h2>Testimonials</h2>
      <p>Hear from individuals who value being part of our society.</p>
      <div className={styles.testimonydiv}>
        {
      myArray.map((item) => (
        <div key={uuid()} className={styles.card}>
          <div className={styles.icon}>
            <img src="microphone.svg" alt="icon" />
          </div>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <br />
          <p>{item.description2}</p>
        </div>
      ))
      }
      </div>
    </section>

  );
}

export default Testimonials;
