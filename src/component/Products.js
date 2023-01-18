import React from "react";
import { NavLink } from "react-router-dom";
import { Data } from "./data/Data";


export function Products() {
    const displayItem =Data.map((item)=>  {
        return (
          <div class="card my-5 py-4" style={{ width: "18rem" }} key={item.id}>
            <img
              src={item.image}
              class="card-img-top"
              height="300px"
              alt={item.title}
            />
            <div class="card-body text-center">
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text">${item.price}</p>
              <NavLink
                to={`/products/${item.id}`}
                class="btn btn-outline-primary"
              >
                Buy Now
              </NavLink>
            </div>
          </div>
        );
})
    return (
      <div className="container">
        <div className="row">
          <h5>Products</h5>
          <hr />
          <div className="container">
            <div className="row justify-content-around">{displayItem}</div>
          </div>
        </div>
      </div>
    );
}