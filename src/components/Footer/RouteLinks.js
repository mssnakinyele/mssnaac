import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

import SlideIn from "../Animations/SlideIn";

import styles from "./Footer.module.css";

const RouteLinks = () => {
  const [scrollToFAQs, setScrollToFAQs] = React.useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (scrollToFAQs) {
      scroller.scrollTo("faqs", {
        smooth: true,
        duration: 1500,
      });
    }
  }, [scrollToFAQs]);

  const ScrollToFAQs = () => {
    setScrollToFAQs(true);
    navigate("/", {
      state: { scrollToFAQs },
    });
  };

  return (
    <>
      <hr className='block sm:hidden mt-4 border-b-[1.5px]' />

      <SlideIn from='left' classNames={styles.LinksContainer}>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to='/about'
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to='/press'
        >
          Press
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to='/project'
        >
          Projects
        </NavLink>
      </SlideIn>
      <hr className='block sm:hidden border-b-[1.5px]' />

      <SlideIn from='right' classNames={styles.LinksContainer}>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to='/society'
        >
          Societies
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to='/volunteer'
        >
          Volunteer
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to='/donate'
        >
          Donate
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to='/auth'
        >
          Member Login
        </NavLink>
      </SlideIn>
      <hr className='block sm:hidden border-b-[1.5px]' />

      <SlideIn from='left' classNames={styles.LinksContainer}>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to='/photo-gallery'
        >
          Photo Gallery
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to='/downloads'
        >
          Downloads
        </NavLink>
        <a className=' cursor-pointer font-medium' onClick={ScrollToFAQs}>
          FAQs
        </a>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to='/privacy-policy'
        >
          Privacy Policy
        </NavLink>
      </SlideIn>
    </>
  );
};

export default RouteLinks;
