import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <div className="div">
        <nav className="Nav-Bar">
          <Link to="/"></Link>
          <a> SAVE MORE ON APP</a>
          <Link to="/seller">BECOME A SELLER</Link>
          <div className="dropdown-container">
            <a
              onClick={(e) => {
                e.preventDefault();
                setOpen(!open);
              }}
            >
              HELP & SUPPORT
            </a>
            {open && (
              <ul
                className="dropdown"
               
              >
                <li >Help center </li>
                <li>Contact Customer Care</li>
                <li>Shipping & Delivery</li>
                <li>Payment</li>
                <li>Order</li>
              </ul>
            )}
          </div>

          <Link to="/login">LOGIN</Link>
          <Link to="/signup">SIGN UP</Link>
        </nav>
      </div>

      <div className="subchild">
        <div className="div1">
          <img
            src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png"
            alt=""
          />
        </div>
        <div className="div2">
          <input type="text" placeholder="search in Daraz" />
        </div>
        <div className="div3">
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
