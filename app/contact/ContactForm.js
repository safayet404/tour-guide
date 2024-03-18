"use client";
import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";

const ContactForm = () => {
  return (
    <Container className="text-center contactContainer mb-4">
        <h3 className="mt-4">Get in Touch With Us</h3>
        <p>World’s leading non-asset- based supply chain management companies, we design and implement industry-leading. We specialise in intelligent & effective search and believes business.</p>
      <Row>
        <Col>
          <form>
            <Row>
              <Col className="mt-3">
                <input placeholder="*Name" className="contactFormBackground" />
              </Col>
              <Col className="mt-3">
                <input placeholder="*Email Address" className="contactFormBackground" />
              </Col>
            </Row>
            <Row>
              <Col className="mt-3">
                <input placeholder="*Phone Number" className="contactFormBackground" />
              </Col>
             
            </Row>
            <Row>
              <Col className="mt-3">
                <textarea placeholder="*Message" className="contactFormBackground" />
              </Col>
             
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
