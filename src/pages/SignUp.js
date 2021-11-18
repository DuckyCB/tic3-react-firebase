import {Link as RouterLink, Link, useHistory} from "react-router-dom";
import {useContext, useEffect, useState, useRef} from "react";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";
import {signUp} from "../services/firebase";
import Grid from "@mui/material/Grid";
import {Container, CssBaseline, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { loginUser } from "../utils/userUtils";


export default function SignUp() {
	const history = useHistory();
	const {firebase} = useContext(FirebaseContext)

	const [username, setUsername] = useState('');
	// const [fullName, setFullName] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	const [emailAddress, setEmailAddress] = useState('');
	const [emailError, setEmailError] = useState(false);
	const [password, setPassword] = useState('');
	const [passwordError, setPasswordError] = useState(false);
	const [usernameError, setUsernameError] = useState(false);
	const [avatar, setAvatar] = useState('');


	// const [error, setError] = useState('');
	const { register, handleSubmit, setError, formState: { errors }, clearErrors } = useForm();

	const usernameRef = useRef(null);
	const isInvalid = password === '' || emailAddress === '';
	const { onChange, ...rest} = register('username');

	const handleSignup = async (event) => {
		event.preventDefault();

		try {
			if (hasWhiteSpace(username) || username.length < 4) {
				setUsernameError(true);
				setError('username', {
					type: 'manual',
					message: 'username can\'t have white spaces or shorter than 4 characters'
				});
				return;
			} else {
				setUsernameError(false);
			}

			if (!hasAt(emailAddress)) {
				setEmailError(true);
				setError('password', {
					type: 'manual',
					message: 'Invalid email'
				});
				return;
			} else {
				setEmailError(false);
			}
			if (password.length < 6) {
                setPasswordError(true);
                setError('password', {
                    type: 'manual',
                    message: 'Password must be at least 6 characters'
                });
                return;
            } else {
				setPasswordError(false);
			}

			const user = await signUp(emailAddress, password, firstName, lastName, username, avatar);
			await loginUser(emailAddress, password);
			history.push(ROUTES.DASHBOARD);
		} catch ({message, code}) {
			if (message === 'username already exists') {
				setUsernameError(true);
				setError('username', {
					type: 'manual',
					message: 'username already exists'
				});
			}
			// setError(code);
			console.error(message);
		}
	};
	const hasAt = (email) => {
        return email.includes('@');
    };
	const hasWhiteSpace = str => str.indexOf(' ') >= 0;

	useEffect(() => {
		document.title = 'Kinchoo signup';
	}, []);


	return (
		<>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: '#ef6c00' }}>
						{/*<LockOutlinedIcon />*/}
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign up
					</Typography>
					<Box component="form"  onSubmit={handleSignup} sx={{ mt: 3 }}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField autoComplete="given-name" name="firstName" required fullWidth id="firstName"
										   label="First Name" autoFocus value={firstName}
										   onChange={({target}) => setFirstName(target.value)}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField required fullWidth id="lastName" label="Last Name" name="lastName"
										   autoComplete="family-name" value={lastName}
										   onChange={({target}) => setLastName(target.value)}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField required ref={usernameRef} error={usernameError} helperText={errors.username && errors.username.message} fullWidth id="username" label="Username" value={username}
										   onChange={({target}) => {
											   clearErrors('username');
											   setUsernameError(false);
											   setUsername(target.value);
										   }}
										   {...rest}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField required fullWidth id="email" label="Email Address" name="email"
										   autoComplete="email" value={emailAddress} error={emailError} helperText={emailError ? "Invalid email" : ""}
										   onChange={({target}) => setEmailAddress(target.value)}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField required fullWidth name="password" label="Password" type="password"
										   id="password" autoComplete="new-password" value={password} error={passwordError} helperText={passwordError && errors.password.message}
										   onChange={({target}) => setPassword(target.value)}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField fullWidth name="avatar" label="Avatar link" type="avatar"
										   id="avatar" value={avatar}
										   onChange={({target}) => setAvatar(target.value)}
								/>
							</Grid>
						</Grid>
						<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
							Sign Up
						</Button>
						<Grid container justifyContent="flex-end">
							<Grid item>
								<Typography component={RouterLink} to={ROUTES.LOGIN} color="inherit">
									Already have an account? Sign in
								</Typography>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</>
	)
}

