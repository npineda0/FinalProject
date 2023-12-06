// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9zYsZs-qXirihmjr51z5LiJGu2daILjE",
  authDomain: "n322mobileapp-nl.firebaseapp.com",
  projectId: "n322mobileapp-nl",
  storageBucket: "n322mobileapp-nl.appspot.com",
  messagingSenderId: "233451811710",
  appId: "1:233451811710:web:b26d918ea190bc1431392f",
  measurementId: "G-K1V0V8KMVN"
};

const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const auth = getAuth(app);
export{app, auth, getApp, getAuth}

export const firestore = getFirestore(app);

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);