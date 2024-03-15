import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import "@/app/navbar/navbar.module.css";
import { CiTwitter, CiFacebook, CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <Fragment>
      <Container fluid={true} className="text-center footerBackground">
        <Row className="align-items-center">
          <Col>
            <Image
              style={{
                margin: "auto",
              }}
              width={200}
              alt="logo-on-footer"
              src={logo}
              className="footerLogo"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="mt-4">
              <Link className="footerNav" href="/">
                Home
              </Link>
              <Link className="footerNav" href="/">
                About
              </Link>
              <Link className="footerNav" href="/">
                Tours
              </Link>
              <Link className="footerNav" href="/">
                Team
              </Link>
              <Link className="footerNav" href="/">
                Contact
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="flex justify-content-center">
             <Link href="" className="footerIcons"><CiTwitter/></Link>
             <Link href="" className="footerIcons"><CiFacebook/></Link>
             <Link href="" className="footerIcons"><CiInstagram/></Link>
            
            
             
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Footer;
