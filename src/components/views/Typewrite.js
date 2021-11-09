import React from "react";
import Typewriter from "typewriter-effect";

function Typewrite() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Developer",
          "Github Guru",
          "React Developer",
          "NodeJS Ninja",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Typewrite;