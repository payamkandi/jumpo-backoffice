import Button from "@/components/ui/Button";
import Modal from "@/components/ui/modal/Modal";
import BranchesContext from "@/contexts/branchesContext";
import { CloseSquare } from "iconsax-react";
import { useContext } from "react";

function ArchiveModal() {
  const { archiveModal, setArchiveModal, branchIdToArchive } =
    useContext(BranchesContext);
  const toggleModal = () => setArchiveModal((prev) => !prev);
  const handleArchive = () => {};
  return (
    <Modal toggle={toggleModal} modal={archiveModal}>
      <div className="flex flex-col justify-center px-4 pb-8 pt-6 text-center sm:w-[550px]">
        <CloseSquare
          size={24}
          className="cursor-pointer self-end"
          onClick={toggleModal}
        />
        <span className="mb-2 text-lg font-semibold">آرشیو</span>
        <p className="text-sm">
          آیا از آرشیو کردن شعبه اپال با شناسه شعبه{" "}
          <span className="text-[#735CB4]"> {branchIdToArchive} </span>
          مطمئن هستید؟
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button fill onClick={toggleModal}>
            خیر
          </Button>
          <Button fill onClick={handleArchive}>
            بلی
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default ArchiveModal;
