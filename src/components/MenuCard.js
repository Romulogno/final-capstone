import React from "react";
import "../styles/MenuCard.css"
import {MdOutlineDeliveryDining} from 'react-icons/md'


function MenuCard ({name, price, itemText, image}) {
    return(
        <div className="card-container">
            <div className="upper-side">
                <img className="card-image" src={image}></img>
            </div>
            <div className="bottom-side">
                <p className="card-title">{name}</p>
                <p className="card-price">{price}</p>
                <p className="card-text">{itemText}</p>
                <p className="card-order">Order a delivery </p>
                <MdOutlineDeliveryDining className="icon"/>
            </div>
        </div>
    );
}

export default MenuCard;