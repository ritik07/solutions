import React, { useState, useEffect } from "react";
import TLC from "../Images/tlc.png";
import BLC from "../Images/blc.png";
import BLCU from "../Images/blcu.png";
import ISEARCH from "../Icons/isearch.png";
import Pizza from "../Images/pizza.png";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import IHEARTBLANK from "../Icons/iheartblank.png";
import IHEARTRED from "../Icons/iheartred.png";
import "../Css/category.css";
import "../Css/search.css";
const Search = () => {
  const ColorHeart = () => (
    <img className="iheartblank" src={IHEARTRED} alt="" />
  );
  const [result, setresult] = useState([]);
  const [input, setinput] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      const res = data.filter(
        (dish) =>
          input.length > 0 && dish.name.toLowerCase().indexOf(input) !== -1
      );
      console.table(res);
      setresult(res);
    }
  }, [input]);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  function hearthandler(id) {
    console.log(id);
    const tempdishes = [...result];
    console.log(`showing temp${tempdishes}`);
    tempdishes[0].heart = !tempdishes[0].heart;
    console.log(tempdishes);
    return setresult(tempdishes);
  }
  console.log(`showing ${result[0]?.heart}`);
  console.log(result);

  return (
    <div>
      {/*SETING BG IMAGES*/}
      <Fade top delay={600}>
        <div className="tlc">
          <img src={TLC} alt="" />
        </div>
      </Fade>
      <Fade bottom delay={600}>
        <div className="blc">
          <img src={BLC} alt="" />
        </div>
      </Fade>
      <Fade right delay={1200}>
        <div className="blcu">
          <img src={BLCU} alt="" />
        </div>
      </Fade>
      <Fade bottom delay={600}>
        <div className="brc">
          <img src={TLC} alt="" />
        </div>
      </Fade>
      <Fade left>
        <div className="pizza">
          <img src={Pizza} alt="" />
        </div>
      </Fade>
      {/*SETING SEARCH BAR*/}
      <Bounce top delay={100}>
        <div
          className="container"
          style={{ width: "65%", display: "flex", marginTop: "60px" }}
        >
          <img className="icon_search" src={ISEARCH} alt="Search Icon" />
          <input
            onChange={(e) => {
              setinput(e.target.value);
            }}
            onFocus={() => setfoucs(true)}
            className="search_input"
            type="text"
            placeholder="Search your favourite recipe..."
          />
        </div>
      </Bounce>
      {foucs ? (
        result.length > 0 ? (
          <div
            className="col-md-3 smooth"
            style={{
              borderRadius: "8px",
              marginBottom: "20px",
              height: "430px",
            }}
          >
            <div
              className="card"
              style={{ borderRadius: "8px", height: "100%" }}
              dish={result[0]}
            >
              <img
                src={result[0].image}
                alt="IMG"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  objectFit: "cover",
                  height: "200px",
                  top: "0",
                }}
              />
              <div className="banner--fadeBottom" />
              <div className="container">
                <div className="dish_name">
                  <h5>
                    <b>{result[0].name}</b>
                  </h5>
                  <div onClick={() => hearthandler(result[0].id)}>
                    {result[0].heart ? (
                      <img className="iheartblank" src={IHEARTBLANK} alt="" />
                    ) : (
                      <ColorHeart />
                    )}
                  </div>
                </div>

                <div>
                  <p style={{ fontStyle: "italic" }}>{result[0].category}</p>
                </div>

                <div>
                  <h5>
                    <b>${result[0].price}</b>
                  </h5>
                </div>

                <p>{truncate(result[0].description, 50)}</p>
              </div>
            </div>
          </div>
        ) : (
          <p>No Recipe Found</p>
        )
      ) : (
        " "
      )}
    </div>
  );
};

export default Search;
