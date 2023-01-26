import React from 'react'
import "./Home.css"
import Mainbar from './Mainbar'
import Formbar from './Formbar'


const Home = () => {
  return (
    <div className='Home'>
      <Mainbar/>
      <Formbar/>
    </div>
  )
}

export default Home
