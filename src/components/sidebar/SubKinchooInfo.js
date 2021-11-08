import {Card, CardContent, CardHeader, Skeleton} from "@mui/material";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import {red} from "@mui/material/colors";
import React from "react";


export default function SubKinchooInfo({ subKinchoo }) {
	const { loading = false } = subKinchoo;

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
			{/*TODO: Boton de suscribirse al subKinchoo*/}
		</Card>
	)

}