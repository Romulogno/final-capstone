import React from "react";
import '../styles/Testimonials.css'
import TestimonialsCard from "./TestimonialsCard";
import {TestimonialsItems} from "../helpers/TestimonialsItems"


function Testimonials () {
    return (
        <div className="testimonials">
            <div className="container">
                <h2 className="test-title sub-title">Testimonials</h2>
                <div className="test-card-container">
                    {TestimonialsItems.map((testItem, key)=> {
                        return(
                            <TestimonialsCard
                            key={key}
                            name={testItem.name}
                            image={testItem.image}
                            rate={testItem.rate}
                            reviewText={testItem.reviewText}
                        />
                        )
                    })}
                </div>
                        </div>
            </div>
    );
}

export default Testimonials;