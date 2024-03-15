import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import memories from "@/public/images/travi-1.jpg";
import Image from "next/image";
import support from "@/public/images/support.png";
import premium from "@/public/images/premium-quality.png";
const Memories = () => {
  return (
    <div>
      <Container className="text-center">
        <Row>
          <Col className="p-5 text-lg-right" lg={6} sm={12} md={12}>
            <h2 className="memoriesHead">Memories Made Together Last a Lifetime</h2>
            <h5 className="memoriesSubHead">
              Growing community by inspiring healthy is our commitment with
              farmers, the abundant living on the field.
            </h5>
            <p className="memoriesSubContent">
              Your satisfaction with your experience that your recommendation.
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.{" "}
            </p>

            <div className="flex">
              <Image src={premium} alt="support" />
              <div className="p-2">
                <h3 className="ImageContentHead">Satisfaction Guarantee </h3>
                <p className="ImageContentSubHead">
                  Despite the variety of fish you could catch, no fish is more
                  desirable than the bluefin tuna.
                </p>
              </div>
            </div>
            <div className="flex mt-5">
              <Image src={support} alt="support" />
              <div className="p-2">
                <h3 className="ImageContentHead">Online Support </h3>
                <p className="ImageContentSubHead">
                  Some anglers have even battled to reel in bluefin tuna
                  weighing trips travel a maximum..
                </p>
              </div>
            </div>
          </Col>
          <Col className="imageSectionBackground" lg={6} sm={12} md={12}>
            <Image
              className=" memories-image"
              alt="memories-image"
              src={memories}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Memories;
