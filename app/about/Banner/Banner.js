import Image from "next/image";
import React from "react";
import { CiTwitter, CiFacebook, CiInstagram } from "react-icons/ci";
import AB from "@/public/images/pages-bg.jpg";
import "@/app/about/about.module.css";
import { Col, Container, Row } from "react-bootstrap";
const Banner = () => {
  return (
    <div>
      <div className="imageContainer">
        <div className="overlay"></div>
        <Image fluid={true} className="image" alt="about-banner" src={AB} />

        <Container>
          <Row>
            <Col className="pageContent">
              <h1 className="pageHead">About US</h1>
              <p className="pageSubHead">Home | About Us</p>
            </Col>
          </Row>
        </Container>

        <div className="aboutSocialIcons">
          <ul>
            <li>
              <CiFacebook />
            </li>
            <li>
              <CiTwitter />
            </li>
            <li>
              <CiInstagram />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
