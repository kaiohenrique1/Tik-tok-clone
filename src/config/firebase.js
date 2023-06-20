import { initializeApp } from 'firebase/app'
import { gegetFirestore, getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyC8UmnWnVItue7H3OIUffCSUnLJSVNSl58',
  authDomain: 'tiktok---jornada-195fc.firebaseapp.com',
  projectId: 'tiktok---jornada-195fc',
  storageBucket: 'tiktok---jornada-195fc.appspot.com',
  messagingSenderId: '510069596603',
  appId: '1:510069596603:web:97030123c3b54df50ea49e'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
