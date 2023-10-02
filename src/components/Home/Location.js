import React from 'react';
import styles from './Location.module.css';

function Location() {
  return (
    <section className={styles.section}>
      <div>
        <h2>
          Societies
        </h2>
        <button type="button" className="btn-green-shade">
          See all
        </button>
      </div>
      <p>
        Institutions and Secondary school branches under MSSNAAC are
        situated in Akinyele Local Government.
      </p>
      <div>
        <iframe src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=J28%20alaka%20orogun%20Ibadan+(MSSN%20Akinyele%20Area%20Council)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title="MSSN AAC Address"><a href="https://www.maps.ie/population/">Population mapping</a></iframe>
      </div>
    </section>
  );
}

export default Location;
