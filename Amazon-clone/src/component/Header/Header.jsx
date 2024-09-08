import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import './header.css'
import Lower_header from "../../component/Header/Lower_header";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header>
        <div className="header_left">
          <Link to="/">
            <img
              src=" https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
              className="amazon_icon"
            />
          </Link>
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
          <Link to="" className="flag_country">
            <span>
              <img
                src="https://www.shutterstock.com/shutterstock/photos/2477519645/display_1500/stock-vector-american-flag-usa-design-united-states-flag-rendered-usa-flag-the-usa-national-flag-2477519645.jpg"
                alt="flag"
                className="flag"
              />
            </span>
            <select name="" id="country">
              <option value="">EN</option>
            </select>
          </Link>
          <div className="last_right_corner">
            <Link to="/auth">
              <div className="sign-in">
                <p> Hello,sign in</p>
                <select className="lists">
                  <option value="">Account & Lists</option>
                </select>
              </div>
            </Link>
            <Link to="/orders">
              <div className="orders">
                <p>Returns</p>
                <span>& Orders</span>
              </div>
            </Link>
            <Link to="/cart" className="cart">
              <span>
                <PiShoppingCartSimpleBold />
              </span>

              <p>0</p>
            </Link>
            <p>Cart</p>
          </div>
        </div>
      </header>
       <Lower_header />
    </>
  );
}

export default Header;
