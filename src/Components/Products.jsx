import React from 'react'
import { NavLink } from 'react-router-dom';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import { addViewItem } from '../store/viewItemSlice';
import { SyncLoader } from 'react-spinners';

const Products = ({ products }) => {
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
            {
              products &&
              products.length > 0 ? (products.map((product) => (
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
              ))):(
                <div className='d-flex justify-content-center align-items-center'>
                  <SyncLoader size={50} color="purple" />
                </div>
              )
              
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default Products
