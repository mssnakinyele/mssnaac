import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

import TypingText from "../TypingText";

import styles from "./Showcase.module.css";

function Showcase() {
  const [ref, inView] = useInView();

  return (
    <>
      <section className={`${styles.sectionOne} `}>
        <header>
          <div className='flex justify-center items-center flex-col'>
            <h1
              className={`${styles.h1} text-3xl lg:text-5xl md:text-4xl lg:leading-normal`}
            >
              Building{" "}
              <TypingText
                texts={["stronger", "resilient", "empowered"]}
                wrapperClassName={styles.highlight}
              />
              communities
              <br />
              of Muslim students
            </h1>
            <p className=' text-sm lg:text-lg  px-4 mx-auto'>
              Discover a network of Muslim students dedicated to{" "}
              <br className='hidden lg:inline' />
              building a better future for the Ummah.
            </p>
            <button type='button' className='btn-green rounded-md my-8'>
              Join us
            </button>
          </div>
          <div>
            <div className=' text-white w-full grid grid-cols-3 '>
              <div className={styles.showcaseItem}>
                <img
                  src='/imgs/Rectangle.png'
                  alt='show_img'
                  className={styles.grey}
                  loading='lazy'
                />
                <div className={styles.counter}>
                  <h2 ref={ref}>
                    <CountUp end={inView ? 10 : 0} duration={2} />+
                  </h2>
                  <p>
                    <span>Active</span>
                    <span>Societies</span>
                  </p>
                </div>
              </div>
              <div className={styles.showcaseItem}>
                <div>
                  <img
                    src='/imgs/Rectangle2.jpg'
                    alt='show_img'
                    loading='lazy'
                  />
                </div>
                <div className={styles.counter}>
                  <h2>
                    <CountUp end={inView ? 100 : 0} duration={2} />+
                  </h2>
                  <p>
                    <span>Vibrant</span>
                    <span>Members</span>
                  </p>
                </div>
              </div>
              <div className={styles.showcaseItem}>
                <img
                  src='/imgs/Rectangle3.png'
                  alt='show_img'
                  className={styles.grey}
                  loading='lazy'
                />
                <div className={styles.counter}>
                  <h2>
                    <CountUp end={inView ? 500 : 0} duration={2} />+
                  </h2>
                  <p>
                    <span>Tutored</span>
                    <span>Students</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
}

export default Showcase;
