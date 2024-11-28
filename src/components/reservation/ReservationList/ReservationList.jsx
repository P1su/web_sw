import { useNavigate } from 'react-router-dom';
import ReservationItem from '../ReservationItem/ReservationItem';
import styles from './ReservationList.module.css';

const ReservationList = () => {
  const mockList = [
    {
      date: '11월 1일',
      title: '시공 신청합니다.',
      name: '송아무개',
      id: 0,
    },
    {
      date: '11월 1일',
      title: '시공 신청합니다.',
      name: '송아무개',
      id: 1,
    },
    {
      date: '11월 1일',
      title: '시공 신청합니다.',
      name: '송아무개',
      id: 2,
    },
    {
      date: '11월 1일',
      title: '시공 신청합니다.',
      name: '송아무개',
      id: 3,
    },
    {
      date: '11월 1일',
      title: '시공 신청합니다.',
      name: '송아무개',
      id: 4,
    },
  ];
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/reservation/${id}`);
  };

  return(
    <div className={styles.reservationListWrapper}>
      <ReservationItem date='문의 날짜' title='제목' name='글쓴이' />
      {
        mockList.map((item) => (
          <ReservationItem 
            key={item.id} 
            date={item.date} 
            title={item.title} 
            name={item.name} 
            onClick={() => handleNavigate(item.id)}
          />
        ))
      }
    </div>
  );
};

export default ReservationList;