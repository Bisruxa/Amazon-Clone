// import Rating from '@mui/material/Rating'
// import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import React from "react";
import { Link } from "react-router-dom";
import "./product.css";
import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
function ProductCard({ product, flex, renderDesc,renderAdd }) {
  const { image, title, id, rating, price, description } = product;

 const [state,dispatch] =useContext(DataContext)
 console.log(state)
 const addToCart =()=>{
  dispatch({
    type:Type.ADD_TO_CART,
    item:{ image, title, id, rating, price, description 

    }
  })
 }
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
        <div className="container">
          <div className="price">$45</div>
          <div>{/* <CurrencyFormat amount={price}/> */}</div>
          {renderAdd && (
            <button className="button" onClick={addToCart}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
