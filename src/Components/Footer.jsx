import React from 'react'
import {AiFillFacebook, AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
            <footer className="footer text-center text-white">

<div className="container p-4">

  <section className="mb-4">

    <a className="btn btn-floating m-1 footerIcon" rel='noreferrer' target="_blank" href="https://www.facebook.com/profile.php?id=100030535123397" role="button"
      ><AiFillFacebook/></a>


    <a className="btn btn-floating m-1 footerIcon" rel='noreferrer' target="_blank" href="https://twitter.com/Zeeshu911" role="button"
      ><AiFillTwitterCircle/></a>

    <a className="btn btn-floating m-1 footerIcon" rel='noreferrer' target="_blank" href="https://www.instagram.com/zeeshanzk69/" role="button"
      ><AiFillInstagram/></a>


    <a className="btn btn-floating m-1 footerIcon" rel='noreferrer' target="_blank" href="https://www.google.com" role="button"
      ><AiFillLinkedin/></a>


    <a className="btn btn-floating m-1 footerIcon" rel='noreferrer' target="_blank" href="https://github.com/Zeeshu911" role="button"
      ><AiFillGithub/></a>
  </section>


  <section className="">
    <form action="">

      <div className="row d-flex justify-content-center">
 
        <div className="col-auto">
          <p className="pt-2">
            <strong style={{color: "#c3c317"}}>Sign up for our newsletter</strong>
          </p>
        </div>
    


        <div className="col-md-5 col-12">
   
          <div className="form-outline form-white mb-4">
            <input type="email" id="form5Example21" className="form-control" placeholder='Email Address'/>
          </div>
        </div>
     

    
        <div className="col-auto">
        
          <button type="submit" className="btn submit-btn mb-4">
            Subscribe
          </button>
        </div>
      
      </div>
     
    </form>
  </section>
 
  <section className="mb-4">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
      repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
      eum harum corrupti dicta, aliquam sequi voluptate quas.
    </p>
  </section>



  <section className="">
  
    <div className="row footerLinks">
      
      <div className="col-lg-12 col-md-12 mb-4 mb-md-0">

        <ul className="list-unstyled mb-0">
          <li>
            <NavLink to="/" className="text-white">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products" className="text-white">Products</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="text-white">Contact</NavLink>
          </li>
        </ul>
      </div>
    
    </div>
   
  </section>
  
</div>

{/* <div className="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
  © 2020 Copyright:
  <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
</div> */}

</footer>
    </>
  )
}

export default Footer
