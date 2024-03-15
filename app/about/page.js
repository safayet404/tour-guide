import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./Banner/Banner";
import Memories from "./Memories/Memories";
import Blog from "../home/blog/Blog";
import Team from "./Team/Team";
import Nav from "./navtest/NavTest";
import NavTest from "./navtest/NavTest";

const page = () => {
  return (
    <div>
     <Banner/>
     <Memories/>
     <Team/>
     <Blog />
   
    </div>
  );

};

export default page;
