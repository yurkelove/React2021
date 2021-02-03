import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAcpuMb6THULer-Y9pOxmUY0gUo4kleoJU",
    authDomain: "veryhotburgers.firebaseapp.com",
    databaseURL: "https://veryhotburgers-default-rtdb.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;