import { useContext } from "react";
import { UserContext, UserContextType } from "../providers/AuthProvider";

const useAuth: () => UserContextType = () => {
  return useContext(UserContext);
};

export default useAuth;
