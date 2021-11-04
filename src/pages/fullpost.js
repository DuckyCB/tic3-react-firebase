import React, {useEffect} from "react";
import Navbar from "../components/navbar";
import theme from "../components/theme";
import {ThemeProvider} from "@emotion/react";
import Post from "../components/post";
import Comments from "../components/comments";


export default function FullPost({post}) {

    useEffect(() => {
        document.title = 'Kinchoo - {post.title}'
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <Post post={post} key={post.id}/>
            <Comments post={post}/>
        </ThemeProvider>
    )
}