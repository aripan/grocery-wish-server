import React, { useState, useContext } from "react";

const RiderContext = React.createContext();

export const useRiderContext = () => {
  return useContext(RiderContext);
};

export const RiderContextProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
    name: "",
    password: "",
    email: "",
    success: "",
    error: "",
  });

  const value = { loggedInUser, setLoggedInUser };

  return (
    <RiderContext.Provider value={value}>{children}</RiderContext.Provider>
  );
};
