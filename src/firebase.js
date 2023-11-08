import firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyD7OpPf7-mX_w5uD5zNx465WAoyFVfca8c",
    authDomain: "disneyplus-hotstar-96174.firebaseapp.com",
    projectId: "disneyplus-hotstar-96174",
    storageBucket: "disneyplus-hotstar-96174.appspot.com",
    messagingSenderId: "883258521219",
    appId: "1:883258521219:web:ba48e2abc6e7c254684db6",
    measurementId: "G-RTLSW7CCM0"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider,storage};
  export default db;