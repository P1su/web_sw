import styles from './Textarea.module.css';

const Textarea = ({ placeholder, title }) => {
  return(
    <>
      <p className={styles.titleText}>{title}</p>
      <textarea className={styles.textarea} placeholder={placeholder}/>
    </>
  );
};

export default Textarea;