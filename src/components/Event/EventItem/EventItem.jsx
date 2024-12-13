import styles from './EventItem.module.css';

const EventItem = () => {
  return (
    <div className={styles.eventItemWrapper}>
      <img className={styles.img}/>
      <p className={styles.title}>12월 이벤트</p>
      <span>2024.12.31</span>
    </div>
  );
};

export default EventItem;