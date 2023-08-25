import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Gallery from "./Gallery";
import Home from "./Home";
import Youth from "./Youth";
import Ministries from "./Ministries";
import "../App.css";

import images from "./Pictures/Logo.png";

function Header() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand className="Logo">
          <img src={images} alt="logo here" />
        </Navbar.Brand>

        <Nav className="me-right">
          <Nav.Link as={Link} to="/">
            {" "}
            Home{" "}
          </Nav.Link>

          <Nav.Link as={Link} to="/Gallery">
            {" "}
            Gallery{" "}
          </Nav.Link>

          <Nav.Link as={Link} to="/Blog">
            {" "}
            Blog{" "}
          </Nav.Link>

          <Nav.Link as={Link} to="/Ministries">
            {" "}
            Ministries{" "}
          </Nav.Link>

          <Nav.Link as={Link} to="/Youth">
            {" "}
            Youth{" "}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
