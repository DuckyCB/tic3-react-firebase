import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {ChakraProvider} from "@chakra-ui/react";
// import FirebaseContext from "./context/firebase";
// import firebase from "./lib/firebase";
// import {FieldValue} from "firebase/firebase-firestore";

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider>
			{/*<FirebaseContext.Provider value={{ firebase, FieldValue}}>*/}
				<App />
			{/*</FirebaseContext.Provider>*/}
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
