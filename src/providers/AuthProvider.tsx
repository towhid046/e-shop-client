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
import { toast } from "react-toastify";
import useCart from "../hooks/useCart";
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
  isToggle: boolean;
  setIsToggle;
  handleRemoveProduct: (id: string) => void;
}

export const UserContext = createContext<UserContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { carts } = useCart();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [productIds, setProductIds] = useState<string[]>([]);
  const [isToggle, setIsToggle] = useState<boolean>(false);

  useEffect(() => {
    setProductIds(carts);
  }, [carts]);

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
    setUser(null);
    return signOut(auth);
  };

  // handle add item to cart:
  const handleAddToCart = (id: string) => {
    if (!user) return;
    if (!productIds.includes(id)) {
      setProductIds([...productIds, id]);
      localStorage.setItem("productsId", JSON.stringify([...productIds, id]));
      toast.success("Added to cart", { position: "top-center" });
    }
  };

  const handleRemoveProduct = (id: string) => {
    if (!user) return;
    const filteredIds = productIds.filter((i) => i !== id);
    setProductIds(filteredIds);
    localStorage.setItem("productsId", JSON.stringify(filteredIds));
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
    handleRemoveProduct,
    productIds,
    setIsToggle,
    isToggle,
  };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default AuthProvider;
