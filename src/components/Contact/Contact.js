import React from 'react';
import {
  Link,
} from 'react-router-dom';
import { FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import { FiInstagram } from 'react-icons/fi';

function Contact() {
  return (
    <footer className="mx-[50px] bg-[#007300] text-white p-2">
      <div className="flex flex-row m-8">
        <div className="flex-auto basis-1/2">
          <h2 className="font-extrabold">Contact Us</h2>
          <p>+234 807 330 2821</p>
          <Link className="text-white" href="mailto:mssnakinyele.ac@gmail.com">mssnakinyele.ac@gmail.com</Link>
          <p>FW35+XQ3, 12 Orogun Rd, 200132, Ibadan, Oyo State</p>
          <ul className="flex items-center my-4">
            <li className="px-2">
              <Link className="text-white" href="https://web.facebook.com/MSSNAAC/">
                <FaFacebookF />
              </Link>
            </li>
            <li className="px-2">
              <Link className="text-white" href="https://web.facebook.com/MSSNAAC/">
                <FaXTwitter />
              </Link>
            </li>
            <li className="px-2">
              <Link className="text-white" href="https://web.facebook.com/MSSNAAC/">
                <FiInstagram />
              </Link>
            </li>
          </ul>
        </div>
        <div className="basis-1/2 rounded-t-2xl">
          <iframe src="https://maps.google.com/maps?width=520&amp;height=200&amp;hl=en&amp;q=J28%20alaka%20orogun%20Ibadan+(MSSN%20Akinyele%20Area%20Council)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title="MSSN AAC Address"><a href="https://www.maps.ie/population/">Population mapping</a></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
