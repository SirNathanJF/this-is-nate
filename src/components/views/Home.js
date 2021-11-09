// Node modules.
import React from "react";
// Relative imports.
import Typewrite from "./Typewrite";
import coder from "../../Assets/coder.svg";
import headshot from "../../Assets/headshot.jpg";

export default function Home() {
  return (
    <section className="home">
      {/* Hero */}
      <div className="hero">
        {/* Hero content */}
        <div className="hero-content">
          <h1 className="home-text">
            Hi there! <span className="wave">👋🏻</span>
          </h1>

          <h1 className="heading-name">
            I'm <strong className="main-name">Nathan Flessner</strong>
          </h1>

          <div
            style={{
              padding: 50,
              textAlign: "left",
              color: "#07020D",
              fontSize: "2.5em",
            }}
          >
            <Typewrite />
          </div>
        </div>

        {/* Hero image of coder */}
        <img src={coder} alt="coder at desk" className="img-fluid" />
      </div>

      {/* Introduction | header */}
      <h2 style={{ fontSize: "2.6em" }}>
        LET ME <span className="purple">INTRODUCE</span> MYSELF
      </h2>

      {/* Introduction | description */}
      <p>
        I fell in love with programming and I have drove myself to learn as much
        as possible.
      </p>
      <p>I am fluent in:</p>
      <ul>
        <li>
          <i>
            <b className="purple"> Javascript</b>
          </i>
        </li>
      </ul>
      <p>My fields of interest are building new</p>
      <ul>
        <li>
          <i>
            <b className="purple">Web Technologies and Products </b>
            and working as a backend developer!
          </i>
        </li>
      </ul>
      <p>
        Whenever possible, I also apply my passion for developing products with
      </p>
      <ul>
        <li>
          <b className="purple">Node.js</b>
        </li>
        <li>
          <i>
            <b className="purple">Modern Javascript Library and Frameworks</b>
          </i>
        </li>
      </ul>
      <p>like</p>
      <ul>
        <li>
          <i>
            <b className="purple">React.js</b>
          </i>
        </li>
        <li>
          <i>
            <b className="purple">MySQL</b>
          </i>
        </li>
        <li>
          <i>
            <b className="purple">NoSQL</b>
          </i>
        </li>
      </ul>

      {/* Picture of me */}
      <img src={headshot} className="img-fluid" alt="avatar" />
    </section>
  );
}
