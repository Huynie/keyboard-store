import React from "react";

const Home = () => {
  return (
    <div className="homePage">
      <div className="popular">
        <img src={require("../images/k5.png")} alt="#" />
        Popular item 1<p>$90.00</p>
        <button href="">BUY</button>
      </div>
      <div className="popular">
        <img src={require("../images/k6.png")} alt="#" />
        Popular item 2<p>$80.00</p>
        <button href="">BUY</button>
      </div>
    </div>
  );
};

export default Home;
