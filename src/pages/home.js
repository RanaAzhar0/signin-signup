import React, { useState } from "react";
import { Link } from "react-router-dom"
const Home = () => {




    return (
        <>
        <div className="homeback">
            <h1 className="heading">WellCome to Our Pages</h1>

            <div className="logingform">
                <button className="signi"> <Link to="/signup" >SignUp</Link></button>
                <button className="signu">  <Link to="/signin"> SignIn</Link></button>


            </div>
            </div>
        </>

    )
}

export default Home