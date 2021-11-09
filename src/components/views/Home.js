import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Typewrite from './Typewrite'

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
    </section>
  )
}