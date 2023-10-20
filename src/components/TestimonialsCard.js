import React from "react";
import '../styles/TestimonialsCard.css'

function TestimonialsCard ({name, rate, reviewText, image}) {
    return (
        <div className="testimonials-card-container">
            <p className="test-name">{name}</p>
            <img src={image} className="test-image"></img>
            <p className="test-rate">{rate}</p>
            <p className="test-text">{reviewText}</p>
        </div>
    );
}

export default TestimonialsCard