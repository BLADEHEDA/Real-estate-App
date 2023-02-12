import React from 'react'
import"../ABOUT/About.css"
import "../HOME/Home.css"
import Navbar from '../SHARED/Navbar'
import Footer from '../SHARED/Footer'
import Formbar from '../HOME/Formbar'
import Main from '../SHARED/Main'
import mappin from "../../images/map-pin.png"
import email from   "../../images/email-10-16.png" 
import phone from   "../../images/phone-16.png" 

const ContactNav = () => {
  return (
    <div className='contactnav'>
       <Navbar/>
       <Main  title="Contact" content="CONTACT"/>
       <Formbar/>
       <div className="contactNav-div">
       <h1 className="contactnav-head">Contact Us </h1>
       <p className="contact0nav-content"> Eirmod sed ipsum dolor sit rebum labore
        magna erat. Tempor ut dolore lorem kasd vero
        ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo. </p>
        <section className="contact-nav-info-div">  
        <section className="contactnav-info"> 
        <article className="contact-nav-card"> 
          <div className="contactnav-info-img-div"><img src={mappin} alt="street img"
           className="contact-info-img location-img" id='location-img-img' /> </div>
          <div className="contact-info-content">123 Street, New York, USA</div>
          </article>
        </section>
          <section className="contactnav-info"> 
          <article className="contact-nav-card">  
            <div className="contactnav-info-img-div">
                <img src={email} alt=" info img list-lication" className="contact-info-img email-img" /> 
            </div>
            <div className="contact-info-content">info@example.com</div>
            </article>
          </section>
              <section className="contactnav-info">  
                <article className="contact-nav-card"> 
                <div className="contactnav-info-img-div">
                  <img src={phone} alt="phone-img" className="contact-info-img phone-img" /> </div>
                <div className="contact-info-content">+012 345 6789</div>
                </article>
            </section>
        </section>

       </div>
       <Footer/>
    </div>
  )
}

export default ContactNav
