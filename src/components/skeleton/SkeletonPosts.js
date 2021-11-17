import {Skeleton, Stack} from "@mui/material";


export default function SkeletonPosts() {

	return (
		<Stack spacing={4} justifyContent="center" mb={5} mt={2} alignItems="center">
			<Skeleton animation='wave' variant='rectangular' sx={{ width: 6/10, height: 500 }}/>
			<Skeleton animation='wave' variant='rectangular' sx={{ width: 6/10, height: 500 }}/>
			<Skeleton animation='wave' variant='rectangular' sx={{ width: 6/10, height: 500 }}/>
		</Stack>
	)
}