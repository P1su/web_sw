import Title from '../../components/Title/Title';
import styles from './Event.module.css';

const Event = () => {
  return(
    <div className={styles.pageWrapper}>
      <Title>이달의 이벤트</Title>
    </div>
  );
};

export default Event;