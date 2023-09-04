import React from "react";
import images from "./Pictures/ministries/praym2.jpg";
import image1 from "./Pictures/ministries/pray1.jpg";
import image2 from "./Pictures/ministries/pray2.jpg";
import pic1 from "./Pictures/ministries/artM.jpg";
import pic2 from "./Pictures/ministries/art2.jpg";
import pic3 from "./Pictures/ministries/art3.jpg";

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
                <Card.Title>weekly lessons</Card.Title>
                <Card.Text>
                  we nurture kids to grow in the knowledge Gods word by
                  providing weekly lessons. Engaging and interactive Bible
                  lessons that are tailored to their development, lively and
                  engaging worship songs that are easy for young children to
                  understand and participate in.
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
                <Card.Title>Teenage teams</Card.Title>
                <Card.Text>
                  As kids grow older and reach their teenage teams they start to
                  face challenges from friends and environment to indulge in
                  worldly things therfore we have teenage teams where kids in
                  their teenage years come together to learn how to be a
                  committed christian with a strong personal relationship with
                  God
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
                <Card.Title>kids Worship</Card.Title>
                <Card.Text>
                  Engaging,lively and engaging worship songs that are easy for
                  young children to understand and participate in.
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
                <Card.Title>Art for God</Card.Title>
                <Card.Text>
                  {" "}
                  All the Art is created by the creator himself and all creation
                  should give glory to the creator. we use art and literature to
                  give glory to God and also share God's heart and message to
                  the people
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
                  We hold programs where other christian artists and art teams
                  come together to use their art for the glory of the Kingdom
                  and the spread of the gospel
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
                <Card.Title>Themed programs </Card.Title>
                <Card.Text>
                  God has a message for every season of the year is our duty as
                  his servants to hear his message and sahre it with his people
                  through the gifts he has given us hence we have anual programs
                  themed around a one central idea and every artistic work will
                  revolve around it{" "}
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
                <Card.Title>personal Devoution</Card.Title>
                <Card.Text>
                  God knows each of us by name and wants a personal relation
                  with us. In this team we try to help each other to stay true
                  to our daily devoution time with God where we pour our hearts
                  to him and hear his comforting words
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
                <Card.Title>Prayer Groups</Card.Title>
                <Card.Text>
                  stick on fire will burn out eventually but a group of woods
                  will be source of light and warmth to many. Our group prayers
                  are formed by people who are seeking to be filled with the
                  spirirt and a hunger to see his glory. Come and join us let us
                  come in front of God as one
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
                <Card.Title>Prayer partner</Card.Title>
                <Card.Text>
                  As life has its ups and downs we might struggle to be our best
                  selves so its better to have a prayer partner who you can
                  share your struggles and weakness with and get a prayer from
                  the person you trust
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
