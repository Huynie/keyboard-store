import React, { useContext } from "react";
import { productContext } from "./product_list";
import { Link } from "react-router-dom";

export default function Store() {
  const { getProductsInCategory, setCategory } = useContext(productContext);

  return (
    <>
      <div className="product">
        <div className="product__category">
          category :
          <select
            className="product__category--select"
            onChange={(e) => setCategory(e.target.value)}
            name="category"
            id="category"
          >
            <option value="full kit">full kit</option>
            <option value="keycaps">keycaps</option>
          </select>
        </div>
        {getProductsInCategory().map((product, idx) => {
          return (
            <div className="product__item" key={idx}>
              <Link
                to={{
                  pathname: `/items/${product.name}`,
                  item: product,
                }}
              >
                <img src={product.image} alt={product.name} />
                <div className="product__info">
                  <h2 className="product__name">{product.name}</h2>
                  <h3 className="product__price">${product.price}</h3>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
