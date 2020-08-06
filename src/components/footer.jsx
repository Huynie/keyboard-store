import React from "react";

const Footer = () => {
  return (
    <footer>
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
      made by Huy Chau 2020 copyright
    </footer>
  );
};

export default Footer;
