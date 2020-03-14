import React from "react";
import instance from "../model/Posts";

import Post from "./Post";

function Home() {
    return (
        <div className="home">
            {
                instance._data.map(element => 
                    <Post title={element.title} content={element.content} date={element.uploadDate} tags={element.tags} id={element.id} key={element.id} />
                )
            }
        </div>
    );
}

export default Home;