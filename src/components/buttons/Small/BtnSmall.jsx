import styles from './BtnSmall.module.css';

const BtnSmall = ({ children, isFilled }) => {
  return(
    <button className={isFilled ? styles.btnSmallFilled : styles.btnSmallDefault}>
      {children}
    </button>
  );
};

export default BtnSmall;