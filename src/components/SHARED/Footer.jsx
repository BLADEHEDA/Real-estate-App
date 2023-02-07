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
import Button from './Button'


const Footer = () => {
  return (
    <footer className='footer' >
  <footer className="footer-wrapper">  
      <section className="footer-section-1"> 
   
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
    </section>
        <section className="footer-section-2"> 
          <footer className="footer-gallery">  
            <h1 className="footer-gallery-header">Photo Gallery </h1>
            <div className="footer-gallery-pics-div">
              <div className="footer-gallery-pics flex">
                <div className="footer-gellery-pic"> <img src={Home1} alt="footer-gallery" className="footer-gallery-img" /> </div>
                <div className="footer-gellery-pic"> <img src={Home2} alt="footer-gallery" className="footer-gallery-img" /> </div>
                <div className="footer-gellery-pic"> <img src={Home3} alt="footer-gallery" className="footer-gallery-img" /> </div>
            </div>
            <div className="footer-gallery-pics flex">
              <div className="footer-gellery-pic"> <img src={Home4} alt="footer-gallery" className="footer-gallery-img" /> </div>
              <div className="footer-gellery-pic"> <img src={Home5} alt="footer-gallery" className="footer-gallery-img" /> </div>
              <div className="footer-gellery-pic"> <img src={Home6} alt="footer-gallery" className="footer-gallery-img" /> </div>
            </div>
          </div>  
          </footer>
            <footer className="footer-newsletter">
            <h1 className="footer-newsletter-header">Newsletter</h1>
            <p className="footer-newsletter-content">Lorem ipsum dolor sit amet ctu relit. 
            repud ian dae?</p>
            <div className="footer-newsletter-info">
              <div className="footer-newsletter-form"> 
                <input type="email" className="newsletter-form" placeholder="Your email" />
              </div>
              <div className="footer-newsletter-btn">
                <Button title="SignUp" style={{color:"white",width:"100%",
                padding:"0.6em 0.8em",borderRadius:"7px",fontSize:"1em"}} />
                </div>
            </div>
            </footer>
        </section>
    </footer>      
         <hr className="footer-hr" />
         <section className="footer-section-3 footer-address">
          <div className="footer-address"> 
              <p className="footer-address">  
                <a href="https://github.com/BLADEHEDA" className="footer-address-link">MaaKan Real estate</a>
                <span className="footer-address-content"> All Right Reserved Designed BY</span>
                <a href="https://github.com/BLADEHEDA" className="footer-address-link">BLADEHEDA</a>
              </p>
           </div>
              <div className="footer-address-links flex">
                <div className="footer-link-address"> 
                <a href="/" className="link-address">   Home</a>
                </div>
                <div className="footer-link-address"> 
                <a href="/" className="link-address">Cookies</a>
                </div>
                <div className="footer-link-address"> 
                <a href="/" className="link-address">Help </a>
                </div>
                <div className="footer-link-address"> 
                <a href="/" className="link-address">FAQs</a>
                </div>
            
        </div>
        </section>

    </footer>
  )
}

export default Footer
