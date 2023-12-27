import React from 'react';
import styles from './Card.module.css';

function Card() {
  const currDay = new Date().getDate();
  const currMonth = new Date().toLocaleString([], {
    month: 'long',
  });
  const currYear = new Date().getFullYear();

  return (
    <div className={styles.card}>
      <img src="/svgs/press.svg" alt="show_img" />
      <p>
        {currMonth}
        {' '}
        {currDay}
        ,
        {' '}
        {currYear}
      </p>
      <p className={styles.bold}>
        UIMC Holds 30th Annual Ramadan Lecture, Discusses on the Excellence
        and Mediocrity of the Ummah
      </p>
      <a href="https://alfaaedahpress.wordpress.com/2023/04/03/uimc-holds-30th-annual-ramdan-lecture-discusses-on-the-excellence-and-mediocrity-of-the-ummah/" target="_blank" rel="noreferrer">Read more</a>
    </div>
  );
}

export default Card;
