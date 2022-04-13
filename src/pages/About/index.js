// Node modules.
import React from "react";
import { ImPointRight } from "react-icons/im";
import { CgCPlusPlus } from "react-icons/cg";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiMysql,
  SiGithub,
} from "react-icons/si";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb } from "react-icons/di";
import GitHubCalendar from "react-github-calendar";
// Relative imports.
import Headshot from "../../Assets/headshot.jpg";
import { Wrapper } from "./styles";

const colourTheme = {
  background: "transparent",
  text: "#ffffff",
  grade4: "#8400b8",
  grade3: "#b22ff4",
  grade2: "#b265f6",
  grade1: "#c084f5",
  grade0: "#ecd9fc",
};

export default function About() {
  return (
    <Wrapper>
      <div className="headshot">
        <img alt="about" className="img-fluid" src={Headshot} />

        <div className="text-content">
          <h1>This is who I am</h1>

          <p>Hi Everyone, I am Nathan Flessner from Denver, Colorado.</p>
          <p>
            I am a JavaScript fanatic. When I'm not hacking out a solution to a
            complex problem, I'm getting coffee and thinking of ways to solve
            it. ☕️💻☕️
          </p>
          <p>Apart from coding, some other activities that I love to do!</p>

          <ul className="hobbies">
            <li>
              <ImPointRight /> Playing video games.
            </li>
            <li>
              <ImPointRight /> Any outdoor activity, especially hiking and rock
              climbing.
            </li>
            <li>
              <ImPointRight /> Spending time with my family, which includes two
              dogs!
            </li>
          </ul>

          <figure>
            <blockquote>
              &quot;You can never know everything, and part of what you know is
              always wrong. Perhaps even the most important part. A portion of
              wisdom lies in knowing that. A portion of courage lies in going on
              anyways&quot;
            </blockquote>
            <figcaption>Robert Jordan - The Wheel of Time</figcaption>
          </figure>
        </div>
      </div>

      <h2>Professional skills</h2>

      <ul className="icons">
        <li>
          <CgCPlusPlus />
        </li>
        <li>
          <DiJavascript1 />
        </li>
        <li>
          <DiNodejs />
        </li>
        <li>
          <DiReact />
        </li>
        <li>
          <DiMongodb />
        </li>
      </ul>

      <h2>Tools I use</h2>

      <ul className="icons">
        <li>
          <SiMysql />
        </li>
        <li>
          <SiVisualstudiocode />
        </li>
        <li>
          <SiGithub />
        </li>
        <li>
          <SiPostman />
        </li>
        <li>
          <SiHeroku />
        </li>
      </ul>

      <h2>My GitHub</h2>

      <GitHubCalendar
        blockMargin={5}
        blockSize={15}
        fontSize={16}
        theme={colourTheme}
        username="SirNathanJF"
      />
    </Wrapper>
  );
}
