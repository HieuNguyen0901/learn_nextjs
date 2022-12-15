/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";

function content() {
    const [posts, setPosts] = useState([])
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts=>{
            setPosts(posts);
        })
    },[])

    return (
        <>
            <ul>
                {posts.map(post=>(
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </>
    );
};

export default content;