import React from "react";
import '../styles/CancelWarning.css'

function CancelWarning () {
    return(
        <div className="cancel-warning-container">
                <div className="cancel-warning">
                    <p className="reservation-card-title">Are you sure, you want to cancel your reservation?</p>
                    <p className="reservation-card-subtitle">This action cannot be undone</p>
                    <div className="cancel-warning-button-container">
                        <button className="button yellow">Yes</button>
                        <button className="button red">NO</button>
                    </div>
                </div>
        </div>
    );
};

export default CancelWarning;