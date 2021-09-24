import React from "react";
import posts from '../data/posts.json';
import { Link } from "react-router-dom";

function BlogPosts() {

    console.log(posts);
    const listPosts = posts.map((post) => {
        return <li key={post.id}><Link to={"/blog/"+post.id}>{post.title}</Link></li>
    });

    return (
        <>

            <h1>Blog overzichtspagina</h1>
            <p>Aantal blogposts: {posts.length}</p>
            <ul>{listPosts}</ul>

        </>

    )
};

export default BlogPosts;