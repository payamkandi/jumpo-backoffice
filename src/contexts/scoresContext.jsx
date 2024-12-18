import { createContext, useState } from "react";

const ScoresContext = createContext();

export const ScoresProvider = ({ children }) => {
  const [scoreInfo, setScoreInfo] = useState(null);
  const [infoModal, setInfoModal] = useState(false);
  return (
    <ScoresContext.Provider
      value={{ infoModal, setInfoModal, scoreInfo, setScoreInfo }}
    >
      {children}
    </ScoresContext.Provider>
  );
};

export default ScoresContext;
