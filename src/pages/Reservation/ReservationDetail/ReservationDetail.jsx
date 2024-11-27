import { useParams } from 'react-router-dom';
import Title from '../../../components/Title/Title';
import styles from './ReservationDetail.module.css';
import InfoBox from '../../../components/InfoBox/InfoBox';
import mockImage from '../../../assets/img/mockItem.png';

//get으로 데이터 받아오면 배열에 집어넣고 map 으로 반복 처리
const ReservationDetail = () => {
  const reservationId = useParams('id');
  console.log(reservationId);
  
  return(
    <div className={styles.pageWrapper}>
      <Title>제목</Title>
      <InfoBox />
      <InfoBox />
      <InfoBox />
      <InfoBox />
      <img src={mockImage} />
      <p className={styles.reservationContent}>
        이러쿵저러쿵,,,
      </p>
    </div>
  );
};

export default ReservationDetail;