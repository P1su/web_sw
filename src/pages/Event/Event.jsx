import EventList from '../../components/Event/EventList/EventList';
import Title from '../../components/Title/Title';
import styles from './Event.module.css';
import image from '../../assets/img/eventPage.png'

const Event = () => {
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
              <a className={styles.a}>이벤트 작성하기</a>
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