import Navbar from "../components/Navbar";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {collection, query, where, onSnapshot, orderBy, getDocs} from "firebase/firestore";
import {db} from "../lib/firebase";
import {Grid, Skeleton, Stack} from "@mui/material";
import Timeline from "../components/Timeline";
import SubKinchooInfo from "../components/sidebar/SubKinchooInfo";
import AddNewPost from "../components/sidebar/AddNewPost";
import SkeletonPosts from "../components/skeleton/SkeletonPosts";

export default function SubKinchoo() {
	const [subKinchoo, setSubKinchoo] = useState([]);
	const [posts, setPosts] = useState([]);
	const { subname } = useParams();

	const user = true;

	useEffect(() => {
		async function fetchPosts(): void {
			try {
				const postsQuery = query(collection(db, "posts"), where("subKinchoo.subname", "==", subname),
					orderBy("createdAt", "desc"));
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
		fetchPosts();
	}, []);

	document.title = subKinchoo ? `r/${subKinchoo.subname}` : 'r/';

	return (
		<>
			<Navbar/>
			<Grid container spacing={2} justifyContent="center" alignItems="flex-start">
				<Grid item xs={8}>
					{posts ? (
						<Timeline posts={posts}/>
					) : (
						<SkeletonPosts/>
					)}
				</Grid>
				<Grid item xs={4}>
					<Stack spacing={4} justifyContent="center" mb={5} mt={2} alignItems="left">
						{subKinchoo ? (
							<SubKinchooInfo subKinchoo={subKinchoo}/>
						) : (
							<Skeleton animation='wave' variant='rectangular' sx={{width: 8/10, height: 150}}/>
						)}
						{user ? (<AddNewPost subKinchoo={subKinchoo}/>) : null}
					</Stack>
				</Grid>
			</Grid>
		</>
	)
}
