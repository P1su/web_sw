import BtnPrimary from '../../components/buttons/BtnPrimary/BtnPrimary';
import BtnLarge from '../../components/buttons/Large/BtnLarge';
import styles from './Main.module.css'
import BtnSmall from './../../components/buttons/Small/BtnSmall';
import Input from '../../components/forms/input/Input';
import Search from '../../components/forms/search/Search';

const Main = () => {
  return(
    <div className={styles.test}>
      메인페이지
      <BtnLarge isFilled={false}>큰 버튼</BtnLarge>
      <BtnLarge isFilled={true}>큰 버튼</BtnLarge>
      <BtnSmall isFilled={false}>작은 버튼</BtnSmall>
      <BtnPrimary isFilled={false}>Primary 버튼</BtnPrimary>
      <Input title='성명' placeholder='성명'/> 
      <Search placeholder='원하시는 자재를 입력하세요'/>
    </div>
  );
};

export default Main;