/* eslint-disable react/prop-types */
import React from "react";
import Typewriter from "typewriter-effect";

const Writer = ({ texts, wrapperClassName }) => {
  return (
    <div className=' inline-block'>
      <Typewriter
        options={{
          strings: texts,
          autoStart: true,
          loop: true,
          wrapperClassName: wrapperClassName,
          delay: 200,
        }}
      />
    </div>
  );
};

export default Writer;
