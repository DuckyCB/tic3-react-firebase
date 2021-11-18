import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, query, where, setDoc, doc } from "firebase/firestore";
import { db } from "../lib/firebase";

export const login = async (email, password) => {
    // const result = await firebase.firestore.collection('users').where('username', '==', username)


    // const q = query(collection(db, 'users'), where('username', '==', username));
    // console.log('Query: ', q)
    //
    // console.log('Username: ', q.username)
    //
    // let exists = await q.docs.map((user) => user.data().length > 0);
    //
    // console.log(exists);

    const auth = getAuth();

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (err) {
        throw err;
    }

    // let result;
    // try {
    //     const emailQuery = query(collection(db, 'users'), where('emailAddress', '==', loginName), where('password', '==', password));
    //     const usernameQuery = query(collection(db, 'users'), where('username', '==', loginName), where('password', '==', password));
    //     // let hello = await result.docs.map((user) => user.data().length > 0);
    //     const [emailResult, usernameResult] = await Promise.all([getDocs(emailQuery), getDocs(usernameQuery)]);
    //     result = [...emailResult.docs, ...usernameResult.docs];
    // } catch (e) {
    //     console.error(e.message);
    // }
}

export const signUp = async (email, password, firstName, lastName, username, avatar) => {

    if (!email || !password || !firstName || !lastName || !username) {
        throw new Error('empty field');
    }

    const auth = getAuth();

    try {
        await validateUsername(username);
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await saveUserInfo(userCredential.user.uid, email, firstName, lastName, username, avatar);
        return userCredential.user;
    } catch (err) {
        throw err;
    }
};

const saveUserInfo = async (userId, email, firstName, lastName, username, avatar) => {

    await setDoc(doc(db, 'users', userId), {
        email,
        firstName,
        lastName,
        username,
        postsCount: 0,
        subscriptions: [],
        avatar
    });
}

const validateUsername = async (username) => {
    const q = query(collection(db, 'users'), where('username', '==', username));
    const userResults = await getDocs(q);
    const users = userResults.docs.map((user) => user.data);
    if (users.length >= 1) {
        throw new Error('username already exists');
    }
}