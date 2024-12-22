import EventList from '../../components/Event/EventList/EventList';
import Title from '../../components/Title/Title';
import styles from './Event.module.css';
import image from '../../assets/img/eventPage.webp'
import { useNavigate } from 'react-router-dom';

const Event = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/event-create');
  };
  return(
    <div className={styles.pageWrapper}>
      <Title url={image}>Events</Title>
      <section>
        <h2 className={styles.titleText}>이달의 이벤트</h2>
        <p className={styles.text}>
          매달 진행되는 새로운 이벤트들을 확인해보세요<br />
        </p>
        {
          localStorage.getItem('ACCESS_TOKEN') ? 
          (
            <div className={styles.linkBox}>
              <span className={styles.a} onClick={() => {handleNavigate()}}>이벤트 작성하기</span>
            </div>
          ) : null
        }
        <hr className={styles.hr}/>
      </section>
      <EventList />
    </div>
  );
};

export default Event;