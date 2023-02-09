import React from 'react'
import "../HOME/Home.css"
import"../ABOUT/About.css"
import Agents from '../HOME/Agents'
import Contact from '../HOME/Contact'
import Formbar from '../HOME/Formbar'
import Place from '../HOME/Place'
import Testimonial from '../HOME/Testimonial'
import Ownership from '../HOME/Ownership'
import Listing from '../HOME/Listing'
import Main from '../SHARED/Main'

const PropertyList = () => {
  return (
    <div className='Propertylist'>
      <Main title="Property List" content="Property List"/>
      <Formbar/>
      <Ownership/>
      <Place/>
      <Listing/>
      <Contact/>
      <Agents/>
    </div>
  )
}

export default PropertyList
