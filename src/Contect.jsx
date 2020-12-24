import React from 'react'
import Sdata from "./Sdata"
import "./index.css"

const Contect=()=>{

    return (
        <>
        <div className="container">
        <h2>Contect </h2>
        <div className="row">
        <div class="mb-3">
          <label for="Name" class="form-label">Name</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Mobile</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Mobile" />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Message</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
                </div>
        </div>
        </>
    );
}
export default Contect