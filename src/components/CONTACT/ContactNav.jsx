import React from 'react'
import { useState,useEffect } from 'react'
import { MapContainer, TileLayer, useMap,Map,  Marker, Popup } from 'react-leaflet'
// import { Map,  Marker, Popup,MapContainer, TileLayer, useMap } from "react-leaflet-universal";
import "leaflet/dist/leaflet.css";
import 'leaflet/dist/leaflet.css';
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

  // the customisez data for the map virw
  // const L = require("leaflet");
// const map = L.map('map').setView([0, 0], 13);
// const tileUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

//  L.tileLayer(tileUrl, {
//     maxZoom: 18,
//     attribution: false,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1
// }).addTo(map);

// const locationIcon = L.icon({
//     iconUrl: "./images/icon-location.svg",
//     iconSize: [35, 35],
//     iconAnchor: [15, 15]
// });

// const marker = L.marker([0, 0], {icon: locationIcon}).addTo(map);

  // fetch the map from the Api and configure it to render 
    const [users, setUsers] = useState([])
  
    const fetchData = () => {
      fetch('https://ipapi.co/json/')
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data)
          console.log(data);
          console.log("data is above and users os below");
          console.log(users);
          alert("yo")
        })
    }
  
    useEffect(() => {
      fetchData()
    }, [])

    // subjected to chsnges 
    // React.useEffect(() => {
    //   const L = require("leaflet");
  
    //   delete L.Icon.Default.prototype._getIconUrl;
  
    //   L.Icon.Default.mergeOptions({
    //     iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    //     iconUrl: require("leaflet/dist/images/marker-icon.png"),
    //     shadowUrl: require("leaflet/dist/images/marker-shadow.png")
    //   });
    // }, []);
  
    // return (
    //   <div>
    //     {users.length > 0 && (
    //       <ul>
    //         {users.map(user => (
    //           <li key={user.id}>{user.name}</li>
    //         ))}
    //       </ul>
    //     )}
    //   </div>
    // )

  // end of lines subjected to chnges 
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
              <article className="map-div-left">
      {/* in here is the div  to render the information about the map  */}
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
              </article>
              <article className="map-div-right">
                <p className="mao-div-content">The contact form is currently inactive. Get a functional and working 
                contact form with  Ajax & PHP in a few minutes. Just copy and paste the files,
               add a little code and you're done <span className="span download">  Download Now. </span> </p>
                <form className="map-form"> 
                <div className="form-input-info-wrapp"> 
                  <div className="map-form-div-input input1">  
                  <input className='map-form-inpput' type="text" placeholder='Tour Name' />
                  </div> 

                    <div className="map-form-div-input input2">  
                    <input className='map-form-inpput' type="email"  placeholder='Your Email' />
                    </div>
                 </div> 

                 <div className="map-form-div-input">  
                  <input className='map-form-inpput' type="text"  placeholder=' Subject' />
                  </div>

                  <div className="map-form-div-input">  
                  <textarea name="message" id="messsage" rows="5" className='map-form-text-area' placeholder='Message'>

                  </textarea>
                  </div>
                  <div className="map-form-btn">  <Button  title=" Send Message"
                           style={{width:"100%", color:"white", padding:"1em 2em",borderRadius:"5px" }}  />  </div>
                </form>

              </article>
            </section>
       </section>
       <Footer/>
    </main>
  )
}

export default ContactNav
