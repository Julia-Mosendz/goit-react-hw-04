import Modal from "react-modal"
import css from "./ImageModal.module.css"

Modal.setAppElement("#root")

export function ImageModal() {
    return (
      <Modal isOpen="true">
        <button>X</button>
        <img
          src="https://plus.unsplash.com/premium_photo-1683121823310-121e5fe5a06d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FrZXxlbnwwfDJ8MHx8fDA%3D"
          alt=""
        />
      </Modal>
    );
}