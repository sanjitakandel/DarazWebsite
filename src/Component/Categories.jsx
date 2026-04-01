import React from "react";
import "./Foryou.css";
const Categories = ({ images, paragraph }) => {
  return (
    <>
      <div className="Categories-COntainer">
        <img src={images} alt="" />
        <p>{paragraph}</p>
      </div>
    </>
  );
};
export default Categories;
