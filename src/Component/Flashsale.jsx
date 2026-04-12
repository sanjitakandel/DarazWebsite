import React, { useState } from "react";
import NavBar from "../Navbar/NavBar";
import { useEffect } from "react";
import "./flashSale.css"
import axios from "axios";
import { FaAngleDown } from "react-icons/fa";
function Flashsale() {
  const[show,setShow]=useState([]);
  const[category,setCategory]=useState("all");
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=0")

      .then((response) => {
        setShow(response.data.products);
      })
      .catch((error) => {
        console.error("error fetching posts", error);
      });
  
  }, [])
   const filterCategory=    category==="all" ?show :show.filter((item)=>item.category ===category)
  
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
            filterCategory.map((photos) => (
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
      </section>
      
    </div>
  );
}

export default Flashsale;
