import React from "react";
import posts from '../data/posts.json';

function BlogPosts() {

    console.log(posts);
    // const list = document.getElementById('list')

    return (
        <>

            <h1>Blog overzichtspagina</h1>
            <p>Aantal blogposts: {posts.length}</p>

            {/*// mappen over posts en dan link*/}

            {/*// uitzoeken hoe map functie werkt in Edhub*/}
            {posts.map}

        </>
    )
}

export default BlogPosts;