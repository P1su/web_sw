import ReservationList from '../../components/reservation/ReservationList/ReservationList';
import Title from '../../components/Title/Title';
import styles from './Reservation.module.css';

const Reservation = () => {
  return(
    <div className={styles.pageWrapper}>
      <Title>문의 내역</Title>
      <ReservationList />
    </div>
  );
};

export default Reservation;