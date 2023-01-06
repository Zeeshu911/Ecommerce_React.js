import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BsFillCartPlusFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { addItem } from '../store/cartSlice';
import { addViewItem } from '../store/viewItemSlice';

const Favorites = () => {
    const favoriteProducts = useSelector(state=> state.favorite);
    console.log(favoriteProducts);

      const dispatch = useDispatch();
    
      const addToCart = (product)=>{
        dispatch(addItem(product))
      }
      const handleViewItem = (item)=>{
        dispatch(addViewItem(item))
      }
  return (
    <>
<div className="shell" style={{minHeight: "800px"}}>
        <div className="container">
          <div className="row">
            <h1 className='text-center'>FAVORITES</h1>
            {
              favoriteProducts.length > 0 ?(
                favoriteProducts.map((product) => (
                  <div className="col-md-3" key={product.id}>
                    <div className="wsk-cp-product">
                      <div className="wsk-cp-img">
                        <img src={product.image.url} alt={product.name} className="img-responsive" style={{ height: "22rem" }} />
                      </div>
                      <div className="wsk-cp-text">
                        <div className="title-product">
                          <h3>{product.name}</h3>
                        </div>
                        <div className="card-footer">
                          <div className="wcf-left"><span className="price">Rs: {product.price.raw}</span></div>
                          <div className="wcf-right" onClick={()=> addToCart(product)}><NavLink className="buy-btn" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><BsFillCartPlusFill /></NavLink></div>
                        </div>
                        <div className="details-btn">
                          <NavLink to="/viewProduct" onClick={()=> handleViewItem(product)} className='viewBtn'>View Details</NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ):(
                <h3>No Item in Favorites</h3>
              )
              
            }
          </div>
        </div>
      </div>


    </>
  )
}

export default Favorites
