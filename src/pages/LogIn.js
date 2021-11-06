import {useHistory, Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import FirebaseContext from "../context/firebase";
import {login} from "../services/firebase";
import * as ROUTES from "../constants/routes";
import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';



export default function LogIn() {
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
		<>
			<Grid container component="main" sx={{ height: '100vh' }}>
				<CssBaseline />
				<Grid
					item
					xs={false}
					sm={4}
					md={7}
					sx={{
						backgroundImage: 'url(https://static.onecms.io/wp-content/uploads/sites/20/2017/05/alexandra-daddario-womens-health-1-2000.jpg)',
						backgroundRepeat: 'no-repeat',
						backgroundColor: (t) =>
							t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
						backgroundSize: 'cover',
						backgroundPosition: 'initial',
					}}
				/>
				<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
					<Box
						sx={{
							my: 8,
							mx: 4,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Avatar sx={{ m: 1, bgcolor: '#ef6c00' }}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
							Sign in
						</Typography>
						<Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
							<TextField
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								autoFocus
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
							/>
							<FormControlLabel
								control={<Checkbox value="remember" color="primary" />}
								label="Remember me"
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2 }}
							>
								Sign In
							</Button>
							<Grid container>
								<Grid item xs color={"white"}>
									<Link href="#" color="white">
										Forgot password?
									</Link>
								</Grid>
								<Grid item>
									<Link href="#" underline="hover" >
										{"Don't have an account? Sign Up"}
									</Link>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</>
		// <div>
		// 	<div>
		// 		titulo, imagen, o algo capaz?
		// 	</div>
		// 	<div>
		// 		<p> Logo </p>
		//
		// 		{error && <p> Error </p>}
		//
		// 		<form onSubmit={handleLogin} method="POST">
		// 			<input aria-label="Enter your email address" type="text" placeholder="Email Address"
		// 				   className=""
		// 				   onChange={({target}) => setEmailAddress(target.value)}
		// 				   value={emailAddress}
		// 			/>
		// 			<input aria-label="Entero your password" type="password" placeholder="Password"
		// 				   className=""
		// 				   onChange={({target}) => setPassword(target.value)}
		// 				   value={password}
		// 			/>
		//
		// 		</form>
		// 		<Button variant="contained" disableElevation>
		// 			Disable elevation
		// 		</Button>
		// 	</div>
		// 	<div>
		// 		<p>
		// 			Create account
		// 			{/*Funcion de react para redirigir a otra pagina*/}
		// 			<Link to={ROUTES.SIGNUP}>
		// 				Sign up
		// 			</Link>
		// 		</p>
		// 	</div>
		// </div>
	)
}
