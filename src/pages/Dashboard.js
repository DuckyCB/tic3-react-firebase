import React, {useEffect, useState} from "react";
import Timeline from "../components/Timeline";
import {Grid, Stack} from "@mui/material";
import TopSubKinchoos from "../components/sidebar/TopSubKinchoos";
import AboutUs from "../components/sidebar/AboutUs";
import {collection, onSnapshot, orderBy, query} from "firebase/firestore";
import {db} from "../lib/firebase";
import SkeletonPosts from "../components/skeleton/SkeletonPosts";
import CreateNewSubKinchoo from "../components/sidebar/CreateNewSubKinchoo";
import { fetchUserData, logout } from "../utils/userUtils";
import { auth } from "../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth"
import AllSubKinchoos from "../components/sidebar/AllSubKinchoos";

export default function Dashboard() {
	const [posts, setPosts] = useState([]);
    const [userData, setUserData] = useState(null);
    const [user, loading, error] = useAuthState(auth);

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

    useEffect(() => {
        const fetchData = async () => {
            if (loading || !user) return;
            setUserData(await fetchUserData(user));
        }

        fetchData();
    }, [user, loading]);

	const logoutUser = async () => {
		await logout();
		setUserData(null);
	}

    // useEffect(() => {
    //     console.log(user);
    // }, [user]);

	return (
		<>
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
						{userData ? <CreateNewSubKinchoo/> : null}
						<AboutUs/>
						<AllSubKinchoos/>
					</Stack>
				</Grid>
			</Grid>
		</>
	)
}
