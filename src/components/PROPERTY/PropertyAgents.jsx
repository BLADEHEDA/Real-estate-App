import React from 'react'
import "../HOME/Home.css"
import"../ABOUT/About.css"
import Agents from '../HOME/Agents'
import Contact from '../HOME/Contact'
import Formbar from '../HOME/Formbar'
import Main from '../SHARED/Main'


const PropertyAgents = () => {
  return (
    <div className='PPropertyAgents'>
      <Main title="Property AGENTS" content="PROPERTY Agents"/>
      <Formbar/>
      <Agents/> 
      <Contact/>
    </div>
  )
}

export default PropertyAgents
