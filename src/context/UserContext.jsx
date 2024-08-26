import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userName, setUserName] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setUserName("Mango UA");
      setIsLoading(false);
    }, 3000);
  }, []);

  const onLogOut = () => {
    setUserName(null);
  };

  return (
    <UserContext.Provider value={{ isLoading, userName, onLogOut }}>
      {children}
    </UserContext.Provider>
  );
};
