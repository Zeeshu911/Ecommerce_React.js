import React from 'react'
import '../App.css'
import {NavLink} from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
        <div className='landingPage'>
            <h1 className='col-md-6 col-sm-12 col-xsm-12 title' style={{color: "whitesmoke"}}><span><span style={{ color: "#c3c317"}}>ORDER </span>THE NEW LATEST </span><span style={{color: "#d72631"}}>GAMING<span style={{color: "#a2d5c6"}}> PRODUCTS</span></span> FROM OUR STORE </h1>
            {/* <NavLink to="/products">ORDER NOW</NavLink> */}
            <div className="glowing-buttons">
        <NavLink className="orderBtn" to="/products" style={{border: 'none'}}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          ORDER NOW
        </NavLink>
      </div>
        </div> 
    </>
  )
}

export default LandingPage
