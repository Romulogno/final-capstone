import React from "react";
import '../styles/SuccessPage.css';
import {FaCheckCircle} from 'react-icons/fa'

function SuccessCancel () {
    return(
        <div className="successPage">
            <div className="success-icon"><FaCheckCircle/></div>
            <p className="reservation-card-title">Congratulations! You have successfully cancelled a reservation!</p>
            <button className="button black">Close</button>
        </div>
    );
};

export default SuccessCancel;