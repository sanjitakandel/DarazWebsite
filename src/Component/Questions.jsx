import React from "react";
import { BsMenuButtonWide } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import "./question.css";

function Questions() {
  const [showDiv, setshowDiv] = useState(true);
  const handleToggle = () => {
    setshowDiv(!showDiv);
  };

  const [message, setMessage] = useState("Is this helpful for you?");
  const handleClick = () => {
    alert("Thankyou for your feedback.");
    setMessage("Thankyou for your feedback.");
  };

  const [review, setReview] = useState(false);
  const handleReject = () => {
    setReview(!review);
  };
  const [click, setClick] = useState(false);
  const [cancel, setCancel] = useState(true);
  const [tick, setTick] = useState(false);
  const [ticks, setTicks] = useState(false);
  const [ticke, setTicke] = useState(false);
  const [closeEye, setCloseeye]=useState(true)
  
  return (
    <div className="questionBody">
      <div>
        <header className="help-Header">
          <div className="help-Div">
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <img
                style={{ height: "7vh", width: "9vw", marginTop: "0.31rem" }}
                src="https://logos-world.net/wp-content/uploads/2022/05/Daraz-Logo.jpg"
                alt=""
              />
              <div
                style={{
                  height: "5vh",
                  width: "0.01vw",
                  backgroundColor: "rgba(69, 68, 68, 0.25)",
                  marginTop: "0.62rem",
                }}
              ></div>
              <span
                style={{
                  marginTop: "1.06rem",
                  fontSize: "1.12rem",
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

        <div
          style={{
            backgroundColor: " #cccccc00",
            height: "3vh",
          }}
        ></div>

        <BsMenuButtonWide onClick={handleToggle} className="Menu" />
      </div>

      <main
        style={{
          borderRadius: "0.93rem",
          height: "80vh",
          display: "flex",
          overflowX: "hidden",
        }}
        className="button-section"
      >
        {showDiv && (
          <div
            style={{
              width: "25vw",
            }}
          >
            <h6
              style={{
                marginLeft: "0.93rem",
                fontSize: "0.87rem",
                color: "rgba(0, 0, 255, 0.685)",
                marginTop: "0.31rem",
              }}
            >
              category
            </h6>

            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li>Getting Started </li>
              <li>Order Management</li>
              <li>Performance Enhancement</li>
              <li>Returns and Refunds</li>
              <li>Shipping and Delivery</li>
              <li>Seller-Buyer Communication</li>
              <li>Payments</li>
              <li>Announcement & Campagins</li>
              <li>Policies and Guidelines</li>
            </ul>
          </div>
        )}

        <div style={{ width: "34rem" }} className="orderMangement">
          <p className="Order">
            Order Mangement /<mark>FBD</mark>
          </p>
          <p className="Orderr">
            Order Management / <mark>FBD</mark>
          </p>

          <p
            style={{
              fontSize: "1rem",
              marginLeft: "2.81rem",
              marginTop: "1.25rem",
              fontWeight: "600",
            }}
          >
            What is FBD and how does it work?
          </p>

          <p
            style={{
              color: " rgb(5, 5, 5)",
              marginLeft: "2.81rem",
              marginTop: "0.93rem",
              fontSize: "0.81rem",
              lineHeight: "0.93rem",
              fontWeight: "400",
            }}
          >
            For sellers with limited or no storage capacity, daraz offers
            storage services at daraz fulfillment centers to ensure safe and
            secure reception and delivery of the seller's products. It also
            helps sellers avoid the unnecessary storage costs associated with
            their products.
          </p>
          {review && (
            <div className="dropDowns">
              <div className="subContain">
                <p
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                    WebkitTextStrokeColor: " #f7f6f5",
                    textShadow: "0px 0px 4px #6d6b69",
                    marginTop: "0.8rem",
                    marginLeft: "0.8rem",
                  }}
                >
                  What suggestions do you have for improvements?
                </p>
                <RxCross2
                  style={{ marginTop: "0.7rem", marginRight: "0.8rem" }}
                  onClick={() => {
                    setReview(false);
                    setClick(!click);
                  }}
                />
              </div>
              <div
                onClick={() => setTick(!tick)}
                className="subContains"
                style={{ marginTop: "2rem" }}
              >
                {tick ? "✔" : ""}
                <p
                  style={{
                    fontSize: "0.8rem",
                    marginTop: "5px",
                    marginLeft: "15px",
                  }}
                >
                  Article is fine but I need additional help
                </p>
              </div>
              <div
                onClick={() => setTicke(!ticke)}
                className="subContains"
                style={{ marginTop: "0.5rem" }}
              >
                {ticke ? "✔" : ""}
                <p
                  style={{
                    fontSize: "0.8rem",
                    marginTop: "5px",
                    marginLeft: "15px",
                  }}
                >
                  It is too lengthy
                </p>
              </div>
              <div
                className="subContains"
                onClick={() => setTicks(!ticks)}
                style={{ marginTop: "0.5rem" }}
              >
                {ticks ? "✔" : ""}
                <p
                  style={{
                    fontSize: "0.8rem",
                    marginTop: "5px",
                    marginLeft: "15px",
                  }}
                >
                  It is not relevant
                </p>
              </div>
              <div className="subContainss" style={{ marginTop: "0.5rem" }}>
                <input
                  placeholder="What suggestion do you have for improvements ?"
                  style={{
                    width: "19rem",
                    borderRadius: "0.5rem",
                    border: "1px solid",

                    height: "4rem",
                  }}
                  type="text"
                />
              </div>
              <span>
                <button
                  onClick={() => {
                    setReview(false);
                    setCancel(!cancel);
                  }}
                  style={{
                    marginLeft: "11rem",
                    width: "3rem",
                    marginTop: "1.8rem",
                    background: "rgba(2, 106, 252, 0.99)",
                    border: "1px solid rgba(2, 106, 252, 0.99)",
                    color: "white",
                    borderRadius: "0.2rem",
                  }}
                >
                  cancel
                </button>
                <button
                  style={{
                    marginLeft: "1rem",
                    width: "3rem",
                    background: "rgba(2, 106, 252, 0.99)",
                    border: "1px solid rgba(2, 106, 252, 0.99)",
                    color: "white",
                    borderRadius: "0.2rem",
                  }}
                >
                  submit
                </button>
              </span>
            </div>
          )}
          <div
            style={{
              height: "12vh",
              width: "39vw",
              marginLeft: "2.43rem",
              marginTop: "1.25rem",
              backgroundColor: " rgba(224, 215, 215, 0.16)",
              paddingTop: "0.62rem",
            }}
          >
            <p
              style={{
                textAlign: "center",
                fontSize: "0.75rem",
                color: "grey",
              }}
            >
              {message}
            </p>

            <button
              style={{
                marginLeft: "11rem",
                marginTop: "0.62rem",
                borderRadius: "4rem",
                border: " rgba(224, 215, 215, 0.16)",
                height: "1.5rem",
                width: "4rem",
              }}
              onClick={handleClick}
            >
              😁yes
            </button>

            <button
              style={{
                marginLeft: "0.4rem",
                borderRadius: "4rem",
                border: " rgba(224, 215, 215, 0.16)",
                height: "1.5rem",
                width: "4rem",
              }}
              onClick={handleReject}
            >
              😕No
            </button>
          </div>
        </div>
        <div
          style={{
            width: "0.1rem",
            // border: "0.06rem solid",
            height: "36.6vw",
            background: " rgba(53, 51, 51, 0.16)",
          }}
        ></div>
        {closeEye && (
          <div
            style={{
              width: "18rem",
              // border: "0.06rem solid",
              height: "36.6vw",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", gap: "8rem" }}>
              <p
                style={{
                  marginTop: "5rem",
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  marginLeft:"1rem",
                  WebkitTextStrokeColor: "white",
                  textShadow: "0px 0px 2px #6d6b69",
                }}
              >
                outline
              </p>
              <FaEyeSlash
                onClick={() => {
                  setCloseeye(!closeEye);
                }}
                style={{
                  marginTop: "5rem",
                  color: "rgb(11, 162, 244)",
                  fontSize: "0.8rem",
                }}
              />
              
            </div>
            <hr style={{marginBottom:"21.5rem",width:"12rem",marginLeft:"1rem"}} />
          </div>
        )}
        <FaEye
          onClick={() => {
            setCloseeye(true);
          }}
          style={{
            marginTop: "5rem",
            color: "rgb(11, 162, 244)",
            fontSize: "0.8rem",
          }}
        />
      </main>
    </div>
  );
}

export default Questions;
