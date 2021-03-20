import React, { useState, useContext } from "react";

const RiderContext = React.createContext();

export const useRiderContext = () => {
  return useContext(RiderContext);
};

export const RiderContextProvider = ({ children }) => {
  const [vehicles, setVehicles] = useState([]);

  const value = { vehicles, setVehicles };

  return (
    <RiderContext.Provider value={value}>{children}</RiderContext.Provider>
  );
};
