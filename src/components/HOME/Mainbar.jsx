import React from 'react'
import Button from '../SHARED/Button'
import "./Home.css"
import carousel1 from "../../images/carousel-1.jpg"
import carousel2 from "../../images/carousel-2.jpg"

const Mainbar = () => {
  return (
    <div className='mainbar'>
    <main className='mainbar-right' > <img src={carousel1} alt=" Carousel-1" />  </main>
   <main className='mainbar-left' >
   <h1 className="main-title"> Find A <span className="main-span">Perfect Home</span>  To Live With Your Family </h1>
   <p className="main-content">Find Top class homes and Appartments with no stress from the comfort of your home . 
   justget to us and get your deals satisfied atanaffordable price </p>
   
    <div className="btn-main"> <Button title=" Get Started" style={{width:"100%",borderRadius:"6px",padding:"15px",
    color:"white" }} /> </div>
   </main>


    </div>
  )
}

export default Mainbar
 