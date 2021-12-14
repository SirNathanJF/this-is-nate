import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

import Scrypts from "../../Assets/scrypts.PNG";
import Trip from "../../Assets/National_Parks.PNG";
import TripleX from "../../Assets/ScreenshotTripleX.PNG";
import Weather from "../../Assets/weather_screenshot.PNG";
import Fara from "../../Assets/FaraVisualExample.png";

export default function Portfolio() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong>Works </strong>
        </h1>
        <p style={{ color: "#07020D" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Fara}
              isProject={true}
              title="Fara"
              description="This is a solo MERN stack application that allows a user to register an account, login, and save pins of locations they have been while writing a review. Users can see other user's pins."
              link="https://sirnathanjf.github.io/Week4HW-CodeQuiz/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Scrypts}
              isProject={true}
              title="Scrypts of Betrayal"
              description="A web game that I helped build using JavaScript, HTML, CSS, and Phaser."
              link="https://github.com/DMosca2021/Scrypts_of_Betrayal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Trip}
              isProject={true}
              title="National Parks Day Trip Planner"
              description="A web application that allows you to search a state for national parks, and see the weather forecast and a few activities that you can do, as well as a map of the location of the park."
              link="https://github.com/trivera777/National-Parks-Day-Trip-Planner"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TripleX}
              isProject={true}
              title="TripleX"
              description="This is a program designed with C++ that is a quiz with some lore from the fantasy series 'The Wheel of Time' by 'Robert Jordan. This application uses the time to generate random number sets that you must find sequential numbers that add up to the number set."
              link="https://github.com/SirNathanJF/TripleX"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isProject={true}
              title="Weather Dashboard"
              description="A web application that uses 'OpenWeatherAPI' to provide weather information for a selected city and save that city for future one-click use, instead of searching."
              link="https://sirnathanjf.github.io/Weather-Dashboard/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
