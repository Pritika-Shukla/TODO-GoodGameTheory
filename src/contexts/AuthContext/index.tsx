
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';
import { signUp as signUpService, logIn as logInService, logOut as logOutService} from "../FirebaseAuth";

interface User {
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
    const newUser = await signUpService(email, password);
    setUser(newUser);
    return newUser;
  };

  const logIn = async (email: string, password: string) => {
    const loggedInUser = await logInService(email, password);
    setUser(loggedInUser);
    return loggedInUser;
  };

  const logOut = () => {
    logOutService();
    setUser(null);
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
        logOut();
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, signUp, logIn, logOut, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
