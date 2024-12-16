import { useNavigate, useParams } from 'react-router-dom';
import Title from '../../../components/Title/Title';
import styles from './ReservationDetail.module.css';
import InfoBox from '../../../components/InfoBox/InfoBox';
import mockImage from '../../../assets/img/mockItem.png';
import BtnLarge from '../../../components/buttons/Large/BtnLarge';
import useGetReservationDetail from '../../../hooks/queries/reservation/useGetReservationDetail';

//get으로 데이터 받아오면 배열에 집어넣고 map 으로 반복 처리
const ReservationDetail = () => {
  const { id } = useParams('id');
  const { data, isLoading } = useGetReservationDetail(id);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/reservation-board');
  };
  if(isLoading){
    return <p>Loading...</p>;
  }
  ////////여기 데이터 fetch 해서 처리중이었음음
  return(
    <div className={styles.pageWrapper}>
      <Title>Reservation</Title>
      <section className={styles.body}>
        <section>
          <h3>{data.title}</h3>
          <span>작성자 {data.name}님</span>
        </section>
        <InfoBox />
        <InfoBox />
        <InfoBox />
        <InfoBox />
        {
          data.images.map((image, idx) => {//가로로 배열하기
            return (
              <img key={idx} src={image} className={styles.reservationImage} />
            );
          })
        }
        <p className={styles.reservationContent}>
          {data.content}
        </p>
        <BtnLarge onClick={handleNavigate}>목록으로 돌아가기</BtnLarge>
      </section>
    </div>
  );
};

export default ReservationDetail;