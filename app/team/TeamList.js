import { Fragment } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { CiTwitter, CiFacebook, CiInstagram } from "react-icons/ci";
import av1 from "@/public/images/team1.jpg";
import av2 from "@/public/images/team2.jpg";
import av3 from "@/public/images/team3.jpg";
import av4 from "@/public/images/team4.jpg";
import av5 from "@/public/images/team5.jpg";
import av6 from "@/public/images/team6.jpg";
import Image from "next/image";
const TeamList = () => {
  return (
    <Fragment>
      <Container className="text-center mt-5 teamContainer">
        <h2>Meet The Team</h2>
        <p>
          We have a team of professionals, dedicated to providing excellent
          service to ensure the enjoyment of your vacation.
        </p>
        <Row>
          <Col className="mb-5" lg={3} md={6} sm={12}>
            <div className="teamCard">
              <Image alt="team-member" src={av3} />
              <div className="teamCardOpacity">
                <h6 className="teamDesignation">Lorena Smith</h6>
                <p>Vacation Coodinator</p>
                <div className="flex justify-content-center">
                  <CiFacebook className="teamSocailIcons" />
                  <CiInstagram className="teamSocailIcons" />
                  <CiTwitter className="teamSocailIcons" />
                </div>
              </div>
            </div>
          </Col>
          <Col className="mb-5" lg={3} md={6} sm={12}>
            <div className="teamCard">
              <Image alt="team-member" src={av1} />
              <div className="teamCardOpacity">
                <h6 className="teamDesignation">Ricardo Anje</h6>
                <p>Tour Oparator</p>
                <div className="flex justify-content-center">
                  <CiFacebook className="teamSocailIcons" />
                  <CiInstagram className="teamSocailIcons" />
                  <CiTwitter className="teamSocailIcons" />
                </div>
              </div>
            </div>
          </Col>
          <Col className="mb-5" lg={3} md={6} sm={12}>
            <div className="teamCard">
              <Image alt="team-member" src={av4} />
              <div className="teamCardOpacity">
                <h6 className="teamDesignation">Carlos Cimino</h6>
                <p>Marketing</p>
                <div className="flex justify-content-center">
                  <CiFacebook className="teamSocailIcons" />
                  <CiInstagram className="teamSocailIcons" />
                  <CiTwitter className="teamSocailIcons" />
                </div>
              </div>
            </div>
          </Col>
          <Col className="mb-5" lg={3} md={6} sm={12}>
            <div className="teamCard">
              <Image alt="team-member" src={av2} />
              <div className="teamCardOpacity">
                <h6 className="teamDesignation">Julia Jones</h6>
                <p>Marketing</p>
                <div className="flex justify-content-center">
                  <CiFacebook className="teamSocailIcons" />
                  <CiInstagram className="teamSocailIcons" />
                  <CiTwitter className="teamSocailIcons" />
                </div>
              </div>
            </div>
          </Col>
          <Col className="mb-5" lg={3} md={6} sm={12}>
            <div className="teamCard">
              <Image alt="team-member" src={av5} />
              <div className="teamCardOpacity">
                <h6 className="teamDesignation">Richard Jones</h6>
                <p>Marketing</p>
                <div className="flex justify-content-center">
                  <CiFacebook className="teamSocailIcons" />
                  <CiInstagram className="teamSocailIcons" />
                  <CiTwitter className="teamSocailIcons" />
                </div>
              </div>
            </div>
          </Col>
          <Col className="mb-5" lg={3} md={6} sm={12}>
            <div className="teamCard">
              <Image alt="team-member" src={av6} />
              <div className="teamCardOpacity">
                <h6 className="teamDesignation">Ryan Thomas</h6>
                <p>Marketing</p>
                <div className="flex justify-content-center">
                  <CiFacebook className="teamSocailIcons" />
                  <CiInstagram className="teamSocailIcons" />
                  <CiTwitter className="teamSocailIcons" />
                </div>
              </div>
            </div>
          </Col>
          
        </Row>
      </Container>
    </Fragment>
  );
};

export default TeamList;
