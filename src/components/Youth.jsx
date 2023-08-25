import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import images1 from "./Pictures/Youth/bibleStudy.jpg";
import images2 from "./Pictures/Youth/camp.jpg";
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
            <img src={images2} alt="event 1" />
            <h3>Events</h3>
            <p>
              At Lkhc Youth, we are committed to growing in Christlikeness. We
              believe that becoming more like Jesus is a lifelong journey that
              requires intentional effort and a reliance on God's grace. We
              strive to create an environment where young people can learn, ask
              questions, and be challenged in their faith.
            </p>
          </div>
        </div>
        <div className="youth-team">
          <div className="event">
            <img src={images3} alt="team 1" />
            <h3> Worship</h3>
            <p>
              At Lkhc Youth, we are committed to growing in Christlikeness. We
              believe that becoming more like Jesus is a lifelong journey that
              requires intentional effort and a reliance on God's grace. We
              strive to create an environment where young people can learn, ask
              questions, and be challenged in their faith.
            </p>
          </div>
          <div className="event">
            <img src={images4} alt="team 2" />
            <h3>Activities</h3>
            <p>
              At Lkhc Youth, we are committed to growing in Christlikeness. We
              believe that becoming more like Jesus is a lifelong journey that
              requires intentional effort and a reliance on God's grace. We
              strive to create an environment where young people can learn, ask
              questions, and be challenged in their faith.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Youth;
