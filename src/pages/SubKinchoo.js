import Navbar from "../components/navbar";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../lib/firebase";

export default function SubKinchoo() {

	const [subKinchoo, setSubKinchoo] = useState(undefined);
	const { subkinchooid } = useParams();

	useEffect(async () => {

		try {
			const docRef = doc(db, 'subKinchoo', `${subkinchooid}`);
			const _subKinchoo = await getDoc(docRef);
			console.log(_subKinchoo.data());
			setSubKinchoo(_subKinchoo.data());
		} catch (err) {
			console.error(err);
		}

		document.title = 'r/{subKinchoo.name}';

	}, []);

	return (
		<>
			<Navbar/>
			SUB KINCHOO
		</>
	)
}