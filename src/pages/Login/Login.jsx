import styles from './Login.module.css';
import Input from './../../components/forms/input/Input';
import BtnLarge from './../../components/buttons/Large/BtnLarge';
import usePostLogin from '../../hooks/queries/login/usePostLogin';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        navigate('/');
      },
      onError: () => {
        error.status === 401 ? alert('비밀번호가 틀렸습니다.') : alert('통신에 실패하였습니다.');
      }
    });
  };

  return(
    <div className={styles.loginPageWrapper}>
      <Input title='관리자 아이디' placeholder='관리자 아이디' value={values.username} setValue={setValues} name='username' />
      <Input title='관리자 비밀번호' placeholder='관리자 비밀번호' value={values.password} setValue={setValues} name='password' />
      <BtnLarge isFilled={true} onClick={handlePost}>로그인</BtnLarge>
    </div>
  );
};

export default Login;