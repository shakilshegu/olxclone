import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'


const firebaseConfig = {
    apiKey: "AIzaSyAHnDkOm0vYP9k4RiOabdRjUWbR_G9lvRk",
    authDomain: "fir-884c4.firebaseapp.com",
    projectId: "fir-884c4",
    storageBucket: "fir-884c4.appspot.com",
    messagingSenderId: "1087460463684",
    appId: "1:1087460463684:web:aa08ee6effab8f45cd1811",
    measurementId: "G-DTR7BXN1N6"
  };

export default  firebase.initializeApp(firebaseConfig)