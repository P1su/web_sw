import { useNavigate, useParams } from 'react-router-dom';
import Title from '../../../components/Title/Title';
import styles from './ReservationDetail.module.css';
import InfoBox from '../../../components/InfoBox/InfoBox';
import mockImage from '../../../assets/img/mockItem.png';
import BtnLarge from '../../../components/buttons/Large/BtnLarge';

//get으로 데이터 받아오면 배열에 집어넣고 map 으로 반복 처리
const ReservationDetail = () => {
  const reservationId = useParams('id');
  console.log(reservationId);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/reservation-board');
  };
  return(
    <div className={styles.pageWrapper}>
      <Title>Reservation</Title>
      <section className={styles.body}>
        <InfoBox />
        <InfoBox />
        <InfoBox />
        <InfoBox />
        <img src={mockImage} className={styles.reservationImage}/>
        <p className={styles.reservationContent}>
          이러쿵저러쿵,,,
        </p>
        <BtnLarge onClick={handleNavigate}>목록으로 돌아가기</BtnLarge>
      </section>
    </div>
  );
};

export default ReservationDetail;