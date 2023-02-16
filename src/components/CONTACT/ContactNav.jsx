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
import Button from '../SHARED/Button'

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
                <p className="mao-div-content">The contact form is currently inactive. Get a functional and working contact form with
                 Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. Download Now. </p>
                <forem className="map-form"> 
                <div className="form-input-info-wrapp"> 
                  <div className="map-form-div-input">  
                  <input className='map-form-inpput' type="text" placeholder='Tour Name' />
                  </div> 

                    <div className="map-form-div-input">  
                    <input className='map-form-inpput' type="email"  placeholder='Your Email' />
                    </div>
                 </div> 

                 <div className="map-form-div-input">  
                  <input className='map-form-inpput' type="text"  placeholder=' Subject' />
                  </div>

                  <div className="map-form-div-input">  
                  <textarea name="message" id="messsage" cols="10" rows="1" className='map-form-text-area' placeholder='Message'>

                  </textarea>
                  </div>
                  <div className="map-form-btn">  <Button  title=" Send Message"
                           style={{ color:"white", padding:"1em 2em",borderRadius:"5px" }}  />  </div>
                </forem>

              </article>
            </section>
       </section>
       <Footer/>
    </main>
  )
}

export default ContactNav
