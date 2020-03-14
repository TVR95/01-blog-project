import React from "react";
import { Link, Route } from "react-router-dom";

import Create from "./Create";

function Panel() {
    return (
        <div className="panel">
            <div className="panel__leftpart">
                <ul>
                    <li><Link to="/panel/create">Create post</Link></li>
                    <li><Link to="/panel/edit">Edit post</Link></li>
                    <li><Link to="/panel/delete">Delete post</Link></li>
                </ul>
            </div>

            <Route path="/panel/create" component={ Create } />
        </div>
    );
}

export default Panel;