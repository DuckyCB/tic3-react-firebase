import { ReactComponent as BellIcon } from './components/assets/icons/bell.svg';
import { ReactComponent as MessengerIcon } from './components/assets/icons/messenger.svg';
import { ReactComponent as CaretIcon } from './components/assets/icons/caret.svg';
import { ReactComponent as PlusIcon } from './components/assets/icons/plus.svg';

import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
// import Post from "./components/post";
import db from "./firebase/firebaseConfig";
import Navbar from "./components/navbar";
import NavItem from "./components/navitem";
import DropdownMenu from "./components/dropdown-menu";
import UserProfile from "./components/userprofile";
import Feed from "./components/feed";
import AddNewPost from "./components/add-new-post";
import Footer from "./components/footer";

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

        console.log(posts)

        // console.log(posts.find(p =>))

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
            <Router>
                <div className="App">
                    <Navbar>
                        <NavItem icon={<PlusIcon />} />
                        <NavItem icon={<BellIcon />} />
                        <NavItem icon={<MessengerIcon />} />

                        <NavItem icon={<CaretIcon />}>
                            <DropdownMenu/>
                        </NavItem>
                    </Navbar>
                    <div className="content">
                        <Switch>
                            <Route exact path="/">
                                <Feed />
                            </Route>
                            <Route path="/user">
                                <UserProfile />
                            </Route>
                        </Switch>
                        <AddNewPost />
                        <div>
                            {/*{posts.docs[0].data().title}*/}
                            {/*{posts.map((post) => (*/}
                            {/*    <Post post={post} key={post.id} />*/}
                            {/*))}*/}
                        </div>
                    </div>
                    <Footer />
                </div>
            </Router>
        </>
    );
};

export default App;