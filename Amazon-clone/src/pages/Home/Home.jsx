import React from "react";
import Header from "../../component/Header/Header";


import CarouselEffect from "../../carasouls/CarouselEffect";
import Catagory from "../../component/catagory/Catagory";
import Layout from "../../component/Layout/Layout";

import Product from '../../component/product/Product'
function Home() {
  return (
    <Layout>
     
    
      <CarouselEffect />
      <Catagory />
     
      <Product/>
    </Layout>
  );
}

export default Home;
