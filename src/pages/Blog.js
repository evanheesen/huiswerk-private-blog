import React from "react";
import { useParams } from "react-router-dom"

function Blog() {

    const { id } = useParams();

    return (
        <div>
            Het blog-id is {id}
        </div>
    )
}

export default Blog;