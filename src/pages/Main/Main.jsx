import styles from './Main.module.css'
import Title from '../../components/Title/Title';

const Main = () => {
  return(
    <div className={styles.mainWrapper}>
      <Title></Title>
      <h2 className={styles.titleText}>e끌림인테리어필름</h2>
      <p className={styles.text}>
        공간을 더욱 아름답고 안전하게 <br />
        e끌림인테리어필름이 함께합니다 <br />
      </p>
      <hr className={styles.hr}/>
    </div>
  );
};

export default Main;