import React from 'react'
import "../HOME/Home.css"
import"../ABOUT/About.css"
import Formbar from '../HOME/Formbar'
import Testimonial from '../HOME/Testimonial'
import Main from '../SHARED/Main'
import Navbar from '../SHARED/Navbar'
import Footer from '../SHARED/Footer'

const Testimony = () => {
  return (
    <div className='Testimony'>
      <Navbar/>
    <Main title="Testimonial" content="TESTIMONIAL"/>
      <Formbar/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default Testimony
