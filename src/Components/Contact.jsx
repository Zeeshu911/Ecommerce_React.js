import React from 'react'
import { NavLink } from 'react-router-dom'

const Contact = () => {
  return (
    <>
<div className="row contactPage">
  <div className="col-md-10">
<form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
  </div>

  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Email</label>
    <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Enter Email"/>
  </div>

  <div className="form-group">
  <label htmlFor="exampleInputPassword1">Contact</label>
  <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Enter Contact"/>
  </div>

  <div className="form-group">
  <label htmlFor="exampleInputPassword1">Contact</label>
  <textarea type="number" className="form-control" rows={10} cols={30} id="exampleInputPassword1" placeholder="Enter Your Query"/>
  </div>
<div className="glowing-buttons">
  <NavLink className="cartBtn" style={{borderRadius: "7px", marginTop: "1.7rem"}}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          SUBMIT
  </NavLink>
  </div>
</form>
</div>
</div>
    </>
  )
}

export default Contact
