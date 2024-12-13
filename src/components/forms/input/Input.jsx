import styles from './Input.module.css';

const Input = ({ title, placeholder, value, setValue, name }) => {
  const handleChange = (e) => {
   // if (typeof value === 'object' && value !== null) {
      setValue((prevValues) => ({
        ...prevValues,
        [name]: e.target.value, // 객체의 name 속성만 업데이트
      }));
  //  } else {
   //   // value가 단일 값일 경우, 바로 값만 업데이트
    //  setValue(e.target.value);
   // }
  };
  
  return(
    <div className={styles.inputLargeWrapper}>
      <p className={styles.titleText}>{title}</p>
      <input className={styles.textInput} placeholder={placeholder} value={value} onChange={handleChange} name={name} />
    </div>  
  );
};

export default Input;