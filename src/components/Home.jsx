import React from "react";

import Menu from "./Menu";
import Post from "./Post";

function Home() {
    return (
        <div className="home">
            <Menu />
            <Post />
        </div>
    );
}

export default Home;