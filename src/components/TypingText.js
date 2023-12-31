import React from "react";
import Typewriter from "typewriter-effect";

const TypingText = ({ texts, wrapperClassName }) => {
  return (
    <div className=' inline-block'>
      <Typewriter
        options={{
          strings: texts,
          autoStart: true,
          loop: true,
          wrapperClassName: wrapperClassName,
        }}
      />
    </div>
  );
};

export default TypingText;
