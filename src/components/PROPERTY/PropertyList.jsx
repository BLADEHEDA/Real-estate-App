import React from 'react'
import"../ABOUT/About.css"
import "../HOME/Home.css"
import Agents from '../HOME/Agents'
import Contact from '../HOME/Contact'
import Formbar from '../HOME/Formbar'
import Listing from '../HOME/Listing'
import Main from '../SHARED/Main'
import Navbar from '../SHARED/Navbar'
import Footer from '../SHARED/Footer'

const PropertyList = () => {
  return (
    <div className='Property list'>
      <Navbar/>
      <Main title="Property List" content="PROPERTY LIST"/>
      <Formbar/>
      <Listing/>
      <Contact/>
      <Agents/>
      <Footer/>
    </div>
  )
}

export default PropertyList
