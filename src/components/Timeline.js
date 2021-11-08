import Post from "./Post";
import {Stack} from "@mui/material";

export default function Timeline({posts}) {

	return (
		<Stack spacing={4} justifyContent="center" mb={5} mt={2} alignItems="center">
			{posts.map((post) => (
				<Post post={post} key={post.id} />
			))}
		</Stack>
	)
}
