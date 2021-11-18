import * as React from "react";
import {lazy, Suspense, useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import * as ROUTES from './constants/routes'
import {createTheme, ThemeProvider} from "@mui/material";
import Navbar from "./components/Navbar";
import {fetchUserData, logout} from "./utils/userUtils";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./lib/firebase";


const Dashboard = lazy(() => import('./pages/Dashboard'))
const LogIn = lazy(() => import('./pages/LogIn'))
const SignUp = lazy(() => import('./pages/SignUp'))
const FullPost = lazy( () => import('./pages/FullPost'))
const SubKinchoo = lazy(() => import('./pages/SubKinchoo'))
const UserProfile = lazy(() => import('./pages/UserProfile'))
const NotFound = lazy(() => import('./pages/NotFound'))

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light' ? {
                orangebg: { main: '#ff9f00',}, white: {main: '#ffffff'}, upvote : {main: '#FF8b60'}, downvote : {main: '#9494FF'}, disabled : {main: "#bdbdbd"},   tonalOffset: 0,
            } : {
                orangebg: {main: '#ff9f00',}, white: {main: '#ffffff'}, upvote : {main: '#FF8b60'},  downvote : {main: '#9494FF'}, disabled : {main: "#626262"}, tonalOffset: 0,
            }),
    },
    typography: {
        "fontFamily": `verdana, arial, helvetica, sans-serif`,
    }
});
function App () {
    const [userData, setUserData] = useState(null);
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        const fetchData = async () => {
            if (loading || !user) return;
            setUserData(await fetchUserData(user));
        }

        fetchData();
    }, [user, loading]);

    const logoutUser = async () => {
        await logout();
        setUserData(null);
        window.location.reload(false);
    }
    return (
        <>

            <Router>
                <Navbar user={userData} onLogout={logoutUser}/>
                <Suspense fallback={<p> Loading ... </p>}>
                    <Switch>
                        <Route exact path={ROUTES.DASHBOARD} component={Dashboard}/>
                        <Route path={ROUTES.LOGIN} component={LogIn}/>
                        <Route path={ROUTES.SIGNUP} component={SignUp}/>
                        <Route path={ROUTES.FULLPOST} component={FullPost}/>
                        <Route path={ROUTES.PROFILE} component={UserProfile}/>
                        <Route path={ROUTES.SUBKINCHOO} component={SubKinchoo}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Suspense>
            </Router>
        </>
    );
}

export default function ToggleColorMode() {
    const [mode, setMode] = React.useState('dark');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}


