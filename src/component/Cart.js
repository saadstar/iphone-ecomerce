import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AddItems } from "../redux/AddItems";


export function Cart() {
    const getData = useSelector((state) => state.AddItems.carts);
    console.log(getData);
    return (
        <>
            <NavLink to="/cart" className="btn btn-outline-primary ms-2">
                <span className="fa fa-shopping-cart me-1">Cart({getData.length})</span>
            </NavLink>
      </>
    );
}