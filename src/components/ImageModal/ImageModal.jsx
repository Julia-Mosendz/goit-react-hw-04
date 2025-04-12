import Modal from "react-modal";
import { IoCloseOutline } from "react-icons/io5";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "540px",
    padding: "12px",
    borderRadius: "16px",
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
        <p className={css.caption}>{props.selectedImage.user.first_name}</p>
        <button
          className={css.btn}
          type="button"
          onClick={props.handleModalClosed}
        >
          <IoCloseOutline size={32} />
        </button>
      </div>
      <img className={css.img} src={props.selectedImage.urls.regular} alt="" />
    </Modal>
  );
}
