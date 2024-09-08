import React, { useEffect,useState } from 'react'
import ProductCard from './ProductCard'

import Loader from '../loader/Loader'
function Product() {
  const [Products,setProducts] = useState()
  const [IsLoading, setIsLoading] = useState(false);
  useEffect(()=>{
    setIsLoading(true);
   axios.get('https://fakestoreapi.com/products/')
  },[])
  .then((res)=>{
    setProducts(res.data)
    setIsLoading(false);
  })
  .catch((error)=>{
    setIsLoading(false);
    console.log(error)})
  return (
    <>
      {IsLoading ? (
        <Loader />
      ) : (
        <section className="products_container">
          {Products?.map((singleProduct) => {
            return (
              <ProductCard product={singleProduct} key={singleProduct.id} />
            );
          })}
        </section>
      )}
    </>
  );
}

export default Product
