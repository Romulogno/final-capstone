import React from "react";
import picture from '../assests/restauranfood-reduced.jpg'
import '../styles/Main.css'

function Home () {
    return (
        <div className="main">
            <div className="container">
                <div className="left-side">
                    <h2 className="title title-mob">Little Lemon</h2>
                    <p className="sub-title-white sub-title-white-mob ">Chicago</p>
                    <p className="head-text-white head-text-white-mob">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                    <button className="button yellow">Reserve a Table</button>
                </div >
                    <div className="right-side">
                        <img src={picture} className="main-img">
                    </img>
                    </div>
            </div>
        </div>
    );
};

export default Home;
