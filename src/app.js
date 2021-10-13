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
import ArticleList from "./components/articlelist";
import Post from "./components/post";

const App = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Hook to handle the initial fetching of posts

        const getPosts = async() => {
            const data = await getDocs(collection(db, 'posts'));
            //TODO: Ver como obtener los datos y pasarlos a los demas componentes
            data.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
            });
            setPosts(data);
        }

        getPosts();

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
                    <Navbar />
                    <div className="content">
                        <Switch>
                            <Route exact path="/">
                                {/*https://www.youtube.com/watch?v=1TYObnD0RCA*/}
                                {/*{posts.map((post) =>*/}
                                {/*    <Post post={post} />)*/}
                                {/*}*/}
                                {/*<Feed post={posts}/>*/}
                                <AddNewPost />
                                <ArticleList />
                            </Route>
                            <Route path="/user">
                                <UserProfile />
                            </Route>
                        </Switch>
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