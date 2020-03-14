import React from "react";
import { useParams } from "react-router-dom";

import instance from "../model/Posts";

function PostContent() {
    let { id } = useParams();
    let data = instance._data[parseInt(id, 10)];

    return (
        <div className="postContent">
            <h2>{ data.title }</h2>
            <h1>IT WORKS</h1>
        </div>
    );
}

export default PostContent;