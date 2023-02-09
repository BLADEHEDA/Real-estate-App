import React from 'react'
import "../HOME/Home.css"
import"../ABOUT/About.css"
import Formbar from '../HOME/Formbar'
import Main from '../SHARED/Main'
import Ownership from '../HOME/Ownership'

const PropertyType = () => {
  return (
    <div className='Propertyype'>
      <Main title="Property Type" content="PROPERTY TYPE"/>
      <Formbar/>
      <Ownership/>
    </div>
  )
}

export default PropertyType
