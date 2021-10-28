import { collection, query, where } from 'firebase/firestore'
import {db} from "../lib/firebase";

export async function doesUsernameExist(username) {
	// const result = await firebase.firestore.collection('users').where('username', '==', username)

	// TODO: Arreglar esto para devolver un booleano cuando un usuario existe

	const q = query(collection(db, 'users'), where('username', '==', username));
	console.log('Query: ', q)

	console.log('Username: ', q.username)

	let exists = await q.docs.map((user) => user.data().length > 0);

	console.log(exists);
	return exists;
}