import styles from './Login.module.css';
import Title from '../../components/Title/Title';
import Input from './../../components/forms/input/Input';
import BtnLarge from './../../components/buttons/Large/BtnLarge';
import usePostLogin from '../../hooks/queries/login/usePostLogin';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../../assets/img/mainPage.png'
import BtnSmall from '../../components/buttons/Small/BtnSmall';

const Login = () => {
  const navigate = useNavigate();
  const { mutate: postLogin, error } = usePostLogin();
  const [values, setValues] = useState({
    username: '',
    password: '',
  });
  const handlePost = () => {
    postLogin(values, {
      onSuccess: (data) => {
        localStorage.setItem('ACCESS_TOKEN', data.token);
        alert('로그인에 성공했습니다');
        navigate(-2);
      },
      onError: () => {
        error.status === 401 ? alert('비밀번호가 틀렸습니다.') : alert('통신에 실패하였습니다.');
      }
    });
  };
  const handleLogout = () => {
    localStorage.removeItem('ACCESS_TOKEN');
    alert('로그아웃 되었습니다');
    navigate(-1);
  }
  return(
    <div className={styles.loginPageWrapper}>
      <Title url={image}>Login</Title>
      <section>
        <h2 className={styles.titleText}>관리자 전용 로그인</h2>
        <p className={styles.text}>
          관리자를 위한 로그인 페이지입니다 <br />
        </p>
        <hr className={styles.hr}/>
      </section>
      <section className={styles.body}>
        {
          localStorage.getItem('ACCESS_TOKEN') ? 
          <>
            관리자님 환영합니다 !
            <BtnSmall onClick={handleLogout}>로그아웃하기</BtnSmall>
          </>
          :
            <>
              <Input title='관리자 아이디' placeholder='관리자 아이디' value={values.username} setValue={setValues} name='username' />
              <Input title='관리자 비밀번호' placeholder='관리자 비밀번호' value={values.password} setValue={setValues} name='password' />
              <BtnLarge isFilled={true} onClick={handlePost}>로그인</BtnLarge>
            </>
        }
      </section>
    </div>
  );
};

export default Login;