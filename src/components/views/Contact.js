import React, {useState} from 'react';
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')

  return (
    <div className="contact">
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Col md={4} className="contact-card">
      <Card className="contact-card-view">
      <Card.Body>
        <Card.Title className="contact-title">Contact Me</Card.Title>
        <form className="contact-form">
                <label className="name-label">
                  Name:
                  <input type='text' className="text-box" name="name" value={name} onChange={(e) => setName(e.target.value)} required/>
                </label>
                <label >
                  Email:
                  <input type='email' className="text-box" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </label>
                <label>
                  Message:
                  <textarea name="message" placeholder="Please note, this contact form does not currently function. Please feel free to send me an email with the mail link in the footer." cols="100" rows="10" value={message} onChange={(e) => setMessage(e.target.value)} required/>
                </label>
                <input type="submit" name="submit"value='Submit' className="submit" />
              </form>
      </Card.Body>
      </Card>
      </Col>

      </Row>
    </div>
  );
}

