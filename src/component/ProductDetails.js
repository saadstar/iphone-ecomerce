import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Data } from "./data/Data";
import {ADD_ITEM} from "../redux/Actions"
import { DELET_ITEM } from "../redux/Actions";

export function ProductDetails() {
    const id = useParams();
    const [cartBtn,setCartBtn]=useState("Add To Cart")
    const productDetails = Data.filter(x => x.id == id.id);
    const producta = productDetails[0];
    const dispatch=useDispatch()

    const HandleCartBtn = (producta) => {
        if (cartBtn === "Add To Cart") {
            setCartBtn("Remove From Cart");
            dispatch(ADD_ITEM(producta))
        }
        else {
            setCartBtn("Add To Cart");
            dispatch(DELET_ITEM(producta))
            
        }
    }
    return (
        <div className="container my-5 py-3">
            <div className="row ">
                <div className="col-md-6 d-flex justify-content-center mx-auto product">
                    <img src={producta.image} alt={producta.title} height="400px" />
                </div>
                <div className="col-md-6">
                    <h1 className="display-5 fw-bold">{producta.title}</h1>
                    <hr />
                    <h2 className="my-4">${producta.price}</h2>
                    <p className="lead">{producta.description}</p>
                    <button onClick={()=>HandleCartBtn()} className="btn btn-outline-primary my-5">{ cartBtn}</button>
                </div>
            </div>          
        </div>
    )
}