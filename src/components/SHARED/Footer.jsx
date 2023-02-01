import React from 'react'
import phone from "../../images/icons8-phone-50.png"
import map from "../../images/map-marker-2-16.png"
import mail from "../../images/icons8-mail-30.png"




const Footer = () => {
  return (
    <footer className='footer' >
    <footer className="footer0touch">
    <h1 className="footer-touch-header">Get InTouch</h1>
    <footer className="footer-touch-info">
    <div className="touch-info">
        <div className="touch-info-left"> <img src={map} alt="touch-image" className="touch-img" /> </div> 
        <div className="touch-info-right"> </div> 
     </div>
        <div className="touch-info">
            <div className="touch-info-left"> <img src={phone} alt="touch-image" className="touch-img" /> </div> 
            <div className="touch-info-right"> </div> 
        </div>
  <div className="touch-info">
  <div className="touch-info-left"> <img src={mail} alt="touch-image" className="touch-img" /> </div> 
  <div className="touch-info-right"> </div> 
</div>  
    </footer>
    </footer>
      
    </footer>
  )
}

export default Footer
