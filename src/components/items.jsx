import React, { useContext, useEffect } from "react";
import { productContext } from "./product_list";
import { Redirect } from "react-router-dom";

export default function Items() {
  const { addToCart, itemPicked } = useContext(productContext);

  const carousel = () => {
    if (itemPicked > "") {
      const dotsNav = document.querySelector(".items__dotsContainer");
      const dot = Array.from(dotsNav.children);

      const container = document.querySelector(".items__slider");
      const img = document.querySelectorAll(".items__images");

      const options = { threshold: 0.5, root: container };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting === true) {
            const show = entry.target.getAttribute("id");
            dot[show].classList.add("current-image");
          } else {
            const hide = entry.target.getAttribute("id");
            dot[hide].classList.remove("current-image");
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
    const slideView = document.querySelector(".items__slider");
    const slides = Array.from(slideView.children);
    slides[dotIdx].scrollIntoView({ block: "center", inline: "center" });
  };

  if (itemPicked.length !== 0) {
    return (
      <>
        <div className="items">
          <div className="items__carousel">
            <div className="items__slider">
              {
                //Maps array of image url and outputs img tag for each
                itemPicked.image.map((image, idx) => {
                  return (
                    <img
                      className="items__images"
                      src={image}
                      alt={idx}
                      key={idx}
                      id={idx}
                      width="100"
                      height="100"
                    />
                  );
                })
              }
            </div>
            <div className="items__dotsContainer">
              {itemPicked.image.map((image, idx) => {
                return (
                  <input
                    className="items__dotsContainer--dots"
                    type="button"
                    key={idx}
                    id={idx}
                    value={image.index}
                    onClick={() => dotClicked(idx)}
                  ></input>
                );
              })}
            </div>
          </div>
          <div className="items__info">
            <h1 className="items__name">{itemPicked.name}</h1>
            <h3 className="items__price">${itemPicked.price.toFixed(2)}</h3>
            <p className="items__description">{itemPicked.description}</p>
            <button
              className="items__btn"
              onClick={() => addToCart(itemPicked)}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Redirect to="/store" />{" "}
      </>
    );
  }
}
