import styles from './BtnLarge.module.css';

const BtnLarge = ({ children, isFilled, onClick }) => {
  return(
    <button className={isFilled ? styles.btnLargeFilled : styles.btnLargeDefault} onClick={() => onClick()}>
      {children}
    </button>
  );
};

export default BtnLarge;