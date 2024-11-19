import styles from './Input.module.css';

const Input = ({ title, placeholder }) => {
  return(
    <div className={styles.inputLargeWrapper}>
      <p className={styles.titleText}>{title}</p>
      <input className={styles.textInput} placeholder={placeholder}/>
    </div>
    
  );
};

export default Input;