import {lazy, Suspense, useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import {db} from "./lib/firebase";
import Navbar from "./components/navbar";
import UserProfile from "./components/userprofile";
import * as ROUTES from './constants/routes'


const Main = lazy(() => import('./pages/main'))
const Login = lazy(() => import('./pages/login'))
const Signup = lazy(() => import('./pages/signup'))

function App () {
    // const [posts, setPosts] = useState([]);
    //
    // useEffect(() => {
    //     // Hook to handle the initial fetching of posts
    //
    //     const getPosts = async() => {
    //         const data = await getDocs(collection(db, 'posts'));
    //         //TODO: Ver como obtener los datos y pasarlos a los demas componentes
    //         data.forEach((doc) => {
    //             console.log(`${doc.id} => ${doc.data()}`);
    //         });
    //         setPosts(data);
    //     }
    //
    //     getPosts();
    //
    // }, []);

    return (
        <>
            <Router>
                <Suspense fallback={<p> Loading ... </p>}>
                    <Switch>
                        <Route exact path={ROUTES.MAIN} component={Main}/>
                        <Route exact path={ROUTES.LOGIN} component={Login}/>
                        <Route exact path={ROUTES.SIGNUP} component={Signup}/>
                        <Route path="/user">
                            <UserProfile />
                        </Route>
                    </Switch>
                </Suspense>
            </Router>
        </>
    );
};

export default App;