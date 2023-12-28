// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCUVozAMllQGiBUokqXoWZZBhpSnupEOKk',
  authDomain: 'house-marketplace-app-c761f.firebaseapp.com',
  projectId: 'house-marketplace-app-c761f',
  storageBucket: 'house-marketplace-app-c761f.appspot.com',
  messagingSenderId: '458529725777',
  appId: '1:458529725777:web:4a1a4167c04ac98ea90770',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
