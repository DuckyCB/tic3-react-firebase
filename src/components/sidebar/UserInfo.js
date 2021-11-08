import {Card, CardContent, CardHeader} from "@mui/material";
import Typography from "@mui/material/Typography";
import {red} from "@mui/material/colors";
import PersonIcon from '@mui/icons-material/Person';
import React from "react";


export default function UserInfo({ user }) {

	return (
		<Card sx={{width: 8/10}}>
			<CardHeader
				title={
					<Typography variant="h5"  gutterBottom>
							{user.firstName} {user.lastName}
					</Typography>
				}
				avatar={<PersonIcon sx={{bgcolor: red[500], height: 70, width: 70}}/>}
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