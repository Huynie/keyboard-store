import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <hr />
        <p>Huy Chau &copy; {new Date().getFullYear()}</p>
        {/* <ul className="social">
          <li>
            <img src={"/images/FB_White.png"} alt="" />
          </li>
          <li>
            <img src={"/images/IG_White.png"} alt="" />
          </li>
          <li>
            <img src={"/images/TW_White.png"} alt="" />
          </li>
        </ul> */}
      </div>
    </>
  );
}
