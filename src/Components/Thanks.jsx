import React from 'react'
import {BsFillCartCheckFill} from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const Thanks = () => {
  return (
    <>
    <div className="thanksgiving">
      <div className='checkedCartIcon'>
            <BsFillCartCheckFill style={{fontSize: "30vw", marginTop: "3rem", color: "green"}}/>
      </div>
      <div className="glowing-buttons" style={{display: "flex", justifyContent: "center",
    height: "300px",
    alignItems: "center"}}>
      <NavLink to="/" className="gotoHomeBtn">
        Go to home page
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </NavLink>
      </div>
      </div>
    </>
  )
}

export default Thanks
