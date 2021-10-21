import {Link, useHistory} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";
import {doesUsernameExist} from "../services/firebase";


export default function Signup() {
	const history = useHistory();
	const {firebase} = useContext(FirebaseContext)

	const [username, setUsername] = useState('');
	const [fullName, setFullName] = useState('');
	const [emailAddress, setEmailAddress] = useState('');
	const [password, setPassword] = useState('');

	const [error, setError] = useState('');
	const isInvalid = password === '' || emailAddress === '';

	const handleSignup = async (event) => {
		event.preventDefault();

		const usernameExists = await doesUsernameExist(username);
		// try {
		// } catch (e) {
		// }
	};

	useEffect(() => {
		document.title = 'Kinchoo signup';
	}, []);


	return (
		<div>
			<div>
				titulo, imagen, o algo capaz?
			</div>
			<div>
				<p> Logo </p>

				{error && <p> Error </p>}

				<form onSubmit={handleSignup} method="POST">
					<input aria-label="Enter a username" type="text" placeholder="Username"
						   className=""
						   onChange={({target}) => setUsername(target.value)}
						   value={username}
					/>
					<input aria-label="Enter your full name" type="text" placeholder="Full name"
						   className=""
						   onChange={({target}) => setFullName(target.value)}
						   value={fullName}
					/>
					<input aria-label="Enter your email address" type="text" placeholder="Email Address"
						   className=""
						   onChange={({target}) => setEmailAddress(target.value)}
						   value={emailAddress}
					/>
					<input aria-label="Enter a password" type="password" placeholder="Password"
						   className=""
						   onChange={({target}) => setPassword(target.value)}
						   value={password}
					/>
					<button disabled={isInvalid} type="submit"
							className="">
						Sign up
					</button>
				</form>
			</div>
			<div>
				<p>
					Already have an account?
					<Link to={ROUTES.LOGIN}>
						Log in
					</Link>
				</p>
			</div>
		</div>
	)
}
