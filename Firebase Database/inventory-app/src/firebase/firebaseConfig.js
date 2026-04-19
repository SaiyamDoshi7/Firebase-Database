import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC9xx-wyz9f8gQbHhGdiGHYP-0TVLojQO8",
  authDomain: "fir-database-2a3a4.firebaseapp.com",
  databaseURL: "https://fir-database-2a3a4-default-rtdb.firebaseio.com",
  projectId: "fir-database-2a3a4",
  storageBucket: "fir-database-2a3a4.firebasestorage.app",
  messagingSenderId: "83541602319",
  appId: "1:83541602319:web:21e0e1ffd2daf43780b37a",
  measurementId: "G-3BKTXTMKGC"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);