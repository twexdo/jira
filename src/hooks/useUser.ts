import { initializeApp } from "firebase/app";
import { browserLocalPersistence, getAuth, GoogleAuthProvider, inMemoryPersistence, onAuthStateChanged, setPersistence, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
const setUFC = (token: string) => {
    return localStorage.setItem("userToken", token)
}

const useUser = (): [string, (name: string) => void, () => void] => {
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



    const [user, setUSer] = useState("Twexdo")

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUSer(user.displayName ?? "meh")

            }
            else {
                setUSer("")
            }
        })

    }, [])
    const persistLogin = () => {
        setPersistence(auth, browserLocalPersistence)
            .then((x) => {
                const provider = new GoogleAuthProvider();
                // Existing and future Auth states are now persisted in the current
                // session only. Closing the window would clear any existing state even
                // if a user forgets to sign out.
                // ...
                // New sign-in will be persisted with session persistence.
                return login(provider)
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }

    const login = (provider: any) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result as any);
                const token = credential?.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
                setUSer(user.displayName ?? "")
                setUFC(user.uid)
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
    const so = () => {
        signOut(auth).then(() => {
            setUSer("")
        }).catch((error) => {
            // An error happened.
        });
    }

    return [user, persistLogin, so]
}
export default useUser