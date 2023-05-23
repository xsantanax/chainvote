import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDsdTEN2SA76VbanP-mufBHQQL83qtIkpM',
  authDomain: 'profile-2d6d8.firebaseapp.com',
  projectId: 'profile-2d6d8',
  storageBucket: 'profile-2d6d8.appspot.com',
  messagingSenderId: '216306610050',
  appId: '1:216306610050:web:c96b17b83af30e97d2699b'
}

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)

export { db }
