import Modal from "react-modal";

Modal.setAppElement("#root");

export const ModalTable = ({ isOpen, setIsOpen, items }) => {

  
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        shouldCloseOnEsc={false}
        onRequestClose={() => setIsOpen(false)}
      >
        <div>
          <button onClick={() => setIsOpen(false)}>Close Modal</button>
        </div>
      </Modal>
    </div>
  );
};
