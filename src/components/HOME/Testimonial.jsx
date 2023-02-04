import React from 'react'
import testinonial1 from '../../images/testimonial-1.jpg'
import testinonial2 from '../../images/testimonial-2.jpg'
import testinonial3 from '../../images/testimonial-3.jpg'
import { Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Carousel } from '@trendyol-js/react-carousel';
import Button from '../SHARED/Button'


// let me create the testimony prop 
const Person =(props)=>{

    return(
        <div className="person">  
        <div className="slider-Button"> <Button style={{background:'Green' }} title="yo bro"  /> </div> 
       
        <div className="person-div">
            <div className="person-card">
                <person style={props.style} className="person-content"> {props.content}</person>
                <div className="person-info">
                    <div style={props.style} className="person-pic"> <img src={props.src} alt="" className="person-pic-img" />   </div>
                    <div className="person-data">   
                        <h1  style={props.style} className="person-name">{props.name} </h1>
                        <p  style={props.style} className="person-profession">  {props.profession} </p>
                    </div>
                </div>
            </div>
        </div>
        <Button style={{background:'Green' }} title="yo bro"  />
        </div>
    )
}

const Testimonial = () => {

  return (
    <div className='testimonial'>
    
   


    </div>
    



  )
}

export default Testimonial
