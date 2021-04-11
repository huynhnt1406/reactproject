import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyBlyjN5Ug631HEgTNFoDRLWu4-IusxKauI",
    authDomain: "myshop-e956c.firebaseapp.com",
    projectId: "myshop-e956c",
    storageBucket: "myshop-e956c.appspot.com",
    messagingSenderId: "84852961185",
    appId: "1:84852961185:web:659ee71ab4a7f661d825e0",
    measurementId: "G-NQWT09TZYK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;