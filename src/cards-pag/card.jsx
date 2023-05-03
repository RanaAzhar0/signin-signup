import React, { useEffect, useState } from "react";
import axios from "axios";
const Card = () => {

    const [myData, setmyData] = useState([{title:'' , id: '', category: '', images: [''], price: '',discountPercentage:''
}]);
    useEffect(() => {
        axios
            .get('https://dummyjson.com/products')
            .then((res) => setmyData(res.data.products));

    }, [0])
    // console.log(myData, "test")
    const clickMe = (e,i) => {
        // e.preventDefault()
        let mydaata={name:e.title, img:e.images, ids:e.id,price:e.price,category:e.category}
        
    console.log(e,"this click")
      
        var newdata = JSON.parse(localStorage.getItem("data"))
        if (newdata) {
            newdata.push(mydaata)
            localStorage.setItem("data", JSON.stringify(newdata))
        }
      
        else {
            localStorage.setItem("data", JSON.stringify([mydaata]))
    }
        }
    return (
        <>
            {
                myData.map((ele,i) => {
                    return (
                        <>
                            <div onClick={()=>clickMe(ele)}className="card mt-3 border border-danger" style={{ width: "15rem", height: "60vh" }}>
                                <img src={ele.images[0]} style={{ width: "100%", height: "28vh" }} className="card-img-top" alt="..." />
                                <div className="card-body  d-flex flex-column justify-content-around" style={{ backgroundColor: "darkcyan" }}>
                                    <p className="card-text text-center">ID:{" " + ele.id}</p>
                                    <h6 className="card-text text-center">{ele.title}</h6>
                                    <h6 className="card-text text-center">{ele.category}</h6>
                                    <div className="row d-flex justify-content-between" style={{ width: "100%", margin: "auto auto" }}>
                                        <p className="card-text text-center">Price: {ele.price}</p>
                                        <p className="card-text text-center">Discount:{ele.discountPercentage}%</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}
export default Card






// [{title: 'iphone 9', images:[0] }]