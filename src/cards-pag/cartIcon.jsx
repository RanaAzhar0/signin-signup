import React from 'react'

const cartIcon = (props) => {
    const cartData = JSON.parse(localStorage.getItem("data"))
    console.log(cartData)
    return (

        <div className="popup-box" style={{
            position: "absolute", width: "18rem", right: "50px", top: "10vh", zIndex: "3"
        }}>
            <div className="box border border-danger">
                {props.content}
                <span className="close-icon" onClick={props.handleClose}>

                    {
                        cartData.map((ele) => {
                            console.log(ele, "ele");
                            return (
                                <>
                                    <h2>{ele.ids}</h2>
                                    <img src={ele.img[0]} style={{ height: "10vh", width: "10vw" }} />
                                    <h1>{ele.name}</h1>
                                    <h1>{ele.category}</h1>
                                    <h1>{ele.price}</h1>
                                </>
                            )
                        })
                    }


                    <button style={{ cursor: "pointer" }}>Close</button></span>


            </div>
        </div>


    )
}

export default cartIcon