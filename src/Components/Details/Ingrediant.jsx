import React from "react";
import HeartRed from "../../Icons/iheartred.png";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import "./ingredient.css";
export const Ingrediant = () => {
  return (
    <div className="container" style={{ width: "60%", marginTop: "1em" }}>
      <div className="row">
        <Fade left cascade delay={200}>
          <div className="col-md-6">
            <h4>
              <strong>Ingredients:</strong>
            </h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
              saepe! Laborum earum beatae voluptate odit exercitationem.
              Accusantium illum deserunt ipsum animi eveniet aliquid unde, fuga
              at, ea delectus, laborum et.
            </p>
          </div>
        </Fade>
        <Fade right cascade delay={200}>
          <div className="col-md-6">
            <div className="row">
              <div
                className="col-md-4 d-flex justify-content-center"
                style={{ marginBottom: 10 }}
              >
                <div style={{ backgroundColor: "#000", borderRadius: "50%" }}>
                  <h4
                    style={{ color: "#fff", padding: 20, textAlign: "center" }}
                  >
                    8 <br />
                    <span style={{ fontSize: 15 }}>Ingrediant</span>
                  </h4>
                </div>
              </div>
              <div
                className="col-md-4 d-flex justify-content-center"
                style={{ marginBottom: 10 }}
              >
                <div style={{ backgroundColor: "#000", borderRadius: "50%" }}>
                  <h4
                    style={{ color: "#fff", padding: 20, textAlign: "center" }}
                  >
                    8 <br />
                    <span style={{ fontSize: 15 }}>Ingrediant</span>
                  </h4>
                </div>
              </div>{" "}
              <div
                className="col-md-4 d-flex justify-content-center"
                style={{ marginBottom: 10 }}
              >
                <div style={{ backgroundColor: "#000", borderRadius: "50%" }}>
                  <h4
                    style={{ color: "#fff", padding: 20, textAlign: "center" }}
                  >
                    8 <br />
                    <span style={{ fontSize: 15 }}>Ingrediant</span>
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="fav"
              style={{ marginTop: "2em", float: "right", display: "flex" }}
            >
              <h5>FAVOURITE THIS RECIPE</h5>
              <img
                src={HeartRed}
                style={{ paddingLeft: 10, width: 40, height: 30 }}
              />
            </div>
          </div>
        </Fade>
      </div>
      <div className="row">
        <Fade right cascade delay={200}>
          <div className="col-md-6">
            <h4>
              <strong>How to prepare:</strong>
            </h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
              saepe! Laborum earum beatae voluptate odit exercitationem.
              Accusantium <br /> <br />
              illum deserunt ipsum animi eveniet aliquid unde, fuga at, ea
              delectus, laborum et.
              <br /> <br />
              illum deserunt ipsum animi eveniet aliquid unde, fuga at, ea
              delectus, laborum et.
            </p>
          </div>
        </Fade>
        <Fade right cascade delay={200}>
          <div className="col-md-6">
            <div className="row">
              <div className="col">
                <div style={{ marginTop: "2em" }}>
                  <h6 style={{ color: "#a0a0a0" }}>Add Comment</h6>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    style={{
                      borderRadius: 10,
                      border: "none",
                      width: "100%",
                      height: 150,
                      padding: 10,
                    }}
                    placeholder="Type something here..."
                  ></textarea>
                  <button
                    className="btn"
                    style={{
                      marginTop: ".5em",
                      width: "100%",
                      backgroundColor: "#000",
                      color: "#fff",
                      borderRadius: 10,
                      height: 50,
                    }}
                  >
                    ADD COMMENT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <div className="container" style={{ margin: "4em 0em" }}>
        <div style={{ display: "inline-block" }}>
          <hr style={{ height: 1, width: "100%" }} />
          <h6 style={{ color: "#a0a0a0" }}>YOUR FOOD TASTES YUMMY</h6>
          <hr style={{ height: 1, width: "100%" }} />
        </div>
      </div>
    </div>
  );
};
