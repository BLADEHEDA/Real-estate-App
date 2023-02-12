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
    <main className='contactnav'>
       <Navbar/>
       <Main  title="Contact" content="CONTACT"/>
       <Formbar/>
       <section className="contactNav-div">
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
            <section className="map-div"> 
              <article className="map-div-left"></article>
              <article className="map-div-right">
                <p className="mao-div-content"> </p>
                <forem className="map-form"> 
                  <div className="map-form-div-input">  
                  <input className='map-form-inpput' type="text" />
                  </div> 

                    <div className="map-form-div-input">  
                    <input className='map-form-inpput' type="text" />
                    </div> 

                 <div className="map-form-div-input">  
                  <input className='map-form-inpput' type="text" />
                  </div>

                  <div className="map-form-div-input">  
                  <textarea name="message" id="messsage" cols="30" rows="10" className='map-form-text-area'>

                  </textarea>
                  </div>

                </forem>

              </article>
            </section>
       </section>
       <Footer/>
    </main>
  )
}

export default ContactNav
