import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import Button from '../SHARED/Button'
import mappin from "../../images/map-pin.png"
import bedroom from "../../images/icons8-occupied-bed-24.png"
import bathing  from "../../images/icons8-bath-light-24.png"
import ruler from  "../../images/icons8-ruler-combined-32.png"

const Listing = () => {
    // define the object to be use 
    const properties =[
      { 
        img:require('../../images/property-1.jpg'),
        nature:"For Sell",
        type:"Appartment",
        price:"$12,345",
        mame:"Golden Urban House For Sell",
        location:"123 Street, New York, USA",
        area:"1000 Sqft",
        bed:" 3 Bed",
        bath:" 2 Bath"
      },
      { 
        img:require('../../images/property-2.jpg'),
        nature:"For Rent",
        type:"Villa",
        price:"$12,345",
        mame:"Golden Urban House For Sell",
        location:"123 Street, New York, USA",
        area:"1000 Sqft",
        bed:" 3 Bed",
        bath:" 2 Bath"
      }
      ,
      { 
        img:require('../../images/property-3.jpg'),
        nature:"For Sell",
        type:"Office",
        price:"$12,345",
        mame:"Golden Urban House For Sell",
        location:"123 Street, New York, USA",
        area:"1000 Sqft",
        bed:" 3 Bed",
        bath:" 2 Bath"
      }
      ,
      { 
        img:require('../../images/property-4.jpg'),
        nature:"For Rent",
        type:"Building",
        price:"$12,345",
        mame:"Golden Urban House For Sell",
        location:"123 Street, New York, USA",
        area:"1000 Sqft",
        bed:" 10 Bed",
        bath:" 10 Bath"
      }
      ,
      { 
        img:require('../../images/property-5.jpg'),
        nature:"For Sell",
        type:"Home",
        price:"$12,345",
        mame:"Golden Urban House For Sell",
        location:"123 Street, New York, USA",
        area:"1000 Sqft",
        bed:" 3 Bed",
        bath:" 3 Bath"
      }
      ,
      { 
        img:require('../../images/property-6.jpg'),
        nature:"For Rent",
        type:"Shop",
        price:"$12,345",
        mame:"Golden Urban House For Sell",
        location:"123 Street, New York, USA",
        area:"1000 Sqft",
        bed:" 0 Bed",
        bath:" 1 Bath"
      }
    ]

  
 
  return (
    <div className='listing'>
      <div className="listing-preview"> 
        <h1 className="listing-header">Property Listing </h1>
        <div className="listing-content">Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
         dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.</div>
      </div>
      <div   className="listing-buttons flex mb-10 " > 
          <div className="buttons mr-2">
              <Button style={{width:"100%",borderRadius:"5px",padding:"5px 8px", 
              color:"white" }} title="Features" /> </div>
          <div className="buttons mr-2">
              <Button style={{width:"100%",borderRadius:"5px",padding:"5px 12px", 
              color:"black",background:"white" ,border:"solid 1px #00B98E" }} title="For Sell" /> </div>
          <div className="buttons mr-2">
              <Button style={{width:"100%",borderRadius:"5px",padding:"5px 8px", 
              color:"black",background:"white",border:"solid 1px #00B98E" }} title="For Rent" /> </div>
      </div>
      <div className="listing-properties">
     {properties.map(property=>{
      const {img , nature,type,price,mame,location,area,bed,bath} = property;
    return(
      <section className="list-property">
      <div className="listimg"> <img src={img} alt="appartmwnt" className="list-img" /> </div>
      <div className="list-nature"> {nature} </div>
      <div className="list-type"> {type} </div>
      <div className="list-price"> {price} </div>
      <div className="list-name"> {mame} </div>
      <div className="location flex"> 
      <div className="list-lication"> <img src={mappin} alt="map=pin" className="location-img" /> </div>
      <div className="list-location">{location} </div>
      </div>
      <section className="list-equipments flex justify-between">  
        <article className="area flex">  
        <div className="listarea  mr-1"> <img src={ruler } alt="" className="area-img " /> </div>
        <div className="list-area"> {area} </div>
        </article>
          <article className="bed flex "> 
          <div className="listbed mr-1"> <img src={bedroom} alt="bed-img" className="bed-img" /> </div>
          <div className="list-bed"> {bed} </div>
          </article>
              <article className="bath flex ">  
              <div className="listbath  mr-1"> <img src={bathing} alt="bath-img" className="bath-img" /> </div>
              <div className="list-bath">{bath} </div>
              </article>
      </section>
      </section>
    )
    
     })}
      </div>
      <div className="list-vutton"> <Button title="Browse More Property" 
      style={{width:"100%",borderRadius:"6px",padding:"18px", color:"white" }} /> </div>
   
      
    </div>
  )
}

export default Listing
