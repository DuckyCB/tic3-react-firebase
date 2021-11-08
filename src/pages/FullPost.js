import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import Comments from "../components/Comments";
import {useParams} from "react-router-dom";
import {doc, onSnapshot} from "firebase/firestore";
import {db} from "../lib/firebase";
import {Skeleton, Stack} from "@mui/material";

export default function FullPost() {

    const [post, setPost] = useState(undefined);
    const { postid } = useParams();

    useEffect(() => {

        async function fetchPost() {
            try {
                const docRef = doc(db, 'posts', `${postid}`);
                onSnapshot(docRef, (snapshot) => {
                    setPost({id: snapshot.id, ...snapshot.data()});
                });
                document.title = post ? `p/${post.title}` : 'p/';
            } catch (err) {
                console.error(err);
            }
        }
        fetchPost()

    }, []);


    return (
        <>
            <Navbar />
            <Stack spacing={4} justifyContent="center" alignItems="center">
                {post !== undefined ?
                    <Post post={post} fullRender="true" key={post.id}/>
                    :
                    <Skeleton animation="wave" variant="rectangular" width={ 800 } height={ 700 } />
                }
                {post !== undefined ?
                    <Comments post={post}/>
                    :
                    <Skeleton animation="wave" variant="rectangular" width={ 800 } height={ 150 } />
                }
            </Stack>
        </>
    )
}
