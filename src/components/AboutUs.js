import React from "react";
import '../styles/AboutUs.css'
import picture1 from '../assests/AboutUs Mario and Adrian reduced1.jpg'
import picture2 from '../assests/about usrestaurant.jpg'

function AboutUs () {
    return(
        <div className="aboutUs">
            <div className="container">
                <div className="left-side">
                <h2 className="title title-mob">Little Lemon</h2>
                    <p className="sub-title sub-title-mob ">Chicago</p>
                    <p className="head-text head-text-mob">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                </div>
                <div className="right-side">
                    <img src={picture2} className="aboutUs-pic over-pic1" ></img>
                    <img src={picture1} className="aboutUs-pic over-pic2"></img>
                </div>
            </div>
        
        </div>
    );
}

export default AboutUs;