import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext();

export const UserProvider = (props) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    localStorage.getItem("login") === "true"
      ? setIsLogin(true)
      : setIsLogin(false);
  }, []);

  const value = {
    isLogin,
    setIsLogin,
  };

  return <UserContext.Provider value={value} {...props} />;
};

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser debe estar dentro del provedor  userProvider");
  }
  return context;
}
