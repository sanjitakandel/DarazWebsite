import React from "react";
import NavBar from "../Navbar/NavBar";
import "./Help.css";
function HelpAndSupport() {
  return (
    <div className="body">
      <header className="help-Header">
        <div className="help-Div">
          <div style={{ display: "flex", gap: "8px" }}>
            <img
              style={{ height: "7vh", width: "10vw", marginTop: "5px" }}
              src="https://logos-world.net/wp-content/uploads/2022/05/Daraz-Logo.jpg"
              alt=""
            />
            <div
              style={{
                height: "5vh",
                width: "0.01vw",
                backgroundColor: "rgba(69, 68, 68, 0.25)",
                marginTop: "10px",
              }}
            ></div>
            <span
              style={{
                marginTop: "17px",
                fontSize: "20px",
              }}
            >
              Seller Help Center
            </span>
          </div>
          <input className="inpot_search" type="text" placeholder="Search" />
          <span className="Span">Homepage</span>
          <span className="FAQ">FAQ</span>
        </div> 
      </header>
      <div style={{ backgroundColor: " #ccc" }}></div>
    </div>
  );
}

export default HelpAndSupport;
