import React from "react";
import Header from "../../component/Header/Header";


import CarouselEffect from "../../carasouls/CarouselEffect";
import Catagory from "../../component/catagory/Catagory";
import Layout from "../../component/Layout/Layout";
function Home() {
  return (
    <Layout>
     
    
      <CarouselEffect />
      <Catagory />
    </Layout>
  );
}

export default Home;
