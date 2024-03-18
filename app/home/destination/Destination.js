import Image from "next/image";
import React from "react";
import "@/app/home/home.module.css";
import { Container, Row, Col } from "react-bootstrap";
const Destination = ({ dstCard }) => {
  return (
    <Container>
      <h1 className="destHeading">Main Destination</h1>
      <p className="subHead">
        Search our website for the best destinations in the world, where you can
        enjoy the best vacations.
      </p>
      <Row className="container mx-auto px-4 mt-5">
        {dstCard.map((data, index) => (
          <Col className="mt-3" key={index} lg={4} md={6} sm={12} >
            <div className="relative">
              <Image
                src={data.image}
                alt={`Destination ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div
                style={{ backgroundColor: "#4998BB" }}
                className="absolute bottom-10 left-5 right-5 p-4 bg-opacity-50"
              >
                <div className="text-white">
                  <h2 className="text-xl font-semibold">{data.title}</h2>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1 text-white">{data.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Destination;
