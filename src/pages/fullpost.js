import React, {useEffect} from "react";
import Navbar from "../components/navbar";
import Post from "../components/post";
import Comments from "../components/comments";
import {useParams} from "react-router-dom";
import {collection, getDocs, onSnapshot, orderBy, query, where} from "firebase/firestore";
import {db} from "../lib/firebase";


export default function FullPost() {
    const [post, setPost] = React.useState([]);
    const { postid } = useParams();

    useEffect(() => {
        async function getPost() {
            const q = query(collection(db, "posts"), where('id', '==', {postid}));
            onSnapshot(q, (querySnapshot) => {
                // const _post = [];
                // getDocs()
                // querySnapshot.forEach((doc) => {
                //     _post.push({
                //         id: doc.id,
                //         ...doc.data(),
                //     });
                //
                // });
                // TODO: Recuperar el post y guardarlo
                // jaja no compila hasta que alguien lo haga :V
                getDocs()
                setPost(_post);
            });
        }
        getPost();
        setPost(postid)
        document.title = 'Kinchoo - {post.title}'
    }, [postid]);

    return (
        <>
            <Navbar />
            HOLA QUE ASHE

            {postid}
            <Post post={post} key={post.id}/>
            {/*<Comments post={post}/>*/}
        </>
    )
}
