import React from 'react'
import "./Home.css"
import Mainbar from './Mainbar'
import Formbar from './Formbar'
import Ownership from './Ownership'
import Place from './Place'
import Listing from './Listing'
import Contact from './Contact'
import Agents from './Agents'
import Testimonial from './Testimonial'
import Footer from "../SHARED/Footer"

const Home = () => {
  return (
    <div className='Home'>
      <Mainbar/>
      <Formbar/>
      <Ownership/>
      <Place/>
      <Listing/>
      <Contact/>
      <Agents/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default Home
