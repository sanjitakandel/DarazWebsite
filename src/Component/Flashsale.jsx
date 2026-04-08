import React, { useState } from "react";
import NavBar from "../Navbar/NavBar";
import "./flashSale.css"
import { FaAngleDown } from "react-icons/fa";
function Flashsale() {
  const[open,setOpen] = useState(false)
  return (
    <div>
      <NavBar />
     
    </div>
  );
}

export default Flashsale;
