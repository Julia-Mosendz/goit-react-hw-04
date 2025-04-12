import Modal from "react-modal";
import { IoCloseOutline } from "react-icons/io5";
import css from "./ImageModal.module.css";

const customStyles = {
  content: {
    borderRadius: "16px",
    position: "absolute",
    width: "fit-content",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: { backgroundColor: "rgba(0 0 0 / 50%)" },
};


export function ImageModal(props) {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.handleModalClosed}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="image modal"
    >
      <div className={css.wrapper}>
        <p className={css.caption}>Modal title</p>
        <button
          className={css.btn}
          type="button"
          onClick={props.handleModalClosed}
        >
          <IoCloseOutline size={32} />
        </button>
      </div>
      <img src={props.selectedImage.urls.regular} alt="" />
    </Modal>
  );
}
