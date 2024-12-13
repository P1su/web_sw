import styles from './Login.module.css';
import Input from './../../components/forms/input/Input';
import BtnLarge from './../../components/buttons/Large/BtnLarge';
import usePostLogin from '../../hooks/queries/login/usePostLogin';
import { useState } from 'react';

const Login = () => {
  const { mutate: postLogin } = usePostLogin();
  const [values, setValues] = useState({
    id: '',
    password: '',
  });
  console.log(values)
  const handlePost = () => {
    postLogin(values, {
      onSuccess: (data) => {
        console.log(data);
      },
    });
  };

  return(
    <div className={styles.loginPageWrapper}>
      <Input title='관리자 아이디' placeholder='관리자 아이디' value={values.id} setValue={setValues} name='id' />
      <Input title='관리자 비밀번호' placeholder='관리자 비밀번호' value={values.password} setValue={setValues} name='password' />
      <BtnLarge isFilled={true} onClick={handlePost}>로그인</BtnLarge>
    </div>
  );
};

export default Login;