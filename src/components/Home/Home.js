import React from 'react';
import Navbar from '../Navbar';
import Section from './Section';
import Showcase from './Showcase';
import styles from './Home.module.css';

function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Showcase />
      <Section />
    </main>
  );
}

export default Home;
