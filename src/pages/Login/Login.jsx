import styles from './Login.module.css';
import Input from './../../components/forms/input/Input';
import BtnLarge from './../../components/buttons/Large/BtnLarge';

const Login = () => {
  return(
    <div className={styles.loginPageWrapper}>
      <Input title='관리자 아이디' placeholder='관리자 아이디'/>
      <Input title='관리자 비밀번호' placeholder='관리자 비밀번호'/>
      <BtnLarge isFilled={true}>로그인</BtnLarge>
    </div>
  );
};

export default Login;