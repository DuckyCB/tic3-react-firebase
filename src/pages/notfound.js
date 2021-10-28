import {useEffect} from "react";


export default function NotFound() {

	useEffect(() => {
		document.title = 'Kinchoo - 404 Not found'
	}, []);

	return (
		<div>
			404 Not found
		</div>
	)

}