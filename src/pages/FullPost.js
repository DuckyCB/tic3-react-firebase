import React, {useEffect, useState} from "react";
import Navbar from "../components/navbar";
import Post from "../components/post";
import Comments from "../components/comments";
import {useParams} from "react-router-dom";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../lib/firebase";
import {Stack} from "@mui/material";

export default function FullPost() {

    const [post, setPost] = useState(undefined);
    const { postid } = useParams();

    useEffect(async () => {

        try {
            const docRef = doc(db, 'posts', `${postid}`);
            const _post = await getDoc(docRef);
            console.log(_post.data());
            setPost(_post.data());
        } catch (err) {
            console.error(err);
        }

        document.title = 'p/{post.title}';

    }, []);


    return (
        <>
            <Navbar />
            <Stack spacing={4} justifyContent="center" alignItems="center">
                {post !== undefined ? <Post post={post} fullRender="true" key={post.id}/> : <p>Loading...</p>}
            </Stack>
            {/*<Comments post={post}/>*/}
        </>
    )
}
