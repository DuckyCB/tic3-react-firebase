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
            const userArr = userResult.docs.map(user => user.data());
			if (userResult.docs.lenght === 0 ) {
                console.error('user not found');
                return;
			}
			setUser(userArr[0]);
		} catch (e) {
		    console.error(e.message);
		}

		document.title = user ? `u/${user.username}` : 'u/';

	}, []);

	return (
		<>
			<Navbar/>
			USER PROFILE
            <p>
			{user ? JSON.stringify(user) : 'Loading user...'}
            </p>
		</>
	)
}