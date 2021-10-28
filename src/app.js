import {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import UserProfile from "./components/userprofile";
import * as ROUTES from './constants/routes'


const Dashboard = lazy(() => import('./pages/dashboard'))
const Login = lazy(() => import('./pages/login'))
const Signup = lazy(() => import('./pages/signup'))
const NotFound = lazy(() => import('./pages/notfound'))

export default function App () {

    return (
        <>
            <Router>
                <Suspense fallback={<p> Loading ... </p>}>
                    <Switch>
                        <Route exact path={ROUTES.DASHBOARD} component={Dashboard}/>
                        <Route path={ROUTES.LOGIN} component={Login}/>
                        <Route path={ROUTES.SIGNUP} component={Signup}/>
                        <Route component={NotFound}/>
                        <Route path="/user">
                            <UserProfile />
                        </Route>
                    </Switch>
                </Suspense>
            </Router>
        </>
    );
}