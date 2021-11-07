import {Card, CardContent, CardHeader} from "@mui/material";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import {red} from "@mui/material/colors";
import React from "react";


export default function SubKinchooInfo({ subKinchoo }) {

	return (
		<Card sx={{width: 8/10}}>
			<CardHeader
				title={
					<Typography variant="h5"  gutterBottom>
						{subKinchoo.name}
					</Typography>
				}
				avatar={
					<Avatar sx={{bgcolor: red[500], height: 70, width: 70}} aria-label="recipe"
							src={subKinchoo.avatar}/>
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
		</Card>
	)

}