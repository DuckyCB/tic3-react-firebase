import {Link, useHistory} from "react-router-dom";
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
	const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState(false);

	// const [error, setError] = useState('');
    const { register, handleSubmit, setError, formState: { errors }, clearErrors } = useForm();

    const usernameRef = useRef(null);
	const isInvalid = password === '' || emailAddress === '';
    const { onChange, ...rest} = register('username');

	const handleSignup = async (event) => {
        event.preventDefault();
        
		try {
            if (hasWhiteSpace(username)) {
                setUsernameError(true);
                setError('username', {
                    type: 'manual',
                    message: 'username can\'t have white spaces'
                });
                return;
            }
			const user = await signUp(emailAddress, password, firstName, lastName, username);
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
					<Box component="form" noValidate onSubmit={handleSignup} sx={{ mt: 3 }}>
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
                                <TextField required ref={usernameRef} error={usernameError} helperText={errors.username && errors.username.message} fullWidth id="username" label="username" value={username}
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
									autoComplete="email" value={emailAddress}
									onChange={({target}) => setEmailAddress(target.value)}
								/>
							</Grid>
							<Grid item xs={8}>
								<TextField required fullWidth name="password" label="Password" type="password"
									id="password" autoComplete="new-password" value={password}
									onChange={({target}) => setPassword(target.value)}
								/>
							</Grid>
						</Grid>
						<Button color= "inherit" type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
							Sign Up
						</Button>
						<Grid container justifyContent="flex-end">
							<Grid item>
								<Link href="#" variant="body2">
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</>
	)
}
