import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDX8eTSxgYzgsHrVjnv927O6APgv-qZV1M",
    authDomain: "todo-app-97b07.firebaseapp.com",
    projectId: "todo-app-97b07",
    storageBucket: "todo-app-97b07.appspot.com",
    messagingSenderId: "55179339689",
    appId: "1:55179339689:web:625f82ba59ddf86e8206b8",
    measurementId: "G-J7BXN9KZ4W"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const signUp = async ({ email, password }: { email: string; password: string }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const logIn = async ({ email, password }: { email: string; password: string }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

