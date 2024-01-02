import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import CustomSlider from "../../../components/Slider";

import data from "../../../data/projects-data";
import SlideIn from "../../../animations/SlideIn";
// import styles from "../styles/AboutSection.module.css";

function ProjectSection() {
  return (
    <section
      className={`flex flex-col justify-evenly sm:grid grid-cols-2 content-center sm:items-center sm:gap-[10rem] bg-white h-[45rem] sm:h-[40rem] px-6 md:px-12`}
    >
      <div>
        <div className=' text-xs md:text-lg leading-0 flex-wrap w-full'>
          <SlideIn from='left'>
            <h2 className=' font-bold text-3xl md:text-4xl leading-normal'>
              Our Projects
            </h2>
          </SlideIn>
          <SlideIn from='right' classNames='my-4'>
            <p>
              Explore our past and current projects, including events,
              initiatives, and collaborations, and learn more about our mission
              and impact.
            </p>
          </SlideIn>
        </div>
        <SlideIn from='left'>
          <Link to='/projects'>
            <button type='button' className='btn-green '>
              View projects{" "}
              <ArrowRightIcon className='h-6 w-4 ml-2 font-bold' />
            </button>
          </Link>
        </SlideIn>
      </div>
      <SlideIn from='right'>
        <CustomSlider config={{ slidesToShow: 1, type: "project" }}>
          {data.map((item) => (
            <div className=' w-1/2 max-h-[500px]' key={item.id}>
              <img src={item.img.src} alt={item.img.alt} className='h-full' />
            </div>
          ))}
        </CustomSlider>
      </SlideIn>
    </section>
  );
}

export default ProjectSection;
//
