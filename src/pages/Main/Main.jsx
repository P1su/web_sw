import BtnLarge from '../../components/buttons/Large/BtnLarge';
import styles from './Main.module.css'

const Main = () => {
  return(
    <div className={styles.test}>
      메인페이지
      <BtnLarge isFilled={false}>큰 버튼</BtnLarge>
      <BtnLarge isFilled={true}>큰 버튼</BtnLarge>
    </div>
  );
};

export default Main;