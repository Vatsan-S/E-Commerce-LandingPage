import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaUser } from "react-icons/fa6";
import { resetData } from "../Redux/Slice/dataSlice";

const Navbar = ({ setShowLogin }) => {
  // ---------------states------------------------------------
  const [menu, setMenu] = useState("Home");
  const cartItems = useSelector((state) => state.cartItems);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  //   console.log(cartItems);
  const token = localStorage.getItem("authToken");
  // console.log("token", token);

  let count = 0;
  for (let key in cartItems) {
    if (cartItems[key] > 0) {
      count += cartItems[key];
    }
  }
  //   console.log(count)

  // -------------------------logout functionality-----------------------

  const logout = ()=>{
    dispatch(resetData())
    localStorage.removeItem('authToken')
    navigate('/')
  }
  return (
    <div className="navbar">
      <Link to="/">
        <h5 className="logo">
          Serene..<span>Soil</span>
        </h5>
      </Link>
      
      
    </div>
  );
};

export default Navbar;
