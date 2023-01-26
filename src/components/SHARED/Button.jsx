import React from 'react'

const Button = (props) => {
  return (
    <div>
    <button className="btn-1" style={props.style} >{props.title}</button>    

    </div>
  )
}

export default Button
