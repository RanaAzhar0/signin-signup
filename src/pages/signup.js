import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [formdata, setformdata] = useState('')
    const handleChange = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value })
    }
    const Navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
      
        var newdata = JSON.parse(localStorage.getItem("data"))
        if (newdata) {
            newdata.push(formdata)
            localStorage.setItem("data", JSON.stringify(newdata))
        }
      
        else {
            localStorage.setItem("data", JSON.stringify([formdata]))
        }


        
        Navigate("/signin")
    }
    console.log(formdata, "state")
    return (
        <>

        <div className="main">
            <h1 className="heading">SignUp Form</h1>
            <div className="forms">
                <form>
                    <input name="first" type="text" placeholder="First Name" onChange={handleChange} />
                    <input name="last" type="text" placeholder="Last Name" onChange={handleChange} />
                    <input name="age" type="number" placeholder="Age" min="18" max="50" onChange={handleChange} />
                    <input name="addr" type="text" placeholder="Address" onChange={handleChange} />
                    <input name="email" type="email" placeholder="Enter your email" onChange={handleChange} />
                    <input name="password" type="password" placeholder="Enter your password" onChange={handleChange} />


                    <button onClick={handleSubmit}>submit</button>



                </form>
            </div>
        </div>
        </>
    )
}

export default SignUp