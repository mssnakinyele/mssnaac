import React from 'react';
import Navbar from '../Navbar';
import Section from './Section';
import Showcase from './Showcase';
import Location from './Location';
import styles from './Home.module.css';
import Testimonials from './Testimonials';
import Press from './Press';

function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Showcase />
      <Section />
      <Location />
      <Testimonials />
      <Press />
    </main>
  );
}

export default Home;
