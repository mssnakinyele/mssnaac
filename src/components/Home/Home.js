import React from "react";
import Navbar from "../Navbar/Navbar";
import Section from "../Section/Section";
import Showcase from "../Showcase/Showcase";
import Location from "../Location/Location";
import Testimonials from "../Testimonials/Testimonials";
import Press from "../Press/Press";
import Project from "../Project/Project";
import Faq from "../Faq/Faq";
import Contact from "../Contact/Contact";

import styles from "./Home.module.css";

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
      <Contact />
    </main>
  );
}

export default Home;
