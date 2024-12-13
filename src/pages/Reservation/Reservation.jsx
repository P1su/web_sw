import Title from '../../components/Title/Title';
import styles from './Reservation.module.css';
import Input from '../../components/forms/input/Input';
import ImageInput from '../../components/forms/image/ImageInput';
import Textarea from '../../components/forms/textarea/Textarea';
import BtnSmall from '../../components/buttons/Small/BtnSmall';
import { useNavigate } from 'react-router-dom';
const Reservation = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/reservation-board');
  };

  return(
    <div className={styles.pageWrapper}>
      <Title>Reservation</Title>
      <h2 className={styles.titleText}>견적 문의하기</h2>
      <p className={styles.text}>
        문의하실 내용을 작성해주세요 <br />
        실제 상담시 변경될 수 있습니다 <br />
        보다 정확한 상담을 위하여 사진을 첨부해주세요 <br />
      </p>
      <span className={styles.span} onClick={() => handleNavigate()}>게시판 바로가기</span>
      <hr className={styles.hr}/>
      <article className={styles.article}>
        <div className={styles.inputDiv}>
        <Input title='성명' placeholder='홍길동'/>
        <Input title='연락처' placeholder='010-xxxx-xxxx'/>
        <Input title='이메일' placeholder='email@email.com'/>
        </div>
        <div className={styles.inputDiv}>
        <Input title='시공 희망 날짜' placeholder='YYYY-MM-DD'/>
        <Input title='완공 희망 날짜' placeholder='YYYY-MM-DD'/>
        </div>
        <div className={styles.inputDiv}>
        <Input title='주소' placeholder='시공 장소'/>
        <Input title='희망 견적' placeholder='100000'/>
        <Input title='게시글 비밀번호' placeholder='100000'/>
        </div>
        <section className={styles.imageSection}>
          <ImageInput />
          <ImageInput />
          <ImageInput />
          <ImageInput />
        </section>
        <Textarea title='시공부위' placeholder='ex)방문.틀 6셋트(방3, 화장실2, 거실터닝도어1)

샷시창.틀 확장형 5셋트 이중창 전체(방3, 거실1, 주방1)

걸레받이전체

현관문(내부만)

주방전체(싱크대상부장,하부장, 아일랜드, 냉장고장, 주방팬트리장)

작은방붙박이장

입구방붙박이장

안방드레스룸붙박이장, 화장대'/>
        <div className={styles.buttonField}>
          <BtnSmall>문의 제출하기</BtnSmall>
        </div>
      </article>
    </div>
  );
};

export default Reservation;