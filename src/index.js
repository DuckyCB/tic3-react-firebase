import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import theme from "./components/theme";
import FirebaseContext from "./context/firebase";
import { app, db } from "./lib/firebase";
import './styles/styles.css';
import {ThemeProvider} from "@mui/material";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<FirebaseContext.Provider value={{ app, db}}>
				<App/>
			</FirebaseContext.Provider>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
