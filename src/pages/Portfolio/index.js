// Node modules.
import React from "react";
// Relative imports.
import Fara from "../../assets/FaraVisualExample.png";
import Project from "../../components/Project";
import Scrypts from "../../assets/scrypts.png";
import Trip from "../../assets/National_Parks.png";
import TripleX from "../../assets/ScreenshotTripleX.png";
import Weather from "../../assets/weather_screenshot.png";
import { Wrapper } from "./styles";

export default function Portfolio() {
  return (
    <Wrapper>
      <h1>My Projects</h1>

      <div className="projects">
        <Project
          imgPath={Fara}
          isProject={true}
          title="Fara"
          description="This is a solo MERN stack application that allows a user to register an account, login, and save pins of locations they have been while writing a review. Users can see other user's pins."
          link="https://fara-travel.herokuapp.com/"
        />

        <Project
          imgPath={Scrypts}
          isProject={true}
          title="Scrypts of Betrayal"
          description="A web game that I helped build using JavaScript, HTML, CSS, and Phaser."
          link="https://github.com/DMosca2021/Scrypts_of_Betrayal"
        />

        <Project
          imgPath={Trip}
          isProject={true}
          title="National Parks Day Trip Planner"
          description="A web application that allows you to search a state for national parks, and see the weather forecast and a few activities that you can do, as well as a map of the location of the park."
          link="https://github.com/trivera777/National-Parks-Day-Trip-Planner"
        />

        <Project
          imgPath={TripleX}
          isProject={true}
          title="TripleX"
          description="This is a program designed with C++ that is a quiz with some lore from the fantasy series 'The Wheel of Time' by 'Robert Jordan. This application uses the time to generate random number sets that you must find sequential numbers that add up to the number set."
          link="https://github.com/SirNathanJF/TripleX"
        />

        <Project
          imgPath={Weather}
          isProject={true}
          title="Weather Dashboard"
          description="A web application that uses 'OpenWeatherAPI' to provide weather information for a selected city and save that city for future one-click use, instead of searching."
          link="https://sirnathanjf.github.io/Weather-Dashboard/"
        />
      </div>
    </Wrapper>
  );
}
