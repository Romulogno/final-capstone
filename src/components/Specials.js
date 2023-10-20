import React from "react";
import MenuCard from "./MenuCard";
import '../styles/Specials.css';
import {MenuItems} from '../helpers/MenuItems'

function Specials (props) {
    return(
        <div className="specials">
            <div className="container">
                <div className="specials-upper-side">
                    <h3 className="specials-title"> This Week Specials!</h3>
                    <button className="button yellow" onClick={props.test}>Online Menu</button>
                </div>
                <div className="specials-bottom-side">
                    {MenuItems.map((menuItem, key)=> {
                        return(
                            <MenuCard
                            key={key}
                            name={menuItem.name}
                            price={menuItem.price}
                            itemText={menuItem.itemText}
                            image={menuItem.image}
                            />
                        )
                    })}
                </div>
            </div>

        </div>
    );
};

export default Specials;