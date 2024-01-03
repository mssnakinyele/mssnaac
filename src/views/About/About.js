import React from "react";

import Title from "./Title";
import Pagination from "../../components/Pagination";

function About() {
  return (
    <section>
      <div className='text-xs md:text-lg  bg-brand-green'>
        <div
          className='w-full p-12 flex-shrink-0 bg-no-repeat bg-right'
          style={{ backgroundImage: `url('/imgs/vector-2.png')` }}
        >
          <div className='w-[85%]'>
            <Title
              title='MSSN Vision'
              text='“To establish an Islamic Ummah governed by the principles and rules of the Shariah within the next fifty years”'
            />
            <Title
              title='MSSN Mission'
              text='“The MSSN will work relentlessly towards the establishment of a society that fosters all-round human development.'
              text2='To achieve this, MSSN will continuously strive towards strengthening the Ummah educationally, economically, spiritually and politically through a wide spectrum of activities in schools and the larger society in partnership with like-minded organizations.'
              text3='To succeed, MSSN must ensure that its members are God fearing, knowledgeable, united and with superior moral values”'
            />
          </div>
        </div>
      </div>

      <div className=' flex gap-[3rem]  justify-betwee items-center p-12'>
        <div className='max-w-[550px]'>
          <Title
            title='Our Activities'
            text='As a Muslim Student Society, our primary assignment is to coordinate secondary schools in Akinyele Local Government.'
            text2='We provide educational support, organize events, and engage in community service to help spread the message of Islam while creating a positive impact in our community.'
          />
        </div>
        <div className='hidden sm:block px-18 mx-auto '>
          <img src='/imgs/activities.png' alt='activities-icon' />
        </div>
      </div>

      <div className='bg-brand-green pt-8 pb-[73px] px-16'>
        <h2 className='font-bold text-[35px] text-center leading-[65px] pb-[50px]'>
          MSSNAAC Executive Committee{" "}
          <select className=' border-green-800 border-4 px-4'>
            <option value='' className='text-base m-4'>
              2022/2023
            </option>
            <option value='' className='text-base m-4'>
              2021/2022
            </option>
          </select>
        </h2>

        <Pagination itemsPerPage={8} />
      </div>

      <div
        className='w-full p-12  flex-shrink-0 bg-no-repeat bg-right'
        style={{ backgroundImage: `url('/imgs/vector-3.png')` }}
      >
        <div className='sm:max-w-[70%]'>
          <Title
            title='Become a Member'
            text='Our society provides a supportive community for Muslim students, where we can connect and explore our faith. Members have access to exclusive features on the website.'
            text2='Membership is open to any Muslim who shares our aims and is a bona-fide member of a branch.'
          />

          <button
            type='button'
            className='px-20 py-3 text-2xl font-bold border-2 border-dark-green bg-dark-green text-white rounded hover:bg-transparent hover:text-dark-green font'
          >
            JOIN US
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
