import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useState, useEffect } from "react";
import images from "./Pictures/Home/Pic1.jpg";
import image1 from "./Pictures/Home/community.png";
import image2 from "./Pictures/Home/cross.png";
import image3 from "./Pictures/Home/mission.png";
import image4 from "./Pictures/Home/scripture2.png";
import image5 from "./Pictures/Home/camp.jpg";
import image6 from "./Pictures/summer/add6.jpg";
import image7 from "./Pictures/summer/add8.jpg";
import image8 from "./Pictures/summer/add14.jpg";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  }
  return (
    <div>
      <div className="Home">
        <div className="home-container">
          <h1
            style={{
              color: "white",
              textAlign: "Center",
            }}
          >
            WELCOME
          </h1>
          <button className="btn btn-primary">To Lebu Khc</button>
        </div>
        <div className="overlay-1"></div>
      </div>

      <div className="second-segment" id="about">
        <div className="section1">
          <div className="box1">
            <img src={image3} alt="" />
            <h1>Mission</h1>
            <p>
              Preaching the Gosple for all nations and making deciples for
              christ.
            </p>
          </div>

          <div className="box1">
            <img src={image2} alt="" />
            <h1>Christ</h1>
            <p>
              By the work of Jesus Christ on the cross we are saved through
              faith.
            </p>
          </div>
        </div>

        <div className="section2">
          <div className="aboutus">
            <h2>About</h2>
            <h1>Our Church</h1>
            <p>
              By the work of Jesus Christ on the cross we are saved through
              faith. By the work of Jesus Christ on the cross we are saved
              through faith. By the work of Jesus Christ on the cross we are
              saved through faith.
            </p>
          </div>
        </div>

        <div className="section3">
          <div className="box1">
            <img src={image1} alt="" />
            <h1>Community</h1>
            <p>Growing together in faith, love, and union.</p>
          </div>

          <div className="box1">
            <img src={image4} alt="" />
            <h1>Scripture</h1>
            <p>
              The Living word of God revelead to us through past people of God{" "}
            </p>
          </div>
        </div>
      </div>

      <div>
        <Carousel>
          <Carousel.Item className="s-img">
            <img src={image6} alt="Second slide" />
            <Carousel.Caption>
              <h3>Who we are</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="s-img">
            <img src={image7} alt="Second slide" />
            <Carousel.Caption>
              <h3>what we believe</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="s-img">
            <img src={image8} alt="Second slide" />
            <Carousel.Caption>
              <h3>where we are headed</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="bigevents">
        <h1 className="events-heading">Upcoming Events</h1>
        <div className="events">
          <img src={image5} alt="Image" />

          <p>
            <span>Youth Camp</span>
            Looking for an exciting and meaningful way to spend your summer?
            Join us for our upcoming youth camp at Lebu Khc church! Our camp is
            designed to provide a fun-filled experience for young people while
            also fostering personal and spiritual growth. Don't miss out on this
            amazing opportunity to connect with other young people and grow in
            your faith!
            <br />
            <br />
            <Link to="/Youth">
              <button className="btn btn-primary">Learn More</button>
            </Link>
          </p>
        </div>
        {/* <div className="events2">
          <p>
            <span>Youth Camp</span>
            for an exciting and meaningful way to spend your summer? Join us for
            our upcoming youth camp at Lebu Khc church! Our camp is designed to
            provide a fun-filled experience for young people while also
            fostering personal and spiritual growth. Don't miss out on this
            amazing opportunity to connect with other young people and grow in
            your faith! <br />
            <br />
            <Link to="/Ministries">
              <button className="btn btn-primary">Learn More</button>
            </Link>
          </p>

          <img src={image5} alt="Image" />
        </div> */}
      </div>
    </div>
  );
}
export default Home;
