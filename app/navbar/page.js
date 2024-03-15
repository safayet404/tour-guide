"use client";
import Image from "next/image";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "@/public/images/logo.png";
import "@/app/navbar/navbar.module.css";

import Link from "next/link";
import { Fragment } from "react";
const NavTest = () => {
  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" fixed="top" className="navBackground">
        <Container
         
        >
          <Navbar.Brand className="logo" href="#home">
            <Image
              height={50}
              width={200}
              className="px-5"
              alt="logos"
              src={logo}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
           
            <Nav className="navBar">
              <Link className="navItem" href="/">
                Home
              </Link>
              <Link className="navItem" href="/about">
                About
              </Link>
              <Link className="navItem" href="/">
                Tours
              </Link>
              <Link className="navItem" href="/">
                Team
              </Link>
              <Link c className="navItem" href="/">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default NavTest;
