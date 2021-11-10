import Navbar from "../components/Navbar";
import React, {useEffect, useState} from "react";
import Timeline from "../components/Timeline";
import {Grid, Stack} from "@mui/material";
import TopSubKinchoos from "../components/sidebar/TopSubKinchoos";
import AboutUs from "../components/sidebar/AboutUs";
import {collection, onSnapshot, orderBy, query} from "firebase/firestore";
import {db} from "../lib/firebase";
import SkeletonPosts from "../components/skeleton/SkeletonPosts";
import CreateNewSubKinchoo from "../components/sidebar/CreateNewSubKinchoo";

export default function Dashboard() {
	const [posts, setPosts] = useState([]);

	// TODO: Obtener usuario logeado
	const logeduser = true;

	useEffect(() => {
		async function fetchPosts() {
			try {
				const postsQuery = query(collection(db, "posts"), orderBy("createdAt", "desc"));
				onSnapshot(postsQuery, (querySnapshot) => {
				const postsArr = [];
				querySnapshot.forEach((doc) => {
					postsArr.push({
						id: doc.id,
						...doc.data(),
					});
				})
				setPosts(postsArr)
				});
			} catch (e) {
				console.error(e.message);
			}
		}
		fetchPosts();
		document.title = 'Kinchoo'
	}, []);

	return (
		<>
			<Navbar />
			<Grid container spacing={2} justifyContent="center" alignItems="flex-start">
				<Grid item xs={8}>
					{posts ? (
						<Timeline posts={posts}/>
					) : (
						<SkeletonPosts/>
					)}
				</Grid>
				<Grid item xs={4}>
					<Stack spacing={3} paddingTop={3}>
						<TopSubKinchoos/>
						{logeduser ? <CreateNewSubKinchoo/> : null}
						<AboutUs/>
					</Stack>
				</Grid>
			</Grid>
		</>
	)
}
