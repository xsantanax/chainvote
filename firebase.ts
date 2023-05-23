import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDAeUBhD28ORe1hsT_gJ--sPJodurGz880',
  authDomain: 'chainvote-a8f24.firebaseapp.com',
  projectId: 'chainvote-a8f24',
  storageBucket: 'chainvote-a8f24.appspot.com',
  messagingSenderId: '678856552053',
  appId: '1:678856552053:web:3d93ef24fe7ffd3056d23c'
}
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)

export { db }
