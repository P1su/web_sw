import Title from '../../../components/Title/Title';
import styles from './WriteEstimate.module.css';
import Input from '../../../components/forms/input/Input';
import Textarea from '../../../components/forms/textarea/Textarea';
import ImageInput from '../../../components/forms/image/ImageInput';
import BtnSmall from './../../../components/buttons/Small/BtnSmall';
const WriteEstimate = () => {
  return(
    <div className={styles.pageWrapper}>
      <Title>견적 문의하기</Title>
      <Input title='성명' placeholder='홍길동'/>
      <Input title='연락처' placeholder='010-xxxx-xxxx'/>
      <Input title='이메일' placeholder='email@email.com'/>
      <Input title='상담 날짜' placeholder='YYYY-MM-DD'/>
      <Input title='제목' placeholder='제목을 입력해주세요'/>
      <Input title='게시글 비밀번호' placeholder='비밀번호를 입력해주세요'/>
      <div className={styles.imageBox}>
        <ImageInput />
        <ImageInput />
        <ImageInput />
        <ImageInput />
      </div>
      <Textarea title='내용' placeholder='문의 내용을 입력해주세요'/>
      <div className={styles.buttonField}>
        <BtnSmall>문의 제출하기</BtnSmall>
      </div>
    </div>
  );
};

export default WriteEstimate;