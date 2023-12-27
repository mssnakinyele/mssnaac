import React from 'react';
import {
  Link,
} from 'react-router-dom';
import styles from './Section.module.css';

function Section() {
  return (
    <section className={styles.about}>
      <div>
        <h2>
          MSSN Akinyele
          <br />
          Area Council
        </h2>
        <p>
          MSSN Akinyele Area Council is one of the Area Councils
          under the MSSN Oyo State Area Unit.
        </p>
        <p>
          One of her goals is bring all Muslims in closer union and
          inculcate the true Islamic spirit of brotherhood and absolute
          faith in Allah. Her primary assignment is
          {' '}
          <strong>Secondary School Coordination.</strong>
        </p>
        <Link to="/about">
          <button type="button" className="btn-green">Learn more</button>
        </Link>
      </div>
      <div>
        <img src="/imgs/akinyele.png" alt="Society Banner" />
      </div>
    </section>
  );
}

export default Section;
