import React from 'react'
import Agents from '../HOME/Agents'
import Contact from '../HOME/Contact'
import "../HOME/Home.css"
import Formbar from '../HOME/Formbar'
import Place from '../HOME/Place'
import Testimonial from '../HOME/Testimonial'
import MainHero from './MainHero'

const About = () => {
  return (
    <div className='About'>
        <MainHero/>
      <Formbar/>
      <Place/>
      <Contact/>
      <Agents/>
      <Testimonial/>

    </div>
  )
}

export default About
