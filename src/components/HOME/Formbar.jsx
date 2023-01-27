import React from 'react'
import { useState } from 'react'
import arrowdown from "../../images/icons8-down-24.png"
import Button from '../SHARED/Button'
import "./Home.css"

const Formbar = () => {

  // close the active option bar when clicked on anywherearound the component 
  const closActive=()=>{
    if( showLocation || showProperty){
    seshowProperty()
    setshowLocation();
    }
  }
    // hide and show the property box
const[showProperty, seshowProperty] = useState();
const displayproperty =showProperty ? "show":"property";
const toggleshowProperty =()=>{
  if( showLocation){
    setshowLocation();
  } 
  else{
    seshowProperty(!showProperty);
  }

}
// hide and show the location box 
const[showLocation , setshowLocation]= useState();
const displaylocation = showLocation?"show":"location";
const toggleshowlocation =()=>{
  setshowLocation(!showLocation);
  seshowProperty()
}



  return (
    <div className='formbar' onClick={closActive} >
      <div className="input"><input type="text" className="formbar-search" placeholder='Search Keyword' />   </div>
        <div onClick={toggleshowProperty} className="input formbar-show flex justify-between   "> 
            <div className="input-text">Property Type </div>
            <div className="input-image"> <img src={arrowdown} alt="arrowdown" className='arrowdown' /> </div>    
        </div>
        <div className={`property formbar-hide ${displayproperty}`}>
            <div className="property-type"> Property Type</div>
            <div className="property-type"> Property Type 1</div>
            <div className="property-type"> Property Type 2</div>
            <div className="property-type"> Property Type 3</div>
        </div>
        
        <div  onClick={toggleshowlocation} className="input formbar-show flex justify-between "> 
            <div className="input-text">Location </div>
            <div className="input-image"> <img src={arrowdown} alt="arrowdown"  className='arrowdown' /> </div>    
        </div>
        <div className={`location formbar-hide ${displaylocation}` }>
            <div className="property-type">Location </div>
            <div className="property-type"> Location 1</div>
            <div className="property-type">Location 2</div>
            <div className="property-type"> Location 3</div>
        </div>
            <div className="input btn-input">
            <Button title=" Search"
             style={{ color: "#fff",  background: "#0E2E50",width:"100%",height:"100%",
             padding: "1em 0.5em",borderRadius:"5px"}} / >  
            </div>

     
    </div>
  )
}

export default Formbar

