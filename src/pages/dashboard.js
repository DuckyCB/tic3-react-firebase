import Navbar from "../components/navbar";
import React, {useEffect} from "react";
import Timeline from "../components/timeline";
import Sidebar from "../components/sidebar";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../components/theme";
import {Grid} from "@mui/material";

export default function Dashboard() {

	useEffect(() => {
		document.title = 'Kinchoo'
	}, []);

	return (
		<>
			<ThemeProvider theme={theme}>
				<Navbar />
				<Grid container spacing={2} justifyContent="left" alignItems="flex-start">
					<Grid item xs={8}>
						<Timeline />
					</Grid>
					<Grid item xs={4}>
						<Sidebar />
					</Grid>
				</Grid>
			</ThemeProvider>
		</>
	)
}