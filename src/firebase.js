
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGhE4uDROKlE1huwRyhxVg0QdQEXBsMkU",
  authDomain: "netflix-clone-13431.firebaseapp.com",
  projectId: "netflix-clone-13431",
  storageBucket: "netflix-clone-13431.firebasestorage.app",
  messagingSenderId: "67147432604",
  appId: "1:67147432604:web:1cda076bfb368781f8e359"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const login = async (email, password) => { 
    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        alert(error);
    }
 }

 const logout = () => {
    signOut(auth);
 }

 export { auth, db, signup, login, logout };