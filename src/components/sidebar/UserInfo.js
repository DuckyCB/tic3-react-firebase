import {Card, CardContent, CardHeader, Skeleton} from "@mui/material";
import Typography from "@mui/material/Typography";
import {red} from "@mui/material/colors";
import PersonIcon from '@mui/icons-material/Person';
import React from "react";
import Avatar from "@mui/material/Avatar";


export default function UserInfo({ user }) {
	const { loading = false } = user;
	return (
		<Card sx={{width: 8/10}}>
			<CardHeader
				title={
					<Typography variant="h5"  gutterBottom>
							{user.firstName} {user.lastName}
					</Typography>
				}
				avatar={
					loading ? (
					<Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }}/>
				) : (
					<Avatar sx={{bgcolor: red[500], height: 70, width: 70}} src={user.avatar}/>
					)
				}
				subheader={user.username}
			/>
			<CardContent>
				<Typography variant='caption'>
					Number of posts: {user.postsCount}
				</Typography>
			</CardContent>
		</Card>
	)

}
