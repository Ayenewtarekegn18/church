import React from "react";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";

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
  const [isTransparent, setIsTransparent] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const pagesWithHeroSection = ["/", "/Youth"]; // Add other page paths with hero section here
    const hasHero = pagesWithHeroSection.includes(currentPath);
    setIsTransparent(hasHero);
  }, [location.pathname]);

  const headerStyle = {
    backgroundColor: isTransparent ? "transparent" : "#ffffff",
    // Add other styles for the header
    color: isTransparent ? "white" : "black",
    position: isTransparent ? "absolute" : "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  };

  const changeBackground = () => {
    if (isTransparent && window.scrollY >= 50) {
      setIsTransparent(false);
    } else if (
      !isTransparent &&
      (window.scrollY < 50 || window.scrollY === 0)
    ) {
      setIsTransparent(true);
    }
  };

  useEffect(() => {
    if (isTransparent) {
      const changeBackground = () => {
        if (window.scrollY >= 50) {
          setIsTransparent(false);
        } else if (window.scrollY < 50) {
          setIsTransparent(true);
        }
      };

      window.addEventListener("scroll", changeBackground);
      return () => {
        window.removeEventListener("scroll", changeBackground);
      };
    }
  }, [isTransparent]);
  return (
    <header style={headerStyle}>
      <Navbar
        expand="lg"
        className={isTransparent ? "navbar-transparent" : "navbar-solid"}
        data-bs-theme={isTransparent ? "dark" : "light"}
      >
        <Container>
          <Navbar.Brand className="Logo" as={Link} to="/">
            {" "}
            <img src={images} alt="logo here" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav className="me-quto">
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
    </header>
  );
}

export default Header;
