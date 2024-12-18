import { useNavigate, useParams } from 'react-router-dom';
import styles from './EventDetail.module.css';
import Title from '../../../components/Title/Title';
import BtnSmall from '../../../components/buttons/Small/BtnSmall';
import useGetEventItem from '../../../hooks/queries/event/useGetEventItem';
import image from '../../../assets/img/eventPage.png'
import useDeleteEvent from '../../../hooks/queries/event/useDeleteEvent';
import { useState, useEffect } from 'react';
import EventForm from '../../../components/forms/event/EventForm';
import usePutEvent from '../../../hooks/queries/event/usePutEvent';
import { useQueryClient } from '@tanstack/react-query';

const EventDetail = () => {
  const { id } = useParams('id');
  const { data } = useGetEventItem(id);
  const [isEdit, setIsEdit] = useState(false);
  const { mutate: deleteEvent } =  useDeleteEvent(id);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [values, setValues] = useState({
    id: id,
    title: '',
    content: '',
  });

  useEffect(() => {
    if (data) {
      setValues({
        id: id,
        title: data.title || '',
        content: data.content || '',
      });
    }
  }, [data, id]);
  const { mutate: putEvent } = usePutEvent(values);
  
  const handleEdit = () => {
    setIsEdit(!isEdit);
  };
  const handleNavigate = () => {
    if(isEdit){
      putEvent(values, {
        onSuccess: () => {
          queryClient.invalidateQueries(['eventItem', id]);
          alert('이벤트가 수정되었습니다');
          setIsEdit(false);
        },
      });
    }else {
      navigate('/event');
    }
  };
  const handleDelete = () => {
    deleteEvent({}, {
      onSuccess: () => {
        alert('이벤트가 삭제되었습니다');
        navigate('/event');
      },
    });
  };

  return(
    <div className={styles.pageWrapper}>
      <Title url={image}>Events</Title>
      <section>
        <h2 className={styles.titleText}>이달의 이벤트</h2>
        <p className={styles.text}>
          매달 진행되는 새로운 이벤트들을 확인해보세요<br />
        </p>
        {
          localStorage.getItem('ACCESS_TOKEN') ? 
            <div className={styles.modifySection}>
              <span onClick={() => handleEdit()}>
                {isEdit ? '취소' : '수정하기'}
              </span>
              <span onClick={() => {handleDelete()}}>
                삭제하기
              </span>
            </div>
          : null
        }
        <hr className={styles.hr} />
      </section>
      {
        isEdit ? 
        ( 
          <EventForm values={values} setValues={setValues}/>
        ) : 
        (
          <>
            <section className={styles.titleSection}>
              <h3 className={styles.h3}>{data?.title}</h3>
              <span className={styles.dateSpan}>2024.12.01</span>
            </section>
            <hr className={styles.hr} />
            <article className={styles.article}>
              <p className={styles.p}>
                {data?.content} 
              </p>
            </article>  
          </>
        )
      } 
      <BtnSmall onClick={handleNavigate}>{`${isEdit ? '수정하기' : '목록으로 돌아가기'}`}</BtnSmall>
    </div>
  );
};

export default EventDetail;