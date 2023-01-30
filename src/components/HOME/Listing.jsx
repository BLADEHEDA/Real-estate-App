import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import Button from '../SHARED/Button'

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
        nature:"For rent",
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
        nature:"For rent",
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
        nature:"For rent",
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
      <div   className="listing-buttons flex " > 
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
   
      
    </div>
  )
}

export default Listing
