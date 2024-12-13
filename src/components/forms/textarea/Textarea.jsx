import styles from './Textarea.module.css';

const Textarea = ({ placeholder, title }) => {
  return(
    <div className={styles.textareaWrapper}>
      <p className={styles.titleText}>{title}</p>
      <textarea className={styles.textarea} placeholder={placeholder}/>
    </div>
  );
};

export default Textarea;