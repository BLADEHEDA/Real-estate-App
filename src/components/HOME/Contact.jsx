import React from 'react'
import  callagent from  "../../images/call-to-action.jpg"
import Button from '../SHARED/Button'
import phone from "../../images/icons8-phone-30.png"
import  calendar from  "../../images/icons8-calendar-50.png"

const Contact = () => {
  return (
    <section className='contact'>
    <article className="contact-div ">  
        <div className="contact-left">  
        <div className="contact-image"><img src={callagent} alt="callagent" className="contact-img" /> </div>
        </div>
        <div className="contact-right">
        <h1 className="contact-header">Contact With Our Certified Agent</h1>
        <p className="contact-content">Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum sit sit 
        diam justo sed vero dolor duo. </p>
        <div className="contact-btns">
        <div className="contact-btn"> <button className="button"><img src={phone} alt="phene call" /> Make A Call  </button>    </div> 
        <div className="contact-btn"> <button className="button"><img src={calendar} alt="Getappointment" /> Get Appointment  </button>    </div> 

         {/* */ }
        </div>
        </div>
    </article>
    </section>
  )
}

export default Contact
