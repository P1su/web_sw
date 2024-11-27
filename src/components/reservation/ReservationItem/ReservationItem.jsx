import styles from './ReservationItem.module.css';

const ReservationItem = ({ date, title, name, onClick }) => {
  return (
    <div className={styles.reservationItemWrapper} onClick={() => {onClick()}}>
      <div className={styles.textArea}>
        <p className={styles.dateText}>{date}</p>
        <p className={styles.titleText}>{title}</p>
        <p className={styles.nameText}>{name}</p>
      </div>
      <hr />
    </div>
  );
};

export default ReservationItem;