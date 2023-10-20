import React from "react";
import '../styles/ConfirmationPage.css'

function TransitionPage () {
    return(
        <div className="confirmation">
            <div className="confirmation-header">
                <h3>TO BOOK A TABLE PLEASE FILL OUT THIS FORM</h3>
                <p>Your confirmation information</p>
            </div>
                <div className="book-container">
                    <p className="cp-left-side">Select Branch</p>
                    <p className="cp-right-side">Chicago</p>
                    <p className="cp-left-side">Date</p>
                    <p className="cp-right-side">08/08/2023</p>
                    <p className="cp-left-side">Time</p>
                    <p className="cp-right-side">Dinner</p>
                    <p className="cp-left-side">Number of Guests</p>
                    <p className="cp-right-side">4</p>
                    <p className="cp-left-side">Name</p>
                    <p className="cp-right-side">Bruno Tameirao</p>
                    <p className="cp-left-side">Email</p>
                    <p className="cp-right-side">bruno@gmail.com</p>
                    <p className="cp-left-side">Phone number</p>
                    <p className="cp-right-side"> 08833699841</p>
                    <p className="cp-left-side">Special Instructions</p>
                    <p className="cp-right-side">We would like to have a place outside</p>
                </div>
                <div className="cp-button-container">
                    <p>Are you sure you want to proceed?</p>
                    <button className="button yellow">Update Reservation</button>
                    <button className="button red">Cancel Reservation</button>
                </div>
        </div>
    );
};

export default TransitionPage;