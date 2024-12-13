import styles from './Textarea.module.css';

const Textarea = ({ placeholder, title, value, setValue, name}) => {
  const handleChange = (e) => {
    // if (typeof value === 'object' && value !== null) {
       setValue((prevValues) => ({
         ...prevValues,
         [name]: e.target.value, // 객체의 name 속성만 업데이트
    }));
  };
  return(
    <div className={styles.textareaWrapper}>
      <p className={styles.titleText}>{title}</p>
      <textarea className={styles.textarea} placeholder={placeholder} value={value} onChange={handleChange} name={name}/>
    </div>
  );
};

export default Textarea;