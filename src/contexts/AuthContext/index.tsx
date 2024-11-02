import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';
import axios from "axios";
import { firebaseConfig } from "../../utils/firebaseConfig";


interface User {
  [x: string]: string;
  email: string;
  uid: string;
}

interface AuthContextType {
  user: User | null;
  signUp: (email: string, password: string) => Promise<User | null>;
  logIn: (email: string, password: string) => Promise<User | null>;
  logOut: () => void;
  isAuthenticated: () => boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

   const signUp = async (email: string, password: string) => {
    try {
      const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConfig.apiKey}`, {
        email,
        password,
        returnSecureToken: true,
      });
      const { idToken } = response.data;
      const decodedToken = jwtDecode(idToken) as { user_id: string; email: string };
      Cookies.set('access_token', idToken);
      const newUser = { email: decodedToken.email, uid: decodedToken.user_id };
      setUser(newUser);
      return newUser;
      return { email: decodedToken.email, uid: decodedToken.user_id };
    } catch (error) {
      console.error("Sign Up Error", error);
      throw error;
    }
  };

   const logIn = async (email: string, password: string) => {
    try {
      const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`, {
        email,
        password,
        returnSecureToken: true,
      });
      const { idToken } = response.data;
      const decodedToken = jwtDecode(idToken) as { user_id: string; email: string };
      Cookies.set('access_token', idToken);
      const loggedInUser = { email: decodedToken.email, uid: decodedToken.user_id };
      setUser(loggedInUser); 
      return loggedInUser;
      return { email: decodedToken.email, uid: decodedToken.user_id };
    } catch (error) {
      console.error("Login Error", error);
      throw error;
    }
  };
 

  const isAuthenticated = () => !!user;

  useEffect(() => {
    const token = Cookies.get('access_token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token) as { user_id: string; email: string };
        setUser({ email: decodedToken.email, uid: decodedToken.user_id });
      } catch (error) {
        console.error("Error decoding token", error);
      
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, signUp, logIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};