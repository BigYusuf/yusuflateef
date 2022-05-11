// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdvj2mLHhMhgSWyLiTRuVkxiYoFJI74hg",
  authDomain: "yusuflateef-d3dd8.firebaseapp.com",
  projectId: "yusuflateef-d3dd8",
  storageBucket: "yusuflateef-d3dd8.appspot.com",
  messagingSenderId: "142098061532",
  appId: "1:142098061532:web:82bdf3178db079d2303c19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const colRef = collection(db, 'works')

//get collection database
/*getDocs(colRef)
.then((snapshot) => {
  let works =[] 
  snapshot.docs.forEach((doc) => {
    works.push({ ...doc.data(), id: doc.id })
  })
  console.log(works)
})
.catch(err => {
  console.log(err.message);
})*/

//get real time collection database
onSnapshot(colRef, (snapshot) => {
  let works =[] 
  snapshot.docs.forEach((doc) => {
    works.push({ ...doc.data(), id: doc.id })
  })
  console.log(works)
})