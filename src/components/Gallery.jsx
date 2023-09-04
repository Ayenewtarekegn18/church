import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import Modal from "./Modal";
import imageData from "./pic";
import imageData2 from "./pic2";
import imageData3 from "./pic3";
import "./Gallery.css";
import { Link } from "react-router-dom";

function Gallery() {
  const [isContentVisible, setContentVisible] = useState(false);

  const handleToggleContent = () => {
    setContentVisible(!isContentVisible);
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous data fetching or any other time-consuming operation
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const image = new Image();
  const data3 = imageData;
  const data4 = imageData2;
  const data5 = imageData3;
  const [clickedImg, setclickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setclickedImg(item.link);
  };

  const handelRotationRight = () => {
    const totalLength = data3[0].length + data3[1].length + data3[2].length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data3[0].link;
      setclickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data3.filter((item) => {
      return data3.indexOf(item) === newIndex;
    });

    const newItem = newUrl[0].link;
    setclickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationleft = () => {
    const totalLength = data3.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data3[totalLength - 1].link;
      setclickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data3.filter((item) => {
      return data3.indexOf(item) === newIndex;
    });

    const newItem = newUrl[0].link;
    setclickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  // This is for the second div

  const handelRotationRight2 = () => {
    const totalLength = data4.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data4[0].link;
      setclickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data4.filter((item) => {
      return data4.indexOf(item) === newIndex;
    });

    const newItem = newUrl[0].link;
    setclickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationleft2 = () => {
    const totalLength = data4.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data4[totalLength - 1].link;
      setclickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data4.filter((item) => {
      return data4.indexOf(item) === newIndex;
    });

    const newItem = newUrl[0].link;
    setclickedImg(newItem);
    setCurrentIndex(newIndex);
  };
  if (isLoading) {
    return <div className="loader"></div>;
  } else
    return (
      <>
        <div class="nav-links" id="navLinks">
          <ul>
            <li>
              <a href="#header1">Worship Night</a>
            </li>
            <li>
              <a href="#header2">Summer Camp</a>
            </li>
            <li>
              {" "}
              <a href="#header3">Youth Week</a>
            </li>
          </ul>
        </div>
        <div className="body">
          <div className="contain">
            <div id="header1" className="header">
              <h1>Worship Night Memories</h1>
            </div>
            <div className="wrapper">
              <div className="w-1">
                {data3[0].map((item, index) => (
                  <div key={index} className="wrapper-images">
                    <img
                      src={item.link}
                      alt={item.text}
                      style={{
                        width: item.link.width,
                        height: item.link.height,
                      }}
                      onClick={() => handleClick(item, index)}
                    />
                  </div>
                ))}
                {clickedImg && (
                  <Modal
                    clickedImg={clickedImg}
                    handelRotationRight={handelRotationRight}
                    handelRotationleft={handelRotationleft}
                    setclickedImg={setclickedImg}
                  />
                )}
              </div>
              <div className="w-1">
                {data3[1].map((item, index) => (
                  <div key={index} className="wrapper-images">
                    <img
                      src={item.link}
                      alt={item.text}
                      style={{
                        width: item.link.width,
                        height: item.link.height,
                      }}
                      onClick={() => handleClick(item, index)}
                    />
                  </div>
                ))}
                {clickedImg && (
                  <Modal
                    clickedImg={clickedImg}
                    handelRotationRight={handelRotationRight}
                    handelRotationleft={handelRotationleft}
                    setclickedImg={setclickedImg}
                  />
                )}
              </div>
              <div className="w-1">
                {data3[2].map((item, index) => (
                  <div key={index} className="wrapper-imgages">
                    <img
                      src={item.link}
                      alt={item.text}
                      style={{
                        width: item.link.width,
                        height: item.link.height,
                      }}
                      onClick={() => handleClick(item, index)}
                    />
                  </div>
                ))}
                {clickedImg && (
                  <Modal
                    clickedImg={clickedImg}
                    handelRotationRight={handelRotationRight}
                    handelRotationleft={handelRotationleft}
                    setclickedImg={setclickedImg}
                  />
                )}
              </div>
            </div>

            <div id="header2" className="header">
              <h1>Summer Camp 2022</h1>
            </div>
            <div className="wrapper2">
              <div className="w-1">
                {data4[0].map((item, index) => (
                  <div key={index} className="wrapper-images">
                    <img
                      src={item.link}
                      alt={item.text}
                      onClick={() => handleClick(item, index)}
                    />
                  </div>
                ))}
                {clickedImg && (
                  <Modal
                    clickedImg={clickedImg}
                    handelRotationRight={handelRotationRight2}
                    handelRotationleft={handelRotationleft2}
                    setclickedImg={setclickedImg}
                  />
                )}
              </div>
              <div className="w-1">
                {data4[1].map((item, index) => (
                  <div key={index} className="wrapper-imgages">
                    <img
                      src={item.link}
                      alt={item.text}
                      onClick={() => handleClick(item, index)}
                    />
                  </div>
                ))}
                {clickedImg && (
                  <Modal
                    clickedImg={clickedImg}
                    handelRotationRight={handelRotationRight2}
                    handelRotationleft={handelRotationleft2}
                    setclickedImg={setclickedImg}
                  />
                )}
              </div>
              <div className="w-1">
                {data4[2].map((item, index) => (
                  <div key={index} className="wrapper-imgages">
                    <img
                      src={item.link}
                      alt={item.text}
                      onClick={() => handleClick(item, index)}
                    />
                  </div>
                ))}
                {clickedImg && (
                  <Modal
                    clickedImg={clickedImg}
                    handelRotationRight={handelRotationRight2}
                    handelRotationleft={handelRotationleft2}
                    setclickedImg={setclickedImg}
                  />
                )}
              </div>
            </div>

            <div id="header3" className="header">
              <h1>Youth Week </h1>
            </div>
            <div className="wrapper2">
              <div className="w-1">
                {data5[0].map((item, index) => (
                  <div key={index} className="wrapper-imgages">
                    <img
                      src={item.link}
                      alt={item.text}
                      onClick={() => handleClick(item, index)}
                    />
                  </div>
                ))}
                {clickedImg && (
                  <Modal
                    clickedImg={clickedImg}
                    handelRotationRight={handelRotationRight2}
                    handelRotationleft={handelRotationleft2}
                    setclickedImg={setclickedImg}
                  />
                )}
              </div>
              <div className="w-1">
                {data5[1].map((item, index) => (
                  <div key={index} className="wrapper-imgages">
                    <img
                      src={item.link}
                      alt={item.text}
                      onClick={() => handleClick(item, index)}
                    />
                  </div>
                ))}
                {clickedImg && (
                  <Modal
                    clickedImg={clickedImg}
                    handelRotationRight={handelRotationRight2}
                    handelRotationleft={handelRotationleft2}
                    setclickedImg={setclickedImg}
                  />
                )}
              </div>
              <div className="w-1">
                {data5[2].map((item, index) => (
                  <div key={index} className="wrapper-imgages">
                    <img
                      src={item.link}
                      alt={item.text}
                      onClick={() => handleClick(item, index)}
                    />
                  </div>
                ))}
                {clickedImg && (
                  <Modal
                    clickedImg={clickedImg}
                    handelRotationRight={handelRotationRight2}
                    handelRotationleft={handelRotationleft2}
                    setclickedImg={setclickedImg}
                  />
                )}
              </div>
            </div>
          </div>

          <h1>Podcast</h1>
          <div className="podcast">
            <iframe
              className="pod"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Lxpp3CjHaIY?si=Y4TdjlEFvZgfjjm1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullscreen
            ></iframe>
            <p>
              Looking for an exciting and meaningful way to spend your summer?
              Join us for our upcoming youth camp at Lebu Khc church! Our camp
              is designed to provide a fun-filled experience for young people
              while also fostering personal and spiritual growth. Don't miss out
              on this amazing opportunity to connect with other young people and
              grow in your faith!
              <br />
              <br />
              <Link to="https://www.youtube.com/@lebukhcyouth" target="_blank">
                <button className="btn btn-danger">All Videos</button>
              </Link>
            </p>
          </div>
        </div>
      </>
    );
}
export default Gallery;
