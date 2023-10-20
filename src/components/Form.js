import React from "react";
import '../styles/Form.css'
import { Link } from "react-router-dom";

function Form () {
    return (
        <div className="form">
            <h3>TO BOOK A TABLE PLEASE FILL OUT THIS FORM</h3>
            <form className="form-container">
                <label htmlFor="branch" className="f-left-side">Select Branch</label>
                <select name="branch" id="branch" className="f-right-side input-box">
                    <option value="">Select a Branch</option>
                    <option value="Chicago">Chicago</option>
                    <option value="New York">New York</option>
                </select>
                <label htmlFor="date" className="f-left-side">Date</label>
                <input
                type="date"
                id="date"
                name="date"
                value="2018-07-22"
                min="2023-01-01"
                max="2023-12-31"
                className="f-right-side input-box"
                />
                <p className="f-left-side">Select time</p>
                <div className="f-right-side radio-container">
                    <div>
                        <input
                        type="radio"
                        id="lunch"
                        name="time"
                        value="lunch"
                        />
                        <label htmlFor="lunch">Lunch</label>
                    </div>
                    <div>
                        <input
                        type="radio"
                        id="dinner"
                        name="time"
                        value="dinner"
                        checked
                        />
                        <label htmlFor="dinner"> Dinner</label>
                    </div>
                </div>
                <label htmlFor="guest-number" className="f-left-side">Number of Guests</label>
                <input
                type="number"
                name="guest-number"
                required
                placeholder="1"
                className="f-right-side input-box"
                />
                <label htmlFor="name" className="f-left-side">Name</label>
                <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Romulo Oliveira"
                className="f-right-side input-box"
                />
                <label htmlFor="email" className="f-left-side">Email</label>
                <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="youremail@email.com"
                className="f-right-side input-box"
                />
                <label htmlFor="phone" className="f-left-side">Phone Number</label>
                <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="0833995510"
                className="f-right-side input-box"
                />
                <label htmlFor="instructions" className="f-left-side">Special Instructions</label>
                <textarea
                name="instructions"
                id="instructions"
                rows="6"
                cols="30"
                placeholder="Please write your text here"
                className="f-right-side input-box-textarea"
                >
                </textarea>
                <div className="privacy">
                    <input type="checkbox" required/>
                    <p>I agree with the terms and conditions and the privacy policy</p>
                </div>
                <div className="button-container">
                    <Link to="/ConfirmationPage"><input type="submit" id="submit" className="button black">Reserve a Table</input></Link>
                    <input type="submit" id="cancel" className="button black">Cancel</input>
                </div>
            </form>
        </div>
    );
};

export default Form;