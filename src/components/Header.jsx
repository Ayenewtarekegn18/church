import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { useState } from "react";

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
  const [bar, setBar] = useState(false);

  const changebackground = () => {
    if (window.scrollY >= 20) {
      setBar(true);
    } else {
      setBar(false);
    }
  };

  window.addEventListener("scroll", changebackground);

  return (
    <Navbar>
      <Container>
        <Navbar.Brand className="Logo" as={Link} to="/">
          <img src={images} alt="logo here" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-right">
            <Nav.Link as={Link} to="/">
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
