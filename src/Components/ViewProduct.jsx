import React from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import {MdFavorite} from 'react-icons/md'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import { addFavorite } from '../store/favoriteSlice';

const ViewProduct = () => {
  const selectedItem = useSelector(state => state.viewItem.objectArray)
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product))
  }

  const hadnleAddToFavorite = (favoriteItem)=>{
    dispatch(addFavorite(favoriteItem))
  }
  
  return (
    <>
    <div className="viewProduct">
      {
        selectedItem.map(element =>{
          return(
            <div className='row p-5' key={element.id}>
            <div className="col-md-6" style={{height: "500px"}}>
            <img src={element.image.url} alt={element.name} style={{height: "100%"}}/>
            </div>
            <div className="col-md-6 product-details">
              <h4>{element.name}</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iste harum hic nobis eum, repudiandae et doloremque minima voluptatum laudantium id praesentium consectetur omnis amet quod. Quaerat alias atque molestiae.</p>
              <p>Rs: {element.price.raw}</p>
              <div className="buttons" style={{display: "flex", flexWrap: "wrap"}}>
        
            <div className="glowing-buttons">
        <NavLink className="favoriteBtn" onClick={()=> hadnleAddToFavorite(element)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Add To Favorite <MdFavorite style={{marginLeft: "5px"}}/>
        </NavLink>
        <NavLink className="cartBtn" onClick={()=> handleAddToCart(element)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Add To Cart <BsFillCartPlusFill style={{marginLeft: "5px"}}/>
        </NavLink>
      </div>
              
            </div>
            </div>
            
            </div>
          )
        })
      }
      </div>
    </>
  )
}

export default ViewProduct
