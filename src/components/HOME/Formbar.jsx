import React from 'react'
import { useState } from 'react'
import arrowdown from "../../images/icons8-down-24.png"
import Button from '../SHARED/Button'
import "./Home.css"

const Formbar = () => {
               
  return (
    <div className='formbar'  >
      <div className="input"><input type="text" className="formbar-search" placeholder='Search Keyword' />   </div>
      
        <div className="home-options">  
        <select name="Property Type " className='location '>
          <option value="Location">Property Type</option>
          <option value="Location 1">Property Type 1</option>
          <option value="Location2"> Property Type 2</option>
          <option value="Location 3"> Property Type 3</option>
        </select>
        </div>
              <div className="home-options">  
                <select name="Location" className='location '>
                  <option value="Location">Location </option>
                  <option value="Location 1">Location 1</option>
                  <option value="Location2"> Location 2</option>
                  <option value="Location 3"> Location 3</option>
              </select></div>
      
            <div className="input btn-input">
            <Button title=" Search"
             style={{ color: "#fff",  background: "#0E2E50",width:"100%",height:"100%",
             padding: "1em 0.5em",borderRadius:"5px"}} / >  
            </div>
      
            <div className="properties-section">
            <h1 className="properties-title">Property Types</h1>
            <p className="properties-content"> Get a variety of options as wild as the  imagination of your dream
             apppartment could be , we got you covered with first class appartments all over the world at affordable prices    </p>
            </div>
              <section>
              <div className="properties-div"></div>
              <div className="properties-div"></div>
              <div className="properties-div"></div>
              <div className="properties-div"></div>
              <div className="properties-div"></div>
              <div className="properties-div"></div>
              <div className="properties-div"></div>
              <div className="properties-div"></div>
              </section>
    </div>
  )
}

export default Formbar

