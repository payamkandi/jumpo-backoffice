import { createContext, useState } from "react";

const DiscountsContext = createContext();

export const DiscountsProvider = ({ children }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [discountInfo, setDiscountInfo] = useState(null);
  const [infoModal, setInfoModal] = useState(false);
  const [discountIdToDelete, setDiscountIdToDelete] = useState(null);

  return (
    <DiscountsContext.Provider
      value={{
        discountInfo,
        deleteModal,
        setDeleteModal,
        setDiscountInfo,
        infoModal,
        setInfoModal,
        discountIdToDelete,
        setDiscountIdToDelete,
      }}
    >
      {children}
    </DiscountsContext.Provider>
  );
};

export default DiscountsContext;
