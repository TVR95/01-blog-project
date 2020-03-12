import React from "react";
import instance from "../model/Posts";

import Header from "./Header";
import Footer from "./Footer";
import Post from "./Post";

function Home() {
    return (
        <div className="home">
            <Header />
            {
                instance._data.map(element => 
                    <Post title={element.title} content={element.content} date={element.uploadDate} tags={element.tags} key={element.id} />
                )
            }
            <Footer />
        </div>
    );
}

export default Home;