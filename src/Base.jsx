import React from 'react'
import Home from "./Home"
import About from "./About"
import Contect from "./Contect"
import {Switch,Route, Redirect} from "react-router-dom" 
import Services from './Services'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Navbar from "./Navbar"

const Base=()=>{
    return (
        <>
        <Navbar />
        <Switch>
            
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/service" component={Services}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/contect" component={Contect}></Route>
            <Redirect to="/"></Redirect>

        </Switch>
        </>
    );
}
export default Base