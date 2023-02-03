import React from 'react'
import phone from "../../images/icons8-phone-50.png"
import map from "../../images/map-marker-2-16.png"
import mail from "../../images/icons8-mail-30.png"  
import facebook from "../../images/icons8-facebook-f-50.png"
import linkedin from "../../images/icons8-linkedin-2-50.png"
import twitter  from "../../images/icons8-twitter-50.png"
import youtube  from "../../images/icons8-youtube-50.png"
import arrowdown from "../../images/rTjr6pqxc.png"
import Home6 from '../../images/property-6.jpg'
import Home5 from '../../images/property-5.jpg'
import Home4 from '../../images/property-4.jpg'
import Home3 from '../../images/property-3.jpg'
import Home2 from '../../images/property-2.jpg'
import Home1 from '../../images/property-1.jpg'


const Footer = () => {
  return (
    <footer className='footer' >
      <footer className="footer-touch">
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
          <footer className="footer-iconss flex">  
          <div className="fotter-icons8"> <img src={twitter } alt="footer-icons" className="footer-img" /> </div>
          <div className="fotter-icons8"> <img src={facebook} alt="footer-icons" className="footer-img" /> </div>
          <div className="fotter-icons8"> <img src={youtube} alt="footer-icons" className="footer-img" /> </div>
          <div className="fotter-icons8"> <img src={linkedin} alt="footer-icons" className="footer-img" /> </div>
          </footer>  
    </footer>

      <footer className="footer-links"> 
        <h1 className="footer-link-header"> Quick Links</h1>
        <div className="footer-link"> 
          <div className="footer-link-arrow"><img src= {arrowdown } alt="arrow-down" className="footer-link-arrow-img" /> </div>
          <div className="footer-link-div"> <a href="/#" className="footer-link">About Us</a> </div>
        </div>
        <div className="footer-link"> 
          <div className="footer-link-arrow"><img src= {arrowdown } alt="arrow-down" className="footer-link-arrow-img" /> </div>
          <div className="footer-link-div"> <a href="/" className="footer-link">Contact Us</a> </div>
        </div>
        <div className="footer-link"> 
        <div className="footer-link-arrow"><img src= {arrowdown } alt="arrow-down" className="footer-link-arrow-img" /> </div>
        <div className="footer-link-div"> <a href="/" className="footer-link">Our Services</a> </div>
      </div>
      <div className="footer-link"> 
      <div className="footer-link-arrow"><img src= {arrowdown } alt="arrow-down" className="footer-link-arrow-img" /> </div>
      <div className="footer-link-div"> <a href="/" className="footer-link">Privacy Policy</a> </div>
    </div>
    <div className="footer-link"> 
    <div className="footer-link-arrow"><img src= {arrowdown } alt="arrow-down" className="footer-link-arrow-img" /> </div>
    <div className="footer-link-div"> <a href="/" className="footer-link">Terms & Condtion</a> </div>
  </div>
    </footer>
      <footer className="footer-gallery">  
      <div className="footer-gallery-header">Photo Gallery </div>
      
      </footer>


    </footer>
  )
}

export default Footer
