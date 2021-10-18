import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAuwpChUtw2FhvIV386jWISUw68MqZTgPk",
    authDomain: "instagram-clone-44506.firebaseapp.com",
    projectId: "instagram-clone-44506",
    storageBucket: "instagram-clone-44506.appspot.com",
    messagingSenderId: "757955563022",
    appId: "1:757955563022:web:3c09ed1c0a5a1de37bf65f"
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage }