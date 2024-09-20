import React, { useContext } from "react";
import Layout from "../../component/Layout/Layout";
import { DataContext } from "../../component/DataProvider/DataProvider";
import ProductCard from "../../component//product/ProductCard";
import CurrencyFormat from "../../component/CurrencyFormat/CurrencyFormat";
import { PiTreasureChest } from "react-icons/pi";
import { TiArrowSortedDown } from "react-icons/ti";
import {TiArrowSortedUp} from "react-icons/ti";
import { Link } from "react-router-dom";
import "./cart.css";
import { Type } from "../../Utility/action.type";
function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  const increment =(item)=>{
    dispatch({
      type:Type.ADD_TO_CART,
      item,
    });
  };
  const decrement =(id)=>{
    dispatch({
      type:Type.REMOVE_FROM_BASKET,
      id,
    });
  };
  return (
    <Layout>
      <section className="container">
        <div className="cart_container">
          <h2>Hello</h2>
          <h3>Your Shopping Basket</h3>
          <hr />
          {basket?.length == 0 ? (
            <p>Opps! No item in your cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <section className="cart_product">
                  <ProductCard
                    key={i}
                    product={item}
                    renderDesc={true}
                    // flex={PiTreasureChest}
                    flex={true}
                    renderAdd={false}
                  />
                  <div className="btn_container">
                    <button className="btn" onClick={() => increment(item)}>
                      <TiArrowSortedUp size={30} />
                    </button>
                    <span>{item.amount}</span>
                    <button className="btn" onClick={() => decrement(item.id)}>
                      <TiArrowSortedDown size={30} />
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>
        {basket?.length !== 0 && (
          <div className="subtotal">
            <div>
              <p>Subtottal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order sontains a gift </small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;
