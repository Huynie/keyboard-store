import React, { useContext } from "react";
import { productContext } from "./product_list";
import { Link } from "react-router-dom";

export default function Home() {
  const { products } = useContext(productContext);

  return (
    <>
      <div className="homePage">
        <h1>Featured</h1>
        {products.map((featured, idx) => {
          if (featured.featured === true) {
            console.log(featured[idx]);
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
          }
        })}
      </div>
    </>
  );
}
