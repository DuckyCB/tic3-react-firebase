import { ReactComponent as BellIcon } from './components/assets/icons/bell.svg';
import { ReactComponent as MessengerIcon } from './components/assets/icons/messenger.svg';
import { ReactComponent as CaretIcon } from './components/assets/icons/caret.svg';
import { ReactComponent as PlusIcon } from './components/assets/icons/plus.svg';

import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import Post from "./components/post";
import db from "./firebase/firebaseConfig";
import Navbar from "./components/navbar";
import NavItem from "./components/navitem";
import DropdownMenu from "./components/dropdown-menu";

const App = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Hook to handle the initial fetching of posts

        const getPosts = async() => {
            const data = await getDocs(collection(db, 'posts'));
            // Esto muestra el dato guardado en firebase
            console.log(data.docs[0].data())
            // TODO: Arreglar el setPosts
            setPosts(data);
        }

        getPosts();

        // db.collection("posts")
        //     .orderBy("createdAt", "desc")
        //     .get()
        //     .then((querySnapshot) => {
        //         const data = querySnapshot.docs.map((doc) => ({
        //             id: doc.id,
        //             ...doc.data(),
        //         }));
        //
        //         setPosts(data);
        //     });

    }, []);

    return (
        <>
            <Navbar>
                <NavItem icon={<PlusIcon />} />
                <NavItem icon={<BellIcon />} />
                <NavItem icon={<MessengerIcon />} />

                <NavItem icon={<CaretIcon />}>
                    <DropdownMenu></DropdownMenu>
                </NavItem>
            </Navbar>
            <div>
                <div>
                    {posts.docs[0].data().title}
                    {/*{posts.map((post) => (*/}
                    {/*    <Post post={post} key={post.id} />*/}
                    {/*))}*/}
                </div>
            </div>
        </>
    );
};

export default App;