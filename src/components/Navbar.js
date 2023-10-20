import React from "react"
import logo from '../assests/Logo.svg'
import '../styles/Navbar.css'
import {FiMenu} from 'react-icons/fi'
import {SlClose} from 'react-icons/sl'
import { useState } from "react"
import { Link } from "react-router-dom";


function Navbar () {
    const [click, setClick] = useState(true);
    const handleClick = () => setClick(!click);

    return(
        <div className="navbar">
            <div className="container">
                <img src={logo}></img>
                    <ul className={click? "nav-menu" : "nav-menu active"}>
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <Link to="about">
                            <li>About</li>
                        </Link>
                        <Link to="menu">
                            <li>Menu</li>
                        </Link>
                        <Link to="reservation">
                            <li>Reservation</li>
                        </Link>
                        <Link to="/">
                            <li>Order Online</li>
                        </Link>
                        <Link to="/">
                            <li>Login</li>
                        </Link>
                    </ul>
                    <div className="hamburger" onClick={handleClick}>
                {click ? <FiMenu className="icon" /> :<SlClose className="active"/>}
            </div>
            </div>
        </div>
    )
}

export default Navbar