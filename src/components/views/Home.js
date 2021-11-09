import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Typewrite from './Typewrite'
import Home2 from './Home2'
import coder from '../../Assets/coder.svg'

export default function Home() {
  return (
    <section className='home-body'>
      <Container fluid className='home-content'>
        <Row>
          <Col md={15} className='home-header'>
            <h1 className="home-text">
              Hi there! <span className='wave'>👋🏻</span>
            </h1>

            <h1 className="heading-name">
                I'm
                <strong className="main-name"> Nathan Flessner</strong>
            </h1>
            
            <div style={{ padding: 50, textAlign: "left", color: '#07020D', fontSize: '2.5em' }}>
                <Typewrite />
              </div>
          </Col>
        </Row>

      </Container>
      <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={coder} alt="coder at desk" className="img-fluid"/>
      </Col>
      <Home2 />
    </section>
  )
}