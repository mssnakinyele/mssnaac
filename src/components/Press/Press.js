import React from 'react';
import styles from './Press.module.css';
import Card from '../Card/Card';

function Press() {
  return (
    <section>
      <div className={styles.press}>
        <h2>Al-Faaedah Press</h2>
        <div>
          <p>Access more beneficial knowledge that are priceless but free.</p>
          <a href="https://alfaaedahpress.wordpress.com/" className="btn-green" rel="noreferrer" target="_blank">
            <span>View Blog</span>
          </a>
        </div>
      </div>
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default Press;
