import { useNavigate, useParams } from 'react-router-dom';
import Title from '../../../components/Title/Title';
import styles from './ReservationDetail.module.css';
import InfoBox from '../../../components/InfoBox/InfoBox';
import BtnLarge from '../../../components/buttons/Large/BtnLarge';
import useGetReservationDetail from '../../../hooks/queries/reservation/useGetReservationDetail';
import image from '../../../assets/img/reservationPage.png';

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
  const formattedDate = (oldDate) => {
    const date = new Date(oldDate);
    const formattedDate = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
    return formattedDate;
  }
  ////////여기 데이터 fetch 해서 처리중이었음음
  return(
    <div className={styles.pageWrapper}>
      <Title url={image}>Reservation</Title>
      <section className={styles.body}>
        <div>
          <section className={styles.titleSection}>
            <h3 className={styles.h3}>{data.title}</h3>
            <div className={styles.nameBox}>작성자 <span className={styles.name}>{data.name}</span>님</div>
          </section>
          <hr className={styles.hr}/>
        </div>
        <section className={styles.contentSection}>
          <InfoBox title='성명' content={data.name} />
          <InfoBox title='연락처' content={data.contact} />
          <InfoBox title='이메일' content={data.email} />
        </section>
        <section className={styles.contentSection}>
          <InfoBox title='장소' content={data.area} />
          <InfoBox title='평수' content={data.address} />
          <InfoBox title='예상 견적' content={data.budget} />
        </section>
        <section className={styles.contentSection}>
          <InfoBox title='희망 시공 일자' content={`${formattedDate(data.startDate)} ~ ${formattedDate(data.endDate)}`}/>
          <InfoBox />
        </section>
        <section className={styles.imageSection}>
          {
            data.images.map((image, idx) => {//가로로 배열하기
              return (
                <img key={idx} src={image} className={styles.reservationImage} />
              );
            })
          }
        </section>
        <p className={styles.reservationContent}>
          {data.content}
        </p>
        <BtnLarge onClick={handleNavigate}>목록으로 돌아가기</BtnLarge>
      </section>
    </div>
  );
};

export default ReservationDetail;