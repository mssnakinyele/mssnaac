import React from 'react';
import {
  Link,
} from 'react-router-dom';
import styles from './Section.module.css';

function Project() {
  const content = [
    {
      id: 1,
      title: 'Our Mission',
      description: 'Explore our past and current projects, including events, initiatives,and collaborations, and learn more about our mission and impact.',
      button: 'Learn more',
      buttonLink: '/about',
      img: {
        src: 'extramural.png',
        alt: 'Society Banner',
      },
    },
    {
      id: 2,
      title: 'Give to the cause of Allah',
      description: 'You can support our mission to promote a sense of community and provide opportunities for Muslim students to connect and learn. Your contribution can make a real difference.',
      button: 'Donate now',
      buttonLink: '/donate',
      img: {
        src: 'extramural.png',
        alt: 'Society Banner',
      },
    },
    {
      id: 3,
      title: 'Discover the joy of giving back',
      description: 'Join our team of volunteers and make a positive impact in our community. Help us organize events, raise awareness, and create meaningful connections with fellow students.',
      button: 'VOLUNTEER',
      buttonLink: '/about',
      img: {
        src: 'extramural.png',
        alt: 'Society Banner',
      },
    },
  ];
  return (
    content.map((item) => (
      <section key={item.id} className={styles.about}>
        <div className={styles.image}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <Link to={item.buttonLink}>
            <button type="button" className="btn-green">{item.button}</button>
          </Link>
        </div>
        <div className={styles.content}>
          <img src={item.img.src} alt={item.img.alt} />
        </div>
      </section>
    ))
  );
}

export default Project;
