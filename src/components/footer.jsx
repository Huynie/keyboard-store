import React from "react";

const Footer = () => {
  return (
    <footer>
      <hr />
      <p>Huy Chau 2020</p>
      <ul className="social">
        <li>
          <img src={require("../images/FB White.png")} alt="" />
        </li>
        <li>
          <img src={require("../images/IG White.png")} alt="" />
        </li>
        <li>
          <img src={require("../images/TW White.png")} alt="" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
