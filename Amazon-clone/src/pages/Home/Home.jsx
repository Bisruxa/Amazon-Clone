import React from "react";
import Header from "../../component/Header/Header";
import Lower_header from "../../component/Header/Lower_header";

import CarouselEffect from "../../carasouls/CarouselEffect";
import Catagory from "../../component/catagory/Catagory";
import Layout from "../../component/Layout/Layout";
function Home() {
  return (
    <Layout>
     
      <Lower_header />
      <CarouselEffect />
      <Catagory />
    </Layout>
  );
}

export default Home;
