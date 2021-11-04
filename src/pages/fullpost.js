import React, {useEffect} from "react";
import Navbar from "../components/navbar";
import Post from "../components/post";
import Comments from "../components/comments";


export default function FullPost({post}) {

    useEffect(() => {
        document.title = 'Kinchoo - {post.title}'
    }, []);

    return (
        <>
            <Navbar />
            <Post post={post} key={post.id}/>
            <Comments post={post}/>
        </>
    )
}
