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
            {/* <Card style={{ width: "23rem" }}>
              <Image
                className="tourCardImage"
                height={100}
                width={300}
                alt="tour-list"
                src={t1}
              />
              <Card.Body>
                <Card.Title>Paragliding in Cox's Bazar Inani Beach</Card.Title>
                <Card.Text>Starting from Tk 7000</Card.Text>
                <Button variant="success">Details</Button>
              </Card.Body>
            </Card> */}
          </Col>
          <Col className="mb-5" lg={4} md={6} sm={12}>
            {/* <Card style={{ width: "23rem" }}>
              <Image className="tourCardImage" alt="tour-list" src={t2} />
              <Card.Body>
                <Card.Title>Paragliding in Cox's Bazar Inani Beach</Card.Title>
                <Card.Text>Starting from Tk 7000</Card.Text>
                <Button variant="success">Details</Button>
              </Card.Body>
            </Card> */}
          </Col>
          <Col className="mb-5" lg={4} md={6} sm={12}>
            {/* <Card style={{ width: "23rem" }}>
              <Image className="tourCardImage" alt="tour-list" src={t3} />
              <Card.Body>
                <Card.Title>Paragliding in Cox's Bazar Inani Beach</Card.Title>
                <Card.Text>Starting from Tk 7000</Card.Text>
                <Button variant="success">Details</Button>
              </Card.Body>
            </Card> */}
          </Col>
          <Col className="mb-5" lg={4} md={6} sm={12}>
            {/* <Card style={{ width: "23rem" }}>
              <Image className="tourCardImage" alt="tour-list" src={t4} />
              <Card.Body>
                <Card.Title>Paragliding in Cox's Bazar Inani Beach</Card.Title>
                <Card.Text>Starting from Tk 7000</Card.Text>
                <Button variant="success">Details</Button>
              </Card.Body>
            </Card> */}
          </Col>
          <Col className="mb-5" lg={4} md={6} sm={12}>
            {/* <Card style={{ width: "23rem" }}>
              <Image className="tourCardImage" alt="tour-list" src={t5} />
              <Card.Body>
                <Card.Title>Paragliding in Cox's Bazar Inani Beach</Card.Title>
                <Card.Text>Starting from Tk 7000</Card.Text>
                <Button variant="success">Details</Button>
              </Card.Body>
            </Card> */}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default TourList;
