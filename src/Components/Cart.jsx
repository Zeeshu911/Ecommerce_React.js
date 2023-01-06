import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../store/cartSlice";
import { NavLink } from "react-router-dom";
import { emptyCart } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch(removeItem(product));
  };
  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };

  let price = 0;
  let total = 0;
  let discount = 0;

  cartItems.forEach((element) => {
    price += element.price.raw;
  });

  console.log(price);

  if (price > 0 && price < 2000) {
    total = price - (price * 5) / 100;
    discount = 5;
  } else if (price > 2000 && price < 10000) {
    total = price - (price * 10) / 100;
    discount = 10;
  } else if (price > 10000 && price < 50000) {
    total = price - (price * 12) / 100;
    discount = 12;
  } else {
    total = price - (price * 15) / 100;
    discount = 15;
  }
  return (
    <>
      <div id="cart" className="row p-4">
        <div className="col-md-9">
          {cartItems.length > 0 ? (
            cartItems.map((product) => {
              return (
                <div key={product.id} className="card p-0">
                  <img
                    className="card-img-top"
                    src={product.image.url}
                    alt="Card cap"
                  />

                  <h5 className="card-title">{product.name}</h5>
                  <div className="deleteBtn">
                    <AiFillDelete onClick={() => handleRemove(product.id)} />
                  </div>
                </div>
              );
            })
          ) : (
            <h3>Cart is empty</h3>
          )}
        </div>
        <div className="col-md-3 cartAmount">
              <div className="total-products">
            Total Products: {cartItems.length}
          </div>
          <div className="sub-total">Sub Total: {price}</div>
          <div className="discount">
            With {discount}% discount: {total}
          </div>
          <div className="total-amount">Total amount: {total}</div>          
          <div className="glowing-buttons">
            {cartItems.length > 0 ?
            (<NavLink onClick={()=> handleEmptyCart()} to="/thanksgiving" className="cartBtn mt-5">Purchase Now</NavLink>)
            :
            (<button disabled={true} className="cartBtn mt-5 btn">Purchase Now</button>)}
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
