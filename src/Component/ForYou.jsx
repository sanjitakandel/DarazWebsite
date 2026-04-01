import React, { useState, useEffect } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./Foryou.css";
import { Link } from "react-router-dom";
import CartDetails from "./CartDetails";
import Categories from "./Categories";
import NavBar from "../Navbar/NavBar";
const image1 = "public/images1.jpg";
const image2 = "public/images2.jpg";
const image3 = "public/images3.jpg";
const image4 = "public/images4.jpg";
const image5 = "public/images5.jpg";
const image6 = "public/images6.jpg";

const imageArray = [image1, image2, image3, image4, image5, image6];
function ForYou() {
  const [midImage, setMidImage] = useState(0);
  const [left, setleft] = useState(imageArray.length - 1);
  const [right, setRight] = useState(1);
  useEffect(() => {
    if (midImage == 0) {
      setleft(imageArray.length - 1);
      setRight(1);
    } else if (midImage == imageArray.length - 1) {
      setleft(midImage - 1);
      setRight(0);
    } else {
      setleft(midImage - 1);
      setRight(midImage + 1);
    }
  }, [midImage]);

  const increment = () => {
    if (midImage == imageArray.length - 1) {
      setMidImage(0);
    } else {
      setMidImage(midImage + 1);
    }
  };
  const decrement = () => {
    if (midImage == 0) {
      setMidImage(imageArray.length - 1);
    } else {
      setMidImage(midImage - 1);
    }
  };
  return (
    <div className="Container">
      <NavBar />
      <div className="ImageSlider">
        <div className="ImageSliderContainer">
          <div className="Images">
            <img src={imageArray[right]} className="rightImage" />
            <img src={imageArray[midImage]} className="middleImage" />
            <img src={imageArray[left]} className="leftImage" />
          </div>
          <div className="ImageContainer">
            <img src="./appscanner.jpg" alt="" />
          </div>
        </div>
        <div className="buttons">
          <button className="rightButton" onClick={increment}>
            <MdKeyboardArrowRight />
          </button>
          <button className="leftButton" onClick={decrement}>
            <MdKeyboardArrowLeft />
          </button>
        </div>
        <div className="Flash-sale">
          <p>Flash Sale</p>
          <div className="Sale-container">
            <div className="Topic">
              <div className="P">
                <h5>On Sale Now</h5>
              </div>
              <div className="zero"></div>
              <div className="button">
                <button>
                  {" "}
                  <Link
                    style={{
                      textDecoration: "None",
                      color: "#f57224",
                    }}
                    to="./flashsale"
                  >
                    SHOP ALL PRODUCTS
                  </Link>
                </button>
              </div>
            </div>
            <hr />
            <div className="carts">
              <CartDetails
                image="./boroline.jpg"
                para="Boroline Dermacare"
                price="RS.85"
              />
              <CartDetails
                image="./muffler.jpg"
                para="Warm Muffler "
                price="RS.850"
              />
              <CartDetails
                image="./foundation.jpg"
                para="Foundation"
                price="RS.1500"
              />
              <CartDetails image="./watch.jpg" para=" Watch" price="RS.7489" />
              <CartDetails
                image="./earbuds.jpg"
                para=" COOLPODS pro"
                price="RS.2189"
              />
              <CartDetails
                image="./jacket.jpg"
                para="Winter jacket"
                price="RS.2000"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="Categories">
        <p>Categories</p>
        <div className="Categories-Section">
          <Categories images="./car.jpg" paragraph="Car" />
          <Categories
            images="./veniger.jpg"
            paragraph="Veniger & Cooking Wine"
          />
          <Categories images="./phonecase.jpg" paragraph="Phone Cases" />
          <Categories images="./shoes.jpg" paragraph="Adidas" />
          <Categories images="./sandels.jpg" paragraph="Heel Sandels" />
          <Categories images="./telecsope.jpg" paragraph="Telescope" />
          <Categories images="./Toiletpaper.jpg" paragraph="Toilet Paper" />
          <Categories images="./Girls.jpg" paragraph="Hoodies" />
          <Categories images="./Room.jpg" paragraph="Room Decorations " />
          <Categories images="./perfume.jpg" paragraph="Perfume" />
          <Categories
            images="./habitat.jpg"
            paragraph="Habitats & accessories"
          />
          <Categories images="./christian.jpg" paragraph="Cristianing" />
          <Categories images="./360.jpg" paragraph="360 cameras" />
          <Categories images="./motherboard.jpg" paragraph="Motherboards" />
          <Categories images="./Dishwasher.jpg" paragraph="Dishwashers" />
          <Categories
            images="./bookcase.jpg"
            paragraph=" Kids Bookcases & Shelving"
          />
          <Categories images="./thormos.jpg" paragraph="Thormos Bottle" />
          <Categories images="./hand.jpg" paragraph="Handcreams" />
        </div>
      </div>
    </div>
  );
}

export default ForYou;
