import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function NavBar() {
  const [open, setOpen] = useState(false);
  const[openQr,setopenQr]=useState(false);
  const [showLogin, setShowLogin] = useState(false);
 
  return (
    <div className="container">
      <div className="div">
        <nav className="Nav-Bar">
          <Link to="/"></Link>
          <div className="Down">
            <a
              onClick={() => {
                setopenQr(!openQr);
              }}
            >
              SAVE MORE ON APP
            </a>
            {openQr && (
              <div className="Down-Drop">
                <p
                  style={{
                    fontSize: "0.8rem",
                    marginLeft: "2rem",
                    marginTop: "1rem",
                  }}
                >
                  Download the App
                </p>
                <img
                  style={{ marginLeft: "1.6rem", marginTop: "1rem" }}
                  src="https://gw.alicdn.com/imgextra/i2/O1CN01da6D0K1Khogk708ZP_!!6000000001196-0-tps-150-150.jpg"
                  alt=""
                />
                <a href="https://apps.apple.com/us/app/daraz-online-shopping-app/id978058048"></a>
              </div>
            )}
          </div>
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
              <ul className="dropdown">
                <li>Help center </li>
                <li>Contact Customer Care</li>
                <li>Shipping & Delivery</li>
                <li>Payment</li>
                <li>Order</li>
              </ul>
            )}
          </div>

          <a onClick={() => setShowLogin(true)}>LOGIN</a>
          {showLogin && (
            <div className="modal-overlay">
              <div className="modal-box">
                <span className="close" onClick={() => setShowLogin(false)}>
                  ✖
                </span>

                <h2>Password | Phone Number</h2>

                <input type="text" placeholder="Email / Phone" required />
                <input type="password" placeholder="Password" required />

                <button>LOGIN</button>
              </div>
            </div>
          )}
          <a>SIGN UP</a>
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
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
