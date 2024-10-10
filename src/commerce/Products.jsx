import React from "react";

const Products = (props) => {
  return (
    <div>
      <div className="proppp">
        <img src={props.image} alt="" />
        <p> {props.name} </p>
        <p> {props.price} </p>
      </div>
    </div>
  );
};

export default Products;
