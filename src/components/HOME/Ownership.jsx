import React from 'react'
import Property from './Property'
import "./Home.css"
import appartment from "../../images/icon-apartment.png"
import { Fade, Slide,Bounce,Flip,Zoom } from "react-awesome-reveal";

const Ownership = () => {
      // setup the array of objects for your props 
  const properties = 
  [  {
      src:appartment,
      title:"Appartment",
      count:"123 Properties"
    },
    {
      src:require('../../images/icon-villa.png'),
      title:"Villa",
      count:"123 Properties"
    }
    , {
      src:require('../../images/icon-house.png'),
      title:"HOme",
      count:"123 Properties"
    },
    {
      src:require('../../images/icon-housing.png'),
      title:"Office",
      count:"123 Properties"
    }
    , {
      src:require('../../images/icon-building.png'),
      title:"BUilding",
      count:"123 Properties"
    },
    {
      src:require('../../images/icon-neighborhood.png'),
      title:"Townhouse",
      count:"123 Properties"
    }
    , {
      src:require('../../images/icon-condominium.png'),
      title:"Shop",
      count:"123 Properties"
    }
    , {
      src:require('../../images/icon-luxury.png'),
      title:"Garage",
      count:"123 Properties"
    }
  ]
  return (
      
    <section className='ownaership' >
      <div className="properties-section">
        <h1 className="properties-title">Property Types</h1>
        <p className="properties-content"> Get a variety of options as wild as the  imagination of your dream
        apppartment could be , we got you covered with first class appartments all over the world at affordable prices    </p>
      </div>
      <Flip>
    <div className='properties'>     
      {properties.map(property=>{
          const{src,title, count} = property;
          return(
            <section className='property' >
            {/* This is an alternative way rodoir 
            <div className="images"> <img src= {src}  />  </div>
           <div className="title"> {title}  </div>
           <div className="counr">  {count} </div>
          */} 
          
          <Property src={src} title= {title}  count={count}  />
            </section>
          )
        })   } 
        </div>
      </Flip>
   </section>
  )
}

export default Ownership

 
