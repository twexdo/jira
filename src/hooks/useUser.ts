import { initializeApp } from "firebase/app";
import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";


const useUser = (): [string, (name: string) => void] => {
    const firebaseConfig = {
        apiKey: "AIzaSyDC0DnSmtTSK5fD62I11pfLYGeYTPGvvs4",
        authDomain: "twexdo-jira.firebaseapp.com",
        projectId: "twexdo-jira",
        storageBucket: "twexdo-jira.appspot.com",
        messagingSenderId: "9896592564",
        appId: "1:9896592564:web:577c646be15582acbb43e1",
        databaseURL: "https://twexdo-jira-default-rtdb.europe-west1.firebasedatabase.app/"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);



    const [user, setUSer] = useState("")

    const provider = new GoogleAuthProvider();
    const login = (name: string) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result as any);
                const token = credential?.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
                console.log(user)
                setUSer(user.displayName ?? "")
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return [user, login]
}
export default useUser