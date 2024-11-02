
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";


export const firebaseConfig = {
  apiKey: "AIzaSyDX8eTSxgYzgsHrVjnv927O6APgv-qZV1M",
  authDomain: "todo-app-97b07.firebaseapp.com",
  projectId: "todo-app-97b07",
  storageBucket: "todo-app-97b07.firebasestorage.app",
  messagingSenderId: "55179339689",
  appId: "1:55179339689:web:625f82ba59ddf86e8206b8",
  measurementId: "G-J7BXN9KZ4W"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// const analytics = getAnalytics(app);