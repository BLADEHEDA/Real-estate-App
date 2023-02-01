import React from 'react'
import testinonial1 from '../../images/testimonial-1.jpg'
import testinonial2 from '../../images/testimonial-2.jpg'
import testinonial3 from '../../images/testimonial-3.jpg'
import Button from '../SHARED/Button'

// let me create the testimony prop 
const Person =(props)=>{
    return(
        <div className="person">   
        <Button style={{background:'Green' }} title="yo bro"  />
        <div className="person-div">
            <div className="person-card">
                <person style={props.style} className="person-content"> {props.content}</person>
                <div className="person-info">
                    <div style={props.style} className="person-pic"> <img src={props.src} alt="" className="person-pic-img" />   </div>
                    <div className="person-data">   
                        <h1  style={props.style} className="person-name">{props.name} </h1>
                        <p  style={props.style} className="person-profession">  {props.profession} </p>
                    </div>
                </div>
            </div>
        </div>
        <Button/>
        </div>
    )
}


const Testimonial = () => {
  return (
    <div className='testimonial'>
        <div className="testimonial-preview">
            <h1 className="testimonial-header">Our Clients Say!</h1>
            <p className="testimonial-content">Eirmod sed ipsum dolor sit rebum labore magna erat. 
            Tempor ut dolore lorem kasd vero ipsum sit
            eirmod sit. Ipsum diam justo sed rebum vero dolor duo. </p>
        </div> 

        <div className="person-testimonials">
            <div className="person-testimonial">     
                <Person
                src={testinonial1}
                profession="Profession"
                name="Client Name" 
                content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Fugiat sint quo repellat aperiam nisi tempore praesentium expedita libero, fugit,
                non corporis harum provident velit dolores facilis cupiditate dicta? " 
                />
            </div>
            <div className="person-testimonial">     
                <Person
                src={testinonial2}
                profession="Profession"
                name="Client Name" 
                content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Fugiat sint quo repellat aperiam nisi tempore praesentium expedita libero, fugit,
                non corporis harum provident velit dolores facilis cupiditate dicta? " 
                />
            </div>
            <div className="person-testimonial">     
                <Person
                src={testinonial3}
                profession="Profession"
                name="Client Name" 
                content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Fugiat sint quo repellat aperiam nisi tempore praesentium expedita libero, fugit,
                non corporis harum provident velit dolores facilis cupiditate dicta? " 
                />
            </div>
        </div>

    </div>
    



  )
}

export default Testimonial
