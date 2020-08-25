import React, { useContext, useEffect } from "react";
import { productContext } from "./product_list";
import { Link } from "react-router-dom";
/* import About from "./about";
import Contact from "./contact"; */

export default function Home() {
  const { products, setItemPicked } = useContext(productContext);
  const carousel = () => {
    if (products) {
      const dotsNav = document.querySelector(".featured__dotsContainer");
      const dot = Array.from(dotsNav.children);

      const container = document.querySelector(".featured");
      const img = document.querySelectorAll(".featured__slide");

      const options = { threshold: 0.5, root: container };
      const observer = new IntersectionObserver((entries) => {
        console.log(entries);
        //my own
        entries.forEach((entry) => {
          if (entry.isIntersecting === true) {
            const show = entry.target.getAttribute("id");
            dot[show].classList.add("currentDot");
          } else {
            const hide = entry.target.getAttribute("id");
            dot[hide].classList.remove("currentDot");
          }
        });
      }, options);
      img.forEach((image) => {
        observer.observe(image);
      });
    } else {
      return;
    }
  };

  useEffect(() => {
    carousel();
  });

  const dotClicked = (dotIdx) => {
    const slideView = document.querySelector(".featured");
    const slides = Array.from(slideView.children);
    slides[dotIdx].scrollIntoView({ block: "center", inline: "center" });
  };
  return (
    //Featured Slider
    <div className="homePage" id="featured">
      <div className="featured">
        {products
          .filter((featured) => featured.featured)
          .map((featured, idx) => {
            return (
              <Link
                className="featured__slide"
                key={idx}
                id={idx}
                onClick={() => setItemPicked(featured)}
                to={{
                  pathname: `/items/${featured.name}`,
                  /* item: featured, */
                }}
              >
                {" "}
                <div className="featured__name">{featured.name}</div>
                <img src={featured.image} alt={featured.name} />
              </Link>
            );
          })}
      </div>
      {/* Dots */}
      <div className="featured__dotsContainer">
        {products
          .filter((featured) => featured.featured)
          .map((featured, idx) => {
            return (
              <input
                className="featured__dotsContainer--dots"
                type="button"
                key={idx}
                id={idx}
                value={featured.index}
                onClick={() => dotClicked(idx)}
              ></input>
            );
          })}
      </div>
      {/* <hr /> */}
    </div>
  );
}
