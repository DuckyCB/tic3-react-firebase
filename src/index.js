import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import theme from "./components/theme";
import FirebaseContext from "./context/firebase";
import { app, db } from "./lib/firebase";
import './styles/styles.css';

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider>
			<FirebaseContext.Provider value={{ app, db}}>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<App />
			</FirebaseContext.Provider>
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
