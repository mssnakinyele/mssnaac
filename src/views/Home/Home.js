import React from "react";

import {
  Section,
  Showcase,
  Location,
  Testimonials,
  Press,
  Project,
  Donate,
  Faq,
} from "../../components";

import styles from "./Home.module.css";

function Home() {
  return (
    <main className={`${styles.main}`}>
      <Showcase />
      <Section />
      <Location />
      <Testimonials />
      <Press />
      {/* <Project /> */}
      <Donate />
      <Faq />
    </main>
  );
}

export default Home;
