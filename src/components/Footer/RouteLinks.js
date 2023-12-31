import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";

import styles from "./Footer.module.css";

const RouteLinks = () => {
  const navigate = useNavigate();

  const ScrollToFAQs = () => {
    navigate("/", {
      state: { scrollToFAQs: true },
    });

    scroller.scrollTo("faqs", {
      smooth: true,
      duration: 1500,
      // containerId: "faqs",
    });
  };

  return (
    <>
      <hr className='block sm:hidden mt-4 border-b-[1.5px]' />

      <div className={styles.LinksContainer}>
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
      </div>
      <hr className='block sm:hidden border-b-[1.5px]' />

      <div className={styles.LinksContainer}>
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
      </div>
      <hr className='block sm:hidden border-b-[1.5px]' />

      <div className={styles.LinksContainer}>
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
      </div>
    </>
  );
};

export default RouteLinks;
