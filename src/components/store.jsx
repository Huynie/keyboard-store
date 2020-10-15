import React, { useContext } from "react";
import { productContext } from "./product_list";
import { Link } from "react-router-dom";

export default function Store() {
  const { getProductsInCategory, setCategory, setItemPicked } = useContext(
    productContext
  );
const setStore = (product)=>{
  setItemPicked(product)
  localStorage.setItem("picked-item", JSON.stringify(product))
}

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
        <div className="product__list">
          {getProductsInCategory().map((product, idx) => {
            return (
              <div
                className="product__item"
                key={idx}
                onClick={()=> setStore(product)}
                /* onClick={()=> setItemPicked(product)} */
              >
                <Link
                  to={{
                    /* pathname: `/items/${product.name}`, */
                    pathname: `/items`,
                  }}
                >
                  <div className="product__imgContainer">
                    <img src={product.image[0]} alt={product.name} />
                  </div>
                  <div className="product__info">
                    <h2 className="product__name">{product.name}</h2>
                    <h3 className="product__price">
                      ${product.price.toFixed(2)}
                    </h3>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
