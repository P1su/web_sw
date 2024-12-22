import styles from './EventCreate.module.css';
import Title from '../../../components/Title/Title';
import image from '../../../assets/img/eventPage.webp'
import BtnSmall from '../../../components/buttons/Small/BtnSmall';
import { useState } from 'react';
import usePostEvent from '../../../hooks/queries/event/usePostEvent';
import { useNavigate } from 'react-router-dom';
import EventForm from '../../../components/forms/event/EventForm';

const EventCreate = () => {
  const { mutate: postEvent } = usePostEvent();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    title:'',
    event_date: '',
    content: '',
  });
  
  /*
  const date = new Date();
  const formattedDate = (oldDate) => {
    const date = new Date(oldDate);
    const formattedDate = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
    return formattedDate;
  };*/

  const handleSubmit = () => {
    postEvent(values, {
      onSuccess: () => {
        alert('이벤트가 성공적으로 생성되었습니다.');
        navigate('/event');
      },
      onError: (error) => {
        console.error(error);
      },
    });
  };

  return(
    <div className={styles.pageWrapper}>
      <Title url={image}>Events</Title>
      <section className={styles.titleSection}>
        <h3 className={styles.h3}>이벤트 작성</h3>
        <EventForm values={values} setValues={setValues} />
      </section>
      <BtnSmall onClick={handleSubmit}>이벤트 생성하기</BtnSmall>
    </div>
  );
};

export default EventCreate;