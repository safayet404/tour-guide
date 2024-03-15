import { Container, Fragment, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import bgt1 from "@/public/images/blogs-thumb-1.jpg";
import bgt2 from "@/public/images/blogs-thumb-2.jpg";
import bgt3 from "@/public/images/blogs-thumb-3.jpg";
import bgt4 from "@/public/images/blogs-thumb-4.jpg";
import "@/app/home/home.module.css";

const Blog = () => {
  return (
    <div>
      <Container>
        <h1 className="destHeading">Our Blogs</h1>
        <p className="destSubHeading text-center">
          We keep you informed of the latest news from the vacation world,
          subscribe to our blog and find out everything.
        </p>
        <Row>
          <Col xs={12} md={6}>
            <Row className="mt-3">
              <Col className="flex justify-content-around">
                <div className="blogImage">
                  <Image alt="blog-thumb" src={bgt1}></Image>
                  <div className="blogOverlay">
                    <p>JUN</p>
                    <p>23</p>
                  </div>
                </div>
                <div>
                  <h3 className="blogTitle ml-4">The Best Helicopter Tours</h3>
                  <p className="blogDesc ml-4">
                    We love to see you live an exciting, unique and
                    unforgettable experience.
                  </p>
                  <button className="blogBtn ml-4">Read More </button>
                </div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col className="flex justify-content-around">
                <div className="blogImage">
                  <Image alt="blog-thumb" src={bgt2}></Image>
                  <div className="blogOverlay">
                    <p>JUN</p>
                    <p>23</p>
                  </div>
                </div>
                <div>
                  <h3 className="blogTitle ml-4">The Best Helicopter Tours</h3>
                  <p className="blogDesc ml-4">
                    We love to see you live an exciting, unique and
                    unforgettable experience.
                  </p>
                  <button className="blogBtn ml-4">Read More </button>
                </div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col className="flex justify-content-around">
                <div className="blogImage">
                  <Image alt="blog-thumb" src={bgt3}></Image>
                  <div className="blogOverlay">
                    <p>JUN</p>
                    <p>23</p>
                  </div>
                </div>
                <div>
                  <h3 className="blogTitle ml-4">The Best Helicopter Tours</h3>
                  <p className="blogDesc ml-4">
                    We love to see you live an exciting, unique and
                    unforgettable experience.
                  </p>
                  <button className="blogBtn ml-4">Read More </button>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} className="mt-3">
            <div className="blogImage">
              <Image alt="blog-thumb" src={bgt4}></Image>
              <div className="blogOverlay">
                <p>JUN</p>
                <p>23</p>
              </div>
            </div>
            <div>
              <h3 className="blogTitle mt-3">The Best Helicopter Tours</h3>
              <p className="blogDesc">
                We love to see you live an exciting, unique and unforgettable
                experience.
              </p>
              <button className="blogBtn">Read More </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
