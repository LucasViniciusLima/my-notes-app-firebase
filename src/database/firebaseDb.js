import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCi2ITVUqOPMjWWl2C3lLVZLxM-CgdFjl4",
    authDomain: "inthistime-590a0.firebaseapp.com",
    databaseURL: "https://inthistime-590a0.firebaseio.com",
    projectId: "inthistime-590a0",
    storageBucket: "inthistime-590a0.appspot.com",
    messagingSenderId: "244074782715",
    appId: "1:244074782715:web:db8d5d1f6672b68273f55e"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);