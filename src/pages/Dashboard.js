import Navbar from "../components/Navbar";
import React, {useEffect, useState} from "react";
import Timeline from "../components/Timeline";
import {Grid} from "@mui/material";
import TopSubKinchoos from "../components/sidebar/TopSubKinchoos";
import AboutUs from "../components/sidebar/AboutUs";
import {collection, getDocs, orderBy, query} from "firebase/firestore";
import {db} from "../lib/firebase";
import SkeletonPosts from "../components/skeleton/SkeletonPosts";

export default function Dashboard() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		async function fetchPosts() {
			try {
				const postsQuery = query(collection(db, "posts"), orderBy("createdAt", "desc"));
				const postsSnapshot = await getDocs(postsQuery);
				const postsArr = [];
				postsSnapshot.docs.map(post =>
					postsArr.push({id: post.id, ...post.data()})
				);
				setPosts(postsArr);
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
					<TopSubKinchoos/>
					<AboutUs/>
				</Grid>
			</Grid>
		</>
	)
}
