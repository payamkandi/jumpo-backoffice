import { createContext, useState } from "react";

const TicketContext = createContext();

export const TicketContextProvider = ({ children }) => {
  const [ticketInfo, setTicketInfo] = useState(null);
  const [infoModal, setInfoModal] = useState(false);

  return (
    <TicketContext.Provider
      value={{ ticketInfo, setTicketInfo, infoModal, setInfoModal }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export default TicketContext;
