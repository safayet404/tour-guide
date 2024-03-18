"use client";
import Image from "next/image";
import React, { Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import t1 from "@/public/images/activities-10.jpg";
import t2 from "@/public/images/activities-11.jpg";
import t3 from "@/public/images/activities-12.jpg";
import t4 from "@/public/images/activities-13.jpg";
import t5 from "@/public/images/activities-14.jpg";

const TourList = () => {
  return (
    <Fragment>
      <Container className="topMargin">
        <h1 className="text-center">Tour List</h1>
        <Row className="mt-5">
          <Col className="mb-5" lg={4} md={6} sm={12}>
          <div class="tourCard" style={{maxWidth:"368px"}}>
              <Image src={t5} alt="Avatar" className="tourCardImage"  />
              <div class="tourContainer">
                <h4>
                  <b>John Doe</b>
                </h4>
                <p>Architect & Engineer</p>
              </div>
            </div>
          </Col>
          <Col className="mb-5" lg={4} md={6} sm={12}>
          <div class="tourCard">
              <Image src={t5} alt="Avatar" className="tourCardImage"  />
              <div class="tourContainer">
                <h4>
                  <b>John Doe</b>
                </h4>
                <p>Architect & Engineer</p>
              </div>
            </div>
          </Col>
          <Col className="mb-5" lg={4} md={6} sm={12}>
          <div class="tourCard">
              <Image src={t5} alt="Avatar" className="tourCardImage"  />
              <div class="tourContainer">
                <h4>
                  <b>John Doe</b>
                </h4>
                <p>Architect & Engineer</p>
              </div>
            </div>
          </Col>
          <Col className="mb-5" lg={4} md={6} sm={12}>
          <div class="tourCard">
              <Image src={t5} alt="Avatar" className="tourCardImage"  />
              <div class="tourContainer">
                <h4>
                  <b>John Doe</b>
                </h4>
                <p>Architect & Engineer</p>
              </div>
            </div>
          </Col>
          <Col className="mb-5" lg={4} md={6} sm={12}>
            <div class="tourCard">
              <Image src={t5} alt="Avatar" className="tourCardImage"  />
              <div class="tourContainer">
                <h4>
                  <b>John Doe</b>
                </h4>
                <p>Architect & Engineer</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default TourList;
