import React from 'react'
import  callagent from  "../../images/call-to-action.jpg"
import phone from "../../images/icons8-phone-30.png"
import  calendar from  "../../images/icons8-calendar-30.png"

const Contact = () => {
  return (
    <section className='contact-div'>
    <article className="contact-card ">  
        <div className="contact-left">  
           <div className="contact-image"><img src={callagent} alt="callagent" className="contact-img" /> </div>
        </div>
        <div className="contact-right">
          <h1 className="contact-header">Contact With Our Certified Agent</h1>
          <p className="contact-content">Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum sit sit 
          diam justo sed vero dolor duo. </p>
          <div className="contact-btns flex  ">
              <div className="contact-btn-div mr-3"> 
              <button className="contact-btn1 ">  
                <div className="button-inner-btn flex"> 
                <div className='inner-ntn mr-2' ><img src={phone} alt="phene call" className='phene-call-img' /></div>         
                <div className='inner-btn'> Make A Call </div>
                </div>
              </button> 
              </div> 
                  <div className="contact-btn-div">
                    <button className="contact-btn2">
                      <div className="button-inner-btn flex"> 
                        <div className="button-inner-btn mr-2">
                        <img src={calendar} alt="Getappointment" className='cal-call-img ' />
                        </div>
                            <div className="button-inner-btn">
                            Get Appointment
                            </div>
                      </div>
                    </button> 
                  </div> 
                

          {/* */ }
          </div>
        </div>
    </article>
    </section>
  )
}

export default Contact
