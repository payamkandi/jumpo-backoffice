import ReactModal from "react-modal";
import "./Modal.css";
import { CloseSquare } from "iconsax-react";
const Modal = ({ modal, toggle, closeOverClick = true, children }) => {
  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={modal}
      contentLabel="onRequestClose Example"
      onRequestClose={toggle}
      shouldCloseOnOverlayClick={closeOverClick}
      overlayClassName="overlay"
      className="modal"
    >
      <CloseSquare
        size={24}
        onClick={toggle}
        className="absolute left-4 top-4 cursor-pointer"
      />
      {children}
    </ReactModal>
  );
};

export default Modal;
