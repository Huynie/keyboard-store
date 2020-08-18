import React, { useContext } from "react";
import { productContext } from "./product_list";
import { Link } from "react-router-dom";
import About from "./about";
import Contact from "./contact";

export default function Home() {
  const { products } = useContext(productContext);

  return (
    <>
      <div className="homePage" id="featured">
        <h1>Featured</h1>
        {products
          .filter((featured) => featured.featured)
          .map((featured, idx) => {
            return (
              <div className="featured" key={idx}>
                <Link
                  to={{
                    pathname: "/items",
                    item: featured,
                  }}
                >
                  {" "}
                  <img src={featured.image} alt={featured.name} />
                  <h2 className="featured__name">{featured.name}</h2>
                </Link>
              </div>
            );
          })}
        <hr />
      </div>
      <About />
      <Contact />
    </>
  );
}
