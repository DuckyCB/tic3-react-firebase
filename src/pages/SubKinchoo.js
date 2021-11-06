import Navbar from "../components/navbar";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../lib/firebase";
import {Grid} from "@mui/material";
import Timeline from "../components/timeline";
import Sidebar from "../components/sidebar";

export default function SubKinchoo() {
	const [subKinchoo, setSubKinchoo] = useState(undefined);
	const [posts, setPosts] = useState([]);
	const { subname } = useParams();

	useEffect(() => {
		async function fetchSubKinchooData() {
			try {
				const subKinchooQuery = query(collection(db, 'subkinchoo'), where('subname', '==', subname));
				const subKinchooResult = await getDocs(subKinchooQuery);
				const subKinchooArr = subKinchooResult.docs.map(user => user.data());
				if (subKinchooResult.docs.lenght === 0) {
					console.error('subKinchoo not found');
					return;
				}
				setSubKinchoo(subKinchooArr[0]);
			} catch (e) {
				console.error(e.message);
			}
		}
		fetchSubKinchooData();
		document.title = subKinchoo ? `r/${subKinchoo.subname}` : 'r/';

	}, []);

	return (
		<>
			<Navbar/>
			<Grid container spacing={2} justifyContent="center" alignItems="flex-start">
				<Grid item xs={8}>
					<Timeline />
				</Grid>
				<Grid item xs={4}>
					<Sidebar />
				</Grid>
			</Grid>
			SUB KINCHOO
		</>
	)
}