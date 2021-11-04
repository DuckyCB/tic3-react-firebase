import Navbar from "../components/navbar";
import React, {useEffect} from "react";
import Timeline from "../components/timeline";
import Sidebar from "../components/sidebar";
import {Grid} from "@mui/material";

export default function Dashboard() {

	useEffect(() => {
		document.title = 'Kinchoo'
	}, []);

	return (
		<>
			<Navbar />
			<Grid container spacing={2} justifyContent="center" alignItems="flex-start">
				<Grid item xs={8}>
					<Timeline />
				</Grid>
				<Grid item xs={4}>
					<Sidebar />
				</Grid>
			</Grid>
		</>
	)
}
