import React from 'react';
import Navbar from '../Navbar';
import Section from './Section';
import Showcase from './Showcase';
import Location from './Location';
import styles from './Home.module.css';
import Testimonials from './Testimonials';
import Press from './Press';
import Project from './Project';
import Faq from './Faq';

function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Showcase />
      <Section />
      <Location />
      <Testimonials />
      <Press />
      <Project />
      <Faq />
    </main>
  );
}

export default Home;
