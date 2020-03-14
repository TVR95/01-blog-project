import React, { useState } from "react";

import Post from "../../model/Post";
import instance from "../../model/Posts";

function Create() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tag, setTag] = useState('');
    const [tags, setTags] = useState([]);

    function handleCreatePost() {
        instance._data.push(
            new Post(title, content, new Date().getFullYear(), 'tag', (instance._data.length + 1) )
        );
    }

    return (
        <div className="panel-create">
            <input type="text" name="title" onChange={ event => setTitle(event.target.value) } />
            <textarea name="content" cols="30" rows="10" onChange={ event => setContent(event.target.value) } />
            <input type="text" name="tag" onChange={ event => setTag(event.target.value) } />
            <button name="add-tag">Add tag</button>
            <button name="create-post" onClick={ handleCreatePost }>Create Post</button>
        </div>
    );
}

export default Create;