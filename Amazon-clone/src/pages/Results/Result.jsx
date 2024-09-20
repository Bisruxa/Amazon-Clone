import React, { useEffect, useState } from "react";
import Layout from "../../component/Layout/Layout";
import "./result.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductUrl from "../../Api/productUrl";
import ProductCard from "../../component/product/ProductCard";
import Loader from "../../component/loader/Loader";
function Result() {
  const { categoryName } = useParams();
  const [results, setResults] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  //   useEffect(()=>{
  // axios.get(`${ProductUrl}/produts/catagory/${catagoryName}`)
  //  .then((res)=>{
  //  setResults(res.data)
  //  })
  //  .catch((error)=>{
  //   console.log(`error:${error}`);
  //  })
  //   },[])
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${ProductUrl}/products/category/${categoryName}`)
      .then((res) => {
        setIsLoading(false);
        // Log response to check structure
        // console.log(res.data);
        // Ensure res.data is an array
        setResults(Array.isArray(res.data) ? res.data : []);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(`error: ${error}`);
        // Optionally, setResults([]) or handle error state
      });
  }, [categoryName]);

  return (
    <>
      {IsLoading ? (
        <Loader />
      ) : (
        <Layout>
          <section>
            <h1 style={{ padding: "30px" }}>Results</h1>
            <p style={{ padding: "30px" }}>Category/{categoryName}</p>
            <hr />
            <div className="products_container">
              {results?.map((product) => (
                <ProductCard key={product.id} product={product} 
                renderDesc={false}
                renderAdd={true}/>
              ))}
            </div>
          </section>
        </Layout>
      )}
    </>
  );
}

export default Result;
