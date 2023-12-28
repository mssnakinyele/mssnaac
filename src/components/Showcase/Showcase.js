import React from "react";
import styles from "./Showcase.module.css";

function Showcase() {
  return (
    <>
      <section className={styles.sectionOne}>
        <header>
          <h1
            className={`${styles.h1} text-3xl lg:text-5xl md:text-4xl lg:leading-normal`}
          >
            Building <span className={styles.highlight}>stronger</span>{" "}
            communities
            <br />
            of Muslim students
          </h1>
          <p className=' text-sm lg:text-lg  px-4 mx-auto'>
            Discover a network of Muslim students dedicated to{" "}
            <br className='hidden lg:inline' />
            building a better future for the Ummah.
          </p>
          <button type='button' className='btn-green rounded-md my-6'>
            Join us
          </button>
          <div>
            <div className={styles.showcase}>
              <img
                src='/imgs/Rectangle.png'
                alt='show_img'
                className={styles.grey}
              />
              <img src='/imgs/Rectangle2.png' alt='show_img' />
              <img
                src='/imgs/Rectangle3.png'
                alt='show_img'
                className={styles.grey}
              />
            </div>
            <div className={styles.card}>
              <div>
                <h2>10+</h2>
                <p>
                  <span>Active</span>
                  <span>Societies</span>
                </p>
              </div>
              <div>
                <h2>100+</h2>
                <p>
                  <span>Vibrant</span>
                  <span>Members</span>
                </p>
              </div>
              <div>
                <h2>500+</h2>
                <p>
                  <span>Tutored</span>
                  <span>Students</span>
                </p>
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
}

export default Showcase;
