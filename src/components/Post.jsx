import React from "react";

function Post(props) {
    return (
        <div className="post">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <h5>{props.date}</h5>
            <h5>{props.tags}</h5>
        </div>
    );
}

export default Post;