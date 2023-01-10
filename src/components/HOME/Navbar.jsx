import React, { useState } from 'react'
import icon from "../../images/icon-deal.png"
import hamburger from "../../images/icon-hamburger.svg"
import arrowdown from "../../images/icons8-down-24.png"

const Navbar = () => {
  // the code below hudes and shows the divs 
  const[show , setshow] =useState();
  const display= show ? "show" : "hidden-nav";
  const toggleshow =()=>{
    setshow(!show);
  }

  return (
    <div>
        <nav className="navbar-mobile px-5 py-3 flex justify-between">
            <nav className="left flex">
                <div className="nav-logos"><img src={icon} alt="navlogo" className="nav-logo p-1" /> </div>
                <nav className="nav-brand text-4xl font-black ml-2 mt-0">MaKaan </nav>
            </nav>        
            <nav className="right">
               <div className="nav-button mt-1" onClick={toggleshow} ><img src={hamburger} alt="hamburger-btn" />  </div> 
               <ul className={`hidden-nav mt-4 pt-2 ${display}`}   >
                <li className="navlinks">HOME</li>
                <li className="navlinks">ABOUT</li>
                <li className="navlinks">
                  <div className="ptoptertes flex" >
                    <div className="propname" >PROPERTIES</div>
                    <div className="propimage"><img src={arrowdown} alt="arrow down icon"className='dropdown' /> </div> 
                  </div>
                     {/* <ul className=  <ul className={`navlinks-mob ${display}`}>}> */}
                  <ul className={`options`}>
                    <li className="option">property list</li>
                    <li className="option">Property Type</li>
                    <li className="option">property Agent</li>
                  </ul>
                </li>  
           
                <li className="navlinks">
                  <div className="ptoptertes flex">
                    <div className="propname">PAGES</div>
                    <div className="propimage"><img src={arrowdown} alt="arrow down icon"className='dropdown' /> </div> 
                  </div>
                  
                  <ul className="options">
                    <li className="option">Testimonial </li>
                    <li className="option">404 Error</li>
                  </ul>
                </li> 
                <li className="navlinks">CONTACT</li>
               </ul>
               
               </nav>
          
        </nav>
        <nav className="navbar-desktop "> </nav>
    </div>
  )
}

export default Navbar
