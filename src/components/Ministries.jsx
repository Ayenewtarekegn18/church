import React from "react";
import images from "./Pictures/ministries/praym2.jpg";
import image1 from "./Pictures/ministries/pray1.jpg";
import image2 from "./Pictures/ministries/pray2.jpg";
import pic1 from "./Pictures/ministries/artM.jpg";
import pic2 from "./Pictures/ministries/art2.jpg";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";

const ComponentWithLoading = () => {};
const Ministries = () => {
  return (
    <>
      <div className="kids">
        <h2>Kids Ministry</h2>
        <img className="mainimg" src={images} alt="Image 1" />
        <div className="ministry-info">
          <div className="car">
            <Card style={{ width: "20rem", border: "0px" }}>
              <Card.Img
                variant="top"
                style={{
                  width: "20rem",
                  height: "15rem",
                  borderRadius: "10px",
                }}
                src={images}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="car skeleton">
            <Card style={{ width: "20rem", border: "0px" }}>
              <Card.Img
                variant="top"
                style={{ width: "20rem", height: "15rem" }}
                src={images}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Engaging and interactive Bible lessons that are tailored to
                  their development, lively and engaging worship songs that are
                  easy for young children to understand and participate in.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="car">
            <Card style={{ width: "20rem", border: "0px" }}>
              <Card.Img
                variant="top"
                style={{ width: "20rem", height: "15rem" }}
                src={images}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <div className="spiritual">
        <h2>Arts Ministry</h2>
        <img className="mainimg" src={pic1} alt="Image 1" />
        <div className="ministry-info">
          <div className="car">
            <Card style={{ width: "20rem", border: "0px" }}>
              <Card.Img
                variant="top"
                style={{ width: "18rem", height: "20rem" }}
                src={pic2}
              />
              <Card.Body>
                <Card.Title>4 - 6 year</Card.Title>
                <Card.Text>
                  Engaging and interactive Bible lessons that are tailored to
                  their development, lively and engaging worship songs that are
                  easy for young children to understand and participate in.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="car">
            <Card style={{ width: "20rem", border: "0px" }}>
              <Card.Img
                variant="top"
                style={{ width: "18rem", height: "20rem" }}
                src={pic2}
              />
              <Card.Body>
                <Card.Title>Union Time</Card.Title>
                <Card.Text>
                  Engaging and interactive Bible lessons that are tailored to
                  their development, lively and engaging worship songs that are
                  easy for young children to understand and participate in.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="car">
            <Card style={{ width: "20rem", border: "0px" }}>
              <Card.Img
                variant="top"
                style={{ width: "18rem", height: "20rem" }}
                src={pic2}
              />
              <Card.Body>
                <Card.Title>10-14 years old</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <div className="counseling">
        <h2>Prayer Ministry</h2>
        <img className="mainimg" src={images} alt="Image 1" />
        <div className="ministry-info">
          <div className="car">
            <Card style={{ width: "20rem", border: "0px" }}>
              <Card.Img
                variant="top"
                style={{ width: "18rem", height: "20rem" }}
                src={image1}
              />
              <Card.Body>
                <Card.Title>fhjyf</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="car">
            <Card style={{ width: "20rem", border: "0px" }}>
              <Card.Img
                variant="top"
                style={{ width: "18rem", height: "20rem" }}
                src={image2}
              />
              <Card.Body>
                <Card.Title>Devoution Time</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="car">
            <Card style={{ width: "20rem", border: "0px" }}>
              <Card.Img
                variant="top"
                style={{ width: "18rem", height: "20rem" }}
                src={image2}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ministries;
