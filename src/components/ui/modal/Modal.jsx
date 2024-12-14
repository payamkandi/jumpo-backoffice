import ReactModal from "react-modal";
import "./Modal.css";
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
      {children}
    </ReactModal>
  );
};

export default Modal;
