import React from "react";
import '../styles/Footer.css'
import picture from '../assests/aboutUs chef B reduced1 .jpg'
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaLinkedin  } from 'react-icons/fa'


function Footer () {
    return(
        <div className="footer">
            <div className="container">
                <div className="footer-1">
                <img className="footer-pic" src={picture}></img>
                </div>
                <div className="footer-links">
                    <h4>Dormant Navigation</h4>
                    <p>Home</p>
                    <p>About</p>
                    <p>Menu</p>
                    <p>Reservations</p>
                    <p>Order Online</p>
                    <p>Login</p>
                </div>
                <div className="footer-links">
                <h4>Contact</h4>
                    <p>123 Rua das figueiras - Santo Andre</p>
                    <p>353 837251275</p>
                    <p>littlelemon@littlelemon.com</p>
                </div>
                <div className="footer-links">
                <h4>Social Links</h4>
                    <div className="icons">
                        <div className="icon"><FaFacebookSquare/></div>
                        <div className="icon"><FaInstagram/></div>
                        <div className="icon"><FaTwitterSquare/></div>
                        <div className="icon"><FaLinkedin/></div>
                    </div>
                </div>
            </div>
            <p className="copyright">&copy; 2023 Romulo Oliveira Dev</p>
        </div>
    );
};

export default Footer;
