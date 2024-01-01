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
      <SlideIn
        from='left'
        classNames={`${styles.LinksContainer} col-start-1 col-end-2 sm:col-start-2 sm:col-end-3`}
      >
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

      <SlideIn
        from='right'
        classNames={`${styles.LinksContainer} col-start-2 col-end-3 sm:col-start-3 sm:col-end-4 `}
      >
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
      <SlideIn
        from='left'
        classNames={`${styles.LinksContainer} col-start-3 col-end-4 sm:col-start-4 sm:col-end-5`}
      >
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
          Privacy
        </NavLink>
      </SlideIn>
    </>
  );
};

export default RouteLinks;
