import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {collection, doc, getDocs, query, setDoc, where} from "firebase/firestore";
import {db} from "../lib/firebase";

export const login = async (email, password) => {


    const auth = getAuth();

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (err) {
        throw err;
    }

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
