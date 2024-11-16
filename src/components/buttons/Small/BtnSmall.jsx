import styles from './BtnSmall.module.css';

const BtnLarge = ({ children, isFilled }) => {
  return(
    <button className={isFilled ? styles.btnLargeFilled : styles.btnLargeDefault}>
      {children}
    </button>
  );
};

export default BtnLarge;