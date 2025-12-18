// Fetching in client component || client side rendering (CSR) || client side fetching

'use client'

import { useEffect, useState } from "react";


export default function Post() {

    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');

        const postData = await response.json();

        console.log('Response:', postData);
        setPosts(postData);
    }

    useEffect(() => {
        fetchPosts()
    }, []);

    return (
        <>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>

        </>
    );
}