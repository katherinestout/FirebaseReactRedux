import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCUK54s8q7htShwUkXsy6_zK4NV4jb6iPc",
    authDomain: "katprojectplan.firebaseapp.com",
    databaseURL: "https://katprojectplan.firebaseio.com",
    projectId: "katprojectplan",
    storageBucket: "katprojectplan.appspot.com",
    messagingSenderId: "343912460918"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;