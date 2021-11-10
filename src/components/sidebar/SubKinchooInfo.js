import {Card, CardActions, CardContent, CardHeader, Skeleton} from "@mui/material";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import {red} from "@mui/material/colors";
import React from "react";
import Button from "@mui/material/Button";
import {doc, writeBatch} from "firebase/firestore";
import {db} from "../../lib/firebase";


function Subscribe({subKinchoo, user}) {

	async function handleSubscribe() {
		let userSubscriptions = user.subscriptions;
		let subKinchooFollowersCount = subKinchoo.followersCount;

		subKinchooFollowersCount++;

		const batchUser = writeBatch(db);
		const userRef = doc(db, "users", user.id);
		batchUser.update(userRef, {subscriptions: userSubscriptions.add(subKinchoo.id)});
		await batchUser.commit()

		const batchSub = writeBatch(db);
		const subKinchooRef = doc(db, "subkinchoo", subKinchoo.id);
		batchSub.update(subKinchooRef, {followersCount: subKinchooFollowersCount});
		await batchSub.commit()
	}

	return (
		<Button sx={{width: 6/10}} variant="contained" onClick={handleSubscribe}>
			Subscribe
		</Button>
	)
}

export default function SubKinchooInfo({ subKinchoo }) {
	const { loading = false } = subKinchoo;
	// TODO: Recuperar usuario logeado
	const user = true;

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
				{user ? (<Subscribe subKinchoo={subKinchoo} user={user}/>) : null}
			</CardActions>
		</Card>
	)

}