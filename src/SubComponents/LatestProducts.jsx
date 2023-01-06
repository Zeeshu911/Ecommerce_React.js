import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addViewItem } from "../store/viewItemSlice";
import {SyncLoader} from 'react-spinners'

const LatestProducts = ({ products }) => {
  // TO GET THE FIRST THREE PRODUCTS FROM OUR API
  const firstThreeProducts = products.slice(-3);

  const dispatch = useDispatch();

  const handleAddItem = (product)=>{
    dispatch(addViewItem(product))
  }
  return (
    <>
      <div className="latestProducts pt-5 pb-5">
        <h3 className="text-center">LATEST PRODUCTS</h3>
        <div className="row pt-5">
          { firstThreeProducts.length > 0? (firstThreeProducts.map((product) => {
            return (
              <div
                className="col-md-4 d-flex justify-content-center pb-3"
                key={product.id}
              >
                <div
                  className="card"
                >
                  <img
                    className="card-img-top"
                    src={product.image.url}
                    alt="Card cap"
                  />
                  <div
                    className="card-body"
                  >
                    <NavLink className="viewBtn" to="/viewProduct" onClick={()=> handleAddItem(product)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          VIEW
          </NavLink>
                  </div>
                </div>
              </div>
            );
          })):(
            <SyncLoader size={50} color={"purple"}/>
          ) 
          }
        </div>
      </div>
    </>
  );
};

export default LatestProducts;
