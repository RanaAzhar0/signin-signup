import React, { useState } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai"
import Carticon from "../cards-pag/cartIcon";


const Navbar = () => {
    const [addCart,setaddCart] = useState(false)

    const toggleCart=()=>{
        setaddCart(!addCart)
    }
    return (
        <>
            <nav>
                <nav className="navbar navbar-light bg-light p-3">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <h3>Bootstrap</h3>
                        </a>
                        <AiOutlineShoppingCart type='button' onClick={toggleCart} />
                        {addCart &&<Carticon 
                        content={
                            <>
                            </>
                        }
                        handleClose={toggleCart}
                        />}


                    </div>
                </nav>
            </nav>
        </>
    )
}

export default Navbar