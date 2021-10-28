import {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import UserProfile from "./components/userprofile";
import * as ROUTES from './constants/routes'


const Main = lazy(() => import('./pages/main'))
const Login = lazy(() => import('./pages/login'))
const Signup = lazy(() => import('./pages/signup'))

function App() {

    return (
        <>
            <Router>
                <Suspense fallback={<p> Loading ... </p>}>
                    <Switch>
                        <Route exact path={ROUTES.MAIN} component={Main}/>
                        <Route exact path={ROUTES.LOGIN} component={Login}/>
                        <Route exact path={ROUTES.SIGNUP} component={Signup}/>
                        <Route path="/user">
                            <UserProfile/>
                        </Route>
                    </Switch>
                </Suspense>
            </Router>

        </>
    );
}

export default App;