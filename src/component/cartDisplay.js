import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { DELET_ITEM } from "../redux/Actions";

export const CartDisplay = () => {
  const disPatch = useDispatch();
    const state = useSelector((state) => state.AddItems.carts);
    console.log(state);
  const cartItems = (cartItem) => {
    const handleClose = (item) => {
      disPatch(DELET_ITEM(item));
    };
      return (
       <div className="px-4 my-5 pg-light rounded-3" key={cartItem.id}>
     <div className="container py-4">
          <button
            // onClick={() => handleClose(cartItem)}
            className="btn-close float-end"
            aria-label="Close"
          >Delete</button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img src={cartItem.img} alt="" height={200} width="180px" />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead fw-blod">{`$${cartItem.price}`}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const emptyCart = () => {
    return (
      <>
        <h2>Your Cart Is Empty</h2>
      </>
    );
  };
  console.log(emptyCart());
  return (
    <>
      {state.length ===0 && emptyCart()}
    {state.length !==0 && state.map(cartItems)}
    </>
  );
};
