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
    <div className="touch-info flex">
        <div className="touch-info-left"> <img src={map} alt="touch-" className="touch-img" /> </div> 
        <div className="touch-info-right">123 Street, New York, USA </div> 
     </div>
        <div className="touch-info flex">
            <div className="touch-info-left"> <img src={phone} alt="touch-" className="touch-img-phone"/> </div> 
            <div className="touch-info-right">+012 345 67890 </div> 
        </div> 
  <div className="touch-info flex">
  <div className="touch-info-left"> <img src={mail} alt="touch-" className="touch-img-mail"/> </div> 
  <div className="touch-info-right">info@example.com </div> 
</div>  
    </footer>
    </footer>
      
    </footer>
  )
}

export default Footer
