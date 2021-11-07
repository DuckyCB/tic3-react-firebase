import Navbar from "../components/navbar";
import React, {useEffect} from "react";
import Timeline from "../components/timeline";
import {Grid} from "@mui/material";
import TopSubKinchoos from "../components/sidebar/TopSubKinchoos";
import AboutUs from "../components/sidebar/AboutUs";

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
					<TopSubKinchoos/>
					<AboutUs/>
				</Grid>
			</Grid>
		</>
	)
}
