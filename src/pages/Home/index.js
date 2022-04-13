// Node modules.
import React from "react";
import Typewriter from "typewriter-effect";
// Relative imports.
import coder from "../../Assets/coder.svg";
import { Wrapper } from "./styles";
// Function for typewriter effect.
export default function Home() {
  return (
    <Wrapper>
      <Typewriter
        options={{
          strings: [
            "Full-Stack Developer",
            "Github Guru",
            "React Developer",
            "Node.JS Ninja",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
      {/* Hero image of coder */}
      <img alt="coder at desk" className="img-fluid" src={coder} />

      <div />
    </Wrapper>
  );
}
