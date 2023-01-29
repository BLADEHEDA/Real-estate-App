import React from 'react'
import "./Home.css"


const Property = (props) => {

  return (
    <div className='property-prop'>
      <div className="property-card"> 
        <div className="property-image-div"> <img src={props.src} alt="property-img" className="propert-image" />  </div>
        <div className="property-title-div"> <h3 className="property-title">{props.title}</h3></div>
        <div className="property-count-div"><p className="properties-count"> {props.count} </p> </div>
      </div>
    </div>
  )
}

export default Property
