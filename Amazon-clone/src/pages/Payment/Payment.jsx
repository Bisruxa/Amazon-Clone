import React, {useContext,useState}from 'react'
import Layout from "../../component/Layout/Layout";
import './payment.css'
import { DataContext } from '../../component/DataProvider/DataProvider';
import ProductCard from '../../component/product/ProductCard'
import { useStripe,useElements,CardElement} from '@stripe/react-stripe-js';
import CurrencyFormat from '../../component/CurrencyFormat/CurrencyFormat';
function Payment() {

const [{user, basket}] = useContext(DataContext);
const totalItem = basket?.reduce((amount, item) => {
  return item.amount + amount;
}, 0);
 const total = basket.reduce((amount, item) => {
   return item.price * item.amount + amount;
 }, 0);
const [cardError,setcardError]= useState(null);
const stripe = useStripe();
const elements = useElements();
const handleChange =(e)=>{
e?.error?.message? setcardError(e?.error?.message):setcardError("");
}
  return (
    <Layout>
      <div className="payment_header">Checkout {totalItem} items</div>
      <section className="payment">
        <div className="flex">
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>Chicago, IL</div>
          </div>
        </div>
        <hr />
        <div className="flex">
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        <div className="flex">
          <h3>Payment methods</h3>
          <div className="payment_card_container">
            <div className="payment__details">
              <form action="">
                {/* error handling */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                {/* card element */}
                <CardElement onChange={handleChange} />
                {/* price */}
                <div className="payment_price">
                  <div>
                    <span style={{display:"flex",gap:"10px"}}>
                      <p>Total Order | </p>
                      <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button>Pay Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payment
