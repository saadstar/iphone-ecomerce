import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


export function Cart() {
    const carts = useSelector((state) => state.AddItems.carts);
    return (
        <>
            <NavLink to="/cart" className="btn btn-outline-primary ms-2">
                <span className="fa fa-shopping-cart me-1">Cart({carts.length})</span>
            </NavLink>
      </>
    );
}