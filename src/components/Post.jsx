import React from "react";
import { Link } from "react-router-dom";

function Post(props) {
    return (
        <div className="post">
            <Link key={props.id} to={`/post/${props.id}`}><h2>{props.title}</h2></Link>
            <p>{props.content}</p>
            <h5>{props.date}</h5>
            <h5>{props.tags}</h5>
        </div>
    );
}

export default Post;