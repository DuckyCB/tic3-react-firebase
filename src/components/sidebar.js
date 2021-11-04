import {Container, Stack} from "@mui/material";
import * as PropTypes from "prop-types";
import styled from "@emotion/styled";
import Paper from "@mui/material/Paper";
import ChildCareIcon from '@mui/icons-material/ChildCare';
import {blue, orange} from "@mui/material/colors";

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	square: true,
	width: theme.spacing(25)
}));

export default function Sidebar() {
	return (
		<Container fixed>
				Top Kinchoos
			<Stack spacing={1} >
				<Item>Quincke </Item>
				<Item>Item 2</Item>
				<Item>Item 3</Item>
			</Stack>
		</Container>
	)
}