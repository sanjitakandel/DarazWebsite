import React, { useState } from "react";
import NavBar from "../Navbar/NavBar";
import { useEffect } from "react";
import "./flashSale.css";
import axios from "axios";
import { FaAngleDown } from "react-icons/fa";
function Flashsale() {
  const [show, setShow] = useState([]);
  const [category, setCategory] = useState("all");
  const[visibleImage,setVisibleImage]=useState(30)

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=0")

      .then((response) => {
        setShow(response.data.products);
      })
      .catch((error) => {
        console.error("error fetching posts", error);
      });
  }, []);
  const filterCategory =
    category === "all"
      ? show
      : show.filter((item) => item.category === category);
      const loadMore = ()=>{
        setVisibleImage((prev)=>prev+10)
      }

  return (
    <div>
      <NavBar />
      <header>
        <h1
          style={{
            fontSize: "1.1rem",
            marginLeft: "5rem",
            marginTop: "0.5rem",
          }}
        >
          categories
        </h1>
        <select
          style={{ marginLeft: "5rem" }}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
          <option value="sports-accessories">Sports-accessories</option>
        </select>
      </header>
      <section>
        <div className="Apicategories">
          {filterCategory.length > 0 ? (
            filterCategory.slice(0, visibleImage).map((photos) => (
              <div key={photos.id} className="image_Containers">
                <img className="apiImage" src={photos.images[0]} alt="" />

                <h5>{photos.title}</h5>
                <br />
                <p>Category : {photos.category}</p>
                <b> Price : ${photos.price}</b>
              </div>
            ))
          ) : (
            <p>no found</p>
          )}
        </div>
        <button
          style={{
            background: "#ff4d00",
            border: " 1px solid #ff4d00",
            position: "relative",
            width: "5rem",
            marginLeft: "33rem",
            marginTop: "1rem",
            height: "2rem",
              borderRadius:"0.5rem",
              color:"white"
          }}
          onClick={loadMore}
        >
          Load more
        </button>
      </section>
      <section className="SectionLinks">
        <div style={{ marginLeft: "3rem" }}>
          <p
            style={{
              fontSize: "0.8rem",
              marginLeft: "3rem",
              marginTop: "1.5rem",
              color: "#042662",
              fontWeight: "bold",
            }}
          >
            Customer Care
          </p>

          <a
            style={{
              fontSize: "0.6rem",
              textDecoration: "none",
              marginLeft: "3rem",
              fontWeight: "500",

              color: "#042662",
            }}
            href="https://buyer-helpcenter.daraz.com.np/s/page?spm=a2a0e.tm80331706.footer_top.1.79b75aa7Xxz5Sw"
          >
            Help Center
          </a>
          <br />
          <a
            style={{
              fontSize: "0.6rem",
              textDecoration: "none",
              marginLeft: "3rem",
              color: "#042662",
              fontWeight: "500",
            }}
            href="https://buyer-helpcenter.daraz.com.np/s/page/knowledge?m_station=page&categoryId=1000001262&questionId=1000016432&spm=a2a0e.tm80331706.footer_top.2.79b75aa7yHE7Fh&language=en&pageId=13&category=1000001262&scm=1003.4.icms-zebra-100024112-6851846.OTHER_6502336526_7708225&knowledge=1000016432"
          >
            How to Buy
          </a>
          <br />
          <a
            style={{
              fontSize: "0.6rem",
              textDecoration: "none",
              marginLeft: "3rem",
              fontWeight: "500",
              color: "#042662",
            }}
            href="https://pages.daraz.com.np/wow/gcp/route/daraz/np/upr/router?spm=a2a0e.tm80331706.footer_top.3.79b75aa7pJ5ASu&hybrid=1&data_prefetch=true&prefetch_replace=1&at_iframe=1&wh_pid=/lazada/channel/np/long-term/return-policy"
          >
            Return & Refunds
          </a>
          <br />
          <a
            style={{
              fontSize: "0.6rem",
              textDecoration: "none",
              marginLeft: "3rem",
              fontWeight: "500",
              color: "#042662",
            }}
            href="https://www.daraz.com.np/contact-us/?spm=a2a0e.tm80331706.footer_top.4.79b75aa7tY9qWz&scm=1003.4.icms-zebra-100024112-6851846.OTHER_6502336528_7708225"
          >
            Contact Us
          </a>
        </div>
        <div>
          <p
            style={{
              fontSize: "0.8rem",

              marginTop: "1.5rem",
              color: "#042662",
              fontWeight: "bold",
            }}
          >
            Daraz
          </p>
          <a
            style={{
              fontSize: "0.6rem",
              textDecoration: "none",

              fontWeight: "500",
              color: "#042662",
            }}
            href="https://pages.daraz.com.np/wow/i/np/about-us/about-us?spm=a2a0e.tm80331706.footer_top.5.3ac45aa7wZerky&hybrid=1&scm=1003.4.icms-zebra-100024112-2954385.OTHER_5486967089_2597685"
          >
            About Daraz
          </a>
          <br />
          <a
            style={{
              fontSize: "0.6rem",
              textDecoration: "none",

              fontWeight: "500",
              color: "#042662",
            }}
            href="https://careers.daraz.com/?lang=en&spm=a2a0e.tm80331706.footer_top.6.3ac45aa7dp1sp0"
          >
            Carrers
          </a>
          <br />
          <a
            style={{
              fontSize: "0.6rem",
              textDecoration: "none",

              fontWeight: "500",
              color: "#042662",
            }}
            href=""
          >
            Daraz Blog
          </a>
          <br />
          <a
            style={{
              fontSize: "0.6rem",
              textDecoration: "none",

              fontWeight: "500",
              color: "#042662",
            }}
            href="https://pages.daraz.com.np/wow/gcp/route/daraz/np/upr/router?spm=a2a0e.tm80331706.footer_top.8.3ac45aa7FrIvcY&pha=true&hybrid=1&data_prefetch=true&prefetch_replace=1&at_iframe=1&wh_pid=/lazada/channel/np/long-term/tnc"
          >
            Terms & Conditions
          </a>
          <br />
          <a
            style={{
              fontSize: "0.6rem",
              textDecoration: "none",

              fontWeight: "500",
              color: "#042662",
            }}
            href="https://pages.daraz.com.np/wow/gcp/route/daraz/np/upr/router?spm=a2a0e.tm80331706.footer_top.9.3ac45aa7hLcjNA&hybrid=1&data_prefetch=true&prefetch_replace=1&at_iframe=1&wh_pid=/lazada/channel/np/long-term/privacy-policy"
          >
            Privacy Ploicy
          </a>
          <br />
          <a
            style={{
              fontSize: "0.6rem",
              textDecoration: "none",

              fontWeight: "500",
              color: "#042662",
            }}
            href="https://pages.daraz.com.np/wow/gcp/daraz/channel/np/lp/payment-made-effortless?spm=a2a0e.tm80331706.footer_top.10.3ac45aa7OE3lyI&scm=1003.4.icms-zebra-100024112-2954385.OTHER_5903577388_2597685"
          >
            Digital Payements
          </a>
          <br />
          <a
            style={{
              fontSize: "0.6rem",
              textDecoration: "none",

              fontWeight: "500",
              color: "#042662",
            }}
            href="https://www.daraz.com.np/wow/i/np/help-pages/daraz-customer-univeristy?spm=a2a0e.tm80331706.footer_top.11.3ac45aa7fNnwFd&hybrid=1&scm=1003.4.icms-zebra-100024112-2954385.OTHER_5996325366_2597685"
          >
            Daraz Customer University
          </a>
          <br />
          <a
            style={{
              fontSize: "0.6rem",
              textDecoration: "none",

              fontWeight: "500",
              color: "#042662",
            }}
            href="https://pages.daraz.com.np/wow/i/np/about-us/about-us?spm=a2a0e.tm80331706.footer_top.5.3ac45aa7wZerky&hybrid=1&scm=1003.4.icms-zebra-100024112-2954385.OTHER_5486967089_2597685"
          >
            Daraz Affiliate Program
          </a>{" "}
          <br />
          <a
            style={{
              fontSize: "0.6rem",
              textDecoration: "none",

              fontWeight: "500",
              color: "#042662",
            }}
            href="https://pages.daraz.com.np/wow/gcp/daraz/channel/np/review/review?spm=a2a0e.tm80331706.footer_top.13.3ac45aa7s7lTiN&scm=1003.4.icms-zebra-100024112-2954385.OTHER_6502350863_2597685"
          >
            Review & Win
          </a>
          <br />{" "}
          <a
            style={{
              fontSize: "0.6rem",
              textDecoration: "none",

              fontWeight: "500",
              color: "#042662",
            }}
            href="https://pages.daraz.com.np/wow/gcp/daraz/channel/np/lp/meet-the-winners-main?spm=a2a0e.tm80331706.footer_top.14.3ac45aa7tnnOyf&scm=1003.4.icms-zebra-100024112-2954385.OTHER_6502456634_2597685"
          >
            Meet the winners
          </a>{" "}
          <br />{" "}
          <a
            style={{
              fontSize: "0.6rem",
              textDecoration: "none",

              fontWeight: "500",
              color: "#042662",
            }}
            href="https://university.daraz.com.np/?spm=a2a0e.tm80331706.footer_top.15.3ac45aa7c5qmFQ&scm=1003.4.icms-zebra-100024112-2954288.OTHER_5486966553_2597667"
          >
            Daraz University
          </a>
          <br />{" "}
          <a
            style={{
              fontSize: "0.6rem",
              textDecoration: "none",

              fontWeight: "500",
              color: "#042662",
            }}
            href="https://sellercenter.daraz.com.np/apps/register/index?spm=a2a0e.tm80331706.footer_top.16.3ac45aa7KpACsX&scm=1003.4.icms-zebra-100024112-2954288.OTHER_5486966554_2597667&regist=true"
          >
            Sell on Daraz
          </a>
          <br />{" "}
          <a
            style={{
              fontSize: "0.6rem",
              textDecoration: "none",
              //  marginTop:"-5rem",
              fontWeight: "500",
              color: "#042662",
            }}
            href="https://www.daraz.com.np/wow/i/np/help-pages/code-of-conduct-daraz?spm=a2a0e.tm80331706.footer_top.17.3ac45aa77qO7J0&wh_weex=true&hybrid=1&scm=1003.4.icms-zebra-100024112-2954288.OTHER_5486966555_2597667"
          >
            Code of Conduct
          </a>
        </div>
        <div style={{ width: "25rem", gap: "1rem" }}>
          <img
            style={{ height: "3rem", marginTop: "2rem", width: "3rem" }}
            loading="lazy"
            src="https://img.lazcdn.com/us/domino/da7668ef-2724-447a-951a-558dafdfb265_NP-60-60.png"
            alt=""
          />
          <p
            style={{
              marginLeft: "3.5rem",
              marginTop: "-3rem",
              color: "orangered",
              fontSize: "0.8rem",
            }}
          >
            Happy Shopping
          </p>
          <br />
          <p
            style={{
              marginLeft: "3.5rem",
              marginTop: "-0.9rem",
              lineHeight: "1",
              letterSpacing: "0.02rem",
              color: "#042662",
              fontSize: "0.8rem",
            }}
          >
            Download App
          </p>
          <div
            style={{
              height: "7rem",
              display: "flex",
              width: "15rem",
              gap: "0.8rem",
              flex: "1 1",
              flexWrap: "wrap",
              marginLeft: "10rem",
              marginTop: "-3rem",
            }}
          >
            <img
              style={{ height: "3.5rem", width: "7rem" }}
              src="https://img.lazcdn.com/us/domino/afd80417-f3df-464e-bc1a-78d790033ae6_NP-126-42.png"
              alt=""
            />
            <img
              style={{ height: "3.5rem", width: "7rem" }}
              src="https://img.lazcdn.com/us/domino/afd80417-f3df-464e-bc1a-78d790033ae6_NP-126-42.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Flashsale;
