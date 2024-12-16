import { createContext, useState } from "react";

const ManageCardsContext = createContext();

export const ManageCardsProvider = ({ children }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [cardInfo, setCardInfo] = useState(null);
  const [infoModal, setInfoModal] = useState(false);
  const [cardIdToDelete, setCardIdToDelete] = useState(null);
  return (
    <ManageCardsContext.Provider
      value={{
        cardInfo,
        deleteModal,
        setDeleteModal,
        setCardInfo,
        infoModal,
        setInfoModal,
        cardIdToDelete,
        setCardIdToDelete,
      }}
    >
      {children}
    </ManageCardsContext.Provider>
  );
};

export default ManageCardsContext;
