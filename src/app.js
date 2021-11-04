import {lazy, Suspense, useEffect,} from "react";
import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import UserProfile from "./components/userprofile";
import * as ROUTES from './constants/routes'
import {createTheme, ThemeProvider} from "@mui/material";


const Dashboard = lazy(() => import('./pages/dashboard'))
const Login = lazy(() => import('./pages/login'))
const Signup = lazy(() => import('./pages/signup'))
const FullPost = lazy( () => import('./pages/fullpost'))
const NotFound = lazy(() => import('./pages/notfound'))

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                orangebg: {
                    main: '#ff9f00',
                },
                white: {
                    main: '#ffffff'
                },
                tonalOffset: 0,
            }
            : {
                orangebg: {
                    main: '#ff9f00',
                },
                white: {
                    main: '#ffffff'
                },
                tonalOffset: 0,
            }),
    },
});
function App () {
    return (
        <>
            <Router>
                <Suspense fallback={<p> Loading ... </p>}>
                    <Switch>
                        <Route exact path={ROUTES.DASHBOARD} component={Dashboard}/>
                        <Route path={ROUTES.LOGIN} component={Login}/>
                        <Route path={ROUTES.SIGNUP} component={Signup}/>
                        <Route path={ROUTES.FULLPOST} component={FullPost}/>
                        <Route component={NotFound}/>
                        <Route path="/user">
                            <UserProfile/>
                        </Route>
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


