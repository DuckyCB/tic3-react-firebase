import Navbar from "../components/Navbar";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {db} from "../lib/firebase";
import {collection, getDocs, where, query, orderBy, onSnapshot} from "firebase/firestore";
import {Grid, Skeleton, Stack} from "@mui/material";
import Timeline from "../components/Timeline";
import UserInfo from "../components/sidebar/UserInfo";
import SkeletonPosts from "../components/skeleton/SkeletonPosts";

export default function UserProfile() {
	const [user, setUser] = useState(undefined);
	const [posts, setPosts] = useState([]);
	const { username } = useParams();

	useEffect(() => {
		async function fetchPosts(): void {
			try {
				const postsQuery = query(collection(db, "posts"), where("user.username", "==", username),
					orderBy("createdAt", "desc"));
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
		async function fetchUserData(): void {
			try {
				const userQuery = query(collection(db, 'users'), where('username', '==', username));
				const userResult = await getDocs(userQuery);
				const userArr = userResult.docs.map(user => user.data());
				if (userResult.docs.length === 0) {
					console.error('user not found');
					return;
				}
				setUser(userArr[0]);
			} catch (e) {
				console.error(e.message);
			}
		}
		fetchUserData();
		fetchPosts();
	}, []);

	document.title = user ? `u/${user.username}` : 'u/';

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
						{user ? (
							<UserInfo user={user}/>
						) : (
							<Skeleton animation='wave' variant='rectangular' sx={{width: 8/10, height: 150}}/>
						)}
					</Stack>
				</Grid>
			</Grid>
		</>
	)
}
