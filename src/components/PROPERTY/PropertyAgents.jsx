import React from 'react'
import "../HOME/Home.css"
import"../ABOUT/About.css"
import Agents from '../HOME/Agents'
import Contact from '../HOME/Contact'
import Formbar from '../HOME/Formbar'
import Testimonial from '../HOME/Testimonial'
import Listing from '../HOME/Listing'
import Main from '../SHARED/Main'
import Ownership from '../HOME/Ownership'
import Place from '../HOME/Place'

const PropertyList = () => {
  return (
    <div className='Propertyype'>
      <Main title="Property Type" content="PROPERTY TYPE"/>
      <Formbar/>
      <Agents/> 
      <Contact/>
      {/* <Listing/> */}
      {/* <Ownership/> */}
      {/* <Place/> */}
      {/* 
    //   */}
    </div>
  )
}

export default PropertyList
