import React from 'react'
import Property from './Property'
import appartment from "../../images/icon-apartment.png"

const Ownership = () => {
      // setup the array of objects for your props 
  const properties = 
  [  {
      src:appartment,
      title:"Appartment",
      count:"123 Properties"
    },
    {
      src:require('../../images/icon-apartment.png'),
      title:"Villa",
      count:"123 Properties"
    }
    , {
      src:require('../../images/icon-apartment.png'),
      title:"HOme",
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
   
    {properties.map(property=>{
        const{src,title, count} = property;
        return(
          <section>
          {src}
          {title}
          {count}
          </section>
        )
      })   } </section>
  )
}

export default Ownership

 
