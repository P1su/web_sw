import Title from '../../components/Title/Title';
import styles from './Reservation.module.css';
import Input from '../../components/forms/input/Input';
import ImageInput from '../../components/forms/image/ImageInput';
import Textarea from '../../components/forms/textarea/Textarea';
import BtnSmall from '../../components/buttons/Small/BtnSmall';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import usePostReservation from '../../hooks/queries/reservation/usePostReservation';
const Reservation = () => {
  const navigate = useNavigate();
  const { mutate: postReservation }= usePostReservation();
  const handleNavigate = () => {
    navigate('/reservation-board');
  };
  const [values, setValues] = useState({
    title: '',
    name: '',
    contact: '',
    email: '',
    startDate: '',
    endDate: '',
    password: '',
    address: '',
    area: '',
    budget: '',
    content: '',
    images: [],
  });
  const handleChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePost = () => {
    postReservation(values, {
      onSuccess: () => {
        alert('예약이 성공적으로 접수되었습니다.');
        navigate('/reservation-board');
      },
      onError: (error) => {
        console.error(error);
      },
    });
  }

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
          <Input 
            title='제목' 
            placeholder='제목을 입력해주세요' 
            value={values.title}
            setValue={setValues}
            name='title'
          />
          <Input 
            title='성명' 
            placeholder='홍길동' 
            value={values.name}
            setValue={setValues}
            name='name'
          />
          <Input 
            title='연락처' 
            placeholder='010-xxxx-xxxx' 
            value={values.contact}
            setValue={setValues}
            name='contact'
          />
          <Input 
            title='이메일' 
            placeholder='email@email.com'
            setValue={setValues}
            value={values.email}
            name='email' 
          />
        </div>
        <div className={styles.inputDiv}>
          <Input 
            title='주소' 
            placeholder='시공 장소' 
            setValue={setValues}
            value={values.address}
            name='address'
          />
          <Input 
            title='평수' 
            placeholder='100000' 
            setValue={setValues}
            value={values.area}
            name='area'
          />
          <Input 
            title='예상 견적' 
            placeholder='100000' 
            setValue={setValues}
            value={values.budget}
            name='budget'
          />
          <Input 
            title='게시글 비밀번호' 
            placeholder='100000' 
            setValue={setValues}
            value={values.password}
            name='password'
          />
        </div>
        <div>
          <div className={styles.dateTitle}>시공 가능일자</div>
          <div className={styles.dateBox}>
            <input 
              title='시공 희망 날짜' 
              placeholder='YYYY-MM-DD' 
              onChange={handleChange}
              value={values.startDate}
              name='startDate'
              type='date'
              className={styles.dateInput}
            />
            <span className={styles.dateTitle}> ~ </span>
            <input 
              title='완공 희망 날짜' 
              placeholder='YYYY-MM-DD'
              onChange={handleChange}
              value={values.endDate}
              name='endDate' 
              type='date'
              className={styles.dateInput}
            />
          </div>
        </div>
        <section className={styles.imageSection}>
          <ImageInput values={values} setValues={setValues} name='0' />
          <ImageInput values={values} setValues={setValues} name='1' />
          <ImageInput values={values} setValues={setValues} name='2' />
          <ImageInput values={values} setValues={setValues} name='3' />
        </section>
          <Textarea title='시공부위' placeholder='ex)방문.틀 6셋트(방3, 화장실2, 거실터닝도어1)
            샷시창.틀 확장형 5셋트 이중창 전체(방3, 거실1, 주방1)
            걸레받이전체
            현관문(내부만)
            주방전체(싱크대상부장,하부장, 아일랜드, 냉장고장, 주방팬트리장)
            작은방붙박이장
            입구방붙박이장
            안방드레스룸붙박이장, 화장대'
            value={values.content}
            setValue={setValues}
            name='content'
          />
        <div className={styles.buttonField}>
          <BtnSmall onClick={handlePost}>문의 제출하기</BtnSmall>
        </div>
      </article>
    </div>
  );
};

export default Reservation;