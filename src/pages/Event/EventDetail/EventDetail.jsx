import { useNavigate } from 'react-router-dom';
import styles from './EventDetail.module.css';
import Title from '../../../components/Title/Title';
import BtnSmall from '../../../components/buttons/Small/BtnSmall';

const EventDetail = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/event');
  };
  
  return(
    <div className={styles.pageWrapper}>
      <Title>Events</Title>
      <section>
        <h2 className={styles.titleText}>이달의 이벤트</h2>
        <p className={styles.text}>
          매달 진행되는 새로운 이벤트들을 확인해보세요<br />
        </p>
        <hr className={styles.hr} />
      </section>
      <section className={styles.titleSection}>
        <h3 className={styles.h3}>이벤트 제목</h3>
        <span className={styles.dateSpan}>2024.12.01</span>
      </section>
      <hr className={styles.hr} />
      <article className={styles.article}>
        <p className={styles.p}>
          이벤트가 여기 이렇게 작성이가 됩니다. 
        </p>
      </article>
      <BtnSmall onClick={handleNavigate}>목록으로 돌아가기</BtnSmall>
    </div>
  );
};

export default EventDetail;