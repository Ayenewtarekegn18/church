import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { useState, useEffect } from "react";
import image1 from "./Pictures/Home/community.png";
import image2 from "./Pictures/Home/cross.png";
import image3 from "./Pictures/Home/mission.png";
import image4 from "./Pictures/Home/scripture2.png";
import image5 from "./Pictures/Home/camp.jpg";
import image6 from "./Pictures/summer/add6.jpg";
import image7 from "./Pictures/summer/add8.jpg";
import image8 from "./Pictures/summer/add14.jpg";
import p1 from "./Pictures/Home/test-1.jpg";
import p2 from "./Pictures/Home/test-2.jpg";
import p3 from "./Pictures/Home/test-3.jpg";
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
              We are an Evangelical church that is working towards promoting
              christlikeness and spreading the good news to all nations.
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
            <p>The Living word of God revelead to </p>
          </div>
        </div>
      </div>

      <div>
        <Carousel>
          <Carousel.Item className="s-img">
            <img className="img" src={image6} alt="first slide" />
            <Carousel.Caption>
              <h3>Who we are</h3>
              <p>
                We are a branch of a bigger church called Ethiopian kalehiwot
                church and that had played pivotal role in transforming the life
                of people through sustainable evangelism in ethiopian in both
                urban and rural areas of the country.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="s-img">
            <img className="img" src={image7} alt="Second slide" />
            <Carousel.Caption>
              <h3>What we believe</h3>
              <p>
                We believe in the inspired and infallible authority of the
                Bible. There is one God in three persons: Father, Son, and Holy
                Spirit. Jesus Christ is divine, born of a virgin, lived
                sinlessly, performed miracles, died for our sins, rose again,
                and will return in glory
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="s-img">
            <img className="img" src={image8} alt="Third slide" />
            <Carousel.Caption>
              <h3>Where we are headed</h3>
              <p>
                We exist to serve God through proclaiming the Good News of Jesus
                Christ to the peoples so that people may have eternal life and
                become Christ’s disciples, and be fulfilled spiritually,
                mentally, and physically so that they become salt and light to
                the world for the glory of God.
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
        <div className="testimonials">
          <div className="inner">
            <h1>Testimonials</h1>
            <div className="border"></div>

            <div className="row">
              <div className="col">
                <div className="testimonial">
                  <img src={p1} alt="" />
                  <div className="name">Ayenew Tarekegn</div>

                  <p>
                    Joining LKHC Youth has been an incredible journey of
                    personal growth for me. Through the various programs,
                    events, and mentorship opportunities, I have been able to
                    develop my faith, character, and leadership skills. The
                    youth leaders at LKHC are passionate about investing in the
                    lives of young people, and their guidance and support have
                    played a significant role in shaping my spiritual journey. I
                    am grateful for the transformative experiences I have had
                    and the lifelong friendships I have formed through LKHC
                    Youth."
                  </p>
                </div>
              </div>

              <div className="col">
                <div className="testimonial">
                  <img src={p2} alt="" />
                  <div className="name">Abu Tesfaye</div>

                  <p>
                    Finding Jesus in the community of LKHC Youth has been a
                    life-changing experience for me. The sense of belonging and
                    acceptance I have felt within this community is truly
                    remarkable. The youth group at LKHC is filled with genuine
                    love and support, and it has been a place LKHC Youth has
                    become my spiritual family, and I am forever grateful for
                    the ways it has shaped my relationship with God."
                  </p>
                </div>
              </div>

              <div className="col">
                <div className="testimonial">
                  <img src={p3} alt="" />
                  <div className="name">Nebyat Robel</div>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>

                  <p>
                    Experiencing intimate worship has been a truly
                    transformative encounter for me. The atmosphere of worship
                    within this community is filled with passion, authenticity,
                    and a hunger for God's presence. The worship team at LKHC
                    leads us into heartfelt worship, creating a space where we
                    can connect with God on a deeper level. Through powerful
                    songs, prayer, and moments of reflection, I have encountered
                    the love and power of God in a tangible way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
