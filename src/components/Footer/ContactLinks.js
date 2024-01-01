import React from "react";
import { Link } from "react-router-dom";

import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";

import styles from "./Footer.module.css";
const ContactLinks = () => {
  return (
    <>
      <div className='text-sm'>
        <p className={styles.contact}>
          <PhoneIcon />
          <span>+234 807 330 2821</span>
        </p>
        <p className={styles.contact}>
          <EnvelopeIcon />
          <span>
            <Link
              className='text-white underline'
              href='mailto:mssnakinyele.ac@gmail.com'
            >
              mssnakinyele.ac@gmail.com
            </Link>
          </span>
        </p>
        <p className={styles.contact}>
          <MapPinIcon />
          <span> FW35+XQ3, 12 Orogun Rd, 200132, Ibadan, Oyo State</span>
        </p>
      </div>
      <hr className=' border-t-[2px] max-w-[350px] mt-[1rem]' />
      <ul className={styles.social}>
        <li>
          <Link href='https://web.facebook.com/MSSNAAC/'>
            <FaFacebookF />
          </Link>
        </li>
        <li>
          <Link href='https://web.facebook.com/MSSNAAC/'>
            <FaXTwitter />
          </Link>
        </li>
        <li>
          <Link href='https://web.facebook.com/MSSNAAC/'>
            <FiInstagram />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default ContactLinks;
