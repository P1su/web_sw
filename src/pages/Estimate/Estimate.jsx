import styles from './Estimate.module.css';
import img1 from '../../assets/img/Interior1.jpg';
import img2 from '../../assets/img/Interior6.jpg';
const Estimate = () => {
  return(
    <div className={styles.estimatePageWrapper}>
      <div className={styles.typeBox} style={{ backgroundImage: `url(${img1})` }}>
        예상 견적 확인해보기
      </div>
      <div className={styles.typeBox} style={{ backgroundImage: `url(${img2})` }}>
        견적 문의하기
      </div>
    </div>
  );
};

export default Estimate;