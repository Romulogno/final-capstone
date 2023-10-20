import React from "react";
import Specials from "../components/Specials";

function Menu (props) {
    return (
        <div className="menu">
            <Specials test={props.test}/>
        </div>
    );
};

export default Menu;
