import firebase from 'firebase/app';
import 'firebase/auth';
// import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbJRvggm7pSlk4XT-YCzP--hDzDwaNCOE",
    authDomain: "simplenotes-firebase.firebaseapp.com",
    databaseURL: "https://simplenotes-firebase.firebaseio.com",
    projectId: "simplenotes-firebase",
    storageBucket: "simplenotes-firebase.appspot.com",
    messagingSenderId: "509943450111",
    appId: "1:509943450111:web:3204fd47290bf94ac03fca"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;