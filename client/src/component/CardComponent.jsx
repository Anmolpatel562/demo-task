import React from "react";

const CardComponent = ({ product }) => {
  return (
    <div
      style={{
        height: "350px",
        width: "200px",
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column",
        padding: "1rem",
        gap:"1rem"
      }}
    >
      <div> Card</div>
      <div>
        <div>Price: {product.price}</div>
        <div>Name: {product.name}</div>
        <div>Average: {product.rating.average}</div>
        <div>Review:{product.rating.reviews}</div>
        <img src={product.image} alt="" />
      </div>
    </div>
  );
};

export default CardComponent;
