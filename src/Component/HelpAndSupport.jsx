import React, { useState } from "react";
import NavBar from "../Navbar/NavBar";
import "./Help.css";
import { BsMenuButtonWide } from "react-icons/bs";
function HelpAndSupport() {
  const [showDiv, setshowDiv] = useState(false);
  const handleToggle = () => {
    setshowDiv(!showDiv);
  };
  return (
    <div className="body">
      <header className="help-Header">
        <div className="help-Div">
          <div style={{ display: "flex", gap: "8px" }}>
            <img
              style={{ height: "7vh", width: "9vw", marginTop: "5px" }}
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
                fontSize: "18px",
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
          // border: "1px solid black",
          height: "3vh",
        }}
      ></div>
      <BsMenuButtonWide onClick={handleToggle} className="Menu" />
      <main className="button-section">
        {showDiv && (
          <div
            style={{
              height: "100vh",

              width: "25vw",
            }}
          >
            <h6
              style={{
                marginLeft: "15px",
                fontSize: "14px",
                color: "rgba(0, 0, 255, 0.685)",
                marginTop: "5px",
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
        <div>
          <p
            style={{
              marginLeft: "15px",
              fontSize: "14px",
              color: "black",
              marginTop: "5px",
            }}
          >
            category
          </p>
          <br />
          <p
            style={{
              marginLeft: "15px",
              fontSize: "14px",
              color: "black",
              marginTop: "5px",
            }}
          >
            Getting Started
          </p>
          <ul className="UL">
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              How does Store Builder work?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              What is the procedure to Photoshoot ?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              What rewards will I earn by completing the New Seller Challenges?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              What are the Product upload guidelines ?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              Where do I have to drop my orders?
            </li>
          </ul>
          <p
            style={{
              marginLeft: "15px",
              fontSize: "14px",
              color: "black",
              marginTop: "55px",
            }}
          >
            Performance Enhancement
          </p>
          <ul className="UL">
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              What are the Benefits of Adhering to the Product Quality Policy?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              What is the Product Quality Policy?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              How can you be a part of DarazMall and avail these amazing and
              exciting benefits?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              Why my product is in policy violation tab ?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              How will Seller Vouchers work?
            </li>
          </ul>
          <p
            style={{
              marginLeft: "15px",
              fontSize: "14px",
              color: "black",
              marginTop: "55px",
            }}
          >
            Shipping and Delivery
          </p>
          <ul className="UL">
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              How to change my warehouse address?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              What are the Shipping fees guidelines?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              Where can I check the Shipping Cost Details / Rate Card?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              What is Shipping Fee (Charged by Daraz) and Shipping Fee (Paid by
              Customer)?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              How will I get a shipping provider?
            </li>
          </ul>
          <p
            style={{
              marginLeft: "15px",
              fontSize: "14px",
              color: "black",
              marginTop: "55px",
            }}
          >
            Payments
          </p>
          <ul className="UL">
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              How to check Account statement for DAS ?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              How do I view discounts in my account statement?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              What is the commission percentage for different categories?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              What should I do if I don't receive my payment on the expected
              day?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              What is the payment policy of Daraz?
            </li>
          </ul>
          <p
            style={{
              marginLeft: "15px",
              fontSize: "14px",
              color: "black",
              marginTop: "55px",
            }}
          >
            Policies and Guidelines
          </p>
          <ul className="UL">
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              What are the major eligibility criteria for DARAZ NMB Sajilo
              Karja?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              What is Daraz NMB SAJILO KARJA?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              How will it help DARAZ sellers?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              What does Seller Scorecard Policy monitor?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              What is the criteria for Extreme Poor Performance?
            </li>
          </ul>
        </div>
        <div>
          <p
            style={{
              marginLeft: "15px",
              fontSize: "14px",
              color: "black",
              marginTop: "5px",
            }}
          ></p>
          <br />
          <p
            style={{
              marginLeft: "15px",
              fontSize: "14px",
              color: "black",
              marginTop: "5px",
            }}
          >
            Order Management
          </p>
          <ul className="UL">
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              What is FBD and how does it work?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              What will happen if I cancel my orders due to any reason?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              What do “ready to ship” and “shipped” mean?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              How to increase an order limit?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              What are the benefits of Seller Scheduling Tool?
            </li>
          </ul>
          <p
            style={{
              marginLeft: "15px",
              fontSize: "14px",
              color: "black",
              marginTop: "55px",
            }}
          >
            Returns and Refunds
          </p>
          <ul className="UL">
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              Where Can I Submit A Claim From?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              What do I do when an item is returned?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              What is the seller claims policy?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              What is the timeline for submitting a Claim?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              How do I track my return orders?
            </li>
          </ul>
          <p
            style={{
              marginLeft: "15px",
              fontSize: "14px",
              color: "black",
              marginTop: "55px",
            }}
          >
            Seller-Buyer Communication
          </p>
          <ul className="UL">
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              What is expected from you while answering customers questions?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              What do I do when an item is returned?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              What are the IM Chat Policies?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              How to access settings on whatsapp If you are unable to receive
              the messages?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              Where can I see the questions asked by the Customers?
            </li>
          </ul>
          <p
            style={{
              marginLeft: "15px",
              fontSize: "14px",
              color: "black",
              marginTop: "55px",
            }}
          >
            Announcements & Campaigns
          </p>
          <ul className="UL">
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              What is 3.3 campaign?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              How much commission will be charged and how can it be calculated?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              Who is eligible to join the campaign Voucher Max Program?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              What other promotions can Voucher Max vouchers be stacked with?
            </li>
            <li
              style={{
                fontSize: "13px",
                marginLeft: "25px",
                listStyle: "unset",
              }}
            >
              How to Check Ongoing Campaigns ?
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default HelpAndSupport;
