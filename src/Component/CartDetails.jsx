import React from 'react'
import "./Foryou.css"
const CartDetails=({image,para,price})=> {
  return (
    <>
      <div className='Carts-Container'>
    <img src={image} alt="" />
    <p>{para}</p>
     <h6>{price}</h6>
    </div>
    </>
  
  )
}

export default CartDetails