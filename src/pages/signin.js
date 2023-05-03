import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
const SignIn = () => {
    const [userdata, setuserdata] = useState("")
    const [status, setstatus] = useState(false)
    const handleChange = (e) => {
        setuserdata({ ...userdata, [e.target.name]: e.target.value })
    }
    const Navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const alluser = JSON.parse(localStorage.getItem("data"))

        alluser.forEach(obj => {
            if (obj.email == userdata.email && obj.password == userdata.password) {
                localStorage.setItem("newData",JSON.stringify(obj))

                setstatus(true)
                Navigate("/dashboard")
            }
        });

    }
    return (
          <div className="main2">
            <h1 className="heading">SignIn Page</h1>
        <div className="forms">
            <form>
                <input name="email" type="email" placeholder="Enter your email" onChange={handleChange} />
                <input name="password" type="password" placeholder="Enter your password" onChange={handleChange} />
                <button onClick={handleSubmit}>Login</button>
                <h2>{status ? ("valid user") : ("invalid user to log in")}</h2>

            </form>

        </div>
        </div>
    )
}

export default SignIn