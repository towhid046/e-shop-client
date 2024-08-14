import React, { createContext, useEffect, useState, ReactNode } from "react";

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
  logOutUser: () => void;
  logInUser: (email: string, password: string) => void;
}

export const UserContext = createContext<UserContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const createNewUser = (email:string, password:string) => {};
  const logInUser = (email:string, password:string) => {};

  // Logout User:
  const logOutUser = (): void => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // Track the current user:
  useEffect(() => {
    const usr = localStorage.getItem("user")
      ? (JSON.parse(localStorage.getItem("user") as string) as User)
      : null;

    setUser(usr);
    setLoading(false);
  }, []);

  const userInfo: UserContextType = {
    user,
    loading,
    logOutUser,
    createNewUser,
    logInUser,
  };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default AuthProvider;
