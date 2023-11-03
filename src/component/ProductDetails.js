import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Data } from "./data/Data";
import { useEffect } from "react";

export function ProductDetails() {
    const id = useParams();
    const [cartBtn,setCartBtn]=useState("Add To Cart")
    const productDetails = Data.filter(x => x.id == id.id);
  const dispatch = useDispatch();
  
    const handleCartBtn = () => {
        if (cartBtn === "Add To Cart") {
            setCartBtn("Remove From Cart");
            dispatch({ type: "ADD_ITEM", payload: productDetails[0] })
           
        }
        else {
            setCartBtn("Add To Cart");
            dispatch({type:"DELETE_ITEM",payload:productDetails[0]})            
        }
    }
    return (
      <div className="container my-5 py-3">
        <div className="row ">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img
              src={productDetails[0].image}
              alt={productDetails[0].title}
              height="400px"
            />
          </div>
          <div className="col-md-6">
            <h1 className="display-5 fw-bold">{productDetails.title}</h1>
            <hr />
            <h2 className="my-4">${productDetails[0].price}</h2>
            <p className="lead">{productDetails[0].description}</p>
            <button
              onClick={handleCartBtn}
              className="btn btn-outline-primary my-5"
            >
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    );
}