import React from "react";
import '../styles/ReservationTag.css'

function ReservationTag (){
    return(
        <div className="reservation-tag">
            <p>You currently have an active reservation as of today.</p>
            <button className="black">View Reservation</button>
        </div>
    );
};

export default ReservationTag;