import React from "react";
import "./Blog.css";
import test from "./Pictures/test-1.jpg";
import p2 from "./Pictures/p2.png";
import p3 from "./Pictures/p3.png";

function Blog() {
  return (
    <div className="blog">
      <div className="testimonials">
        <h1>Weekly Devoution</h1>
        <div className="border"></div>
        <h3>Powerless Faith</h3>
        <br />
        <div className="cols">
          <p>
            As the world continues to change, Christianity faces challenges in
            connecting with the younger generation.As the cultural landscape
            transforms, it becomes increasingly vital for believers to explore
            and embrace new approaches to engaging with today's youth. The
            concept of "powerless faith" refers to a state where the
            transformative and life-giving power of the Christian faith seems
            diminished or irrelevant in the eyes of the younger generationThis
            reflection explores the concept of "powerless faith" within
            Christianity and addresses the impact of new ideologies, social
            media, and the need for strong teaching on biblical principles.
            <br />
            <span className="smaller-title">Navigating New Ideologies</span>: In
            today's world, new ideologies often challenge the teachings of the
            Bible. As a faith community, we must engage in respectful dialogue,
            providing a solid foundation for understanding and addressing these
            ideologies. By respectfully discussing concerns and sharing the
            timeless truths of the Bible, we can help guide the younger
            generation towards a faith that is grounded in God's Word.By
            equipping ourselves with knowledge and being open to learning from
            others, we can address concerns and misconceptions effectively.
            Additionally, as we engage in respectful conversations, we have an
            opportunity to share the timeless truths and relevance of the Bible,
            helping the younger generation navigate the complexities of life
            with a strong foundation. <br />
            <span className="smaller-title">
              The Influence of Social Media :
            </span>
            Social media plays a significant role in shaping the perspectives
            and beliefs of today's generation. It is crucial for Christians to
            navigate this digital landscape with wisdom and discernment. By
            leveraging social media platforms to promote uplifting and
            meaningful content, engaging in conversations that reflect our faith
            values, and being a positive presence, we can counteract the
            negative influences and make a lasting impact. Instead of passively
            consuming content, we can actively participate in meaningful
            discussions and provide a positive Christian presence online. By
            sharing uplifting messages, supporting causes aligned with our faith
            values, and demonstrating Christ-like love in our interactions, we
            can counteract the negative influences of social media and make a
            lasting impact on the lives of others. <br />
            <span className="smaller-title">
              Addressing the Lack of Strong Teaching on Biblical Principles:
            </span>
            The younger generation needs solid teaching on biblical principles
            to navigate the complexities of life. It is essential for churches
            and Christian leaders to provide comprehensive and engaging
            education on the Bible's teachings.Unfortunately, there is often a
            lack of robust biblical education in our churches and educational
            institutions. By investing in discipleship programs, Bible studies,
            and mentoring relationships, we can equip the younger generation
            with a strong foundation in biblical truth, empowering them to live
            out their faith with conviction and impact.It is crucial for
            churches and Christian leaders to prioritize strong teaching,
            discipleship programs, and Bible studies. By investing in
            comprehensive education, we equip the younger generation with a deep
            understanding of the Bible's teachings and provide them with a solid
            foundation to live out their faith confidently.
          </p>
        </div>
      </div>
      <div className="testimonials">
        <div className="inner">
          <h1>Testimonials</h1>
          <div className="border"></div>

          <div className="row">
            <div className="col">
              <div className="testimonial">
                <img src={test} alt="" />
                <div className="name">Ayenew Tarekegn</div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>

                <p>
                  Joining LKHC Youth has been an incredible journey of personal
                  growth for me. Through the various programs, events, and
                  mentorship opportunities, I have been able to develop my
                  faith, character, and leadership skills. The youth leaders at
                  LKHC are passionate about investing in the lives of young
                  people, and their guidance and support have played a
                  significant role in shaping my spiritual journey. I am
                  grateful for the transformative experiences I have had and the
                  lifelong friendships I have formed through LKHC Youth."
                </p>
              </div>
            </div>

            <div className="col">
              <div className="testimonial">
                <img src={p2} alt="" />
                <div className="name">Full name</div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                </div>

                <p>
                  Finding Jesus in the community of LKHC Youth has been a
                  life-changing experience for me. The sense of belonging and
                  acceptance I have felt within this community is truly
                  remarkable. The youth group at LKHC is filled with genuine
                  love and support, and it has been a place LKHC Youth has
                  become my spiritual family, and I am forever grateful for the
                  ways it has shaped my relationship with God."
                </p>
              </div>
            </div>

            <div className="col">
              <div className="testimonial">
                <img src={p3} alt="" />
                <div className="name">Full name</div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>

                <p>
                  Experiencing intimate worship has been a truly transformative
                  encounter for me. The atmosphere of worship within this
                  community is filled with passion, authenticity, and a hunger
                  for God's presence. The worship team at LKHC leads us into
                  heartfelt worship, creating a space where we can connect with
                  God on a deeper level. Through powerful songs, prayer, and
                  moments of reflection, I have encountered the love and power
                  of God in a tangible way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
