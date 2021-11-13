// Node modules.
import React from "react";
// Relative imports.
import Typewrite from "./Typewrite";
import coder from "../../Assets/coder.svg";

export default function Home() {
  return (
    <section className="home">
      {/* Hero */}
      <div className="hero">
        {/* Hero content */}
        <div className="hero-content">
          <h2 className="home-text">
            Hi there! <span className="wave">👋🏻</span>
          </h2>

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
    </section>
  );
}
