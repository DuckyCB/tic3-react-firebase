import {useHistory, Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import FirebaseContext from "../context/firebase";
import {login} from "../services/firebase";
import * as ROUTES from "../constants/routes";


export default function Login() {
	const history = useHistory();
	const {firebase} = useContext(FirebaseContext)

	const [emailAddress, setEmailAddress] = useState('');
	const [password, setPassword] = useState('');

	const [error, setError] = useState('');
	const isInvalid = password === '' || emailAddress === '';

	const handleLogin = async (event) => {
		event.preventDefault();

		try {
			// await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
			await login(emailAddress, password);
			history.push(ROUTES.DASHBOARD);
		} catch ({message}) {
			setEmailAddress('');
			setPassword('');
			setError(message);
			console.error(message);
		}
	};

	useEffect(() => {
		document.title = 'Kinchoo login';
	}, []);


	return (
		<div>
			<div>
				titulo, imagen, o algo capaz?
			</div>
			<div>
				<p> Logo </p>

				{error && <p> Error </p>}

				<form onSubmit={handleLogin} method="POST">
					<input aria-label="Enter your email address" type="text" placeholder="Email Address"
						   className=""
						   onChange={({target}) => setEmailAddress(target.value)}
						   value={emailAddress}
					/>
					<input aria-label="Entero your password" type="password" placeholder="Password"
						   className=""
						   onChange={({target}) => setPassword(target.value)}
						   value={password}
					/>
					<button disabled={isInvalid} type="submit"
							className="">
						Log In
					</button>
				</form>
			</div>
			<div>
				<p>
					Create account
					{/*Funcion de react para redirigir a otra pagina*/}
					<Link to={ROUTES.SIGNUP}>
						Sign up
					</Link>
				</p>
			</div>
		</div>
	)
}