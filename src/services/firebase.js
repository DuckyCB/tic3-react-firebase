import {db} from "../lib/firebase";
import {collection, query, where, getDocs, auth} from "firebase/firestore";

export async function doesUsernameExist(loginName, password) {
    // const result = await firebase.firestore.collection('users').where('username', '==', username)


    // const q = query(collection(db, 'users'), where('username', '==', username));
    // console.log('Query: ', q)
    //
    // console.log('Username: ', q.username)
    //
    // let exists = await q.docs.map((user) => user.data().length > 0);
    //
    // console.log(exists);
    let result;
    try {
        const emailQuery = query(collection(db, 'users'), where('emailAddress', '==', loginName), where('password', '==', password));
        const usernameQuery = query(collection(db, 'users'), where('username', '==', loginName), where('password', '==', password));
        // let hello = await result.docs.map((user) => user.data().length > 0);
        const [emailResult, usernameResult] = await Promise.all([getDocs(emailQuery), getDocs(usernameQuery)]);
        result = [...emailResult.docs, ...usernameResult.docs];
    } catch (e) {
        console.log(e.message);
    }


    return result?.length > 0;
}