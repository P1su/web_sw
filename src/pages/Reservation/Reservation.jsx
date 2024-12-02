import Title from '../../components/Title/Title';
import styles from './Reservation.module.css';
import Input from '../../components/forms/input/Input';
import ImageInput from '../../components/forms/image/ImageInput';
import Textarea from '../../components/forms/textarea/Textarea';
import BtnSmall from '../../components/buttons/Small/BtnSmall';
const Reservation = () => {
  return(
    <div className={styles.pageWrapper}>
      <Title>Reservation</Title>
      <h2 className={styles.titleText}>견적 문의하기</h2>
      <p className={styles.text}>
        문의하실 내용을 작성해주세요 <br />
        실제 상담시 변경될 수 있습니다 <br />
        보다 정확한 상담을 위하여 사진을 첨부해주세요 <br />
      </p>
      <hr className={styles.hr}/>
      <article className={styles.article}>
        <Input title='성명' placeholder='홍길동'/>
        <Input title='연락처' placeholder='010-xxxx-xxxx'/>
        <Input title='이메일' placeholder='email@email.com'/>
        <Input title='상담 날짜' placeholder='YYYY-MM-DD'/>
        <Input title='제목' placeholder='제목을 입력해주세요'/>
        <Input title='게시글 비밀번호' placeholder='비밀번호를 입력해주세요'/>
        <section className={styles.imageSection}>
          <ImageInput />
          <ImageInput />
          <ImageInput />
          <ImageInput />
        </section>
        <Textarea title='내용' placeholder='문의 내용을 입력해주세요'/>
        <div className={styles.buttonField}>
          <BtnSmall>문의 제출하기</BtnSmall>
        </div>
      </article>
    </div>
  );
};

export default Reservation;