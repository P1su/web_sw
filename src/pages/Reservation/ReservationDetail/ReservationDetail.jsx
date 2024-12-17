import { useNavigate, useParams } from 'react-router-dom';
import Title from '../../../components/Title/Title';
import styles from './ReservationDetail.module.css';
import InfoBox from '../../../components/InfoBox/InfoBox';
import BtnLarge from '../../../components/buttons/Large/BtnLarge';
import useGetReservationDetail from '../../../hooks/queries/reservation/useGetReservationDetail';
import image from '../../../assets/img/reservationPage.png';
import useDeleteReservation from '../../../hooks/queries/reservation/useDeleteReservation';

const ReservationDetail = () => {
  const { id } = useParams('id');
  const { data, isLoading } = useGetReservationDetail(id);
  const { mutate: deleteReservation } = useDeleteReservation(id);
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
  };

  const handleDelete = () => {
    deleteReservation({},{
      onSuccess: () => {
        alert('성공적으로 삭제되었습니다.');
        navigate('/reservation-board');
      },
    });
  };

  return(
    <div className={styles.pageWrapper}>
      <Title url={image}>Reservation</Title>
      <h2 className={styles.h2}>견적 문의 확인</h2>
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
        <section className={styles.modifySection}>
          <span>수정하기</span>
          <span onClick={() => {handleDelete()}}>삭제하기</span>
        </section>
        <BtnLarge onClick={handleNavigate}>목록으로 돌아가기</BtnLarge>
      </section>
    </div>
  );
};

export default ReservationDetail;