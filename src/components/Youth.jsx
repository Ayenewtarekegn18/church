import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import images1 from "./Pictures/Youth/bibleStudy.jpg";
import images2 from "./Pictures/Youth/camp2.jpg";
import images3 from "./Pictures/Youth/Worship.jpg";
import images4 from "./Pictures/Youth/sports.jpg";
import "../App.css";

function Youth() {
  return (
    <div className="youth-container">
      <div className="youth-header">
        <div className="text">
          <h1> Lkhc Youth </h1>
          <div className="sub-text">
            <h2>Purpose</h2>
            <h3> Driven </h3>
            <h4>Community</h4>
          </div>
        </div>
      </div>
      <div className="youth-content">
        <div className="youth-event">
          <div className="event">
            <img src={images1} alt="event 1" />
            <h3>Growth</h3>
            <p>
              At Lkhc Youth, we are committed to growing in Christlikeness. We
              believe that becoming more like Jesus is a lifelong journey that
              requires intentional effort and a reliance on God's grace. We
              strive to create an environment where young people can learn, ask
              questions, and be challenged in their faith.
            </p>
          </div>

          <div className="event">
            <img src={images2} alt="event1" />
            <h3>Events</h3>
            <p>
              At LKHC Youth, we host a multitude of exciting events throughout
              the year, including our highly anticipated summer camp. Our summer
              camp is a highlight for our youth community, filled with
              unforgettable experiences and life-changing moments. From
              thrilling outdoor activities and team-building challenges to
              engaging worship sessions and impactful teachings.
            </p>
          </div>
        </div>
        <div className="youth-team">
          <div className="event">
            <img src={images3} alt="team 1" />
            <h3> Worship</h3>
            <p>
              At Lkhc Youth, we foster a worship environment centered on growth
              in Christlikeness. We embrace the belief that the journey towards
              becoming more like Jesus is lifelong, necessitating intentional
              effort and reliance on God's grace. Our aim is to cultivate an
              atmosphere where young individuals can learn, inquire, and be
              inspired to deepen their faith.
            </p>
          </div>
          <div className="event">
            <img src={images4} alt="team 2" />
            <h3>Activities</h3>
            <p>
              At LKHC Youth, We create an environment where young individuals
              can learn, question, and be challenged in their faith.
              Additionally, we encourage active participation in sports
              activities, fostering physical well-being, teamwork, and character
              development. Together, we embark on a journey of growth, both
              spiritually and physically, as we pursue Christlikeness in every
              aspect of our lives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Youth;
