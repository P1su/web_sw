import styles from './BtnSmall.module.css';

const BtnSmall = ({ children, isFilled, onClick }) => {
  return(
    <button onClick={() => onClick()} className={isFilled ? styles.btnSmallFilled : styles.btnSmallDefault}>
      {children}
    </button>
  );
};

export default BtnSmall;