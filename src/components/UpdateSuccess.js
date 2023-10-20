import React from "react";
import '../styles/SuccessPage.css';
import {FaCheckCircle} from 'react-icons/fa'

function UpdateSuccess () {
    return(
        <div className="successPage">
            <div className="success-icon"><FaCheckCircle/></div>
            <p className="reservation-card-title">Congratulations! You have successfully Updated your reservation</p>
            <p className="reservation-card-subtitle">Thank you for choosing Little Lemon!</p>
            <button className="button yellow">View</button>
            <button className="button black">Close</button>
        </div>
    );
};

export default UpdateSuccess;