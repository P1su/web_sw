import styles from './InfoBox.module.css';

const InfoBox = ({ title, content }) => {
  return (
    <div className={styles.infoBoxWrapper}>
      <p className={styles.infoTitleText}>
        성명  
        {title}
      </p>
      <p className={styles.infoContentText}>
        송아무개
        {content}
      </p>
    </div>
  );
};

export default InfoBox;