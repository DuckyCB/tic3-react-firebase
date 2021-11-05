import React, {useEffect, useState} from "react";
import Navbar from "../components/navbar";
import Post from "../components/post";
import Comments from "../components/comments";
import {useParams} from "react-router-dom";
import {collection, getDocs, onSnapshot, orderBy, query, where, doc, getDoc} from "firebase/firestore";
import {db} from "../lib/firebase";

export default function FullPost() {

    const [post, setPost] = useState(undefined);
    const { postid } = useParams();

    useEffect(async () => {

        // const q = query(collection(db, "posts"), where('id', '==', {postid}));
        try {
            const docRef = doc(db, 'posts', `${postid}`);
            const _post = await getDoc(docRef);
            console.log(_post.data());
            setPost(_post.data());
        } catch (err) {
            console.error(err);
        }

        document.title = 'Kinchoo - {post.title}';

    }, []);


    return (
        <>
            <Navbar />
            {post !== undefined ? <Post post={post} key={post.id}/> : <p>Loading...</p>}
            {/*<Comments post={post}/>*/}
        </>
    )
}
