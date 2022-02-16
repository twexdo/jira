import { initializeApp } from "firebase/app";
import { get, getDatabase, onValue, push, ref, set } from "firebase/database";
import { Task, TaskFromDB } from "../components/datas";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

type HookOutput = [
    write: (location: string, object: any) => void,
    listen: (location: string, callBack: (data: any) => void) => void,
    update: (location: string, object: any) => void,
    deleteEntery: (location: string, id: string) => void,
    getData: (location: string, callBack: (data: any) => void) => void,
]

const getUFC = () => {
    return localStorage.getItem("userToken")
}
export default function useFirebaseDatabase(): HookOutput {
    const firebaseConfig = {
        apiKey: "AIzaSyDC0DnSmtTSK5fD62I11pfLYGeYTPGvvs4",
        authDomain: "twexdo-jira.firebaseapp.com",
        projectId: "twexdo-jira",
        storageBucket: "twexdo-jira.appspot.com",
        messagingSenderId: "9896592564",
        appId: "1:9896592564:web:577c646be15582acbb43e1",
        databaseURL: "https://twexdo-jira-default-rtdb.europe-west1.firebasedatabase.app/"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app)

    function write(location: string, object: Task) {

        push(ref(db, getUFC() + "/" + location), object)
        // set(ref(db, location), object);
    }
    function listen(location: string, callBack: (data: any) => void) {
        const reference = ref(db, getUFC() + "/" + location);
        onValue(reference, (snapshot) => {
            const data = snapshot.val();
            callBack(data)
        });
    }
    function update(location: string, object: TaskFromDB) {
        set(ref(db, getUFC() + "/" + location + "/" + object.id), { ...object, id: null })
    }
    function deleteEntery(location: string, id: string) {
        set(ref(db, getUFC() + "/" + location + "/" + id), null)

    }
    function getData(location: string, callBack: (data: any) => void) {
        get(ref(db, getUFC() + "/" + location)).then((snapshot) => {
            if (snapshot.exists()) {
                callBack(snapshot.val())
            } else {
                //
            }
        }).catch((error) => {
            console.error(error);
        });
    }




    return [write, listen, update, deleteEntery, getData]
}