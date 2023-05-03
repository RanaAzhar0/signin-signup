import React from "react";
import { Route, Routes } from 'react-router-dom'
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";

const AppRoutes = () => {
    return (
        <>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/dashboard" element={<Dashboard className="container d-flex flex-wrap justify-content-between"/>}/>

        </Routes>
            {/* <Dashboard cl/> */}
            </>
    )
}

export default AppRoutes