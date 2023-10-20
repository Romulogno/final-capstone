import React from "react"
import '../styles/Home.css'
import Main from "../components/Main"
import Specials from "../components/Specials"
import Testimonials from "../components/Testimonials"
import AboutUs from "../components/AboutUs"
import ReservationTag from "../components/ReservationTag"


function Home () {
    return (
        <div className="home">
            <>
                <ReservationTag/>
                <Main/>
                <Specials/>
                <Testimonials/>
                <AboutUs/>
            </>
        </div>
    )
}

export default Home;