import React from 'react'
import "../HOME/Home.css"
import"../ABOUT/About.css"
import Formbar from '../HOME/Formbar'
import Testimonial from '../HOME/Testimonial'
import Main from '../SHARED/Main'


const Testimony = () => {
  return (
    <div className='Testimony'>
    <Main title="Testimonial" content="TESTIMONIAL"/>
      <Formbar/>
      <Testimonial/>
    </div>
  )
}

export default Testimony
