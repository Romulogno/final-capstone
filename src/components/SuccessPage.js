import React from "react";
import '../styles/SuccessPage.css';
import {FaCheckCircle} from 'react-icons/fa'

function SuccessPage () {
    return(
        <div className="successPage">
            <div className="success-icon"><FaCheckCircle/></div>
            <p className="reservation-card-title">Congratulations! You have successfully reserved a table!</p>
            <p className="reservation-card-subtitle">Thank you for choosing Little Lemon!</p>
            <button className="button yellow">View</button>
            <button className="button black">Close</button>
        </div>
    );
};

export default SuccessPage;