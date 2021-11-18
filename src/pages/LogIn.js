import {useHistory, Link as RouterLink} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import FirebaseContext from "../context/firebase";
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
import { loginUser } from "../utils/userUtils";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";


export default function LogIn() {
	const history = useHistory();
	const {firebase} = useContext(FirebaseContext)

	const [emailAddress, setEmailAddress] = useState('');
	const [password, setPassword] = useState('');

	const [error, setError] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const isInvalid = password === '' || emailAddress === '';

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleLogin = async (event) => {
		event.preventDefault();

		try {

			await loginUser(emailAddress, password);
			history.push(ROUTES.DASHBOARD);
		} catch ({message}) {
			setEmailAddress('');
			setPassword('');
			// Se podria cambiar este mensaje de error
			setError(message);

		}
	};

	useEffect(() => {
		document.title = 'Kinchoo login';
	}, []);


	return (
		<>
			<Grid container component="main" sx={{ height: '100vh' }}>
				<CssBaseline />
				<Grid item xs={false} sm={4} md={7} sx={{
						backgroundImage: 'url(https://wallpapercave.com/wp/wp8554091.jpg)',
						backgroundRepeat: 'no-repeat',
						backgroundColor: (t) =>
							t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
						backgroundSize: 'cover',
						backgroundPosition: 'initial',
					}}
				/>
				<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
					<Box sx={{my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
						<Avatar sx={{ m: 1, bgcolor: '#ef6c00' }}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
							Sign in
						</Typography>
						<Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
							<TextField margin="normal" required fullWidth id="email" label="Email Address" name="email"
									   autoComplete="email" autoFocus value={emailAddress} error={error}
									   onChange={({target}) => {
										   setEmailAddress(target.value);
										   setError('');
									   }} helperText={"Error in Password or Email"}
							/>
							<TextField margin="normal" required fullWidth name="password" label="Password"
								type="password" id="password" autoComplete="current-password" value={password} error={error} onChange={({target}) => setPassword(target.value)}
							/>
							<FormControlLabel
								control={<Checkbox value="remember" color="primary" />}
								label="Remember me"
							/>
							<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
								Sign In
							</Button>
							<Grid container>
								<Grid item xs color={"white"}>
									<Typography onClick={handleClickOpen} color="inherit">
										Forgot password?
									</Typography>
									<Dialog open={open} onClose={handleClose}
										aria-labelledby="alert-dialog-title"
										aria-describedby="alert-dialog-description"
									>
										<DialogTitle id="alert-dialog-title">
											{"Forgot password?"}
										</DialogTitle>
										<DialogContent>
											<DialogContentText id="alert-dialog-description">
												¯\_(ツ)_/¯
											</DialogContentText>
										</DialogContent>
										<DialogActions>
											<Button onClick={handleClose} autoFocus>
												Agree
											</Button>
										</DialogActions>
									</Dialog>
								</Grid>
								<Grid item>
									<Typography component={RouterLink} to={ROUTES.SIGNUP} color="inherit">
										Don't have an account? Sign Up
									</Typography>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</>
	)
}
