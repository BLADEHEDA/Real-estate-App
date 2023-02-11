import React from 'react'
import "../HOME/Home.css"
import"../ABOUT/About.css"
import Agents from '../HOME/Agents'
import Contact from '../HOME/Contact'
import Formbar from '../HOME/Formbar'
import Main from '../SHARED/Main'
import Navbar from '../SHARED/Navbar'
import Footer from '../SHARED/Footer'

const PropertyAgents = () => {
  return (
    <div className='PPropertyAgents'>
      <Navbar/>
      <Main title="Property AGENTS" content="PROPERTY Agents"/>
      <Formbar/>
      <Agents/> 
      <Contact/>
      <Footer/>
    </div>
  )
}

export default PropertyAgents
