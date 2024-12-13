import styles from './EventItem.module.css';

const EventItem = ({ date, title, onClick }) => {
  return (
    <div className={styles.eventItmeWrapper} onClick={() => onClick()}>
      <div className={styles.textArea}>
        <p className={styles.dateText}>{date}</p>
        <p className={styles.titleText}>{title}</p>
        <p className={styles.nameText}>확인하러가기 →</p>
      </div>
      <hr />
    </div>
  );
};

export default EventItem;