import React from 'react'
import { NavLink } from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {MdFavorite} from 'react-icons/md'
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cart = useSelector(state => state.cart);
  const favorite = useSelector(state=> state.favorite);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">PRODUCTS</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
        </li>
      </ul>
      <div className='cartIcon d-flex'>
        <NavLink to='/cart' className="mx-3" >
            <AiOutlineShoppingCart style={{fontSize: "1.8rem", color: "white"}}/>
            <span className="badge" style={{right: "35px"}}>{cart.length}</span>
        </NavLink>
        <div>
        <NavLink to='/favoriteProducts'>
            <MdFavorite style={{fontSize: "1.8rem", color: "white"}}/>
            <span className="badge">{favorite.length}</span>
        </NavLink>
        </div>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
