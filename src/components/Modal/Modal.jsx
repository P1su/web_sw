import styles from './Modal.module.css';

const Modal = ({ children, closeModal }) => {
  return(
    <div className={styles.overlay}>
      <div className={styles.modalWrapper}>
        <div className={styles.deleteField} onClick={() => closeModal()}>
          X
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;