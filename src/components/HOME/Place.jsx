import React from 'react'
import Button from '../SHARED/Button'
import about from "../../images/about.jpg"
import checkmark from "../../images/checkmark-16.png"
import { Fade, Slide,Bounce,Flip,Hinge } from "react-awesome-reveal";



const Place = () => {
  return (
    <Fade>
    <section className='place'>
        <div className="place-left">    
            <div className="place-image-div"> <img src={about} alt="about-image" className="place-image" />  </div>
        </div>
        <div className="place-right">
            <h1 className="place-header" >#1 Place To Find The Perfect Property</h1>
            <p className="place-content pr-7">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
            Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
            sed stet lorem sit clita duo justo magna dolore erat amet</p>
            <div className="place-list ">  
                    <p className="list flex ">   
                    <div className="checkmark mt-1 mr-3">    <img src={checkmark} alt="checkmark" className="check" />    </div>
                    <div className="list-content">Tempor erat elitr rebum at clita</div>
                    </p>
                        <p className="list flex">   
                        <div className="checkmark  mt-1  mr-3">    <img src={checkmark} alt="checkmark" className="check" />    </div>
                        <div className="list-content"> Aliqu diam amet diam et eos</div>
                    </p>
                    <p className="list flex ">   
                    <div className="checkmark  mt-1  mr-3">    <img src={checkmark} alt="checkmark" className="check" />    </div>
                    <div className="list-content"> Clita duo justo magna dolore erat amet</div>
                    </p>
                    <div className="place-btn"><Button style={{width:"100%",borderRadius:"6px",padding:"14px", color:"white" }} title="Read more" /> </div>
            </div>
        </div>   
    </section>
    </Fade>
  )
}

   
export default Place
