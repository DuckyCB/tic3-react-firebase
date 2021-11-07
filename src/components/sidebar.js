import {Container, Stack} from "@mui/material";
import styled from "@emotion/styled";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	square: true,
	width: theme.spacing(25)
}));

export default function Sidebar({subKinchoo}) {
	let addNewPost
	if (subKinchoo) {
		addNewPost =
			<Button sx={{width: 200}} variant="contained" onClick={() => {
			}}>
				Add New Post
			</Button>
	}

	return (
		<Container fixed>
				Top Kinchoos
			<Stack spacing={1}>
				<Item>Quincke</Item>
				<Item>Item 2</Item>
				<Item>Item 3</Item>
				{addNewPost}
			</Stack>
		</Container>
	)
}
