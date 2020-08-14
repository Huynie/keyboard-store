import React, { useContext } from "react";

export default function Checkout(props) {
  const total = props.location.total;
  const shipping = total / 2;
  const tax = total / 2;
  const grandTotal = total + tax + shipping;
  const totalRendered = () => {
    if (total > 0) {
      return (
        <div>
          <h1>CHECKOUT</h1>
          <h2>total: {total}</h2>
          <h3>Shipping: {shipping}</h3>
          <h4>Tax: {tax}</h4>
          <h5>Grand Total: {grandTotal}</h5>
        </div>
      );
    } else {
      return <div>nothing here</div>;
    }
  };
  return <>{totalRendered()}</>;
}
