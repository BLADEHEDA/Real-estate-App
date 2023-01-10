import React from 'react'
import icon from "../../images/icon-deal.png"
import hamburger from "../../images/icon-hamburger.svg"
// import hamburger from "../../images/icons8-menu-48.png"

const Navbar = () => {
  return (
    <div>
        <nav className="navbar-mobile px-5 py-3 flex justify-between">
            <nav className="left flex">
                <div className="nav-logos"><img src={icon} alt="navlogo" className="nav-logo p-1" /> </div>
                <nav className="nav-brand text-4xl font-black ml-2 mt-0">MaKaan </nav>
            </nav>
         
            <nav className="right"> <button className="nav-button mt-1" ><img src={hamburger} alt="hamburger-btn" />  </button> </nav>
        </nav>
        <nav className="navbar-desktop "> </nav>
    </div>
  )
}

export default Navbar
