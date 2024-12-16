import { createContext, useState } from "react";

const SellGiftCardsContext = createContext();

export const SellGiftCardsProvider = ({ children }) => {
  const [cardInfo, setCardInfo] = useState(null);
  const [infoModal, setInfoModal] = useState(false);

  return (
    <SellGiftCardsContext.Provider
      value={{ cardInfo, setCardInfo, infoModal, setInfoModal }}
    >
      {children}
    </SellGiftCardsContext.Provider>
  );
};

export default SellGiftCardsContext;
