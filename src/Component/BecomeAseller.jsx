import React, { useState } from "react";
import NavBar from "../Navbar/NavBar";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import "./become.css";
import { useRef } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import { Link } from "react-router-dom";
import Button, { Images, Para, Paragraphs } from "./button";
function BecomeAseller() {
  const navigate = useNavigate();
  const otpRef = useRef(null);

  const ScrolltoTop = () => {
    otpRef.current.scrollIntoView({ behavior: "smooth", top: 0 });
  };

  const slides = [
    {
      image:
        "https://img.lazcdn.com/us/lago_cms/d7511f0cf4f41dab82d14647773e9087.jpg",
      text: "If you are a woman, and you have that passion and drive, you can achieve anything in life, says Rajani Thapa, the owner of Creative Touch Pasal. Rajani has been able to expand her business to the entire local market through Daraz, She got her training from Daraz University and is now a successful seller on Daraz.",
    },
    {
      image:
        "https://img.lazcdn.com/us/lago_cms/1f75a5aeec117d3b56b5434f88cfb1ad.jpg",
      text: "Mr. Sanjay Amatya, owner of Alina Garments Pvt. Ltd. shares his remarkable experience of working with us. Established in 2041 BS, his factory has been exporting to the international market for 30 years. Due to the various obstacle, he has to close down his business. However, in 2016, Mr Amatya re-started his business by going online with Daraz and then there is no looking back. His sales have soared to fivefold and his business has reached new heights. Mr Amatya is planning to grow his business even more with Daraz providing a variety of products, design, timely delivery and better quality.",
    },
  ];
  const [index, setIndex] = useState(0);
  const nextImage = () => {
    setIndex((index + 1) % slides.length);
  };
  const PrevImage = () => {
    setIndex((index - 1 + slides.length) % slides.length);
  };
  return (
    <>
      <div className="sellerContainer">
        <div className="imageCOntainer">
          <img
            src="https://img.alicdn.com/imgextra/i3/O1CN01ovcTAV1WBY7oOmozh_!!6000000002750-55-tps-323-127.svg"
            alt=""
          />
        </div>
        <div className="optionsCOntainer">
          <select name="Country" id="">
            <option value="np">Nepal</option>
          </select>
          <select name="language" id="">
            <option value="en">English</option>
            <option value="np">Nepali</option>
          </select>
        </div>
      </div>
      <header>
        <div className="backgroundimage-section">
          <div className="Small-container">
            <Button button="Need Help" />
          </div>
          <div className="words-Container" ref={otpRef}>
            <h1 className="heading">
              <span>
                GROW YOUR
                <br />
                BUSINESS
                <br />
                WITH US!
              </span>
            </h1>
          </div>
          <div className="Number-Container">
            <Para
              headings="50"
              text="Monthly active users 
            on Daraz"
            />

            <Para headings="22" text="Live Products Accross 5 Countries" />
            <Para headings="0" text="FSM Commission for 30 days" />
          </div>
          <div className="otp-container">fdf</div>
        </div>
      </header>
      <div>
        <h1 className="newheading">New Seller Benefits</h1>
        <div className="seller-benefits">
          <div className="sellercontaner">
            <Images
              imagess="https://img.lazcdn.com/us/lago_cms/c02eb317011b99c1dd0dcc47a1de58ee.png"
              text="0% FSM Fee"
              paragraph="0% FSM fee for 30 Days"
            />
            <Images
              imagess="https://img.lazcdn.com/us/lago_cms/7ced5294cb8472ed352dec935ca83a3c.png"
              text="Free Shipping"
              paragraph="Offer Free Shipping via programs like FSM"
            />
            <Images
              imagess="https://img.lazcdn.com/us/lago_cms/08dee97d5a93adfbdd6f45677e4e8fa2.png"
              text="Nationwide Reach"
              paragraph="Deliver your product anywhere in the country
"
            />
            <Images
              imagess="https://img.lazcdn.com/us/lago_cms/f7883b17f47ffc883992d81ff2d00cb7.png"
              text="Dedicated Support & Training"
              paragraph="Incubation specialist support for 90 days"
            />
            <Images
              imagess="https://img.lazcdn.com/us/lago_cms/5b840c175d15fdc7af3b750be36b8f1b.png"
              text="Marketing Tools"
              paragraph="Create Product Ads to increase visibility in search results"
            />
            <Images
              imagess="https://img.lazcdn.com/us/lago_cms/9caba27e8a188d6a3ca84eb81e7eb994.png"
              text="Timely Payments"
              paragraph="Weekly payment cycles"
            />
          </div>
        </div>
      </div>
      <div className=" Medium-COntainer">
        <h2 className="h2headingg">Steps to Start Selling </h2>
        <div className="Containers">
          <div className="container1">
            <Paragraphs
              Text="Sign up now to be a Daraz Seller! Daraz offers good opportunity
             and support for you to dive into the market and grow your customer base with
              ease. As a Daraz Seller, you will get access to various
               resourses to helo you drive your business on our platform."
              buttons="Sign Up Now"
              onClick={ScrolltoTop}
            />
          </div>
          <div className="container2">
            <details close>
              <summary>1. Sign up with a phone number</summary>
              <div className="content">
                If you have an existing seller center account, you can log in
                directly to continue onboarding.
              </div>
            </details>
            <details close>
              <summary>2. Fill in contact email & address details</summary>
              <div class="content">
                Fill in your contact email to receive important updates from us.
                Ensure pickup and return warehouse addresses are keyed in
                accurately for a smooth delivery process
              </div>
            </details>
            <details close>
              <summary>3. Submit ID and Bank Account details</summary>
              <div class="content">
                For account verification, the following documents are required.
                Individual Sellers - Identity Card and Bank document Corporate
              </div>
            </details>
            <details close>
              <summary>4. Upload products and get orders!</summary>
              <div class="content">
                Highly recommend for you to upload at least 10 products to sell!
                The more assortment you have, the better it will be for
                customer's shopping experience!
              </div>
            </details>
          </div>
        </div>
        <button className="signin" onClick={ScrolltoTop}>
          SIGN UP
        </button>
      </div>
      <main className="MainSection">
        <div className="sellers-story">
          <p className="main-Div">Seller's Story</p>

          <div className="Logic">
            <button className="prevCick" onClick={PrevImage}>
              <MdKeyboardArrowLeft />
            </button>
            <div className="Logic1">
              <img src={slides[index].image} alt="" />

              <p className="slideText">{slides[index].text}</p>
            </div>
            <button className="prevCickk" onClick={nextImage}>
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
      </main>
      <section>
        <div className="Sellers-Program">
          <h2 className="text">Seller's Program</h2>
          <div className="Sell">
            <div className="sell1">
              <div className="sellImage">
                <img
                  src="https://img.lazcdn.com/us/lago_cms/f33c2270aa8b7b80adef56993aa24e53.png"
                  height="40"
                />
                <button>
                  <Link to="/">
                    <MdKeyboardArrowRight />
                  </Link>
                </button>
              </div>
              <p className="para1">
                offers consumers the widest assortment of goods from local
                sellers
              </p>
              <div className="Details">
                <span
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "5px",
                  }}
                >
                  <CiCircleCheck className="tick" />
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#3c3c3c",
                    }}
                  >
                    You are based locally
                  </p>
                </span>
                <span
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "5px",
                    marginTop: "15px",
                  }}
                >
                  <CiCircleCheck className="tick" />
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#3c3c3c",
                    }}
                  >
                    Access to wide array of seller tools
                  </p>
                </span>
                <span
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "5px",
                    marginTop: "15px",
                  }}
                >
                  <CiCircleCheck className="tick" />
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#070707",
                    }}
                  >
                    0% FSM commission for 30 days
                  </p>
                </span>
              </div>
              <button
                className="Find"
                style={{
                  height: "6vh",
                  width: "8vw",
                  position: "relative",
                  marginLeft: "22px",
                  borderRadius: "8px",
                  marginTop: "15px",
                  backgroundColor: "#fc5d08",
                  color: "white",
                  fontSize: "14px",
                  border: "1px solid #d94b00",
                }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                  to="/"
                >
                  Sign Up Now
                </Link>
              </button>
            </div>
            <div className="sell1">
              <div className="sellImage">
                <img
                  src="https://img.lazcdn.com/us/lago_cms/00d90e53a6f2655d8e53bd7f5d300e75.png"
                  height="40"
                />
              </div>
              <p className="para1">
                A curated channel that offers international and local brands
                bacjed by a 100% authentility promise and superios shopping
                experience
              </p>
              <div className="Details">
                <span
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "5px",
                  }}
                >
                  <CiCircleCheck className="tick" />
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#3c3c3c",
                    }}
                  >
                    You are a brand owner or autherized seller
                  </p>
                </span>
                <span
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "5px",
                    marginTop: "15px",
                  }}
                >
                  <CiCircleCheck className="tick" />
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#3c3c3c",
                    }}
                  >
                    Benefit from higher overall search rankings
                  </p>
                </span>
                <span
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "5px",
                    marginTop: "15px",
                  }}
                >
                  <CiCircleCheck className="tick" />
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#070707",
                    }}
                  >
                    Seperate visibility of Daraz buyer app
                  </p>
                </span>
              </div>
              <button
                className="Find"
                onClick={ScrolltoTop}
                style={{
                  height: "6vh",
                  width: "8vw",
                  position: "relative",
                  marginLeft: "22px",
                  borderRadius: "8px",
                  marginTop: "15px",
                  backgroundColor: "#fc5d08",
                  color: "white",
                  fontSize: "14px",
                  border: "1px solid #d94b00",
                }}
              >
                Find Out More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="Section">
        <div className="Sectionn">
          <h2 className="headinG">Seller's Support</h2>
          <div className="Flex">
            <div className="flex1">
              <span>
                <img
                  style={{
                    objectFit: "contain",
                    height: "6.5vh",
                    marginTop: "25px",
                    marginLeft: "18px",
                  }}
                  src="https://img.lazcdn.com/us/lago_cms/c33f267b8993cbe3823a2324ca6a51bf.png"
                  alt=""
                />
              </span>
              <p
                style={{
                  fontSize: "12px",
                  color: "#3c3c3c",
                  marginTop: "10px",
                  marginLeft: "16px",
                }}
              >
                Free onboarding video course which will teach you the essential
                e-commerce knowledge in content,operations,order fulfilment and
                policies
              </p>
            </div>
            <div className="flex1">
              <span>
                <img
                  style={{
                    objectFit: "contain",
                    height: "6.5vh",
                    marginTop: "25px",
                    marginLeft: "18px",
                  }}
                  src="https://img.lazcdn.com/us/lago_cms/1892d5b126489665accad95204ef7ffe.png"
                  alt=""
                />
              </span>
              <p
                style={{
                  fontSize: "12px",
                  color: "#3c3c3c",
                  marginTop: "10px",
                  marginLeft: "16px",
                }}
              >
                Go to hub where sellers gather to elevate their e-commerce
                business. Connect with thousands of like-minded & supportive
                sellers to engagein discussion and share insights
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="faq">
        <div className="section-div">
          <h1
            style={{
              marginTop: "70px",
              marginLeft: "105px",
              lineHeight: "130px",
              letterSpacing: "1px",
              fontStyle: "normal",
            }}
          >
            FAQ
          </h1>
          <div className="dropdown">
            <details className="detailsFaq" close>
              <summary className="summaryFaq">How can i sell on Daraz?</summary>
              <p
                style={{
                  marginTop: "10px",
                  color: "#3c3c3c",
                  fontSize: "15px",
                }}
              >
                To start selling on Daraz, visit the Daraz Seller Center and
                create a new account using your phone number. Complete the
                sign-up process by verifying your email, adding your pickup
                address, and uploading the required documents for verification.
                Once your store is approved, add your first product, and you're
                ready to sell! You can also customize your store by adding your
                logo, cover, and banners through the Store Builder tool
              </p>
            </details>
            <details className="detailsFaq" close>
              <summary className="summaryFaq">
                What categories can i sell on Daraz?
              </summary>
              <p
                style={{
                  marginTop: "10px",
                  color: "#3c3c3c",
                  fontSize: "15px",
                }}
              >
                With multiple categories on Daraz—ranging from fashion,
                lifestyle, digital goods, FMCG, and lifestyle—you’ll find the
                perfect fit for your products. However, it's essential to avoid
                listing counterfeit, dangerous, or prohibited items and those
                restricted by law or cultural norms
              </p>
            </details>
            <details className="detailsFaq" close>
              <summary className="summaryFaq">
                How much commission does Daraz charge?
              </summary>
              <p
                style={{
                  marginTop: "10px",
                  color: "#3c3c3c",
                  fontSize: "15px",
                }}
              >
                Opening a shop on Daraz is free! However, a small commission is
                deducted from each order's payment, with rates varying based on
                the product category
              </p>
            </details>
            <details className="detailsFaq" close>
              <summary className="summaryFaq">
                What is the payment policy for Daraz?
              </summary>
              <p
                style={{
                  marginTop: "10px",
                  color: "#3c3c3c",
                  fontSize: "15px",
                }}
              >
                Seller payments are based on orders marked as 'Delivered' to the
                customer in the Seller Center. Payments for delivered products
                are settled weekly. In case public holidays/weekends fall upon
                these dates, the payment date will be released on the first
                upcoming business day. You can explore Daraz's detailed Payment
                Policy and find answers to frequently asked questions
              </p>
            </details>
          </div>
          <button className="fqabutton" onClick={() => navigate("/support")}>
            Need More help
          </button>
        </div>
      </section>
      <footer className="footer-Section">
        <div className="footer-Div">
          <div>
            {" "}
            <p
              style={{
                fontSize: "25px",
                fontWeight: "700",
                color: "white",
                marginTop: "45px",
                marginLeft: "85px",
              }}
            >
              What are you waiting for? Start <br /> selling with Daraz today.
            </p>
          </div>
          <div>
            <button
              onClick={ScrolltoTop}
              style={{
                height: "6vh",
                width: "10vw",
                position: "relative",
                marginTop: "60px",
                borderRadius: "5px",
                border: "1px solid white",
                color: "white",
                background: "#d94b00",
                fontSize: "12px",
              }}
            >
              GET STARTED
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default BecomeAseller;
