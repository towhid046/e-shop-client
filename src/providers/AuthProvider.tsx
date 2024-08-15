import React, { createContext, useEffect, useState, ReactNode } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { auth, googleProvider } from "../firebase/firebase";
// Define the user type or interface if you have a specific structure
interface User {
  id: string;
  name: string;
  email: string;
  img?: string;
}

export interface UserContextType {
  user: User | null;
  loading: boolean;
  createNewUser: (email: string, password: string) => void;
  logInUser: (email: string, password: string) => void;
  updateUserProfile: (displayName: string, photoURL: string) => void;
  logInWithGoogle: () => void;
  logOutUser: () => Promise<void>;
  handleAddToCart: (id: string) => void;
  productIds: string[];
  isToggle;
  setIsToggle;
}

export const UserContext = createContext<UserContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [productIds, setProductIds] = useState<string[]>([]);
  const [isToggle, setIsToggle] = useState<boolean>(false);

  const createNewUser = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const updateUserProfile = (displayName: string, photoURL: string) => {
    setLoading(true);
    return updateProfile(auth?.currentUser, { displayName, photoURL });
  };

  // Logout User:
  const logOutUser = (): Promise<void> => {
    return signOut(auth);
  };

  // handle add item to cart:
  const handleAddToCart = (id: string) => {
    const prevIds = localStorage.getItem("productsId")
      ? JSON.parse(localStorage.getItem("productsId"))
      : [];
    if (!prevIds.includes(id)) {
      localStorage.setItem("productsId", JSON.stringify([...prevIds, id]));
      setProductIds([...prevIds, id]);
    }
  };

  // Track the current user:
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const userInfo: UserContextType = {
    user,
    loading,
    logOutUser,
    createNewUser,
    logInUser,
    logInWithGoogle,
    updateUserProfile,
    handleAddToCart,
    
    productIds,
    setIsToggle,
    isToggle,
  };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default AuthProvider;
