import React from "react";
import "./playVideo.css";
import playvideoimg from "../../Images/playvideo.jpg";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import { Link } from "react-router-dom";
const PlayVideo = () => {
  return (
    <div>
      <Fade left delay={200}>
        <div className="container" style={{ width: "60%", marginTop: "1em" }}>
          <Link style={{ textDecoration: "none" }} to="/">
            <div className="d-flex align-items-center align-self-center">
              <i
                class="fa fa-arrow-left"
                aria-hidden="true"
                style={{
                  fontSize: "20px",
                  color: "#000",
                  textDecoration: "none",
                }}
              ></i>
              <p
                style={{
                  marginBottom: "0px",
                  paddingLeft: "5px",
                  textDecoration: "none",
                  color: "#000",
                }}
              >
                Go Back
              </p>
            </div>
          </Link>
        </div>
      </Fade>
      <div className="container" style={{ width: "60%", marginTop: "1.21em" }}>
        <div className="row">
          <Flip delay={200}>
            <div className="col-md-6">
              <img
                className="overlay"
                src={playvideoimg}
                style={{ width: "100%", borderRadius: 10 }}
              />
            </div>
          </Flip>
          <Fade right cascade delay={200}>
            <div className="col-md-6">
              <div className="recipe">
                <p style={{ fontSize: "12px" }}>RECIPE</p>
              </div>
              <div className="recipe">
                <h1>
                  <strong>Cheese Brust</strong>
                </h1>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <div
                  style={{
                    width: 35,
                    backgroundColor: "#000",
                    borderRadius: 5,
                  }}
                >
                  <p style={{ marginBottom: 0, color: "#fff", padding: "5px" }}>
                    4/5
                  </p>
                </div>
                <div style={{ marginLeft: 20 }}>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i
                    class="fa fa-star"
                    style={{ marginLeft: 10 }}
                    aria-hidden="true"
                  ></i>
                  <i
                    class="fa fa-star"
                    style={{ marginLeft: 10 }}
                    aria-hidden="true"
                  ></i>
                  <i
                    class="fa fa-star"
                    style={{ marginLeft: 10 }}
                    aria-hidden="true"
                  ></i>
                  <i
                    class="fa fa-star"
                    style={{ marginLeft: 10 }}
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div className="recipe">
                <p style={{ fontSize: "12px", marginTop: "1em" }}>
                  DESCRIPTION
                </p>
              </div>
              <div className="recipe">
                <p style={{ marginTop: "1em" }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sequi impedit temporibus amet minus sed quibusdam explicabo!
                  Explicabo, nulla
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
