import React, { useEffect, useState } from "react";
import "../Css/category.css";
import IMG2 from "../Images/Img2.jpg";
import IHEARTBLANK from "../Icons/iheartblank.png";
import IHEARTRED from "../Icons/iheartred.png";
import axios from "axios";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import Heart from "./Heart";
import HeartRed from "./HeartRed";
import { Link } from "react-router-dom";

const API_LINK = "http://starlord.hackerearth.com/recipe";

const Categories = ({ title }) => {
  const SimpleHeart = () => (
    <img className="iheartblank" src={IHEARTBLANK} alt="" />
  );
  const ColorHeart = () => (
    <img className="iheartblank" src={IHEARTRED} alt="" />
  );
  //const [heart, setHeart] = useState(true);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(API_LINK);
      request.data.map((dish) => {
        dish.heart = true;
      });
      setDishes(request.data);
      localStorage.setItem("data", JSON.stringify(request.data));
      console.log(dishes);
      return request;
    }

    fetchData();
  }, [API_LINK]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  function hearthandler(id) {
    console.log(id);
    const tempdishes = [...dishes];
    tempdishes[id].heart = !tempdishes[id].heart;
    console.log(tempdishes);
    return setDishes(tempdishes);
  }

  return (
    <div className="container">
      {/*Categories Title*/}
      <Fade right delay={400} cascade>
        <div>
          <div
            className="title_category d-flex justify-content-end"
            style={{ width: "88%" }}
          >
            <p style={{ margin: "0px" }}>CATEGORY</p>
          </div>
          <div
            className="d-flex justify-content-end"
            style={{ width: "88%", marginBottom: "10px" }}
          >
            <h2 className="title_name">{title}</h2>
          </div>
        </div>
      </Fade>

      <div className="d-flex justify-content-center">
        <Flip right cascade delay={800}>
          <div className="row" style={{ width: "80%" }}>
            {dishes.map((dish) => (
              <div
                key={dish.id}
                className="col-md-3 smooth"
                style={{
                  borderRadius: "8px",
                  marginBottom: "20px",
                  height: "430px",
                }}
              >
                {/* CREATING CARDS */}
                <div
                  className="card"
                  style={{ borderRadius: "8px", height: "100%" }}
                >
                  <Link
                    to={{
                      pathname: `/about/${dish.id}`,
                    }}
                  >
                    <img
                      src={dish.image}
                      alt="IMG"
                      style={{
                        width: "100%",
                        borderRadius: "8px",
                        objectFit: "cover",
                        height: "200px",
                        top: "0",
                      }}
                    />
                  </Link>
                  <div className="banner--fadeBottom" />
                  <div className="container">
                    <div className="dish_name">
                      <h5>
                        <b>{dish.name}</b>
                      </h5>
                      <div onClick={() => hearthandler(dish.id)}>
                        {dish.heart ? (
                          <img
                            className="iheartblank"
                            src={IHEARTBLANK}
                            alt=""
                          />
                        ) : (
                          <ColorHeart />
                        )}
                      </div>
                    </div>

                    <div>
                      <p style={{ fontStyle: "italic" }}>{dish.category}</p>
                    </div>

                    <div>
                      <h5>
                        <b>${dish.price}</b>
                      </h5>
                    </div>

                    <p>{truncate(dish.description, 50)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Flip>
      </div>
    </div>
  );
};

export default Categories;
