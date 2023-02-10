import React from 'react'
import Formbar from '../HOME/Formbar'
import Button from '../SHARED/Button'
import Main from '../SHARED/Main'
import erroIcon from "../../images/icons8-error-100 (1).png"
import"../ABOUT/About.css"
import "../HOME/Home.css"

const Error = () => {
  return (
    <div className='Error'>
      <Main title="404 Error" content="404 ERROR"/>
      <Formbar/>
      <div className="Error-div">  
        <div className="Error-img-div"> <img src={erroIcon} alt="" className="Error-img" />   </div> 
        <h1 className="Error-head">404</h1>
        <h2 className="Error-head-2">Page Not FOund</h2>
        <p className="Error-content"> We’re sorry, the page you have looked for does not exist in our website! 
        Maybe go to our home page or try to use a search?</p>
        <Button  title=" Go Back To Home"
        style={{ color:"white", padding:"1em 2em",borderRadius:"5px" }}
        />
    </div>
    </div>
  )
}

export default Error
