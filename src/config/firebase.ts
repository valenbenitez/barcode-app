// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDCwb8q4mFGTztnNKa8ltQA8oI3ItXDY4w',
  authDomain: 'bar-code-app-f71f3.firebaseapp.com',
  projectId: 'bar-code-app-f71f3',
  storageBucket: 'bar-code-app-f71f3.appspot.com',
  messagingSenderId: '38321365394',
  appId: '1:38321365394:web:0edddfa654d6f4f30da14b',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
