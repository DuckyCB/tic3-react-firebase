import {Link, useHistory} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";
import {doesUsernameExist, signUp} from "../services/firebase";
import Grid from "@mui/material/Grid";
import {Container, CssBaseline, FormControlLabel, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


export default function Signup() {
	const history = useHistory();
	const {firebase} = useContext(FirebaseContext)

	// const [username, setUsername] = useState('');
	// const [fullName, setFullName] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	const [emailAddress, setEmailAddress] = useState('');
	const [password, setPassword] = useState('');

	const [error, setError] = useState('');
	const isInvalid = password === '' || emailAddress === '';

	const handleSignup = async (event) => {
		event.preventDefault();

		try {
			const user = await signUp(emailAddress, password, firstName, lastName);
			history.push(ROUTES.DASHBOARD);
		} catch ({message, code}) {
			setError(code);
			console.error(message);
		}
	};

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
								<TextField
									autoComplete="given-name"
									name="firstName"
									required
									fullWidth
									id="firstName"
									label="First Name"
									autoFocus
									onChange={({target}) => setFirstName(target.value)}
									value={firstName}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id="lastName"
									label="Last Name"
									name="lastName"
									autoComplete="family-name"
									onChange={({target}) => setLastName(target.value)}
									value={lastName}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
									onChange={({target}) => setEmailAddress(target.value)}
									value={emailAddress}
								/>
							</Grid>
							<Grid item xs={8}>
								<TextField
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="new-password"
									onChange={({target}) => setPassword(target.value)}
									value={password}
								/>
							</Grid>
						</Grid>
						<Button
							color= "inherit"
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
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
