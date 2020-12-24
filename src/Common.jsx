import React from "react"
import flower from "../src/Images/flower.jpg"
import {Link} from "react-router-dom"

const Common=(props)=>{
    return(<>
        <section id="header" className="">
    <div className="container">
    <div className="row pt-5">
    <div className="col-md-6 mx-auto mt-5">
         <h1>{props.name}<strong> {props.title}</strong></h1>
         <h2 className="my-3"> We are the team of Developer Websites</h2>
         <div className="mt-3">
             <Link to={props.link} className="btn btn-get-started btn-primary">{props.btname} </Link>
         </div>
    </div>
    <div className="col-md-6 mx-auto">
    <img className="image" src={flower} alt="img not found"></img>
    </div>
     </div>
     </div>

    </section>
    </>);
}
export default Common