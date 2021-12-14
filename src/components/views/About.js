import React from 'react';
import Headshot from '../../Assets/headshot.jpg'
import { Container, Row, Col, Card } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
import { CgCPlusPlus } from "react-icons/cg";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiMysql,
  SiGithub
} from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
} from "react-icons/di";
import GitHubCalendar from "react-github-calendar";

const colourTheme = { 
  background: "transparent",
  text: "#ffffff",
  grade4: "#8400b8",
  grade3: "#b22ff4",
  grade2: "#b265f6",
  grade1: "#c084f5",
  grade0: "#ecd9fc",
}


export default function About() {


  return (
    <div className="about">
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            This is who <strong>I am</strong>
            </h1>
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "justify" }}>
                    Hi Everyone, I am Nathan Flessner
                    from Denver, Colorado.
                    <br />I have a bachelors degree in Biochemistry, and I am pursuing a career in coding.
                    <br />
                    <br />
                    Apart from coding, some other activities that I love to do!
                  </p>
                  <ul>
                    <li className="about-activity">
                      <ImPointRight /> Playing Video Games
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> Any outdoor activity, especially hiking and rock climbing.
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> Spending time with my family, which includes two dogs!
                    </li>
                  </ul>

                  <p style={{ marginBlockEnd: 0, color: "#CAC4CE" }}>
                  "You can never know everything, and part of what you know is always wrong. Perhaps even the most important part. A portion of wisdom lies in knowing that. A portion of courage lies in going on anyways"{" "}
                  </p>
                  <footer className="blockquote-footer" style={{color: "#CAC4CE"}}>Robert Jordan - The Wheel of Time</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={Headshot} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h2 className="project-heading">
          Professional <strong>Skillset </strong>
        </h2>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
              <CgCPlusPlus />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiNodejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiMongodb />
            </Col>
          </Row>

        <h2 className="project-heading">
          <strong>Tools</strong> I use
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <SiMysql />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiVisualstudiocode />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiGithub />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiPostman />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiHeroku />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong>Code</strong>
      </h1>
      <GitHubCalendar
        username="SirNathanJF"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
    </Row>
      </Container>
    </Container>

      </div>
  )
}
