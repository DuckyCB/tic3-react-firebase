import { signInWithEmailAndPassword } from "@firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import { auth } from "../lib/firebase";

// returns user data if user is signed in and returns null otherwise
export const fetchUserData = async (user) => {
    if (!user) {
        return null;
    }

    const docRef = doc(db, 'users', user.uid);
    const result = await getDoc(docRef);
    return result.data();

};

export const loginUser = async (email, password) => {

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (err) {
        throw err;
    }
};

export const logout = () => {
    auth.signOut();
}