import React, { useState } from 'react';
import { FaCircleArrowRight, FaCircleArrowDown } from 'react-icons/fa6';

function Faq() {
  const data = [
    {
      id: 1,
      question: 'So you are curious. What do you need to know today, again? Pray tell, my dear?',
      answer: 'The Muslim Students Association (MSA) is a student group at the University of Toronto St. George Campus. We are a group of Muslim students who strive to create a sense of community for Muslims on campus and provide opportunities for students to learn about Islam.',
    },
    {
      id: 2,
      question: 'So you are curious. What do you need to know today, again? Pray tell, my dear?',
      answer: 'The Muslim Students Association (MSA) is a student group at the University of Toronto St. George Campus. We are a group of Muslim students who strive to create a sense of community for Muslims on campus and provide opportunities for students to learn about Islam.',
    },
    {
      id: 3,
      question: 'So you are curious. What do you need to know today, again? Pray tell, my dear?',
      answer: 'The Muslim Students Association (MSA) is a student group at the University of Toronto St. George Campus. We are a group of Muslim students who strive to create a sense of community for Muslims on campus and provide opportunities for students to learn about Islam.',
    },
    {
      id: 4,
      question: 'So you are curious. What do you need to know today, again? Pray tell, my dear?',
      answer: 'The Muslim Students Association (MSA) is a student group at the University of Toronto St. George Campus. We are a group of Muslim students who strive to create a sense of community for Muslims on campus and provide opportunities for students to learn about Islam.',
    },
    {
      id: 5,
      question: 'So you are curious. What do you need to know today, again? Pray tell, my dear?',
      answer: 'The Muslim Students Association (MSA) is a student group at the University of Toronto St. George Campus. We are a group of Muslim students who strive to create a sense of community for Muslims on campus and provide opportunities for students to learn about Islam.',
    },
    {
      id: 6,
      question: 'So you are curious. What do you need to know today, again? Pray tell, my dear?',
      answer: 'The Muslim Students Association (MSA) is a student group at the University of Toronto St. George Campus. We are a group of Muslim students who strive to create a sense of community for Muslims on campus and provide opportunities for students to learn about Islam.',
    },
  ];

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <section className="p-8">
      <h2 className="text-center font-extrabold">Faq</h2>
      <p className="text-center">Find answers to commonly asked questions about our society.</p>
      <ul className="m-8 bg-[#FAFDFA]">
        {data.map((item, id) => (
          <li key={item.id} className="border-b-2 px-4 mb-2">
            <div className="flex items-center justify-between" onClick={() => toggle(id)}>
              <p>{item.question}</p>
              <span className="text-[#007300]">
                {selected === id ? <FaCircleArrowDown /> : <FaCircleArrowRight />}
                </span>{' '}
            </div>
            <p className={`text-orange-600 ${selected === id ? 'block' : 'hidden ease-in duration-300'}`}>{item.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Faq;
