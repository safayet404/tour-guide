import React, { Fragment } from "react";
import styles from "../home.module.css";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

const Activities = ({ actCard }) => {
  return (

    <Fragment>
      <Container className="text-center">
        <h2 className="activitiyHeader">Activities</h2>
        <Row  className="activities">
        {actCard.map((data, index) => (
          <Col key={index}  lg={3} md={6} sm={12}>
            <div key={index} className={styles.ActCard}>
            <Image
              className={styles.cardImage}
              alt={data.title}
              src={data.image}
            />
            <h3>{data.title}</h3>
            <p>{data.description}</p>
          </div>
          </Col>
        ))}
         
        </Row>
      </Container>

  
    </Fragment>
  );
};

export default Activities;
