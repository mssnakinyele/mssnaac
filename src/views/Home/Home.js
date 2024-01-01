import React from "react";

import {
  Section,
  Showcase,
  Location,
  Testimonials,
  Press,
  Project,
  Faq,
  Contact,
} from "../../components";

import styles from "./Home.module.css";

function Home() {
  return (
    <main className={styles.main}>
      <Showcase />
      <Section />
      <Location />
      <Testimonials />
      <Press />
      <Project />
      <Faq />
      <Contact />
    </main>
  );
}

export default Home;
