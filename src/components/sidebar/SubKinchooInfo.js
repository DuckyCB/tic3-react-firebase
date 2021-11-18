import {Card, CardActions, CardContent, CardHeader, Skeleton} from "@mui/material";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import {red} from "@mui/material/colors";
import React, {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import {collection, doc, onSnapshot, query, where, writeBatch} from "firebase/firestore";
import {auth, db} from "../../lib/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {fetchUserData} from "../../utils/userUtils";
import {useParams} from "react-router-dom";


function Subscribe({subKinchoo, user}) {
	const [isSubscribed, setIsSubscribed] = useState(user.subscriptions.includes(subKinchoo.id));
	async function handleSubscribe() {
		let userSubscriptions = user.subscriptions;
		let subKinchooFollowersCount = subKinchoo.followersCount;

		if (isSubscribed){
			userSubscriptions = userSubscriptions.filter(id => id !== subKinchoo.id)
			subKinchooFollowersCount--;
		} else {
			userSubscriptions.push(subKinchoo.id)
			subKinchooFollowersCount++;
		}
		setIsSubscribed(!isSubscribed)


		const batchUser = writeBatch(db);
		const userRef = doc(db, "users", user.id);
		batchUser.update(userRef, {subscriptions: userSubscriptions});
		await batchUser.commit()

		const batchSub = writeBatch(db);
		const subKinchooRef = doc(db, "subkinchoo", subKinchoo.id);
		batchSub.update(subKinchooRef, {followersCount: subKinchooFollowersCount});
		await batchSub.commit()
		window.location.reload(false);
	}

	return (
		<>
			<Button sx={{width: 6 / 10}} variant="contained" onClick={handleSubscribe}>
				{!isSubscribed ? "Subscribe" : "Unsubscribe"}
			</Button>
		</>
	)
}

export default function SubKinchooInfo( ) {
	const [userData, setUserData] = useState(null);
	const [user, loading, error] = useAuthState(auth);
	const [subKinchoo, setSubKinchoo] = useState([]);
	const { subname } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			if (loading || !user) return;
			setUserData(await fetchUserData(user));
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
		fetchData();
	}, [user, loading]);

	return (
		<Card sx={{width: 8/10}}>
			<CardHeader
				title={
					loading ? (
						<Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }}/>
					) : (
						<Typography variant="h5"  gutterBottom>
							{subKinchoo.name}
						</Typography>
					)
				}
				avatar={
					loading ? (
						<Skeleton animation="wave" variant="circular" width={70} height={70} />
					) : (
						<Avatar sx={{bgcolor: red[500], height: 70, width: 70}} aria-label="recipe"
								src={subKinchoo.avatar}/>
					)
				}
				subheader={subKinchoo.subname}
			/>
			<CardContent>
				<Typography>
					{subKinchoo.description}
				</Typography>
				<Typography variant='caption'>
					Followers: {subKinchoo.followersCount}
				</Typography>
			</CardContent>
			<CardActions sx={{justifyContent: 'center', paddingBottom: 4, paddingTop: 2}}>
				{userData ? (<Subscribe subKinchoo={subKinchoo} user={userData}/>) : null}
			</CardActions>
		</Card>
	)

}
