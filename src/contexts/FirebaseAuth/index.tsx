import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import Cookies from 'js-cookie';

const apiKey = "AIzaSyDX8eTSxgYzgsHrVjnv927O6APgv-qZV1M";  

interface User {
  email: string;
  uid: string;
}

export const signUp = async (email: string, password: string) => {
  try {
    const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
      email,
      password,
      returnSecureToken: true,
    });
    const { idToken } = response.data;
    const decodedToken = jwtDecode(idToken) as { user_id: string; email: string };
    Cookies.set('access_token', idToken);
    return { email: decodedToken.email, uid: decodedToken.user_id };
  } catch (error) {
    console.error("Sign Up Error", error);
    throw error;
  }
};

export const logIn = async (email: string, password: string) => {
  try {
    const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
      email,
      password,
      returnSecureToken: true,
    });
    const { idToken } = response.data;
    const decodedToken = jwtDecode(idToken) as { user_id: string; email: string };
    Cookies.set('access_token', idToken);
    return { email: decodedToken.email, uid: decodedToken.user_id };
  } catch (error) {
    console.error("Login Error", error);
    throw error;
  }
};

export const logOut = () => {
  Cookies.remove('access_token');
};
