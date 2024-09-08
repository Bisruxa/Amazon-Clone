// import Rating from '@mui/material/Rating'
// import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import React from "react";
import { Link } from "react-router-dom";
import "./product.css";

function ProductCard({ product, flex, renderDesc }) {
  const { image, title, id, rating, price, description } = product;

  // Create a base class and conditionally add 'product_flexed' if flex is true
  const containerClass = flex
    ? "card_container product_flexed"
    : "card_container";

  return (
    <div className={containerClass}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} className="img_container" />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div className="description">{description}</div>}
        <div className="rating">
          {/* <Rating value={rating.rate} precision={0.1}/> */}
          {/* <small>{rating.count}</small> */}
        </div>
        <div>{/* <CurrencyFormat amount={price}/> */}</div>
        <button className="button">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
