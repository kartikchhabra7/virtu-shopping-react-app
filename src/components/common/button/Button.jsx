import React from 'react'
// import "./button.css"
const Button = (props) => {
  return (
    <>
    <button {...props}>{props.label}</button>
    </>
  )
}

export default Button