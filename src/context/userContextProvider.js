import React from "react";
import { useState } from "react";

import UserContext from "./userContext";

const UserContextProvider = ({ children }) => {
  const [data, setData] = useState("");
  const [hotelinfo, setHotelInfo] = useState("");
  return (
    <UserContext.Provider value={{ data, setData, hotelinfo, setHotelInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
