import Navbar from "../components/navbar";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {collection, query, where, onSnapshot} from "firebase/firestore";
import {db} from "../lib/firebase";
import {Card, CardContent, CardHeader, Grid, Stack} from "@mui/material";
import Timeline from "../components/timeline";
import Sidebar from "../components/sidebar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import {red} from "@mui/material/colors";
import SubKinchooInfo from "../components/sidebar/subKinchooInfo";
import AddNewPost from "../components/sidebar/AddNewPost";

export default function SubKinchoo() {
	const [subKinchoo, setSubKinchoo] = useState([]);
	const { subname } = useParams();

	useEffect(() => {
		async function fetchSubKinchooData() {
			try {
				new Promise((resolve) => {
					const subKinchooQuery = query(collection(db, 'subkinchoo'), where('subname', '==', subname));
					onSnapshot(subKinchooQuery, (querySnapshot) => {
						const _subKinchoos = [];
						querySnapshot.forEach((doc) => {
							_subKinchoos.push({
								id: doc.id,
								...doc.data(),
							});
							resolve(_subKinchoos);
						});
					})
				}).then((subKinchoos) => {
					setSubKinchoo(subKinchoos[0]);
				})


			} catch (e) {
				console.error(e.message);
			}
		}
		fetchSubKinchooData();
	}, []);
	document.title = subKinchoo ? `r/${subKinchoo.subname}` : 'r/';

	return (
		<>
			<Navbar/>
			<Grid container spacing={2} justifyContent="center" alignItems="flex-start">
				<Grid item xs={8}>
					<Stack spacing={4} justifyContent="center" mb={5} mt={2} alignItems="right">
					</Stack>
					<Timeline subKinchoo={subKinchoo}/>
				</Grid>
				<Grid item xs={4}>
					<Stack spacing={4} justifyContent="center" mb={5} mt={2} alignItems="left">
						<SubKinchooInfo subKinchoo={subKinchoo}/>
						<AddNewPost subKinchoo={subKinchoo}/>
					</Stack>
				</Grid>
			</Grid>
		</>
	)
}
