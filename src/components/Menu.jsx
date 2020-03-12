import React from "react";
import { Link } from "react-router-dom";

function Menu() {
    return (
        <div className="menu">
            <ul>
                <li><Link to="#">Home</Link></li>
                <li><Link to="#">About</Link></li>
                <li><Link to="#">Panel</Link></li>
            </ul>
        </div>
    );
}

export default Menu;