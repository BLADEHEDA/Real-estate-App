import React from 'react'
import"../ABOUT/About.css"
import "../HOME/Home.css"
import Agents from '../HOME/Agents'
import Contact from '../HOME/Contact'
import Formbar from '../HOME/Formbar'
import Listing from '../HOME/Listing'
import Main from '../SHARED/Main'

const PropertyList = () => {
  return (
    <div className='Property list'>
      <Main title="Property List" content="PROPERTY LIST"/>
      <Formbar/>
      <Listing/>
      <Contact/>
      <Agents/>
    </div>
  )
}

export default PropertyList
