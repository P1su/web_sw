import styles from './InfoBox.module.css';

const InfoBox = ({ title, content }) => {
  return (
    <div className={styles.infoBoxWrapper}>
      <p className={styles.infoTitleText}>
        {title}
      </p>
      <p className={styles.infoContentText}>
        {content}
      </p>
    </div>
  );
};

export default InfoBox;