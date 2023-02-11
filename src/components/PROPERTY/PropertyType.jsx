import React from 'react'
import "../HOME/Home.css"
import"../ABOUT/About.css"
import Formbar from '../HOME/Formbar'
import Main from '../SHARED/Main'
import Ownership from '../HOME/Ownership'
import Navbar from '../SHARED/Navbar'
import Footer from '../SHARED/Footer'

const PropertyType = () => {
  return (
    <div className='Propertyype'>
      <Navbar/>
      <Main title="Property Type" content="PROPERTY TYPE"/>
      <Formbar/>
      <Ownership/>
      <Footer/>
    </div>
  )
}

export default PropertyType
