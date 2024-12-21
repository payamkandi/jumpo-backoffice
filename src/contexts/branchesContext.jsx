import { createContext, useState } from "react";

const BranchesContext = createContext();

export const BranchesProvider = ({ children }) => {
  const [archiveModal, setArchiveModal] = useState(false);
  const [unarchiveModal, setUnarchiveModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  const [branchIdToArchive, setBranchIdToArchive] = useState(null);
  const [branchIdToUnArchive, setBranchIdToUnarchive] = useState(null);
  const [branchInfo, setBranchInfo] = useState(null);

  const toggleArchiveModal = () => setArchiveModal((prev) => !prev);
  const toggleUnarchiveModal = () => setUnarchiveModal((prev) => !prev);
  const toggleInfoModal = () => setInfoModal((prev) => !prev);

  return (
    <BranchesContext.Provider
      value={{
        archiveModal,
        setArchiveModal,
        branchInfo,
        setBranchInfo,
        infoModal,
        unarchiveModal,
        setUnarchiveModal,
        setInfoModal,
        toggleArchiveModal,
        toggleInfoModal,
        branchIdToUnArchive,
        toggleUnarchiveModal,
        setBranchIdToUnarchive,
        branchIdToArchive,
        setBranchIdToArchive,
      }}
    >
      {children}
    </BranchesContext.Provider>
  );
};

export default BranchesContext;
