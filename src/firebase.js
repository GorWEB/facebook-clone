import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDHNYq0WP9BxDMC_4jR3gton1Rpona9H2c",
  authDomain: "facebook-clone-3f72a.firebaseapp.com",
  databaseURL: "https://facebook-clone-3f72a.firebaseio.com",
  projectId: "facebook-clone-3f72a",
  storageBucket: "facebook-clone-3f72a.appspot.com",
  messagingSenderId: "203987241622",
  appId: "1:203987241622:web:2f1e315df37d4be38d10b7",
  measurementId: "G-YDBV0RFMBR",
};
const firebaseApp=firebase.initializeApp(firebaseConfig)
const db= firebaseApp.firestore()
const auth=firebase.auth()
const provider= new firebase.auth.GoogleAuthProvider()
export {auth,provider}
export default db