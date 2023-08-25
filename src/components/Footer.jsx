import React from "react";
import "./Footer.css";
import insta from "./Pictures/footer/instagram-logo.png";
import tiktok from "./Pictures/footer/tik-tok.png";
import youtube from "./Pictures/footer/youtube.png";
import telegram from "./Pictures/footer/telegram.png";
import { Link } from "react-router-dom";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Offcanvas from "react-bootstrap/Offcanvas";

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a onClick={handleShow} className="me-2">
        Location
      </a>
      <Offcanvas
        variant="offcanvas dark"
        style={{ height: "400px" }}
        show={show}
        onHide={handleClose}
        {...props}
      >
        <Offcanvas.Header closeButton> Lebu Kalehiwot Church</Offcanvas.Header>
        <Offcanvas.Body>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3941.062769150105!2d38.7228565!3d8.9663638!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b81ed525222dd%3A0x6aa5c2ef8fda01ae!2zTGVidSBLYWxlaGl3b3QgQ2h1cmNoICgg4YiI4YmhIOGJg-GIiCDhiIXhi63hi4jhibUg4YmkL-GKrSk!5e0!3m2!1sam!2set!4v1691666323902!5m2!1sam!2set"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullscreen="true"
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const Footer = () => {
  const renderTooltip = (props) => (
    <Tooltip {...props}>Lebukhc@gmail.com</Tooltip>
  );

  return (
    <>
      <footer className="footer">
        <div className="con">
          <div className="rows">
            <div className="footer-col">
              <h4>Lebu Khc</h4>
              <ul>
                <li>
                  <a href="#about">about us</a>
                </li>
                <li>
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <p>Contact Us</p>
                  </OverlayTrigger>
                </li>
                <li>
                  {["bottom"].map((placement, idx) => (
                    <OffCanvasExample
                      key={idx}
                      placement={placement}
                      name={placement}
                      clickable={true}
                    />
                  ))}
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li>
                  <p>Weekly Service Sunday morning 3:15-6:00</p>
                </li>
                <li>
                  <p>Youth service Sunday afternoon 10:00-12:30</p>
                </li>
                <li>
                  <p>Prayer team Wednesday afternoon 10:00-12:00</p>
                </li>
                <li>
                  <p>Worship Team Saturday afternoon 10:00-12:00</p>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="https://t.me/LKHCyouth" target="_blank">
                  <img src={telegram} className="fab" />
                </a>
                <a
                  href="https://instagram.com/lebu_khc?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                >
                  <img src={insta} className="fab" />
                </a>
                <a
                  target="_blank"
                  href="https://www.tiktok.com/@godlymelody?refer=creator_embed"
                >
                  <img src={tiktok} className="fab" />
                </a>
                <a href="https://www.youtube.com/@lebukhcyouth" target="_blank">
                  <img src={youtube} className="fab" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
