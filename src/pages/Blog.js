import React from "react";
import {useParams} from "react-router-dom";
import posts from '../data/posts.json';


function Blog() {

    const {id} = useParams();

    // filter voor post met post ID
    const dataPost = posts.filter((post) => {
        return post.id === id;
    });

    console.log(dataPost);

    return (
        <>
            <h2>{dataPost[0].title}</h2>

            <h3>Date: {dataPost[0].date}</h3>
            <p className="blog-text">
                {dataPost[0].content}
            </p>
        </>
    )
}

export default Blog;