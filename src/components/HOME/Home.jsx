import React from 'react'
import "./Home.css"
import Mainbar from './Mainbar'
import Formbar from './Formbar'
import Ownership from './Ownership'
import Place from './Place'


const Home = () => {
  return (
    <div className='Home'>
      <Mainbar/>
      <Formbar/>
      <Ownership/>
      <Place/>
    </div>
  )
}

export default Home
