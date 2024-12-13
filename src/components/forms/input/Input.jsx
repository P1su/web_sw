import styles from './Input.module.css';

const Input = ({ title, placeholder, value, setValue, name }) => {
  console.log(name);
  const handleChange = (e) => {
    setValue((prevValues) => ({
      ...prevValues,
      [name]: e.target.value,
    }));
  };
  
  return(
    <div className={styles.inputLargeWrapper}>
      <p className={styles.titleText}>{title}</p>
      <input className={styles.textInput} placeholder={placeholder} value={value} onChange={handleChange} name={name} />
    </div>  
  );
};

export default Input;