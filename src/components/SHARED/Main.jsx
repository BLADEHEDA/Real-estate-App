import React, { useState } from 'react'
import { BrowserRouter,  Routes,Route,Link} from "react-router-dom";
import "../HOME/Home.css"
import"../ABOUT/About.css"
import carousel1 from "../../images/carousel-1.jpg"
import carousel2 from "../../images/carousel-2.jpg"

const Main = (props) => {
  return (
    <div className='Main mainbar'>
      <main className='mainbar-right' > <img src={carousel1} alt=" Carousel-1" />  </main>
      <main className='mainbar-left' >
        <h1 className="main-title">{props.title}   </h1>
        <div className="main-contents">
        <Link to="/"><div className="nav-pages">HOME</div> </Link>   
            <div className="nav-pages">PAGES</div>
            <div className="nav-pages " id='nav-page'>{props.content} </div>
         </div>
     </main>
    </div>
  )
}

export default Main
