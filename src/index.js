import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import FirebaseContext from "./context/firebase";
import { app, db } from "./lib/firebase";
import './styles/styles.css';

ReactDOM.render(
	<React.StrictMode>
		<FirebaseContext.Provider value={{ app, db }}>
			<App/>
		</FirebaseContext.Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
