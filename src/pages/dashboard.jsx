import React,{useState} from "react";
import Header from "../cards-pag/header";
import Navbar from "../cards-pag/navbar";
import Card from "../cards-pag/card";

const Dashboard = () => {
const localdata=JSON.parse(localStorage.getItem("newData"))

console.log(localdata,"test")
    return (
        <>
         <Navbar/>
        <Header/>

        <div className="container d-flex flex-wrap justify-content-between">
        <Card/>
        </div>
        {/* <div className="dashboard">
            <h1 className="dashh1">{localdata.email}</h1>
            <h1 className="dashh1">{localdata.first}</h1>
            <h1 className="dashh1">{localdata.last}</h1>

            </div> */}

       

        </>

    )
}

export default Dashboard