import { useNavigate } from 'react-router-dom';
import ReservationList from '../../../components/reservation/ReservationList/ReservationList';
import Title from '../../../components/Title/Title';
import styles from './ReservationBoard.module.css';
import image from '../../../assets/img/reservationPage.webp';

const ReservationBoard = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/reservation');
  };

  return(
    <div className={styles.pageWrapper}>
      <Title url={image}>Reservation</Title>
      <h2 className={styles.titleText}>견적 게시판</h2>
      <p className={styles.text}>
        문의 내역을 확인하실 수 있습니다<br />
        작성자와 관리자만이 게시글에 접근할 수 있습니다<br />
      </p>
      <span className={styles.span} onClick={() => handleNavigate()}>문의하러가기</span>
      <hr className={styles.hr}/>
      <ReservationList />
    </div>
  );
};

export default ReservationBoard;