import React from "react";

import {
  Showcase,
  AboutSection,
  LocationSection,
  Testimonials,
  Press,
  ProjectSection,
  DonateSection,
  Faqs,
} from "./components";

import styles from "./styles/Home.module.css";
import VolunteerSection from "./components/VolunteerSection";

function Home() {
  return (
    <main className={`${styles.main}`}>
      <Showcase />
      <AboutSection />
      <LocationSection />
      <Testimonials />
      <Press />
      <ProjectSection />
      <DonateSection />
      <VolunteerSection />
      <Faqs />
    </main>
  );
}

export default Home;
