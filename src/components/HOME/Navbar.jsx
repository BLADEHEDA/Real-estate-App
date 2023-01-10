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
  const [show1,setshow1] =useState();
  const display1 =show1 ? "show":"navlinks";
  const rotate = show1 ? "arrow1":"";
   const toggleshow1 =()=>{
    setshow1(!show1);
    setshow2();
  }
  const [show2,setshow2] =useState();
  const display2 =show2 ? "show":"navlinks";
  const rotate1 = show2 ? "arrow1":"";
  const toggleshow2 =()=>{        
    setshow2(!show2);
    setshow1();
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
                  <div className="ptoptertes flex" onClick={toggleshow1}  >
                    <div className="propname" >PROPERTIES</div>
                    <div className="propimage"><img src={arrowdown} alt="arrow down icon"className={`dropdown ${rotate}`} /> </div> 
                  </div
                  <ul className={`options ${display1}`}>
                    <li className="option">property list</li>
                    <li className="option">Property Type</li>
                    <li className="option">property Agent</li>
                  </ul> 
                </li>  
           
                <li className="navlinks">
                  <div className="ptoptertes flex" onClick={toggleshow2} >
                    <div className="propname">PAGES</div>
                    <div className="propimage"><img src={arrowdown} alt="arrow down icon" className={`dropdown ${rotate1}`}  /> </div> 
                  </div>
                  
                  <ul className={`options ${display2}`}>
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
