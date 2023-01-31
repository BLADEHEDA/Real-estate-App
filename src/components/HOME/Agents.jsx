import React from 'react'

const agents =[
{
    img:require("../../images/team-1.jpg"),
    icon1:require("../../images/facebook-3-16.png"),
    icon2:require("../../images/twitter-2-16.png"),
    icon3:require("../../images/instagram-2-16.png"),
    name:"Full Name",
    designation: "Designation"
},
{
    img:require("../../images/team-2.jpg"),
    icon1:require("../../images/facebook-3-16.png"),
    icon2:require("../../images/twitter-2-16.png"),
    icon3:require("../../images/instagram-2-16.png"),
    name:"Full Name",
    designation: "Designation"
},
{
    img:require("../../images/team-3.jpg"),
    icon1:require("../../images/facebook-3-16.png"),
    icon2:require("../../images/twitter-2-16.png"),
    icon3:require("../../images/instagram-2-16.png"),
    name:"Full Name",
    designation: "Designation"
},
{
    img:require("../../images/team-4.jpg"),
    icon1:require("../../images/facebook-3-16.png"),
    icon2:require("../../images/twitter-2-16.png"),
    icon3:require("../../images/instagram-2-16.png"),
    name:"Full Name",
    designation: "Designation"
}
]
const Agents = () => {
  return (
    <div className='agents'>
    <div className="agents-previw"> 
        <h1 className="agents-header">Property Agents </h1>
        <p className="agents-content">  Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor
        ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
     </div>
     <div className="agents-imfo-div">
     {agents.map(agent=>{
        const {img,icon1,icon2,icon3,name,designation} =agent
        console.log( "the name is : "+ name);
        return(
           
                <section className="agent-card">
                <div className="agent-img"> <img src={img} alt="agent-img" className="agent-img-pic" /> </div>
                <div className="agents-info"> 
                <div className="agent-icons-div flex  ">
                        <div className="agent-icon"> <img src={icon1} alt="icon-facebook" className="agents-icons-img" />   </div>
                        <div className="agent-icon"><img src={icon2} alt="icon-twitter" className="agents-icons-img" /> </div>
                        <div className="agent-icon"><img src={icon3} alt="icono-instagrem" className="agents-icons-img" /> </div>
                    </div>
                        <p className="agent-name"> {name} </p>
                        <p className="agent-designation">  {designation} </p>
                </div>
                </section>  
         
        )
     })  }
     
     </div>
      
    </div>
  )
}

export default Agents
