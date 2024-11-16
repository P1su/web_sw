import styles from './BtnPrimary.module.css';

const BtnPrimary = ({ children, isFilled }) => {
  return(
    <button className={isFilled ? styles.btnPrimaryFilled : styles.btnPrimaryDefault}>
      {children}
    </button>
  );
};

export default BtnPrimary;