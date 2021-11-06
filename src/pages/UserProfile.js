import Navbar from "../components/navbar";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {db} from "../lib/firebase";
import {collection, getDocs, where, query} from "firebase/firestore";

export default function UserProfile() {

	const [user, setUser] = useState(undefined);
	const { username } = useParams();

	useEffect(async () => {

		let result;
		try {
		    const userQuery = query(collection(db, 'users'), where('username', '==', username));
		    const userResult = await getDocs(userQuery);
			if (userResult.docs.lenght === 0 ) {
				throw new Error('user not found');
			}
			console.log(userResult.docs)
			result = userResult.docs[0];
			setUser(result)
		} catch (e) {
		    console.error(e.message);
		}
		console.log(user)

		document.title = `u/${user.username}`;

	}, []);

	return (
		<>
			<Navbar/>
			USER PROFILE
			{user?.username}
		</>
	)
}