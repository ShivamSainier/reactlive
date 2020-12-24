import React from 'react'
import Card from "./Card";
import Sdata from "./Sdata"
import "./index.css"

const Services=()=>{
    return(
        <>
        <div className="container">
        <div className="my-5">
        <h2 className="tab-center"> Our Services</h2>
        <div className="row">
        {Sdata.map((val,ind)=>{return (<Card key={ind} imgsrc={val.imgsrc} title={val.title} />);})}
       </div>
       </div>
    </div>

   

        </>
    );
}
export default Services