import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import './header.css';

function Header() {
  return (
    <>
      <header>
        <div className="header_left">
          <a href="">
            <img
              src=" https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
              className="amazon_icon"
            />
          </a>
          <div className="description">
            <span className="map_icon">
              <FaMapMarkerAlt />
            </span>
            <div className="map_description">
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
        <div className="header_middle">
          <select name="" id="drop">
            <option value="">All</option>
          </select>

          <input type="text" placeholder="Search Amazon" className="search" />
          
            <IoSearch size={25}/>
          
        </div>
        <div className="header_right">
          <a href="" className="flag_country">
            <span>
              <img
                src="https://www.shutterstock.com/shutterstock/photos/2477519645/display_1500/stock-vector-american-flag-usa-design-united-states-flag-rendered-usa-flag-the-usa-national-flag-2477519645.jpg"
                alt=""
                className="flag"
              />
            </span>
            <select name="" id="country">
              <option value="">EN</option>
            </select>
          </a>
          <div className="last_right_corner">
            <a href="">
              <div className="sign-in">
                <p> Hello,sign in</p>
                <select className="lists">
                  <option value="">Account & Lists</option>
                </select>
              </div>
            </a>
            <a href="">
              <div className="orders">
                <p>Returns</p>
                <span>& Orders</span>
              </div>
            </a>
            <a href="" className="cart">
              <span>
                <PiShoppingCartSimpleBold />
              </span>

              <p>0</p>
            </a>
            <p>Cart</p>
          </div>
        </div>
      </header>
      
    </>
  );
}

export default Header;
