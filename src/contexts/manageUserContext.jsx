import { createContext, useState } from "react";

const ManageUserContext = createContext();

export const ManageUserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [infoModal, setInfoModal] = useState(false);

  return (
    <ManageUserContext.Provider
      value={{ userInfo, setUserInfo, infoModal, setInfoModal }}
    >
      {children}
    </ManageUserContext.Provider>
  );
};

export default ManageUserContext;
