import React, { useEffect,useState } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios'
import Loader from '../loader/Loader'
import './product.css'
function Product() {
  const [Products,setProducts] = useState()
  const [IsLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://fakestoreapi.com/products/")
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);
  return (
    <>
      {IsLoading ? (
        <Loader />
      ) : (
        <section className="products_container">
          {Products?.map((singleProduct) => {
            return (
              <ProductCard product={singleProduct} key={singleProduct.id} 
              renderAdd={true}/>
            );
          })}
        </section>
      )}
    </>
  );
}

export default Product
