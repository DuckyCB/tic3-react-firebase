import {Card, CardActionArea, Stack, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import {useEffect, useState} from "react";
import {Link as RouterLink} from "react-router-dom";

function SubKinchooItem({ subKinchoo }) {
	return (
		<Card sx={{width: 8/10}} variant="outlined">
			<CardActionArea sx={{height: 40, alignItems: 'center', display: 'flex'}} component={RouterLink} to={`/r/${subKinchoo.subname}`}>
				<Typography align='center'>
					r/{subKinchoo.subname}
				</Typography>
			</CardActionArea>
		</Card>
	)
}

export default function TopSubKinchoos() {
	const [topSubKinchoos, setTopSubKinchoos] = useState([]);

	useEffect(() => {

		async function getTopSubKinchoos() {
			// TODO:
			const hardcodedTopSubKinchoos = [
				{'subname': 'avergastonfootball'},
				{'subname': 'fansdemadmax'},
			]
			setTopSubKinchoos(hardcodedTopSubKinchoos)
		}
		getTopSubKinchoos();


	}, []);


	return (
		<Paper sx={{ width: 8/10, marginTop: 2, marginBottom: 2 }}>
			<Typography sx={{ paddingTop: 3, paddingBottom: 1 }} align='center' variant='h5'>
				Top 5 subKinchoos
			</Typography>
			<Stack spacing={2} justifyContent="center" alignItems="center" sx={{paddingTop: 2, paddingBottom: 2}}>
				{topSubKinchoos.map( (subKinchoo) =>
					<SubKinchooItem subKinchoo={subKinchoo}/>
				)}
			</Stack>
		</Paper>
	)

}