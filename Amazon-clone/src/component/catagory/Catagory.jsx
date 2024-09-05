import React from "react";
import { catagoryinfo } from "./catagoryinfo";
import CatagoryCard from "./CatagoryCard";
import './catagory.css'
function Catagory() {
  return (
    <div className="catagory_container">
      {catagoryinfo.map((infos) => (
        <CatagoryCard data={infos} />
      ))
      }
    </div>
  );
}

export default Catagory;
