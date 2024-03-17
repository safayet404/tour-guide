import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
const UpperSection = () => {
  return (
    <Fragment>
      <Container className="text-center mt-5">
        <Row className="icon-container">
          <Col className="d-flex flex-column align-items-center">
            <div className="d-flex flex-column align-items-center">
              <SlLocationPin className="contactIcons" />

              <p>837 Castle Hill Ave. Bronx NY 33195 </p>
              <p>United States</p>
            </div>
          </Col>
          <Col>
          <div className="d-flex flex-column align-items-center">
              <MdOutlinePhoneInTalk className="contactIcons" />

              <p>718-825-3320 </p>
              <p>212-632-4120</p>
            </div>
          </Col>
          <Col>
          <div className="d-flex flex-column align-items-center">
              <TfiEmail className="contactIcons" />

              <p>info@travi.com </p>
              <p>sales@travi.com</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default UpperSection;
